'use strict';
const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.join(__dirname, '..');
const PUBLIC_DATA_DIR = path.join(PROJECT_ROOT, 'public/data');
const PROCESSES_FILE = path.join(PUBLIC_DATA_DIR, 'processes.json');
const PROCESS_ID = 'BRR_010';
const CASE_NAME = 'Ciprofloxacin Hydrochloride Tablets 500mg | CIP-2024-0156';
const SIGNAL_KEY = 'APPROVE_HOLD_CIP0156';

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
            'Batch Number': 'CIP-2024-0156',
            'Product': 'Ciprofloxacin Hydrochloride Tablets 500mg',
            'Batch Size': '100,000 tablets',
            'Site': 'Lilly Kinsale',
            'MBR Reference': 'MPR-CIP-500-v08',
            'Review Status': 'In Progress'
        }
    });

    const steps = [
        {
            id: 'step-1',
            title_p: 'Ingesting MBR MPR-CIP-500-v08 and EBR CIP-2024-0156...',
            title_s: 'MBR (1498 lines) and EBR (1206 lines) ingested \u2014 CIP-2024-0156 loaded',
            reasoning: [
                'MBR reference: MPR-CIP-500-v08 \u2014 1498 lines parsed across 19 sections',
                'EBR batch: CIP-2024-0156 \u2014 1206 lines parsed, manufacturing dates 03\u201304 Jun 2024',
                'Product: Ciprofloxacin Hydrochloride Tablets 500mg, batch size 100,000 tablets',
                'Manufacturing date range identified: 03-Jun-2024 (dispensing) through 04-Jun-2024 (packaging)',
                'Both documents structured and ready for field-by-field comparison across 68 GMP checks'
            ],
            artifacts: [
                { id: 'ebr-pdf-010', type: 'pdf', label: 'EBR CIP-2024-0156', filename: '05_ciprofloxacin_ebr.pdf', url: '/pdfs/05_ciprofloxacin_ebr.pdf' },
                { id: 'mbr-pdf-010', type: 'pdf', label: 'MBR MPR-CIP-500-v08', filename: '05_ciprofloxacin_mbr.pdf', url: '/pdfs/05_ciprofloxacin_mbr.pdf' }
            ]
        },
        {
            id: 'step-2',
            title_p: 'Executing 68-point GMP checklist...',
            title_s: '68-point checklist: 67 pass, 1 critical fail \u2014 Item 61: LIMS timestamp discrepancy',
            reasoning: [
                'Category 1\u20133 (Header, BOM, Equipment): All 21 checks PASS \u2014 product ID, batch number, MBR v08, all 9 materials dispensed within tolerance with dual signatures, all equipment calibrated',
                'Category 4\u20136 (Process, IPC, Environment): All 20 checks PASS \u2014 granulation endpoint 54 A (spec 45\u201365), LOD 1.6%, blend RSD 0.73%, 10 compression IPC points all within spec, no environmental excursions',
                'Category 7\u20138 (Yield/Reconciliation, QC): 14 of 15 checks PASS \u2014 yields all within range; CRITICAL FAIL: HPLC assay LIMS entry 14:32 vs instrument printout 10:17, discrepancy 4h 15min (tolerance \u00b12 min)',
                'Category 9\u201310 (Signatures, Deviations): All 12 checks PASS \u2014 all mandatory countersignatures present (SIG-05, SIG-08, SIG-09), no deviations documented',
                'Total: 67 pass / 1 critical fail \u2014 assay result (98.6%) is within spec but contemporaneity cannot be verified'
            ]
        },
        {
            id: 'step-3',
            title_p: 'Classifying findings and calculating confidence score...',
            title_s: '1 CRITICAL finding: ALCOA+ violation \u2014 Confidence: 55% \u2014 HOLD',
            reasoning: [
                'Primary finding: HPLC assay (QC-04, Section 12.4) LIMS entry timestamp (14:32) is 4 hours 15 minutes after instrument hardware clock printout (10:17)',
                'Finding type: data_integrity \u2014 ALCOA+ Contemporaneous principle violation per MBR Sections 3.2, 6.4, and 7.1',
                'Severity: CRITICAL \u2014 MBR explicitly states "Discrepancy > \u00b12 min = Critical ALCOA+ violation. Report as Critical deviation. Do not release batch while deviation is open."',
                'Regulatory reference: 21 CFR 211.194, EU Annex 11, FDA Data Integrity Guidance 2018; precedent: Intas Pharmaceuticals FDA 483 (Ahmedabad 2022)',
                'Evidence: analyst recorded \'No\' to \u00b12 min check but raised no deviation; BR-11 incorrectly marked \'Not triggered\'; Checklist Item 61 incorrectly marked \'Y\' by QA reviewer; confidence 55% \u2014 HOLD'
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

    updateProcessLog(PROCESS_ID, { id: 'step-4', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), title: 'Drafting QA escalation for ALCOA+ LIMS timestamp violation...', status: 'processing' });
    await updateProcessListStatus(PROCESS_ID, 'In Progress', 'Drafting QA escalation for ALCOA+ LIMS timestamp violation...');
    await delay(2200);
    updateProcessLog(PROCESS_ID, {
        id: 'step-4',
        title: 'QA escalation drafted \u2014 awaiting send approval',
        status: 'warning',
        reasoning: [
            'HPLC assay LIMS entry (14:32) is 4h 15min (253 minutes) after instrument hardware clock (10:17) \u2014 far beyond \u00b12 min MBR tolerance',
            'ALCOA+ Contemporaneous violation: data integrity of QC-04 assay result (98.6%) cannot be assured without investigation',
            'Analyst recorded \'No\' to contemporaneous check but raised no deviation; BR-11 incorrectly marked not triggered',
            'QA reviewer signed off Checklist Item 61 as Y without actioning the \u00b12 min exceedance',
            'Critical deviation per BR-11 must be initiated immediately; investigation should extend to all analyst KN runs on HPLC-QC-101 in prior 30 days'
        ],
        artifacts: [{
            id: 'hitl-email-010', type: 'email_draft', label: 'QA Escalation \u2014 ALCOA+ Data Integrity Violation', signal: SIGNAL_KEY,
            subject: 'HOLD: ALCOA+ Violation \u2014 Batch CIP-2024-0156 Ciprofloxacin 500mg',
            from: 'pace-review@lilly.com', to: 'qa.head@lilly.com',
            body: 'Dear QA Head,\n\nBatch CIP-2024-0156 (Ciprofloxacin Hydrochloride Tablets 500mg) has been placed on HOLD.\n\nCRITICAL FINDING \u2014 ALCOA+ Data Integrity Violation:\nHPLC assay (QC-04, Section 12.4) LIMS entry timestamp: 14:32. Instrument hardware clock printout: 10:17. Discrepancy: 4 hours 15 minutes (253 minutes).\n\nMBR Section 3.2 tolerance is \u00b12 minutes. MBR explicitly states: "Discrepancy > \u00b12 min = Critical ALCOA+ violation. Report as Critical deviation. Do not release batch while deviation is open."\n\nAnalyst recorded \'No\' to the \u00b12 min check but raised no deviation. BR-11 was incorrectly marked \'Not triggered\'. QA reviewer signed Checklist Item 61 as compliant (Y) without actioning the exceedance.\n\nRequired actions:\n1. Initiate Critical deviation per BR-11 immediately\n2. Investigate 4h 15min LIMS gap on HPLC-QC-101 assay sequence CIP-ASSAY\n3. Extend review to all analyst KN runs on HPLC-QC-101 in prior 30 days\n4. Do not release batch pending BR-11 investigation closure\n\nBatch remains on HOLD.\n\nRegards,\nPace \u2014 Batch Record Review\nLilly Quality Operations',
            isIncoming: false, timestamp: new Date().toISOString()
        }]
    }, { 'Review Status': 'Needs Review', 'Confidence': '55%', 'Disposition': 'HOLD' });
    await updateProcessListStatus(PROCESS_ID, 'Needs Review', 'QA escalation drafted \u2014 awaiting send approval');

    await waitForSignal(SIGNAL_KEY);
    await delay(800);

    updateProcessLog(PROCESS_ID, { id: 'step-5', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), title: 'Finalising review record...', status: 'processing' });
    await updateProcessListStatus(PROCESS_ID, 'Needs Review', 'Finalising review record...');
    await delay(2000);
    updateProcessLog(PROCESS_ID, {
        id: 'step-5',
        title: 'Review complete \u2014 batch CIP-2024-0156 on HOLD. Critical deviation BR-11 initiated.',
        status: 'completed',
        reasoning: [
            'Escalation sent \u2014 Critical deviation per BR-11 initiated for 4h 15min LIMS timestamp gap',
            'Investigation of HPLC-QC-101 sequence and analyst KN history in progress',
            'All process parameters, yields, and other QC results are compliant',
            'Release gated on BR-11 investigation closure and confirmation of data integrity'
        ],
        artifacts: [{
            id: 'results-json-010', type: 'json', label: 'Consolidated Review Results',
            data: {
                pair_id: 'pair-05-ciprofloxacin', batch_number: 'CIP-2024-0156',
                product_name: 'Ciprofloxacin Hydrochloride Tablets 500 mg', mbr_reference: 'MPR-CIP-500-v08',
                disposition: 'HOLD', primary_finding_type: 'data_integrity',
                primary_finding_severity: 'CRITICAL', confidence_pct: 55,
                critical_findings: 1, major_findings: 0, minor_findings: 0, total_findings: 1,
                routing: 'QA HOLD \u2014 initiate Critical deviation per BR-11 immediately; investigate 4h 15min LIMS timestamp gap on HPLC-QC-101 assay sequence CIP077-ASSAY-01; do not release batch; extend review to all analyst KN runs on HPLC-QC-101 in prior 30 days',
                review_timestamp: '2026-03-25T04:26:58.087626+00:00'
            }
        }]
    }, { 'Review Status': 'Done' });
    await updateProcessListStatus(PROCESS_ID, 'Done', 'Review complete \u2014 batch CIP-2024-0156 on HOLD');
    console.log(`${PROCESS_ID} Complete`);
})();
