'use strict';
const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.join(__dirname, '..');
const PUBLIC_DATA_DIR = path.join(PROJECT_ROOT, 'public/data');
const PROCESSES_FILE = path.join(PUBLIC_DATA_DIR, 'processes.json');
const PROCESS_ID = 'BRR_003';
const CASE_NAME = 'Lisinopril 10mg | LS-2026-0031';

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
            'Batch Number': 'LS-2026-0031',
            'Product': 'Lisinopril 10mg Tablets',
            'Batch Size': '800,000 units',
            'Site': 'Eurofins Mfg GmbH Mannheim',
            'MBR Reference': 'MBR-LIS-010-002 v1.4',
            'Review Status': 'In Progress'
        }
    });

    const steps = [
        {
            id: 'step-1',
            title_p: 'Retrieving executed batch record from CMO email...',
            title_s: 'EBR LS-2026-0031 received from Eurofins QA \u2014 document loaded',
            reasoning: [
                'Source: qa.release@eurofins-mfg.com \u2192 external-cmo@lilly.com',
                'Subject: EBR Submission \u2014 LS-2026-0031 Lisinopril 10mg Tablets \u2014 Eurofins Mannheim',
                'Attachment: ebr_LS-2026-0031.pdf (71 pages)',
                'Batch: LS-2026-0031 | 800,000 units | Manufactured: 02\u201305-Mar-2026',
                'Site: Eurofins Manufacturing GmbH, Mannheim, Germany | CMO batch'
            ],
            artifacts: [
                {
                    id: 'ebr-email-003', type: 'email_draft', label: 'Incoming EBR from CMO',
                    subject: 'EBR Submission \u2014 LS-2026-0031 Lisinopril 10mg Tablets \u2014 Eurofins Mannheim',
                    from: 'qa.release@eurofins-mfg.com', to: 'external-cmo@lilly.com',
                    body: 'Dear Lilly External CMO Quality team,\n\nPlease find the executed batch record for LS-2026-0031 (Lisinopril 10mg Tablets, 800,000 units).\n\nManufacture dates: 02\u201305-Mar-2026. MBR reference: MBR-LIS-010-002 v1.4.\n\nAll in-process checks and QC testing completed. Please confirm receipt and proceed with release review.\n\nRegards,\nQA Release Team\nEurofins Manufacturing GmbH, Mannheim',
                    isIncoming: true, timestamp: '2026-03-05T14:22:00Z'
                },
                { id: 'ebr-pdf-003', type: 'pdf', label: 'EBR LS-2026-0031', filename: 'ebr_LS-2026-0031.pdf', url: '/pdfs/ebr_LS-2026-0031.pdf' }
            ]
        },
        {
            id: 'step-2',
            title_p: 'Retrieving Master Batch Record via Veeva Vault \u2014 checking version history...',
            title_s: 'MBR-LIS-010-002 v1.4 retrieved \u2014 3 versions found, v1.4 confirmed current approved',
            reasoning: [
                'Browser agent: vault.lilly.com \u2192 Library \u2192 Master Batch Records',
                'Search: "LIS-010-002" \u2014 Version history tab opened',
                'v1.2 (Superseded, 14-Mar-2024) | v1.3 (Superseded, 09-Sep-2025) | v1.4 (Approved, 03-Jan-2026)',
                'EBR references MBR-LIS-010-002 v1.4 \u2014 matches current approved version \u2713',
                'v1.4 Approved effective 03-Jan-2026 | Signed by: Dr. H. Schreiber (QA Director) + P. Walsh (Lilly QP)',
                'Download successful \u2014 78 pages'
            ],
            artifacts: [
                { id: 'mbr-video-003', type: 'video', label: 'Veeva Vault Version History Check', title: 'Veeva Vault \u2014 MBR-LIS-010-002 Version History', url: '/videos/brr_003_veeva_vault_version_check.webm' },
                { id: 'mbr-pdf-003', type: 'pdf', label: 'MBR-LIS-010-002 v1.4', filename: 'mbr_LIS-010-002_v1.4.pdf', url: '/pdfs/mbr_LIS-010-002_v1.4.pdf' }
            ]
        },
        {
            id: 'step-3',
            title_p: 'Parsing BOM and dispensing records \u2014 6 materials...',
            title_s: 'BOM complete \u2014 all 6 materials dispensed within specification',
            reasoning: [
                'Lisinopril USP (RM-5021) \u2014 MBR: 8.0 kg | EBR: 8.0 kg \u2713',
                'Mannitol USP (RM-2101) \u2014 MBR: 125.0 kg | EBR: 125.0 kg \u2713',
                'Microcrystalline Cellulose PH-102 (RM-2018) \u2014 MBR: 40.0 kg | EBR: 40.0 kg \u2713',
                'Croscarmellose Sodium NF (RM-2031) \u2014 MBR: 6.0 kg | EBR: 6.0 kg \u2713',
                'Magnesium Stearate NF (RM-2041) \u2014 MBR: 2.0 kg | EBR: 2.0 kg \u2713',
                'Colloidal Silicon Dioxide NF (RM-2051) \u2014 MBR: 1.0 kg | EBR: 1.0 kg \u2713',
                'All CoAs current \u2713 | Dispensing yield: 100.0% \u2713'
            ]
        },
        {
            id: 'step-4',
            title_p: 'Reviewing Steps 1\u20138: Dispensing through Compression...',
            title_s: 'Steps 1\u20138 reviewed \u2014 MINOR finding: drying timestamp discrepancy',
            reasoning: [
                'Steps 1\u20133 Dispensing/Sieving/Blending: All within specification \u2713',
                'Step 4 Direct Compression setup: TBP-002 | Hardness 8\u201312 kP \u2713',
                'Step 5 Fluid Bed Drying: FBD-002 | LOD 1.6% (spec \u22642.0%) \u2713',
                '\u26a0 MINOR FINDING: Step 5 drying end timestamp ambiguity \u2014 10-minute gap in record',
                'ALCOA+ principle: Attributable, Legible, Contemporaneous, Original, Accurate + Complete',
                'EBR shows FBD start: 08:00 | FBD end: 10:35 | Next entry: 10:45 \u2014 10-min unaccounted period',
                'No operator note explaining gap | SOP-ALCOA-001 requires contemporaneous documentation',
                'Steps 6\u20138 Milling/Compression/IPC: All within specification \u2713'
            ]
        },
        {
            id: 'step-5',
            title_p: 'Reviewing Step 9: Enteric Coating and CPP parameters...',
            title_s: 'Step 9 reviewed \u2014 CRITICAL: coating CPP temperature excursion undocumented',
            reasoning: [
                'Step 9 Enteric Coating: CTP-001 | Eudragit L100-55 coating',
                'MBR CPP: Inlet temperature 65\u201370\u00b0C throughout coating operation',
                '\u274c CRITICAL FINDING #1: Inlet temperature 58\u00b0C recorded for 40 minutes (T+20 to T+60 min)',
                'Excursion duration: 40 minutes at 58\u00b0C \u2014 7\u00b0C below minimum specification',
                'No deviation report opened at time of manufacture',
                'No CMO QA note or impact assessment for the excursion',
                'Impact on product: enteric coating polymer requires minimum 65\u00b0C for proper film formation',
                'Risk: sub-spec coating temp may result in incomplete enteric coating \u2014 acid protection failure',
                'This is a Critical Process Parameter (CPP) excursion \u2014 21 CFR 211.100 violation'
            ]
        },
        {
            id: 'step-6',
            title_p: 'Reviewing QC results \u2014 assay and dissolution...',
            title_s: 'QC OOS detected \u2014 CRITICAL: assay 93.1% out-of-specification, no investigation initiated',
            reasoning: [
                'Assay result: 93.1% of label claim',
                '\u274c CRITICAL FINDING #2: Assay 93.1% vs specification 95.0\u2013105.0% \u2014 Out-of-Specification (OOS)',
                'OOS delta: \u22121.9 percentage points below minimum specification',
                'FDA Guidance (2006) and 21 CFR 211.192: OOS results require Phase I investigation before batch disposition',
                'No OOS investigation report found in batch record',
                'CMO QA countersigned release despite documented OOS result \u2014 MAJOR procedural violation',
                'Dissolution: 78% at 120 min pH 6.8 (spec NLT 80%) \u2014 borderline, within rounding tolerance',
                'Identification: Positive for Lisinopril by HPLC \u2713',
                'Uniformity of Dosage Units: AV 9.2 (spec \u226415.0) \u2713'
            ],
            artifacts: [
                {
                    id: 'qc-json-003', type: 'json', label: 'QC Results \u2014 OOS Detected',
                    data: {
                        batch: 'LS-2026-0031', assay_pct: 93.1, assay_spec: '95.0-105.0%',
                        oos_status: 'OUT OF SPECIFICATION', oos_investigation: 'NOT INITIATED',
                        dissolution_120min_pct: 78, dissolution_spec: 'NLT 80%',
                        av_value: 9.2, identification: 'Pass',
                        regulatory_ref: '21 CFR 211.192 \u2014 OOS investigation required'
                    }
                },
                { id: 'oos-draft-pdf-003', type: 'pdf', label: 'OOS Investigation Required', filename: 'oos_investigation_required_LS-2026-0031.pdf', url: '/pdfs/oos_investigation_required_LS-2026-0031.pdf' }
            ]
        },
        {
            id: 'step-7',
            title_p: 'Running 68-point batch record checklist...',
            title_s: '68-point checklist: 2 CRITICAL + 1 MAJOR + 1 MINOR findings',
            reasoning: [
                'CRITICAL #1: Coating CPP inlet temp 58\u00b0C x40min (spec 65\u201370\u00b0C) \u2014 undocumented excursion',
                'CRITICAL #2: OOS assay 93.1% \u2014 no OOS investigation per 21 CFR 211.192',
                'MAJOR #1: CMO QA countersigned for release with documented OOS result in record',
                'MINOR #1: Drying timestamp gap 10 min \u2014 ALCOA+ documentation gap',
                'Checklist score: 61/68 (89.7%) \u2014 but CRITICAL findings make score irrelevant',
                'Batch cannot be released regardless of score when CRITICALs are unresolved'
            ]
        },
        {
            id: 'step-8',
            title_p: 'Calculating confidence score \u2014 2 CRITICAL findings...',
            title_s: 'Confidence: 61% \u2014 Batch LS-2026-0031 requires mandatory human review \u2014 HOLD',
            reasoning: [
                'CRITICAL penalties: 2 \u00d7 (\u221215 pts) = \u221230 pts',
                'MAJOR penalties: 1 \u00d7 (\u22128 pts) = \u22128 pts',
                'MINOR penalties: 1 \u00d7 (\u22123 pts) = \u22123 pts',
                'Base score: 95.8% \u2192 After penalties: 54.8% \u2192 floor adjustment: 61%',
                'Threshold: <80% = Mandatory full human review required',
                'Recommended disposition: HOLD \u2014 OOS investigation required before any disposition',
                'Regulatory exposure: failure to investigate OOS is a 21 CFR 211.192 violation',
                'CPP excursion requires retroactive impact assessment on enteric coating integrity'
            ],
            artifacts: [
                {
                    id: 'findings-json-003', type: 'json', label: 'Findings Summary',
                    data: {
                        batch: 'LS-2026-0031', confidence_pct: 61,
                        critical_findings: 2, major_findings: 1, minor_findings: 1,
                        observations: 0, disposition: 'HOLD',
                        critical_1: 'Coating CPP temp 58C x40min (spec 65-70C) \u2014 undocumented',
                        critical_2: 'OOS assay 93.1% (spec 95-105%) \u2014 no investigation initiated',
                        major_1: 'CMO QA countersigned release with documented OOS in record'
                    }
                },
                { id: 'report-pdf-003', type: 'pdf', label: 'Batch Review Report', filename: 'review_report_LS-2026-0031.pdf', url: '/pdfs/review_report_LS-2026-0031.pdf' }
            ]
        }
    ];

    for (let i = 0; i < steps.length; i++) {
        const step = steps[i];
        updateProcessLog(PROCESS_ID, { id: step.id, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), title: step.title_p, status: 'processing' });
        await updateProcessListStatus(PROCESS_ID, 'In Progress', step.title_p);
        await delay(2200);
        updateProcessLog(PROCESS_ID, { id: step.id, title: step.title_s, status: 'success', reasoning: step.reasoning || [], artifacts: step.artifacts || [] });
        await updateProcessListStatus(PROCESS_ID, 'In Progress', step.title_s);
        await delay(1500);
    }

    // Step 9: Email HITL warning
    updateProcessLog(PROCESS_ID, { id: 'step-9', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), title: 'Drafting escalation communication to CMO QA Director...', status: 'processing' });
    await updateProcessListStatus(PROCESS_ID, 'In Progress', 'Drafting escalation communication to CMO QA Director...');
    await delay(2200);
    updateProcessLog(PROCESS_ID, {
        id: 'step-9',
        title: 'Escalation email drafted \u2014 awaiting send to Eurofins QA Director',
        status: 'warning',
        reasoning: [
            '2 CRITICAL findings require immediate CMO notification',
            'OOS result requires formal Phase I investigation \u2014 cannot proceed without it',
            'CPP excursion requires retroactive deviation report and impact assessment',
            'Drafting escalation email to: Dr. Klaus Weber, QA Director, Eurofins Manufacturing GmbH',
            'Email requests: (1) Initiate OOS investigation per FDA guidance, (2) Open deviation for CPP excursion, (3) Provide raw data within 5 business days',
            'Lilly Regulatory Affairs cc\u2019d per CMO Quality Agreement Section 7.3'
        ],
        artifacts: [
            {
                id: 'decision-003', type: 'decision',
                data: {
                    question: 'QA Disposition — Batch LS-2026-0031',
                    options: [
                        { label: 'Approve HOLD — send escalation to CMO, initiate OOS investigation', signal: 'APPROVE_HOLD_LS0031' },
                        { label: 'Reject — do not escalate, release batch', signal: 'REJECT_HOLD_LS0031' }
                    ]
                }
            },
            {
                id: 'escalation-email-003', type: 'email_draft', label: 'Escalation Email to CMO QA Director',
                subject: 'URGENT: Critical Findings \u2014 Batch LS-2026-0031 Lisinopril 10mg \u2014 OOS Investigation Required',
                from: 'pace-review@lilly.com', to: 'dr.k.weber@eurofins-mfg.com',
                body: 'Dear Dr. Weber,\n\nOur batch record review system has identified 2 Critical findings in batch LS-2026-0031 (Lisinopril 10mg Tablets, 800,000 units) that require immediate action before any disposition can be considered.\n\nCRITICAL FINDING #1 \u2014 OOS Assay Result:\nAssay result: 93.1% (Specification: 95.0\u2013105.0%). This is an Out-of-Specification result. Per 21 CFR 211.192 and FDA OOS Guidance (2006), a Phase I laboratory investigation must be initiated immediately. No OOS investigation was found in the batch record.\n\nCRITICAL FINDING #2 \u2014 CPP Coating Temperature Excursion:\nInlet temperature 58\u00b0C recorded for 40 minutes during enteric coating (Specification: 65\u201370\u00b0C). This is a Critical Process Parameter excursion with no deviation report or impact assessment on file.\n\nAdditionally, we note that CMO QA countersigned the release record despite the documented OOS result, which represents a Major procedural deviation.\n\nRequired actions within 5 business days:\n1. Initiate formal OOS Phase I investigation per SOP and FDA guidance\n2. Open deviation report for CPP coating temperature excursion\n3. Provide raw data and investigation plan to Lilly QA\n\nBatch LS-2026-0031 is placed on HOLD pending resolution of these findings.\n\nReference: OOS-2026-0031 (assigned)\n\nRegards,\nPace \u2014 Batch Record Review System\nLilly Quality Operations\ncc: regulatory-affairs@lilly.com | dr.p.mwangi@lilly.com',
                isIncoming: false, timestamp: new Date().toISOString()
            }
        ]
    }, { 'Review Status': 'Needs Review', 'Confidence': '61%', 'Disposition': 'HOLD' });
    await updateProcessListStatus(PROCESS_ID, 'Needs Review', 'Escalation email drafted \u2014 awaiting send to Eurofins QA Director');

    await waitForSignal('APPROVE_HOLD_LS0031');
    await delay(800);

    // Step 10: Email sent after approval
    updateProcessLog(PROCESS_ID, { id: 'step-10', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), title: 'Sending escalation to Eurofins QA Director...', status: 'processing' });
    await updateProcessListStatus(PROCESS_ID, 'Needs Review', 'Sending escalation to Eurofins QA Director...');
    await delay(2000);
    updateProcessLog(PROCESS_ID, {
        id: 'step-10',
        title: 'Escalation sent to Eurofins QA Director \u2014 batch LS-2026-0031 on HOLD pending investigation',
        status: 'completed',
        reasoning: [
            'Email sent to: dr.k.weber@eurofins-mfg.com | CC: regulatory-affairs@lilly.com, dr.p.mwangi@lilly.com',
            'OOS investigation reference assigned: OOS-2026-0031',
            'Batch status: HOLD \u2014 quarantine documentation filed',
            'Response expected: within 5 business days per CMO Quality Agreement',
            'Lilly QA notified: Dr. P. Mwangi and site quality director copied'
        ]
    }, { 'Review Status': 'Needs Review' });
    await updateProcessListStatus(PROCESS_ID, 'Needs Review', 'Escalation sent \u2014 batch LS-2026-0031 on HOLD pending OOS investigation');

    console.log(`${PROCESS_ID} Complete: ${CASE_NAME} \u2014 Final status: Needs Review`);
})();
