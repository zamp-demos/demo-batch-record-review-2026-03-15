'use strict';
const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.join(__dirname, '..');
const PUBLIC_DATA_DIR = path.join(PROJECT_ROOT, 'public/data');
const PROCESSES_FILE = path.join(PUBLIC_DATA_DIR, 'processes.json');
const PROCESS_ID = 'BRR_007';
const CASE_NAME = 'Atorvastatin Calcium Tablets 40mg | ATV-40-2024-0187';
const SIGNAL_KEY = 'APPROVE_HOLD_ATV0187';

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
            'Batch Number': 'ATV-40-2024-0187',
            'Product': 'Atorvastatin Calcium Tablets 40mg',
            'Batch Size': '10,000 tablets',
            'Site': 'Lilly Indianapolis',
            'MBR Reference': 'MPR-ATV-40-v12',
            'Review Status': 'In Progress'
        }
    });

    const steps = [
        {
            id: 'step-1',
            title_p: 'Ingesting MBR MPR-ATV-40-v12 and EBR ATV-40-2024-0187...',
            title_s: 'MBR and EBR ingested \u2014 ATV-40-2024-0187 loaded for review',
            reasoning: [
                'Received Master Batch Record MPR-ATV-40-v12 \u2014 Atorvastatin Calcium Tablets 40mg',
                'Received Executed Batch Record EBR-ATV-40-2024-0187, manufactured 14-15 Mar 2024',
                'MBR version on EBR cover confirmed: MPR-ATV-40-v12',
                'Batch size 10,000 tablets, expiry 31-Mar-2026 \u2014 arithmetic verified correct'
            ],
            artifacts: [
                { id: 'ebr-pdf-007', type: 'pdf', label: 'EBR ATV-40-2024-0187', filename: '01_atorvastatin_ebr.pdf', url: '/pdfs/01_atorvastatin_ebr.pdf' },
                { id: 'mbr-pdf-007', type: 'pdf', label: 'MBR MPR-ATV-40-v12', filename: '01_atorvastatin_mbr.pdf', url: '/pdfs/01_atorvastatin_mbr.pdf' }
            ]
        },
        {
            id: 'step-2',
            title_p: 'Verifying dispensing records and equipment calibration...',
            title_s: 'Dispensing verified \u2014 CRITICAL: TP-008 calibration expired 15 days before use',
            reasoning: [
                'All 8 raw materials have QC-approved AR numbers \u2014 no TBD or pending entries',
                'Two-person dispensing confirmed: R. Krishnan dispensed, S. Patil independently verified all 8 materials',
                'CRITICAL: TP-008 (Tablet Press, semi-annual calibration) due date 28-Feb-2024; compression performed 15-Mar-2024 \u2014 15 days past expiry',
                'MBR Section 3.2 is unambiguous: equipment with expired calibration must NOT be used \u2014 no exceptions',
                'Operator R. Krishnan recorded "Cal Current? Y" \u2014 incorrect; no deviation raised; QA reviewer S. Desai accepted without independent verification'
            ]
        },
        {
            id: 'step-3',
            title_p: 'Reviewing QC results and LIMS data integrity...',
            title_s: 'CRITICAL: HPLC assay LIMS timestamp 6h 55min after instrument printout \u2014 ALCOA+ violation',
            reasoning: [
                'HPLC assay LIMS entry time: 16:47 on 16-Mar-2024; instrument printout time: 09:52 on 16-Mar-2024',
                'Discrepancy: 6 hours 55 minutes \u2014 MBR v12 Section 6.4 tolerance is \u00b12 minutes',
                'MBR classification: discrepancy >\u00b12 min = CRITICAL ALCOA+ violation (Contemporaneous principle)',
                'Required action per MBR: immediate Critical deviation report \u2014 none raised',
                'Analyst V. Prasad and reviewer S. Desai both signed off; checklist item 61 incorrectly marked Y'
            ]
        },
        {
            id: 'step-4',
            title_p: 'Reviewing all CPPs, IPCs, hold times, and EM logs...',
            title_s: 'All CPPs, IPC, hold times, QC values, and EM compliant \u2014 2 critical findings block release',
            reasoning: [
                'Granulation CPPs: roll pressure 61-63 bar, speed 4 RPM, feed rate 20-21 kg/hr \u2014 all within spec throughout run',
                'LOD post-drying: 1.8-2.0% at all 3 locations \u2014 within \u22642.5%; blend RSD 0.36% \u2014 within \u22645.0%',
                'Dissolution: mean 88.2%, all 6 vessels \u226575%; water content 1.74%, impurities total 0.23% \u2014 all pass',
                'All 6 inter-step hold times within validated limits; all 4 rooms EM-compliant with no excursions',
                'Both critical findings are process compliance violations; numerical QC results are all within specification'
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

    updateProcessLog(PROCESS_ID, { id: 'step-5', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), title: 'Drafting QA Head escalation for 2 critical unresolved findings...', status: 'processing' });
    await updateProcessListStatus(PROCESS_ID, 'In Progress', 'Drafting QA Head escalation for 2 critical unresolved findings...');
    await delay(2200);
    updateProcessLog(PROCESS_ID, {
        id: 'step-5',
        title: 'QA Head escalation drafted \u2014 awaiting send approval',
        status: 'warning',
        reasoning: [
            'Finding 1 (CRITICAL): TP-008 used 15 days past semi-annual calibration expiry \u2014 no deviation raised',
            'Finding 2 (CRITICAL): HPLC assay LIMS timestamp 6h 55min late \u2014 ALCOA+ violation, no deviation raised',
            'Both findings missed by QA reviewer S. Desai \u2014 checklist items 23 and 61 incorrectly marked Y',
            'Batch cannot be released: requires 2 Critical deviation reports and Phase I investigations',
            'Confidence: 97% (high base; numerical results all pass) but routing is HOLD due to unresolved criticals'
        ],
        artifacts: [{
            id: 'hitl-email-007', type: 'email_draft', label: 'QA Head Escalation \u2014 2 Critical Findings', signal: SIGNAL_KEY,
            subject: 'HOLD: 2 Critical Findings \u2014 Batch ATV-40-2024-0187 Atorvastatin 40mg',
            from: 'pace-review@lilly.com', to: 'qa.head@lilly.com',
            body: 'Dear QA Head,\n\nBatch ATV-40-2024-0187 (Atorvastatin Calcium Tablets 40mg) has been placed on HOLD. Two Critical deviations are required before any further action.\n\nCRITICAL FINDING 1 \u2014 Equipment Calibration:\nTP-008 (Tablet Press) semi-annual calibration expired 28-Feb-2024. Compression performed 15-Mar-2024 \u2014 15 days past expiry. Operator recorded "Cal Current? Y" \u2014 incorrect. No deviation raised.\n\nCRITICAL FINDING 2 \u2014 Data Integrity (ALCOA+):\nHPLC assay (Section 6.4) LIMS entry time 16:47; instrument printout 09:52 \u2014 discrepancy 6h 55min. MBR tolerance \u00b12 min. Constitutes a Critical ALCOA+ Contemporaneous violation. No deviation raised.\n\nRequired actions:\n1. Open Critical deviation for TP-008 expired calibration \u2014 recalibration impact assessment required\n2. Open Critical deviation for HPLC LIMS timestamp gap \u2014 Phase I data integrity investigation required\n3. Both investigations must be completed and closed by QA Head before release can be reconsidered\n\nBatch remains on HOLD.\n\nRegards,\nPace \u2014 Batch Record Review\nLilly Quality Operations',
            isIncoming: false, timestamp: new Date().toISOString()
        }]
    }, { 'Review Status': 'Needs Review', 'Confidence': '97%', 'Disposition': 'HOLD' });
    await updateProcessListStatus(PROCESS_ID, 'Needs Review', 'QA Head escalation drafted \u2014 awaiting send approval');

    await waitForSignal(SIGNAL_KEY);
    await delay(800);

    updateProcessLog(PROCESS_ID, { id: 'step-6', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), title: 'Finalising review record...', status: 'processing' });
    await updateProcessListStatus(PROCESS_ID, 'Needs Review', 'Finalising review record...');
    await delay(2000);
    updateProcessLog(PROCESS_ID, {
        id: 'step-6',
        title: 'Review complete \u2014 batch ATV-40-2024-0187 on HOLD. 2 Critical deviations initiated.',
        status: 'completed',
        reasoning: [
            'Escalation sent to QA Head \u2014 two Critical deviation reports to be opened',
            'TP-008 recalibration and impact assessment in progress',
            'Phase I data integrity investigation for HPLC LIMS gap initiated',
            'All numerical QC results compliant \u2014 release possible after both investigations close'
        ],
        artifacts: [{
            id: 'results-json-007', type: 'json', label: 'Consolidated Review Results',
            data: {
                pair_id: 'pair-01-atorvastatin', batch_number: 'ATV-40-2024-0187',
                product_name: 'Atorvastatin Calcium Tablets 40mg', mbr_reference: 'MPR-ATV-40-v12',
                disposition: 'HOLD', primary_finding_type: 'equipment_calibration',
                primary_finding_severity: 'CRITICAL', confidence_pct: 97,
                critical_findings: 2, major_findings: 0, minor_findings: 1, total_findings: 3,
                routing: 'Return to QA Head: (1) TP-008 calibration deviation + recalibration impact assessment; (2) HPLC LIMS timestamp ALCOA+ deviation + Phase I investigation. Batch on HOLD until both closed.',
                review_timestamp: '2026-03-25T03:53:25.552999+00:00'
            }
        }]
    }, { 'Review Status': 'Done' });
    await updateProcessListStatus(PROCESS_ID, 'Done', 'Review complete \u2014 batch ATV-40-2024-0187 on HOLD');
    console.log(`${PROCESS_ID} Complete`);
})();
