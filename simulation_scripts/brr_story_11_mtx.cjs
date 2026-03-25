'use strict';
const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.join(__dirname, '..');
const PUBLIC_DATA_DIR = path.join(PROJECT_ROOT, 'public/data');
const PROCESSES_FILE = path.join(PUBLIC_DATA_DIR, 'processes.json');
const PROCESS_ID = 'BRR_011';
const CASE_NAME = 'Methotrexate Tablets 2.5mg | MTX-2024-0204';
const SIGNAL_KEY = 'APPROVE_HOLD_MTX0204';

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
            'Batch Number': 'MTX-2024-0204',
            'Product': 'Methotrexate Tablets 2.5mg',
            'Batch Size': '200,000 tablets',
            'Site': 'Lilly Cork',
            'MBR Reference': 'MPR-MTX-2.5-v05',
            'Review Status': 'In Progress'
        }
    });

    const steps = [
        {
            id: 'step-1',
            title_p: 'Ingesting MBR MPR-MTX-2.5-v05 and EBR MTX-2024-0204...',
            title_s: 'MBR and EBR ingested \u2014 MTX-2024-0204 loaded for review',
            reasoning: [
                'MBR: MPR-MTX-2.5-v05, Methotrexate Tablets 2.5mg, batch size 200,000 tablets, 40.000 kg',
                'EBR: Batch MTX-2024-0204, manufactured 12\u201315 Feb 2024, Building B OSD Cytotoxic Suite',
                'MBR extracted: formula, equipment list, 72-point checklist, hold times, EM specs, QC specs',
                'EBR extracted: all executed steps, actual values, QC results, mass balance, disposition',
                'Both documents fully loaded \u2014 proceeding to field-by-field comparison'
            ],
            artifacts: [
                { id: 'ebr-pdf-011', type: 'pdf', label: 'EBR MTX-2024-0204', filename: '09_methotrexate_ebr.pdf', url: '/pdfs/09_methotrexate_ebr.pdf' },
                { id: 'mbr-pdf-011', type: 'pdf', label: 'MBR MPR-MTX-2.5-v05', filename: '09_methotrexate_mbr.pdf', url: '/pdfs/09_methotrexate_mbr.pdf' }
            ]
        },
        {
            id: 'step-2',
            title_p: 'Verifying dispensing, blending, compression, and QC results...',
            title_s: 'All process parameters and QC results pass \u2014 assay 99.4%, dissolution min 97.1%',
            reasoning: [
                'Dispensing: API MTX USP 500.015g dispensed (spec 499.5\u2013500.5g) PASS; triple independent verification (M. Chen, D. Okonkwo, P. Sharma) all different individuals, all signed PASS',
                'Blending: pre-lubrication 15 RPM \u00d7 20 min, BU mean 100.02%, RSD 4.8% (\u22646.0%), HP-01 hold time 0.75hr vs 72hr limit \u2014 all PASS',
                'Compression: all 17 CPP monitoring entries in spec, all 9 IPC time points pass, compression yield 99.88% (\u226597.0%) PASS; all inter-step hold times within validated limits',
                'QC: assay 99.4% (spec 90\u2013110%), CU AV=3.8 (\u226415.0), dissolution min 97.1% (Q\u226580%), related substances 0.3% total (\u22662.0%) \u2014 all PASS',
                'EM compliant all rooms and days; IH wipe sampling at all 10 locations below OEL-derived limit \u2014 no containment breach'
            ]
        },
        {
            id: 'step-3',
            title_p: 'Reviewing API mass balance and accountability calculations...',
            title_s: 'MAJOR: API mass balance transcription error \u2014 5,000g recorded vs 500.015g actual \u2014 Confidence: 92%',
            reasoning: [
                'EBR Section 8.1 records API dispensed (Item A) as 5,000.0g \u2014 this is a 10\u00d7 transcription error; dispensing log (Section 2.2) clearly records 500.015g dispensed',
                'Consequence: calculated accountability = 515.695 / 5,000.0 = 9.8% with 4,484g listed as unaccounted \u2014 both figures are nonsensical',
                'EBR checklist Item 52 marked Y (pass) by S. Williams for mass balance accuracy \u2014 incorrect; error not detected during QA review',
                'Finding type: api_mass_balance_transcription_error \u2014 MAJOR documentation deficiency under 21 CFR 211.192',
                'This is a documentation/transcription error, not a product quality failure \u2014 actual API dispensed and in-process data are internally consistent; confidence 92% \u2014 HOLD pending correction'
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

    updateProcessLog(PROCESS_ID, { id: 'step-4', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), title: 'Drafting escalation for API mass balance documentation correction...', status: 'processing' });
    await updateProcessListStatus(PROCESS_ID, 'In Progress', 'Drafting escalation for API mass balance documentation correction...');
    await delay(2200);
    updateProcessLog(PROCESS_ID, {
        id: 'step-4',
        title: 'QA escalation drafted \u2014 awaiting send approval',
        status: 'warning',
        reasoning: [
            'Mass balance Section 8.1 Item A: 5,000.0g recorded \u2014 actual dispensed per Section 2.2 is 500.015g (10\u00d7 transcription error)',
            'Accountability calculation (9.8%, 4,484g unaccounted) is nonsensical \u2014 GMP-critical documentation deficiency under 21 CFR 211.192',
            'QA reviewer S. Williams signed off checklist Item 52 as pass without detecting the error',
            'All QC results (assay 99.4%, CU AV 3.8, dissolution 97.1%) confirm product quality is not in question',
            'SOP-DOC-001 correction by K. Yamamoto and re-sign by S. Williams required; no product quality investigation needed'
        ],
        artifacts: [{
            id: 'hitl-email-011', type: 'email_draft', label: 'QA Escalation \u2014 API Mass Balance Transcription Error', signal: SIGNAL_KEY,
            subject: 'HOLD: Mass Balance Transcription Error \u2014 Batch MTX-2024-0204 Methotrexate 2.5mg',
            from: 'pace-review@lilly.com', to: 'qa.head@lilly.com',
            body: 'Dear QA Head,\n\nBatch MTX-2024-0204 (Methotrexate Tablets 2.5mg) requires a documentation correction before release.\n\nMAJOR FINDING \u2014 API Mass Balance Transcription Error:\nEBR Section 8.1 Item A (API dispensed quantity) records 5,000.0 g. The dispensing log (Section 2.2) records the actual dispensed quantity as 500.015 g. This is a 10x transcription error.\n\nImpact: The accountability calculation (9.8%) and unaccounted API (4,484 g) are nonsensical. GMP-critical documentation deficiency under 21 CFR 211.192. QA reviewer S. Williams signed off checklist Item 52 as pass without detecting the error.\n\nNote: All QC results are within specification (assay 99.4%, CU AV 3.8, dissolution min 97.1%). This is a documentation issue, not a product quality failure.\n\nRequired actions:\n1. Return EBR to Production Manager K. Yamamoto for SOP-DOC-001 correction (correct value: 500.015 g in Section 8.1 Item A)\n2. QA Reviewer S. Williams to re-sign checklist Item 52 after correction is verified\n3. No product quality investigation required\n\nBatch remains on HOLD until correction is completed.\n\nRegards,\nPace \u2014 Batch Record Review\nLilly Quality Operations',
            isIncoming: false, timestamp: new Date().toISOString()
        }]
    }, { 'Review Status': 'Needs Review', 'Confidence': '92%', 'Disposition': 'HOLD' });
    await updateProcessListStatus(PROCESS_ID, 'Needs Review', 'QA escalation drafted \u2014 awaiting send approval');

    await waitForSignal(SIGNAL_KEY);
    await delay(800);

    updateProcessLog(PROCESS_ID, { id: 'step-5', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), title: 'Finalising review record...', status: 'processing' });
    await updateProcessListStatus(PROCESS_ID, 'Needs Review', 'Finalising review record...');
    await delay(2000);
    updateProcessLog(PROCESS_ID, {
        id: 'step-5',
        title: 'Review complete \u2014 batch MTX-2024-0204 on HOLD. Documentation correction in progress.',
        status: 'completed',
        reasoning: [
            'EBR returned to K. Yamamoto (Production Manager) and S. Williams (QA Reviewer) for SOP-DOC-001 correction',
            'Mass balance Section 8.1 Item A to be corrected to 500.015g with proper ALCOA+ documentation',
            'All QC results confirm product quality \u2014 release can proceed immediately after correction and re-sign',
            'No product quality investigation required'
        ],
        artifacts: [{
            id: 'results-json-011', type: 'json', label: 'Consolidated Review Results',
            data: {
                pair_id: 'pair-09-methotrexate', batch_number: 'MTX-2024-0204',
                product_name: 'Methotrexate Tablets 2.5 mg', mbr_reference: 'MPR-MTX-2.5-v05',
                disposition: 'HOLD', primary_finding_type: 'api_mass_balance_transcription_error',
                primary_finding_severity: 'MAJOR', confidence_pct: 92,
                critical_findings: 0, major_findings: 1, minor_findings: 1, total_findings: 3,
                routing: 'Return EBR to Production Manager (K. Yamamoto) and QA Reviewer (S. Williams) for SOP-DOC-001 correction of mass balance Section 8.1 Item A (correct value: 500.015 g) and re-sign of 72-point checklist Item 52; no product quality investigation required',
                review_timestamp: '2026-03-25T04:31:24.348392+00:00'
            }
        }]
    }, { 'Review Status': 'Done' });
    await updateProcessListStatus(PROCESS_ID, 'Done', 'Review complete \u2014 batch MTX-2024-0204 on HOLD');
    console.log(`${PROCESS_ID} Complete`);
})();
