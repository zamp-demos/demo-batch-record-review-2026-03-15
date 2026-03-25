'use strict';
const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.join(__dirname, '..');
const PUBLIC_DATA_DIR = path.join(PROJECT_ROOT, 'public/data');
const PROCESSES_FILE = path.join(PUBLIC_DATA_DIR, 'processes.json');
const PROCESS_ID = 'BRR_005';
const CASE_NAME = 'Amoxicillin Trihydrate Capsules 500mg | AMX-2024-0093';
const SIGNAL_KEY = 'APPROVE_HOLD_AMX0093';

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
            'Batch Number': 'AMX-2024-0093',
            'Product': 'Amoxicillin Trihydrate Capsules 500mg',
            'Batch Size': '50,000 capsules',
            'Site': 'Lilly Kinsale',
            'MBR Reference': 'MPR-AMX-500-v07',
            'Review Status': 'In Progress'
        }
    });

    const steps = [
        {
            id: 'step-1',
            title_p: 'Ingesting MBR and EBR for Amoxicillin Trihydrate Capsules 500mg...',
            title_s: 'MBR (1575 lines) and EBR (1307 lines) ingested \u2014 AMX-2024-0093 loaded',
            reasoning: [
                'MBR reference: MPR-AMX-500-v07 \u2014 1575 lines parsed',
                'EBR batch: AMX-2024-0091 \u2014 1307 lines parsed',
                'Product: Amoxicillin Trihydrate Capsules 500mg, 50,000 capsule batch',
                'Manufacturing date 22-Apr-2024; packaging 23-Apr-2024; QA release 28-Apr-2024',
                'Both documents structured and ready for field-by-field 10-category GMP review'
            ],
            artifacts: [
                { id: 'ebr-pdf-005', type: 'pdf', label: 'EBR AMX-2024-0093', filename: '03_amoxicillin_ebr.pdf', url: '/pdfs/03_amoxicillin_ebr.pdf' },
                { id: 'mbr-pdf-005', type: 'pdf', label: 'MBR MPR-AMX-500-v07', filename: '03_amoxicillin_mbr.pdf', url: '/pdfs/03_amoxicillin_mbr.pdf' }
            ]
        },
        {
            id: 'step-2',
            title_p: 'Executing 72-point GMP checklist...',
            title_s: '72-point checklist: 70 pass, 2 fail \u2014 label reconciliation + data integrity',
            reasoning: [
                'Category 1-3 (Header, BOM, Equipment): All pass \u2014 product ID correct, all 4 materials released, 9/9 equipment current',
                'Category 4-6 (Process, IPC, Environment): All pass \u2014 blend 100.26% LC RSD 0.50%, fill weights 629-631 mg, all EM within spec',
                'Category 7-8 (Yield/Reconciliation, QC): Label reconciliation FAIL \u2014 13 unaccounted labels recorded as PASS; all 16 FP QC tests pass',
                'Category 9-10 (Signatures, Deviations): Data integrity FAIL \u2014 correction on p.87 missing mandatory reason; no deviations raised for either finding',
                'Total: 70 pass / 2 fail \u2014 Items 52 (label reconciliation) and 63 (correction reason) both FAIL'
            ]
        },
        {
            id: 'step-3',
            title_p: 'Classifying findings and calculating confidence score...',
            title_s: '2 MAJOR findings confirmed \u2014 Confidence: 84% \u2014 HOLD',
            reasoning: [
                'Finding 1 (MAJOR): Label reconciliation \u2014 50,500 issued vs 50,487 accounted = 13 unaccounted labels; operator falsely recorded discrepancy = 0 and PASS',
                'Finding type: label_reconciliation \u2014 violates zero-tolerance rule in MBR Sections 5.5.5, 7.5, 8.4 and 21 CFR 211.125 / EU GMP Annex 15',
                'Finding 2 (MAJOR): QC correction on p.87 (FP-04 peak area) missing mandatory reason field \u2014 violates MBR Section 7.2 and 21 CFR Part 211 data integrity',
                'QA reviewer S. Iyer accepted both items without verifying the arithmetic or the correction reason',
                'Confidence: 100 - (2 \u00d7 8 major) = 84% \u2014 HOLD band (50-87%)'
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

    updateProcessLog(PROCESS_ID, { id: 'step-4', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), title: 'Drafting QA escalation for label reconciliation and data integrity findings...', status: 'processing' });
    await updateProcessListStatus(PROCESS_ID, 'In Progress', 'Drafting QA escalation for label reconciliation and data integrity findings...');
    await delay(2200);
    updateProcessLog(PROCESS_ID, {
        id: 'step-4',
        title: 'QA escalation drafted \u2014 awaiting send approval',
        status: 'warning',
        reasoning: [
            '13 labels unaccounted (50,500 issued vs 50,487 accounted) \u2014 zero-tolerance breach per 21 CFR 211.125',
            'Operator recorded discrepancy as 0 and marked PASS \u2014 incorrect data entry',
            'QC correction on p.87 missing mandatory reason per MBR Section 7.2 \u2014 ALCOA+ violation',
            'QA reviewer accepted both findings without independent verification',
            'Expedited QA review required before any disposition decision'
        ],
        artifacts: [{
            id: 'hitl-email-005', type: 'email_draft', label: 'QA Escalation \u2014 Label Reconciliation + Data Integrity', signal: SIGNAL_KEY,
            subject: 'HOLD: 2 Major Findings \u2014 Batch AMX-2024-0093 Amoxicillin 500mg',
            from: 'pace-review@lilly.com', to: 'qa.head@lilly.com',
            body: 'Dear QA Head,\n\nBatch AMX-2024-0093 (Amoxicillin Trihydrate Capsules 500mg) has been placed on HOLD.\n\nMAJOR FINDING 1 \u2014 Label Reconciliation:\n50,500 labels issued; 50,487 accounted for; discrepancy = 13 unaccounted labels. Operator recorded discrepancy as 0 (PASS) \u2014 arithmetically incorrect. Zero-tolerance breach per MBR Section 5.5.5, 7.5, 8.4, and 21 CFR 211.125.\n\nMAJOR FINDING 2 \u2014 Data Integrity:\nQC correction on EBR p.87 (FP-04 peak area, analyst T. Kumar) is missing the mandatory reason field required by MBR Section 7.2 and 21 CFR Part 211.\n\nRequired actions:\n1. Verify label count arithmetic and locate 13 unaccounted labels\n2. Obtain correction reason from T. Kumar before any release decision\n3. Raise deviation report for both findings\n\nBatch remains on HOLD pending resolution.\n\nRegards,\nPace \u2014 Batch Record Review\nLilly Quality Operations',
            isIncoming: false, timestamp: new Date().toISOString()
        }]
    }, { 'Review Status': 'Needs Review', 'Confidence': '84%', 'Disposition': 'HOLD' });
    await updateProcessListStatus(PROCESS_ID, 'Needs Review', 'QA escalation drafted \u2014 awaiting send approval');

    await waitForSignal(SIGNAL_KEY);
    await delay(800);

    updateProcessLog(PROCESS_ID, { id: 'step-5', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), title: 'Finalising review record...', status: 'processing' });
    await updateProcessListStatus(PROCESS_ID, 'Needs Review', 'Finalising review record...');
    await delay(2000);
    updateProcessLog(PROCESS_ID, {
        id: 'step-5',
        title: 'Review complete \u2014 batch AMX-2024-0093 on HOLD. 2 major findings require resolution.',
        status: 'completed',
        reasoning: [
            'Escalation sent \u2014 QA assigned to investigate label reconciliation discrepancy',
            'Correction reason for p.87 to be obtained from analyst T. Kumar',
            'Deviation reports to be raised for both findings per SOP-QA-DEV-001',
            'All QC results pass \u2014 product quality not in question; documentation compliance requires remediation'
        ],
        artifacts: [{
            id: 'results-json-005', type: 'json', label: 'Consolidated Review Results',
            data: {
                pair_id: 'pair-03-amoxicillin', batch_number: 'AMX-2024-0093',
                product_name: 'Amoxicillin Trihydrate Capsules 500mg', mbr_reference: 'MPR-AMX-500-v07',
                disposition: 'HOLD', primary_finding_type: 'label_reconciliation',
                primary_finding_severity: 'MAJOR', confidence_pct: 84,
                critical_findings: 0, major_findings: 2, minor_findings: 0, total_findings: 2,
                routing: 'Hold batch \u2014 verify label count arithmetic and obtain missing reason for QC correction on p.87 from analyst T. Kumar before release',
                review_timestamp: '2026-03-25T03:53:41.927203+00:00'
            }
        }]
    }, { 'Review Status': 'Done' });
    await updateProcessListStatus(PROCESS_ID, 'Done', 'Review complete \u2014 batch AMX-2024-0093 on HOLD');
    console.log(`${PROCESS_ID} Complete`);
})();
