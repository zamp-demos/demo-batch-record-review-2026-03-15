'use strict';
const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.join(__dirname, '..');
const PUBLIC_DATA_DIR = path.join(PROJECT_ROOT, 'public/data');
const PROCESSES_FILE = path.join(PUBLIC_DATA_DIR, 'processes.json');
const PROCESS_ID = 'BRR_004';
const CASE_NAME = 'Omeprazole 20mg Delayed-Release Capsules | OMP-2024-0318';
const SIGNAL_KEY = 'APPROVE_HOLD_OMP0318';

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
            'Batch Number': 'OMP-2024-0318',
            'Product': 'Omeprazole 20mg Delayed-Release Capsules',
            'Batch Size': '120,000 capsules',
            'Site': 'Lilly Cork',
            'MBR Reference': 'MPR-OMP-20-v06',
            'Review Status': 'In Progress'
        }
    });

    const steps = [
        {
            id: 'step-1',
            title_p: 'Ingesting MBR and EBR for Omeprazole 20mg Delayed-Release Capsules...',
            title_s: 'MBR (1541 lines) and EBR (1007 lines) ingested \u2014 OMP-2024-0318 loaded',
            reasoning: [
                'MBR reference: MPR-OMP-20-v06 \u2014 1541 lines parsed, 26 sections covering BOM, CPPs, hold times, QC specs, 72-point checklist',
                'EBR batch: OMP-2024-0318 \u2014 1007 lines parsed, covering 6 manufacturing steps across 4 days (2024-03-18 to 2024-03-21)',
                'Product: Omeprazole 20mg Delayed-Release Capsules \u2014 hard gelatin capsule with enteric-coated pellets',
                'Manufacturing date range: Day 1 (2024-03-18) through QA disposition (2024-03-27)',
                'Both documents structured and ready for field-by-field comparison across all review categories'
            ],
            artifacts: [
                { id: 'ebr-pdf-004', type: 'pdf', label: 'EBR OMP-2024-0318', filename: '08_omeprazole_ebr.pdf', url: '/pdfs/08_omeprazole_ebr.pdf' },
                { id: 'mbr-pdf-004', type: 'pdf', label: 'MBR MPR-OMP-20-v06', filename: '08_omeprazole_mbr.pdf', url: '/pdfs/08_omeprazole_mbr.pdf' }
            ]
        },
        {
            id: 'step-2',
            title_p: 'Executing 72-point GMP checklist...',
            title_s: '72-point checklist complete \u2014 70 pass, 2 fail (hold time H-02 breach + false verification entry)',
            reasoning: [
                'Category 1-3 (Header/BOM/Equipment): PASS \u2014 MBR v06 confirmed, all 11 material lots verified, AR numbers present, dual-signed API dispensing, equipment calibration current',
                'Category 4-6 (Process CPPs, IPC, Environment): PASS \u2014 all 54 drug-layer and 46 enteric-coat CPP readings within range; all CWG samples pass; acid resistance tests pass; EM logs clean',
                'Category 7-8 (Yield/Reconciliation, QC): PASS \u2014 all stage yields above minimums; one OOS (DEV-OMP-2024-0318-001) raised for Stage 1 dissolution, Stage 2 passed, deviation properly closed',
                'Category 9-10 (Signatures, Deviations): FAIL on checklist item 43 \u2014 H-02 hold time marked Y when elapsed time was 7h 30m vs 4h max',
                'Total: 70 pass / 2 fail \u2014 both failures relate to the same H-02 hold time event'
            ]
        },
        {
            id: 'step-3',
            title_p: 'Classifying findings and calculating confidence score...',
            title_s: 'CRITICAL finding confirmed: H-02 hold time exceeded 3h 30m \u2014 Confidence: 62% \u2014 HOLD',
            reasoning: [
                'CRITICAL \u2014 Hold Time H-02 Breach: Step 2 ended 23:45 (2024-03-18); Step 3 started 07:15 (2024-03-19); elapsed 7h 30m vs MBR maximum 4h. ANDA-filed constraint \u2014 any exceedance requires deviation and QA disposition before progression',
                'CRITICAL (compounding) \u2014 False Record in Checklist Item 43: H-02 hold time verification table marks Within Limit as Y, and checklist item 43 is marked Y. Both factually incorrect. Operator V.K. and supervisor T.R. signed off on a materially false entry',
                'No deviation report was raised for the H-02 breach. MBR Section 9.3 requires QA review prior to batch progression',
                'MINOR \u2014 CPP log row at 21:15 shows Fluid Air column contains operator name V. Kumar instead of numeric value (m3/h) \u2014 ALCOA+ documentation defect',
                'Confidence: 100 - 15 (critical) - 3 (minor) - 20 (ANDA-filed modifier) = 62% \u2014 HOLD tier'
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

    // HITL: QA Escalation
    updateProcessLog(PROCESS_ID, { id: 'step-4', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), title: 'Drafting QA escalation for critical hold time violation...', status: 'processing' });
    await updateProcessListStatus(PROCESS_ID, 'In Progress', 'Drafting QA escalation for critical hold time violation...');
    await delay(2200);
    updateProcessLog(PROCESS_ID, {
        id: 'step-4',
        title: 'QA escalation drafted \u2014 awaiting send approval',
        status: 'warning',
        reasoning: [
            'H-02 inter-step hold time exceeded by 3h 30m (7h 30m elapsed vs 4h maximum)',
            'False entry in checklist item 43 \u2014 operator and supervisor signed off incorrect Y',
            'MBR Section 25 (ANDA regulatory note): batches exceeding H-02 must not be released without agency consultation',
            'No deviation report raised \u2014 required before any further batch progression',
            'Draft escalation prepared for QA Head to initiate formal deviation and stability impact assessment'
        ],
        artifacts: [{
            id: 'hitl-email-004', type: 'email_draft', label: 'QA Escalation \u2014 Hold Time Violation', signal: SIGNAL_KEY,
            subject: 'HOLD: Critical H-02 Hold Time Breach \u2014 Batch OMP-2024-0318 Omeprazole 20mg',
            from: 'pace-review@lilly.com', to: 'qa.head@lilly.com',
            body: 'Dear QA Head,\n\nBatch OMP-2024-0318 (Omeprazole 20mg Delayed-Release Capsules) has been placed on HOLD following automated batch record review.\n\nCRITICAL FINDING \u2014 H-02 Inter-Step Hold Time Exceeded:\nElapsed time between Step 2 and Step 3: 7h 30m (maximum per MBR: 4h 00m). Exceedance: +3h 30m.\n\nMBR Section 25 (ANDA regulatory commitment) states this limit is filed with the agency and any exceedance requires: (1) formal deviation report, (2) stability impact assessment, and (3) determination of whether agency notification is required.\n\nAdditional: Checklist Item 43 and the hold time verification table were both marked Y (compliant) by Operator V.K. and Supervisor T.R. despite the documented exceedance. A false record correction deviation is also required.\n\nRequired actions:\n1. Open deviation report for H-02 exceedance\n2. Initiate stability impact assessment per SP-OMP-HT-003\n3. Correct checklist item 43 and hold time table\n4. Determine if agency notification required per ANDA\n\nBatch remains on HOLD pending QA disposition.\n\nRegards,\nPace \u2014 Batch Record Review\nLilly Quality Operations',
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
        title: 'Review complete \u2014 batch OMP-2024-0318 on HOLD. Deviation required.',
        status: 'completed',
        reasoning: [
            'Escalation sent to QA Head \u2014 formal deviation process initiated',
            'Batch OMP-2024-0318 quarantined pending H-02 stability impact assessment',
            'ANDA regulatory consultation determination in progress',
            'All other batch attributes compliant \u2014 release can be reconsidered after deviation closure'
        ],
        artifacts: [{
            id: 'results-json-004', type: 'json', label: 'Consolidated Review Results',
            data: {
                pair_id: 'pair-08-omeprazole', batch_number: 'OMP-2024-0318',
                product_name: 'Omeprazole 20mg Delayed-Release Capsules', mbr_reference: 'MPR-OMP-20-v06',
                disposition: 'HOLD', primary_finding_type: 'hold_time_violation',
                primary_finding_severity: 'CRITICAL', confidence_pct: 62,
                critical_findings: 1, major_findings: 0, minor_findings: 1, total_findings: 2,
                routing: 'HOLD \u2014 H-02 hold time exceeded by 3h 30m; ANDA-filed constraint requires QA disposition and possible agency consultation before release',
                review_timestamp: '2026-03-25T03:19:39.406116+00:00'
            }
        }]
    }, { 'Review Status': 'Done' });
    await updateProcessListStatus(PROCESS_ID, 'Done', 'Review complete \u2014 batch OMP-2024-0318 on HOLD');
    console.log(`${PROCESS_ID} Complete`);
})();
