'use strict';
const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.join(__dirname, '..');
const PUBLIC_DATA_DIR = path.join(PROJECT_ROOT, 'public/data');
const PROCESSES_FILE = path.join(PUBLIC_DATA_DIR, 'processes.json');
const PROCESS_ID = 'BRR_009';
const CASE_NAME = 'Amlodipine Besylate Tablets 5mg | AML-2024-0271';
const SIGNAL_KEY = 'APPROVE_HOLD_AML0271';

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
            'Batch Number': 'AML-2024-0271',
            'Product': 'Amlodipine Besylate Tablets 5mg',
            'Batch Size': '30,000 tablets',
            'Site': 'Lilly Indianapolis',
            'MBR Reference': 'MPR-AML-5-v06',
            'Review Status': 'In Progress'
        }
    });

    const steps = [
        {
            id: 'step-1',
            title_p: 'Ingesting MBR MPR-AML-5-v06 and EBR AML-2024-0271...',
            title_s: 'MBR (1587 lines) and EBR (1080 lines) ingested \u2014 AML-2024-0271 loaded',
            reasoning: [
                'MBR reference: MPR-AML-5-v06 (effective 01-Jan-2024) \u2014 1587 lines parsed across 17 sections + appendices',
                'EBR batch: AML-2024-0271 \u2014 1080 lines parsed covering dispensing through packaging and QC',
                'Product: Amlodipine Besylate Tablets 5mg, Batch Size 30,000 tablets, Mfg Date 19-Jul-2024',
                'Manufacturing date range: 19-Jul-2024 (dispensing through coating) to 20-Jul-2024 (packaging)',
                'Both documents structured and ready for 10-category, 68-point GMP review'
            ],
            artifacts: [
                { id: 'ebr-pdf-009', type: 'pdf', label: 'EBR AML-2024-0271', filename: '06_amlodipine_ebr.pdf', url: '/pdfs/06_amlodipine_ebr.pdf' },
                { id: 'mbr-pdf-009', type: 'pdf', label: 'MBR MPR-AML-5-v06', filename: '06_amlodipine_mbr.pdf', url: '/pdfs/06_amlodipine_mbr.pdf' }
            ]
        },
        {
            id: 'step-2',
            title_p: 'Executing 68-point GMP checklist...',
            title_s: '68-point checklist: 62 pass, 6 fail \u2014 OOS assay suppressed + unauthorized retesting',
            reasoning: [
                'Category 1\u20133 (Header, BOM, Equipment): All PASS \u2014 product identity, batch number, MBR version, materials, calibrations all verified',
                'Category 4\u20136 (Process, IPC, Environment): All PASS \u2014 CPPs in range, IPC results clean, EM within limits throughout',
                'Category 7\u20138 (Yield/Reconciliation, QC): Yield PASS; QC \u2014 5 tests pass, 1 critical failure in HPLC assay data integrity',
                'Category 9\u201310 (Signatures, Deviations): Signatures mostly complete (QA Manager PENDING); CRITICAL \u2014 6 checklist items incorrectly marked Y',
                'Total: 62 pass / 6 fail (Items 60, 62, 63, 64, BR-12 trigger missed, BR-14 trigger missed)'
            ]
        },
        {
            id: 'step-3',
            title_p: 'Classifying findings and calculating confidence score...',
            title_s: '4 findings confirmed: 2 CRITICAL + 2 MAJOR \u2014 Confidence: 52% \u2014 HOLD',
            reasoning: [
                'CRITICAL-1: OOS assay result (91.2% vs spec 95.0\u2013105.0%) obtained on first analysis \u2014 not reported to QA, no OOS notification (Form OOS-001) filed, batch not placed on HOLD (MBR Section 6.3.1 violated)',
                'CRITICAL-2: Original OOS result recorded only on loose, uncontrolled worksheet stapled to EBR \u2014 not entered in main batch record; only passing retest (97.8%) appears in Section 9.2.2 (MBR Section 12.1 Rule 6 violated)',
                'MAJOR-1: Unauthorized retesting performed \u2014 retest done without QA notification, without approved Retest Protocol (Form OOS-RP-001), and without Phase I investigation (MBR Section 6.3.2 violated)',
                'MAJOR-2: Section 9.2.3 First Analysis Verification field shows \'N\' with blank retest protocol number \u2014 QA reviewer Sneha Patil signed Items 63 and 64 as Y without actioning this red flag',
                'Confidence: 100 \u2212 15 (critical-1) \u2212 15 (critical-2) \u2212 8 (major-1) \u2212 8 (major-2) \u2212 2 (obs: QA Manager sig PENDING) = 52% \u2014 mandatory full human review'
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

    updateProcessLog(PROCESS_ID, { id: 'step-4', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), title: 'Drafting QA escalation for data integrity and OOS suppression...', status: 'processing' });
    await updateProcessListStatus(PROCESS_ID, 'In Progress', 'Drafting QA escalation for data integrity and OOS suppression...');
    await delay(2200);
    updateProcessLog(PROCESS_ID, {
        id: 'step-4',
        title: 'QA escalation drafted \u2014 awaiting send approval',
        status: 'warning',
        reasoning: [
            'First HPLC assay result 91.2% (OOS vs spec 95.0\u2013105.0%) suppressed \u2014 not entered in official batch record',
            'Unauthorized retest (97.8%) recorded in Section 9.2.2 without OOS protocol, QA notification, or Phase I investigation',
            'Unauthorized average (91.2 + 97.8) / 2 = 94.5% noted on uncontrolled worksheet \u2014 still OOS under spec',
            'QA reviewer Sneha Patil (QA-4010) and analyst Pooja Iyer (QC-3022) both require formal review',
            'Confidence 52% \u2014 mandatory full human review; formal Data Integrity Investigation and retroactive OOS Phase I required'
        ],
        artifacts: [{
            id: 'hitl-email-009', type: 'email_draft', label: 'QA Escalation \u2014 OOS Suppression + Data Integrity', signal: SIGNAL_KEY,
            subject: 'HOLD: Data Integrity Violation \u2014 Batch AML-2024-0271 Amlodipine 5mg',
            from: 'pace-review@lilly.com', to: 'qa.head@lilly.com',
            body: 'Dear QA Head,\n\nBatch AML-2024-0271 (Amlodipine Besylate Tablets 5mg) has been placed on HOLD.\n\nCRITICAL FINDING 1 \u2014 OOS Result Suppressed:\nFirst HPLC assay result: 91.2% (spec 95.0\u2013105.0%) \u2014 OOS. Not reported to QA. No Form OOS-001 filed. Batch not placed on HOLD. MBR Section 6.3.1 violated.\n\nCRITICAL FINDING 2 \u2014 Original Data Excluded:\nOOS result recorded only on loose uncontrolled worksheet stapled to EBR. Only passing retest (97.8%) entered in Section 9.2.2. MBR Section 12.1 Rule 6 violated.\n\nMAJOR FINDING 1 \u2014 Unauthorized Retesting:\nRetest performed without QA notification, approved Retest Protocol (Form OOS-RP-001), or Phase I investigation. MBR Section 6.3.2 violated.\n\nMAJOR FINDING 2 \u2014 QA Reviewer Failure:\nSection 9.2.3 shows First Analysis Verification = N with blank retest protocol number. QA reviewer Sneha Patil (QA-4010) signed Items 63 and 64 as Y without flagging this.\n\nRequired actions:\n1. Open formal Data Integrity Investigation (SOP-DI-001)\n2. Open retroactive OOS Phase I Investigation for 91.2% result\n3. Review analyst Pooja Iyer (QC-3022) and QA reviewer Sneha Patil (QA-4010)\n\nBatch remains on HOLD.\n\nRegards,\nPace \u2014 Batch Record Review\nLilly Quality Operations',
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
        title: 'Review complete \u2014 batch AML-2024-0271 on HOLD. Data Integrity Investigation initiated.',
        status: 'completed',
        reasoning: [
            'Escalation sent \u2014 formal Data Integrity Investigation (SOP-DI-001) initiated',
            'Retroactive OOS Phase I Investigation opened for suppressed 91.2% result',
            'Personnel review for analyst Pooja Iyer (QC-3022) and QA reviewer Sneha Patil (QA-4010) in progress',
            'All process parameters and excipient composition were compliant \u2014 issue isolated to QC data integrity'
        ],
        artifacts: [{
            id: 'results-json-009', type: 'json', label: 'Consolidated Review Results',
            data: {
                pair_id: 'pair-06-amlodipine', batch_number: 'AML-2024-0271',
                product_name: 'Amlodipine Besylate Tablets 5 mg', mbr_reference: 'MPR-AML-5-v06',
                disposition: 'HOLD', primary_finding_type: 'oos_uninvestigated',
                primary_finding_severity: 'CRITICAL', confidence_pct: 52,
                critical_findings: 2, major_findings: 2, minor_findings: 0, total_findings: 4,
                routing: 'Immediate HOLD \u2014 do not release. Open formal Data Integrity Investigation (SOP-DI-001) and retroactive OOS Phase I Investigation. Review analyst Pooja Iyer (QC-3022) and QA reviewer Sneha Patil (QA-4010).',
                review_timestamp: '2026-03-25T04:27:57.784727+00:00'
            }
        }]
    }, { 'Review Status': 'Done' });
    await updateProcessListStatus(PROCESS_ID, 'Done', 'Review complete \u2014 batch AML-2024-0271 on HOLD');
    console.log(`${PROCESS_ID} Complete`);
})();
