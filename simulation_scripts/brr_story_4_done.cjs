'use strict';
const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.join(__dirname, '..');
const PUBLIC_DATA_DIR = path.join(PROJECT_ROOT, 'public/data');
const PROCESSES_FILE = path.join(PUBLIC_DATA_DIR, 'processes.json');
const PROCESS_ID = 'BRR_004';
const CASE_NAME = 'Omeprazole 20mg DR Capsules | OM-2026-0217';

const readJson = (file) => (fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : {});
const writeJson = (file, data) => fs.writeFileSync(file, JSON.stringify(data, null, 4));
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const updateProcessLog = (processId, logEntry, keyDetailsUpdate = {}) => {
    const processFile = path.join(PUBLIC_DATA_DIR, `process_${processId}.json`);
    let data = { logs: [], keyDetails: {}, sidebarArtifacts: [] };
    if (fs.existsSync(processFile)) data = readJson(processFile);
    if (logEntry) {
        const existingIdx = logEntry.id ? data.logs.findIndex(l => l.id === logEntry.id) : -1;
        if (existingIdx !== -1) { data.logs[existingIdx] = { ...data.logs[existingIdx], ...logEntry }; }
        else { data.logs.push(logEntry); }
    }
    if (keyDetailsUpdate && Object.keys(keyDetailsUpdate).length > 0) {
        data.keyDetails = { ...data.keyDetails, ...keyDetailsUpdate };
    }
    writeJson(processFile, data);
};

const updateProcessListStatus = async (processId, status, currentStatus) => {
    const apiUrl = process.env.VITE_API_URL || 'http://localhost:3001';
    try {
        const http = require('http');
        const body = JSON.stringify({ id: processId, status, currentStatus });
        await new Promise((resolve, reject) => {
            const url = new URL(`${apiUrl}/api/update-status`);
            const req = http.request({ hostname: url.hostname, port: url.port || 3001, path: url.pathname, method: 'POST', headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) } }, (res) => { res.resume(); resolve(); });
            req.on('error', reject);
            req.write(body); req.end();
        });
    } catch (e) {
        try {
            const processes = JSON.parse(fs.readFileSync(PROCESSES_FILE, 'utf8'));
            const idx = processes.findIndex(p => p.id === String(processId));
            if (idx !== -1) { processes[idx].status = status; processes[idx].currentStatus = currentStatus; fs.writeFileSync(PROCESSES_FILE, JSON.stringify(processes, null, 4)); }
        } catch (err) { }
    }
};

const waitForSignal = async (signalId) => {
    console.log(`Waiting for human signal: ${signalId}...`);
    const signalFile = path.join(PROJECT_ROOT, 'interaction-signals.json');
    for (let i = 0; i < 15; i++) {
        try {
            if (fs.existsSync(signalFile)) {
                const content = fs.readFileSync(signalFile, 'utf8');
                if (!content) continue;
                const signals = JSON.parse(content);
                if (signals[signalId]) {
                    delete signals[signalId];
                    const tmp = signalFile + '.' + Math.random().toString(36).substring(7) + '.tmp';
                    fs.writeFileSync(tmp, JSON.stringify(signals, null, 4));
                    fs.renameSync(tmp, signalFile);
                }
                break;
            }
        } catch (e) { await delay(Math.floor(Math.random() * 200) + 100); }
    }
    while (true) {
        try {
            if (fs.existsSync(signalFile)) {
                const content = fs.readFileSync(signalFile, 'utf8');
                if (content) {
                    const signals = JSON.parse(content);
                    if (signals[signalId]) {
                        console.log(`Signal ${signalId} received!`);
                        delete signals[signalId];
                        const tmp = signalFile + '.' + Math.random().toString(36).substring(7) + '.tmp';
                        fs.writeFileSync(tmp, JSON.stringify(signals, null, 4));
                        fs.renameSync(tmp, signalFile);
                        return true;
                    }
                }
            }
        } catch (e) { }
        await delay(1000);
    }
};

(async () => {
    console.log(`Starting ${PROCESS_ID}: ${CASE_NAME}...`);
    writeJson(path.join(PUBLIC_DATA_DIR, `process_${PROCESS_ID}.json`), {
        logs: [], keyDetails: {
            'Batch Number': 'OM-2026-0217',
            'Product': 'Omeprazole 20mg Delayed-Release Capsules',
            'Batch Size': '900,000 units',
            'Site': 'Lilly Branchburg NJ',
            'MBR Reference': 'MBR-OME-020-004 v2.0',
            'Review Status': 'In Progress'
        }
    });
    const steps = [
        {
            id: 'step-1',
            title: 'EBR Received — Batch OM-2026-0217',
            status: 'running',
            reasoning: 'Electronic Batch Record received from marcus.webb@lilly.com to quality-inbox@lilly.com. Batch OM-2026-0217: Omeprazole 20mg Delayed-Release Capsules, 900,000 units, manufactured 10–13 Mar 2026 at Lilly Branchburg NJ. EBR package: 54 pages covering dispensing through QC release testing. Initiating automated review against MBR-OME-020-004 v2.0.',
            artifacts: [
                { type: 'email', label: 'Incoming EBR Email', content: 'From: marcus.webb@lilly.com\nTo: quality-inbox@lilly.com\nSubject: EBR Submission — Omeprazole 20mg DR Capsules Batch OM-2026-0217\n\nBatch OM-2026-0217 EBR package attached (54 pages).\nProduct: Omeprazole 20mg Delayed-Release Capsules\nBatch Size: 900,000 units\nManufacturing Dates: 10–13 Mar 2026\nSite: Lilly Branchburg, NJ\n\nPlease initiate QA review at your earliest convenience.\n\nMarcus Webb, Manufacturing Supervisor' },
                { type: 'pdf', label: 'EBR Package', filename: 'ebr_OM-2026-0217.pdf' }
            ]
        },
        {
            id: 'step-2',
            title: 'MBR Retrieved — MBR-OME-020-004 v2.0',
            status: 'running',
            reasoning: 'Querying Veeva Vault via REST API to retrieve current approved Master Batch Record. Endpoint: GET vault.lilly.com/api/v24.1/objects/documents/OME-020-004/file. Response: 200 OK in 0.9 seconds. Document: MBR-OME-020-004 v2.0, status Approved, effective 20-Jan-2026. No pending change controls. MBR retrieved and loaded as reference standard for all subsequent checks.',
            artifacts: [
                { type: 'json', label: 'Veeva API Response', content: JSON.stringify({ endpoint: 'GET vault.lilly.com/api/v24.1/objects/documents/OME-020-004/file', status: 200, response_time_ms: 900, document_id: 'OME-020-004', version: '2.0', vault_status: 'Approved', effective_date: '2026-01-20', pages: 48, change_controls_pending: 0 }, null, 2) },
                { type: 'pdf', label: 'Master Batch Record v2.0', filename: 'mbr_OME-020-004_v2.0.pdf' }
            ]
        },
        {
            id: 'step-3',
            title: 'Bill of Materials — 9/9 Materials Verified',
            status: 'running',
            reasoning: 'Verifying all 9 raw materials against approved BOM. Omeprazole USP: 20.0 kg (required 20.0 kg) ✓ CoA current. Mannitol SD200: 95.1 kg (required 95.0 kg, within ±0.5%) ✓. HPMC E5: 12.0 kg ✓. Sodium Lauryl Sulfate: 1.5 kg ✓. Eudragit L30 D-55: 45.0 kg ✓ CoA current. Triethyl Citrate: 4.5 kg ✓. Purified Water (process): 48.0 L ✓. Gelatin Capsules Size 4: 905,000 units (overage 0.6%) ✓. Talc USP: 1.8 kg ✓. All 9 materials verified. Overall dispensing yield: 99.7%. No BOM discrepancies detected.',
            artifacts: []
        },
        {
            id: 'step-4',
            title: 'Mfg Steps 1–4: Dispensing / Wet Granulation — MINOR',
            status: 'running',
            reasoning: 'Steps 1–4 cover dispensing through wet granulation. Steps 1–3 (dispensing, sifting, pre-blend) are complete with no findings. Step 4 Wet Granulation — MINOR DEVIATION IDENTIFIED: Impeller speed recorded at 275 RPM from T+8 to T+16 min (8 min duration). MBR-OME-020-004 v2.0 Section 4.3 specifies 240–260 RPM. Deviation 15 RPM above upper limit. Deviation DEV-2026-0412 opened during production by operator J.Kim; QA countersignature by M.Webb same day. Impact assessment: IPC granule RSD 1.2% — within specification (≤2.0%). Granulation end-point moisture 16.8% — within 15–18% range. Deviation is documented and contained.',
            artifacts: []
        },
        {
            id: 'step-5',
            title: 'Mfg Steps 5–7: Drying / Milling / Blending — Pass',
            status: 'running',
            reasoning: 'Steps 5–7 reviewed against MBR Section 4.5–4.7. FBD-004 fluid bed dryer: LOD 2.1% — within ≤2.5% specification. Calibration current, expires 30-Nov-2026. Drying profile endpoint met at T+95 min (within 80–120 min window). MIL-003 milling: 16-mesh screen, yield 99.0%, particle size D90 285 µm within 200–350 µm spec. Final Blending: lubricant addition at 3 min blend time. RSD 1.2% — within ≤1.5% specification. Blend uniformity 9 of 9 samples within 85–115% of label claim. All steps 5–7: PASS. No findings.',
            artifacts: []
        },
        {
            id: 'step-6',
            title: 'Step 8: Encapsulation — 7/7 IPC Checks Pass',
            status: 'running',
            reasoning: 'Encapsulation on ENC-001 capsule filler. Target fill weight 220 mg ± 2% (215.6–224.4 mg). 7 IPC time points logged: 08:00 220.8 mg, 08:30 221.3 mg, 09:00 220.9 mg, 09:30 221.5 mg, 10:00 221.2 mg, 10:30 220.7 mg, 11:00 221.4 mg. All within specification. Average fill weight 221.1 mg (+0.5%). No capsule defects or rejects flagged. Machine logbook countersigned by QA. Step 8 encapsulation: PASS.',
            artifacts: []
        },
        {
            id: 'step-7',
            title: 'Step 9: Enteric Coating — MINOR + OBSERVATION',
            status: 'running',
            reasoning: 'Enteric coating CTP-003 reviewed. Coating weight gain: 10.3% — within 8–12% specification. OBSERVATION: Inlet air temperature reached 69.8°C at T+120 min (upper boundary of 60–70°C spec). Within range; no OOS. HVAC event: ambient temperature in coating room recorded 26.2°C at 14:15 for 12 minutes (specification 20–25°C). HVAC self-corrected at 14:27 with return to 23.1°C. Impact assessed per SOP-ENV-007: coating process unaffected (temperature within equipment control). MINOR FINDING: Environmental excursion form ENV-OM-2026-0217 signed by operator R.Singh only. QA countersignature required per SOP-ENV-007 Section 4.2 — missing. Two findings recorded: MINOR + OBSERVATION.',
            artifacts: []
        },
        {
            id: 'step-8',
            title: 'QC Release Testing — 12/12 Tests Pass',
            status: 'running',
            reasoning: 'QC release testing complete. 12 of 12 tests pass. Assay (HPLC): 99.1% — within 95.0–105.0%. Dissolution Stage 1: <10% at 2 hrs in 0.1N HCl (acid resistance confirmed). Dissolution Stage 2: 88% released at 120 min in pH 6.8 phosphate buffer — meets NLT 75% specification. Related substances: maximum individual impurity 0.11% — within NMT 0.20%. Uniformity of dosage units (AV): 5.8 — within ≤15.0. Moisture content (KF): 2.3% — within NMT 5.0%. Microbial limits: PASS per USP <61>/<62>. Hardness, disintegration, friability, appearance — all pass. No out-of-specification results.',
            artifacts: [
                { type: 'json', label: 'QC Results', content: JSON.stringify({ batch: 'OM-2026-0217', tests_passed: 12, tests_failed: 0, assay_percent: 99.1, dissolution_acid_2hr: '<10%', dissolution_buffer_120min: '88%', av_value: 5.8, related_substances_max: '0.11%', moisture_kf: '2.3%', microbial: 'Pass USP<61>/<62>' }, null, 2) }
            ]
        },
        {
            id: 'step-9',
            title: 'AI Confidence Score — 89% (Expedited Review)',
            status: 'running',
            reasoning: 'Confidence scoring complete. Base score 98.9% (12/12 QC pass, all BOM verified, steps 5–7 clean). Deductions: MINOR impeller CPP out-of-spec T+8 to T+16 min (−3.0 pts): CPP deviation with same-day documentation, IPC confirms no product impact. MINOR ENV-OM-2026-0217 missing QA countersig (−3.0 pts): SOP-ENV-007 Section 4.2 violation, documentation gap that requires closure. OBSERVATION coating temp upper boundary (−0.9 pts): within spec, no action required. Final confidence score: 89.0%. Score 80–94% threshold: expedited QA review required before release. Batch is releasable pending QA countersignature on ENV-OM-2026-0217.',
            artifacts: [
                { type: 'json', label: 'Findings Summary', content: JSON.stringify({ batch: 'OM-2026-0217', base_score: 98.9, final_score: 89.0, threshold: '80-94% = Expedited QA Review', findings: [{ type: 'MINOR', description: 'Impeller speed 275 RPM vs 240-260 RPM (T+8 to T+16 min)', deduction: -3.0, deviation_ref: 'DEV-2026-0412', status: 'Documented & countersigned' }, { type: 'MINOR', description: 'ENV-OM-2026-0217 missing QA countersignature per SOP-ENV-007 Section 4.2', deduction: -3.0, status: 'Open — requires closure' }, { type: 'OBSERVATION', description: 'Coating inlet temp 69.8°C at T+120 min (upper boundary)', deduction: -0.9, status: 'Within spec, no action required' }], recommendation: 'Release pending QA countersig on ENV-OM-2026-0217' }, null, 2) }
            ]
        }
    ];

    const hitlStep = {
        id: 'step-10',
        title: 'QA Review Required — ENV Form Countersignature',
        status: 'warning',
        reasoning: 'Batch OM-2026-0217 scored 89% confidence — expedited QA review threshold (80–94%). Primary open item: ENV-OM-2026-0217 environmental excursion form requires QA countersignature per SOP-ENV-007 Section 4.2. Deviation DEV-2026-0412 (impeller CPP) is fully documented with same-day QA countersignature by M.Webb — no barrier to release. Awaiting QA release authorization: APPROVE_RELEASE_OM0217.',
        artifacts: [
            { type: 'pdf', label: 'ENV Excursion Form', filename: 'env_excursion_form_OM-2026-0217.pdf' },
            { type: 'pdf', label: 'Deviation DEV-2026-0412', filename: 'deviation_DEV-2026-0412.pdf' },
            { type: 'pdf', label: 'Review Report', filename: 'review_report_OM-2026-0217.pdf' }
        ]
    };

    const postSignalStep = {
        id: 'step-11',
        title: 'Batch Released — 900,000 Units Cleared',
        status: 'done',
        reasoning: 'QA countersignature confirmed: Dr. P. Mwangi signed ENV-OM-2026-0217 on 15-Mar-2026 at 20:11. All documentation complete. Certificate of Release CR-OM-2026-0217 issued. 900,000 units of Omeprazole 20mg Delayed-Release Capsules released for distribution. Total AI review time: 6 min 44 sec.',
        artifacts: []
    };

    // Run steps 1–9
    for (let i = 0; i < steps.length; i++) {
        const step = steps[i];
        await updateProcessLog(PROCESS_ID, step.id, step.title, 'running', step.reasoning, step.artifacts);
        await delay(2200);
        await updateProcessLog(PROCESS_ID, step.id, step.title, 'done', step.reasoning, step.artifacts);
        await delay(400);
    }

    // Step 10: HITL warning + waitForSignal
    await updateProcessLog(PROCESS_ID, hitlStep.id, hitlStep.title, 'warning', hitlStep.reasoning, hitlStep.artifacts);
    await updateProcessListStatus(PROCESS_ID, 'Needs Review', {
        'Batch Number': 'OM-2026-0217',
        'Product': 'Omeprazole 20mg Delayed-Release Capsules',
        'Batch Size': '900,000 units',
        'Site': 'Lilly Branchburg NJ',
        'MBR Reference': 'MBR-OME-020-004 v2.0',
        'Confidence Score': '89%',
        'Open Item': 'ENV-OM-2026-0217 QA countersig required',
        'Review Status': 'Awaiting QA Authorization'
    });

    await waitForSignal('APPROVE_RELEASE_OM0217');

    // Step 11: Post-signal completion → Done
    await updateProcessLog(PROCESS_ID, postSignalStep.id, postSignalStep.title, 'running', postSignalStep.reasoning, postSignalStep.artifacts);
    await delay(1800);
    await updateProcessLog(PROCESS_ID, postSignalStep.id, postSignalStep.title, 'done', postSignalStep.reasoning, postSignalStep.artifacts);

    await updateProcessListStatus(PROCESS_ID, 'Done', {
        'Batch Number': 'OM-2026-0217',
        'Product': 'Omeprazole 20mg Delayed-Release Capsules',
        'Batch Size': '900,000 units',
        'Site': 'Lilly Branchburg NJ',
        'MBR Reference': 'MBR-OME-020-004 v2.0',
        'Confidence Score': '89%',
        'Release Certificate': 'CR-OM-2026-0217',
        'Review Status': 'Released',
        'Units Released': '900,000'
    });

    console.log(`${PROCESS_ID} complete — batch OM-2026-0217 released.`);
})();
