'use strict';
const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.join(__dirname, '..');
const PUBLIC_DATA_DIR = path.join(PROJECT_ROOT, 'public/data');
const PROCESSES_FILE = path.join(PUBLIC_DATA_DIR, 'processes.json');
const PROCESS_ID = 'BRR_006';
const CASE_NAME = 'Metformin HCl ER 500mg | MET-2024-0042';
const SIGNAL_KEY = 'APPROVE_HOLD_MET0042';

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
            'Batch Number': 'MET-2024-0042',
            'Product': 'Metformin Hydrochloride Extended-Release Tablets 500mg',
            'Batch Size': '600,000 tablets',
            'Site': 'Lilly Kinsale',
            'MBR Reference': 'MPR-MET-500ER-v09',
            'Review Status': 'In Progress'
        }
    });

    const steps = [
        {
            id: 'step-1',
            title_p: 'Ingesting MBR and EBR for Metformin HCl Extended-Release Tablets 500mg...',
            title_s: 'MBR (1931 lines) and EBR (1186 lines) ingested \u2014 MET-2024-0042 loaded',
            reasoning: [
                'MBR reference: MPR-MET-500ER-v09 \u2014 1931 lines parsed, v09 effective 01-Jan-2024',
                'EBR batch: MET-2024-0042 \u2014 1186 lines parsed, manufacturing 13-18 Mar 2024',
                'Product: Metformin Hydrochloride Extended-Release Tablets 500mg',
                'Manufacturing campaign: Dispensing 13-Mar through Packaging 18-Mar-2024',
                'Both documents structured and ready for 10-category, 72-point GMP review'
            ],
            artifacts: [
                { id: 'ebr-pdf-006', type: 'pdf', label: 'EBR MET-2024-0042', filename: '02_metformin_ebr.pdf', url: '/pdfs/02_metformin_ebr.pdf' },
                { id: 'mbr-pdf-006', type: 'pdf', label: 'MBR MPR-MET-500ER-v09', filename: '02_metformin_mbr.pdf', url: '/pdfs/02_metformin_mbr.pdf' }
            ]
        },
        {
            id: 'step-2',
            title_p: 'Executing 72-point GMP checklist...',
            title_s: '72-point checklist: 71 pass, 1 fail \u2014 Item 23: TP-008 calibration expired',
            reasoning: [
                'Cat A-B (Identity, Dispensing, Items 1-14): All PASS \u2014 MBR v09 correct, all 9 materials within \u00b10.5%, HPMC viscosity 98,400 mPa\u00b7s in range',
                'Cat C (Equipment Calibration, Items 15-24): FAIL on Item 23 \u2014 TP-008 calibration due 10-Mar-2024, used 15-Mar-2024, expired 5 days; all other 9 equipment items current',
                'Cat D-F (Line Clearance, CPPs, IPC, Items 25-48): All PASS \u2014 granulation torque 10.3 Nm, LOD 1.9%, blend RSD 0.06%, all 20 IPC compression checks in spec',
                'Cat G-H (Yields, QC, Items 49-62): All PASS \u2014 overall yield 98.9%, assay 100.4%, dissolution S1 PASS all 5 timepoints, AV 4.2',
                'Cat I-J (Items 63-72): All PASS \u2014 ALCOA+ met, LIMS \u0394T \u22641 min throughout, API accountability 100.24%, all 3 QAIP witnesses present'
            ]
        },
        {
            id: 'step-3',
            title_p: 'Classifying findings and calculating confidence score...',
            title_s: '1 CRITICAL finding: TP-008 expired calibration \u2014 Confidence: 62% \u2014 HOLD',
            reasoning: [
                'Primary finding: TP-008 calibration certificate CAL-TP008-2023-0089 due 10-Mar-2024; compression performed 15-Mar-2024 \u2014 5 days post-expiry',
                'Finding type: equipment_calibration. Severity: CRITICAL per MBR Section 3.1 and Section 10.1',
                'Regulatory reference: 21 CFR 211.68, 21 CFR 211.105; MBR Step 7.1 pre-check, Checklist Item 23',
                'Evidence: EBR Step 7.1 \u2014 due date 10-Mar-2024 correctly recorded, but "Within calibration? Y" marked incorrectly by JW; countersigned by TO; no deviation raised',
                'Confidence: 97% base \u2212 15 (critical) \u2212 20 (no deviation raised modifier) = 62% \u2014 mandatory full human review'
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

    updateProcessLog(PROCESS_ID, { id: 'step-4', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), title: 'Drafting QA escalation for equipment calibration violation...', status: 'processing' });
    await updateProcessListStatus(PROCESS_ID, 'In Progress', 'Drafting QA escalation for equipment calibration violation...');
    await delay(2200);
    updateProcessLog(PROCESS_ID, {
        id: 'step-4',
        title: 'QA escalation drafted \u2014 awaiting send approval',
        status: 'warning',
        reasoning: [
            'TP-008 (Tablet Press, semi-annual calibration) used 5 days past calibration expiry on 15-Mar-2024',
            'Operator JW recorded "Within calibration? Y" \u2014 incorrect; constitutes a data integrity error per 21 CFR 211.68',
            'MBR Step 7.1 MANDATORY PRE-CHECK requires STOP and deviation if calibration expired \u2014 no deviation raised',
            'QAIP countersigned without independent verification of calibration certificate',
            'Out-of-calibration impact assessment required: were compression force readings reliable during the run?'
        ],
        artifacts: [{
            id: 'hitl-email-006', type: 'email_draft', label: 'QA Escalation \u2014 Equipment Calibration Violation', signal: SIGNAL_KEY,
            subject: 'HOLD: Critical Equipment Calibration Finding \u2014 Batch MET-2024-0042 Metformin 500mg ER',
            from: 'pace-review@lilly.com', to: 'qa.head@lilly.com',
            body: 'Dear QA Head,\n\nBatch MET-2024-0042 (Metformin HCl ER 500mg Tablets) has been placed on HOLD.\n\nCRITICAL FINDING \u2014 Equipment Calibration Expired:\nTP-008 (Tablet Press) semi-annual calibration certificate CAL-TP008-2023-0089 expired 10-Mar-2024. Compression performed 15-Mar-2024 \u2014 5 days post-expiry. Operator JW recorded "Within calibration? Y" which is incorrect.\n\nMBR Section 3.1 classifies this as CRITICAL. 21 CFR 211.68 and 211.105 require equipment used in manufacturing to have current calibration.\n\nRequired actions:\n1. Raise critical deviation per SOP-DEV-001\n2. Schedule TP-008 recalibration immediately\n3. Perform out-of-calibration impact assessment on compression force data\n4. Review historical TP-008 calibration performance\n\nBatch remains on HOLD until TP-008 recalibration confirmed and QA disposition complete.\n\nRegards,\nPace \u2014 Batch Record Review\nLilly Quality Operations',
            isIncoming: false, timestamp: new Date().toISOString()
        }]
    }, { 'Review Status': 'Needs Review', 'Confidence': '62%', 'Disposition': 'HOLD' });
    await updateProcessListStatus(PROCESS_ID, 'Needs Review', 'QA escalation drafted \u2014 awaiting send approval');

    await waitForSignal(SIGNAL_KEY);
    await delay(800);

    updateProcessLog(PROCESS_ID, { id: 'step-5', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), title: 'Finalising review record...', status: 'processing' });
    await updateProcessListStatus(PROCESS_ID, 'Needs Review', 'Finalising review record...');
    await delay(2000);
    updateProcessLog(PROCESS_ID, {
        id: 'step-5',
        title: 'Review complete \u2014 batch MET-2024-0042 on HOLD. TP-008 impact assessment required.',
        status: 'completed',
        reasoning: [
            'Escalation sent \u2014 TP-008 calibration deviation initiated',
            'All QC results pass \u2014 product quality itself not in question',
            'Compression force sensor reliability unverified due to expired calibration \u2014 impact assessment in progress',
            'Batch release gated on TP-008 recalibration confirmation and QA disposition'
        ],
        artifacts: [{
            id: 'results-json-006', type: 'json', label: 'Consolidated Review Results',
            data: {
                pair_id: 'pair-02-metformin', batch_number: 'MET-2024-0042',
                product_name: 'Metformin Hydrochloride Extended-Release Tablets 500mg', mbr_reference: 'MPR-MET-500ER-v09',
                disposition: 'HOLD', primary_finding_type: 'equipment_calibration',
                primary_finding_severity: 'CRITICAL', confidence_pct: 62,
                critical_findings: 1, major_findings: 0, minor_findings: 0, total_findings: 1,
                routing: 'Raise critical deviation per SOP-DEV-001; perform TP-008 out-of-calibration impact assessment; review historical TP-008 calibration performance before any release decision',
                review_timestamp: '2026-03-25T03:53:17.955016+00:00'
            }
        }]
    }, { 'Review Status': 'Done' });
    await updateProcessListStatus(PROCESS_ID, 'Done', 'Review complete \u2014 batch MET-2024-0042 on HOLD');
    console.log(`${PROCESS_ID} Complete`);
})();
