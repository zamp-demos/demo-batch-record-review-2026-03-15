'use strict';
const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.join(__dirname, '..');
const PUBLIC_DATA_DIR = path.join(PROJECT_ROOT, 'public/data');
const PROCESSES_FILE = path.join(PUBLIC_DATA_DIR, 'processes.json');
const PROCESS_ID = 'BRR_012';
const CASE_NAME = 'Lisinopril 10mg Tablets | LIS-2024-0441';
const SIGNAL_KEY = 'APPROVE_HOLD_LIS0441';

const readJson = (f) => (fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : {});
const writeJson = (f, d) => fs.writeFileSync(f, JSON.stringify(d, null, 4));
const delay = (ms) => new Promise(r => setTimeout(r, ms));

const updateProcessLog = (processId, logEntry, keyDetailsUpdate = {}) => {
    const processFile = path.join(PUBLIC_DATA_DIR, `process_${processId}.json`);
    let data = { logs: [], keyDetails: {}, sidebarArtifacts: [] };
    if (fs.existsSync(processFile)) data = readJson(processFile);
    if (logEntry) {
        const idx = logEntry.id ? data.logs.findIndex(l => l.id === logEntry.id) : -1;
        if (idx !== -1) data.logs[idx] = { ...data.logs[idx], ...logEntry };
        else data.logs.push(logEntry);
    }
    if (keyDetailsUpdate && Object.keys(keyDetailsUpdate).length > 0)
        data.keyDetails = { ...data.keyDetails, ...keyDetailsUpdate };
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
        } catch (err) {}
    }
};

const waitForSignal = async (signalId) => {
    const signalFile = path.join(PROJECT_ROOT, 'interaction-signals.json');
    while (true) {
        try {
            if (fs.existsSync(signalFile)) {
                const signals = JSON.parse(fs.readFileSync(signalFile, 'utf8'));
                if (signals[signalId]) {
                    delete signals[signalId];
                    const tmp = signalFile + '.' + Math.random().toString(36).substring(7) + '.tmp';
                    fs.writeFileSync(tmp, JSON.stringify(signals, null, 4));
                    fs.renameSync(tmp, signalFile);
                    return true;
                }
            }
        } catch (e) {}
        await delay(1000);
    }
};

(async () => {
    console.log(`Starting ${PROCESS_ID}: ${CASE_NAME}...`);
    writeJson(path.join(PUBLIC_DATA_DIR, `process_${PROCESS_ID}.json`), {
        logs: [], keyDetails: {
            'Batch Number': 'LIS-2024-0441',
            'Product': 'Lisinopril 10mg Tablets',
            'Batch Size': '50,000 tablets',
            'Site': 'Lilly Indianapolis',
            'MBR Reference': 'MPR-LIS-10-v08',
            'Review Status': 'In Progress'
        }
    });

    const steps = [
        {
            id: 'step-1',
            title_p: 'Ingesting MBR MPR-LIS-10-v08 and EBR LIS-2024-0441...',
            title_s: 'MBR and EBR ingested \u2014 LIS-2024-0441 loaded for review',
            reasoning: [
                'Batch record LIS-2024-0441 received and ingested successfully',
                'Product identified: Lisinopril 10mg Tablets, Product Code LIS-10-TAB',
                'Executing batch record linked to MBR reference MPR-LIS-10-v08 (effective 15-Feb-2024)',
                'Document covers all manufacturing phases: dispensing, granulation, drying, milling, blending, compression, packaging',
                '10-category review initiated across 68 standardised GMP verification checks'
            ],
            artifacts: [
                { id: 'ebr-pdf-012', type: 'pdf', label: 'EBR LIS-2024-0441', filename: '07_lisinopril_ebr.pdf', url: '/pdfs/07_lisinopril_ebr.pdf' },
                { id: 'mbr-pdf-012', type: 'pdf', label: 'MBR MPR-LIS-10-v08', filename: '07_lisinopril_mbr.pdf', url: '/pdfs/07_lisinopril_mbr.pdf' }
            ]
        },
        {
            id: 'step-2',
            title_p: 'Verifying header, BOM, equipment calibration, and process parameters...',
            title_s: 'CRITICAL: EBR records different formulation and product identity \u2014 BOM does not match MBR',
            reasoning: [
                'CRITICAL (Header): EBR product name \u2018Lisinopril 10mg Film-Coated Tablets\u2019 vs MBR \u2018Lisinopril Tablets 10mg (Uncoated tablet, oral)\u2019 \u2014 coating status is a critical product attribute; no coating step present in EBR',
                'CRITICAL (BOM): EBR lists Croscarmellose Sodium (Ac-Di-Sol) as disintegrant; MBR requires Crospovidone XL \u2014 different materials with different disintegration mechanisms',
                'CRITICAL (BOM): EBR HPMC E5 as binder at 8.00 kg vs MBR Pregelatinised Starch at 15.00 kg; EBR Mannitol 162.52 kg vs MBR 90.00 kg (+80.6%); EBR MCC 44.21 kg vs MBR 120.00 kg (\u221263.2%)',
                'Equipment PASS: all 5 items (HSG-003, DRY-006, MIL-005, BLN-022, TP-012) calibrated and current on 19\u201320-Mar-2024',
                'Process CPPs all within spec; all 5 inter-step hold times within validated limits; all rooms EM-compliant'
            ]
        },
        {
            id: 'step-3',
            title_p: 'Reviewing IPC, QC results, yield, and documentation...',
            title_s: 'MAJOR: 3 consecutive compression IPC supervisor signatures missing (shift handover gap) \u2014 Confidence: 52%',
            reasoning: [
                'IPC FAIL (MAJOR): Compression IPC rows 5, 6, 7 (08:30, 08:45, 09:00) have blank Supervisor Initials (Column J) \u2014 MBR Section 8.1 and Signatory Matrix require supervisor countersignature at every IPC interval',
                'Gap represents the shift handover window (SM to KA, 08:30\u201309:00) with no supervisor coverage documented; rows 1\u20134 signed by SM, rows 8\u201320 signed by KA',
                'QC PASS (all 7 tests): assay 101.4% LC (spec 90\u2013110%), dissolution 94.2% mean (all 6 vessels \u226580%), LIMS timestamps all within \u00b11 second \u2014 no data integrity flags',
                'Yield and reconciliation PASS: all stage yields in spec; 51,200 labels issued \u2014 discrepancy = 0; one minor packaging deviation (PKG-DEV-LIS-2024-031) properly raised and closed',
                'Confidence: 52% \u2014 HOLD; QA must investigate whether physical manufacture followed MBR or EBR formulation before disposition can proceed'
            ]
        }
    ];

    for (const step of steps) {
        updateProcessLog(PROCESS_ID, { id: step.id, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), title: step.title_p, status: 'processing' });
        await updateProcessListStatus(PROCESS_ID, 'In Progress', step.title_p);
        await delay(2200);
        updateProcessLog(PROCESS_ID, { id: step.id, title: step.title_s, status: 'success', reasoning: step.reasoning, artifacts: step.artifacts || [] });
        await updateProcessListStatus(PROCESS_ID, 'In Progress', step.title_s);
        await delay(1500);
    }

    updateProcessLog(PROCESS_ID, { id: 'step-4', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), title: 'Drafting QA investigation escalation for BOM discrepancy and product identity mismatch...', status: 'processing' });
    await updateProcessListStatus(PROCESS_ID, 'In Progress', 'Drafting QA investigation escalation for BOM discrepancy and product identity mismatch...');
    await delay(2200);
    updateProcessLog(PROCESS_ID, {
        id: 'step-4',
        title: 'QA escalation drafted \u2014 awaiting send approval',
        status: 'warning',
        reasoning: [
            'CRITICAL: EBR formulation is fundamentally different \u2014 wrong disintegrant, wrong binder, wrong excipient quantities (not tolerance deviations)',
            'CRITICAL: EBR product description Film-Coated contradicts MBR Uncoated dosage form; no coating step documented',
            'MAJOR: 3 consecutive compression IPC supervisor initials missing at shift handover 08:30\u201309:00',
            'QA must investigate whether the physical batch was manufactured per MBR or EBR formulation before any disposition decision',
            'All QC results pass \u2014 product quality data does not by itself explain the formulation discrepancy'
        ],
        artifacts: [{
            id: 'hitl-email-012', type: 'email_draft', label: 'QA Escalation \u2014 BOM Formulation Discrepancy', signal: SIGNAL_KEY,
            subject: 'HOLD: Critical BOM Discrepancy \u2014 Batch LIS-2024-0441 Lisinopril 10mg',
            from: 'pace-review@lilly.com', to: 'qa.head@lilly.com',
            body: 'Dear QA Head,\n\nBatch LIS-2024-0441 (Lisinopril 10mg Tablets) has been placed on HOLD. The EBR records a formulation that does not correspond to MPR-LIS-10-v08.\n\nCRITICAL FINDING 1 \u2014 BOM Formulation Discrepancy:\n- Disintegrant: EBR lists Croscarmellose Sodium (Ac-Di-Sol); MBR requires Crospovidone XL\n- Binder: EBR lists HPMC E5 at 8.00 kg; MBR specifies Pregelatinised Starch at 15.00 kg\n- Mannitol: EBR 162.52 kg vs MBR 90.00 kg (+80.6% deviation)\n- MCC: EBR 44.21 kg vs MBR 120.00 kg (-63.2% deviation)\n\nCRITICAL FINDING 2 \u2014 Product Identity Discrepancy:\nEBR product description: \'Lisinopril 10mg Film-Coated Tablets\'. MBR: \'Lisinopril Tablets 10mg (Uncoated tablet, oral)\'. No coating step is present in the EBR.\n\nMAJOR FINDING \u2014 Missing IPC Signatures:\nCompression IPC supervisor initials blank at rows 5-7 (08:30-09:00, shift handover). MBR Section 8.1 requires supervisor countersignature at every IPC check.\n\nNote: All QC results (assay 101.4%, dissolution 94.2%) pass. The formulation discrepancy requires investigation regardless.\n\nRequired actions:\n1. Determine whether physical manufacture followed MBR or EBR formulation\n2. Resolve Film-Coated vs Uncoated product identity discrepancy\n3. Obtain retrospective supervisor countersignature or raise formal deviation for IPC gap\n\nBatch remains on HOLD.\n\nRegards,\nPace \u2014 Batch Record Review\nLilly Quality Operations',
            isIncoming: false, timestamp: new Date().toISOString()
        }]
    }, { 'Review Status': 'Needs Review', 'Confidence': '52%', 'Disposition': 'HOLD' });
    await updateProcessListStatus(PROCESS_ID, 'Needs Review', 'QA escalation drafted \u2014 awaiting send approval');

    await waitForSignal(SIGNAL_KEY);
    await delay(800);

    updateProcessLog(PROCESS_ID, { id: 'step-5', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), title: 'Finalising review record...', status: 'processing' });
    await updateProcessListStatus(PROCESS_ID, 'Needs Review', 'Finalising review record...');
    await delay(2000);
    updateProcessLog(PROCESS_ID, {
        id: 'step-5',
        title: 'Review complete \u2014 batch LIS-2024-0441 on HOLD. QA formulation investigation initiated.',
        status: 'completed',
        reasoning: [
            'Escalation sent to QA Head \u2014 investigation into BOM formulation discrepancy and product identity initiated',
            'Physical manufacturing records to be reviewed against both MBR and EBR to determine actual formulation used',
            'Missing IPC supervisor signatures to be addressed via retrospective sign-off or formal deviation',
            'All QC results pass \u2014 assay 101.4%, dissolution 94.2%; release possible after QA investigation closure'
        ],
        artifacts: [{
            id: 'results-json-012', type: 'json', label: 'Consolidated Review Results',
            data: {
                pair_id: 'pair-07-lisinopril', batch_number: 'LIS-2024-0441',
                product_name: 'Lisinopril 10 mg Tablets', mbr_reference: 'MPR-LIS-10-v08',
                disposition: 'HOLD', primary_finding_type: 'bom_formulation_discrepancy',
                primary_finding_severity: 'CRITICAL', confidence_pct: 52,
                critical_findings: 2, major_findings: 1, minor_findings: 1, total_findings: 5,
                routing: 'QA investigation required: verify whether physical manufacture followed MBR or EBR formulation, resolve film-coated vs uncoated product identity discrepancy, and address 3 missing compression IPC supervisor countersignatures before disposition can proceed.',
                review_timestamp: '2026-03-25T04:30:04.886357+00:00'
            }
        }]
    }, { 'Review Status': 'Done' });
    await updateProcessListStatus(PROCESS_ID, 'Done', 'Review complete \u2014 batch LIS-2024-0441 on HOLD');
    console.log(`${PROCESS_ID} Complete`);
})();
