'use strict';
const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.join(__dirname, '..');
const PUBLIC_DATA_DIR = path.join(PROJECT_ROOT, 'public/data');
const PROCESSES_FILE = path.join(PUBLIC_DATA_DIR, 'processes.json');
const PROCESS_ID = 'BRR_002';
const CASE_NAME = 'Metformin HCl 500mg | MF-2026-0089';

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
            'Batch Number': 'MF-2026-0089',
            'Product': 'Metformin HCl 500mg Tablets',
            'Batch Size': '1,200,000 units',
            'Site': 'Lilly Kinsale',
            'MBR Reference': 'MBR-MFH-500-001 v3.0',
            'Review Status': 'In Progress'
        }
    });

    const steps = [
        {
            id: 'step-1',
            title_p: 'Retrieving executed batch record from Teams channel...',
            title_s: 'EBR MF-2026-0089 received from D. Okafor via Teams \u2014 document loaded',
            reasoning: [
                'Source: Teams channel #batch-records-qa | Posted by: David Okafor (QA Lead, Kinsale)',
                'Message: "EBR MF-2026-0089 Metformin 500mg uploaded for release review"',
                'Attachment: ebr_MF-2026-0089.pdf (83 pages)',
                'Batch: MF-2026-0089 | 1,200,000 units | Manufactured: 04\u201307-Mar-2026',
                'Site: Lilly Kinsale, Ireland'
            ],
            artifacts: [
                {
                    id: 'ebr-teams-002', type: 'email_draft', label: 'Incoming Teams Message \u2014 EBR Upload',
                    subject: 'Teams: #batch-records-qa \u2014 EBR MF-2026-0089 Upload',
                    from: 'david.okafor@lilly.com (Teams #batch-records-qa)',
                    to: 'quality-inbox@lilly.com',
                    body: 'EBR MF-2026-0089 Metformin HCl 500mg Tablets \u2014 1,200,000 units, Lilly Kinsale, manufactured 04\u201307-Mar-2026.\n\nUploaded for release review. MBR: MBR-MFH-500-001 v3.0.\n\nNote: FBD-003 calibration question raised by operator \u2014 details in EBR Step 5. Please review.\n\nDavid Okafor\nQA Lead, Lilly Kinsale',
                    isIncoming: true, timestamp: '2026-03-07T17:15:00Z'
                },
                { id: 'ebr-pdf-002', type: 'pdf', label: 'EBR MF-2026-0089', filename: 'ebr_MF-2026-0089.pdf', url: '/pdfs/ebr_MF-2026-0089.pdf' }
            ]
        },
        {
            id: 'step-2',
            title_p: 'Retrieving Master Batch Record via Veeva Vault REST API...',
            title_s: 'MBR-MFH-500-001 v3.0 retrieved \u2014 current approved version confirmed',
            reasoning: [
                'API: GET vault.lilly.com/api/v24.1/objects/documents/MFH-500-001/file',
                'Response: 200 OK | v3.0 Approved | Effective: 10-Nov-2025',
                'Previous versions: v2.1 (superseded 09-Nov-2025), v2.0 (superseded 15-Jun-2025)',
                'v3.0 is the applicable version for this batch \u2014 confirmed',
                'Document retrieved in 1.1 seconds | 88 pages'
            ],
            artifacts: [
                {
                    id: 'mbr-api-json-002', type: 'json', label: 'Veeva REST API Call',
                    data: {
                        endpoint: 'GET vault.lilly.com/api/v24.1/objects/documents/MFH-500-001/file',
                        response_code: 200, document: 'MBR-MFH-500-001', version: 'v3.0',
                        status: 'Approved', effective_date: '2025-11-10', pages: 88,
                        response_time_sec: 1.1
                    }
                },
                { id: 'mbr-pdf-002', type: 'pdf', label: 'MBR-MFH-500-001 v3.0', filename: 'mbr_MFH-500-001_v3.0.pdf', url: '/pdfs/mbr_MFH-500-001_v3.0.pdf' }
            ]
        },
        {
            id: 'step-3',
            title_p: 'Parsing BOM and dispensing records \u2014 7 materials...',
            title_s: 'BOM complete \u2014 all 7 materials dispensed within specification',
            reasoning: [
                'Metformin Hydrochloride USP (RM-5001) \u2014 MBR: 600.0 kg | EBR: 600.0 kg \u2713',
                'Povidone K30 USP (RM-3021) \u2014 MBR: 24.0 kg | EBR: 24.0 kg \u2713',
                'Microcrystalline Cellulose PH-102 (RM-2018) \u2014 MBR: 48.0 kg | EBR: 48.0 kg \u2713',
                'Crospovidone NF (RM-2035) \u2014 MBR: 18.0 kg | EBR: 18.0 kg \u2713',
                'Magnesium Stearate NF (RM-2041) \u2014 MBR: 6.0 kg | EBR: 6.0 kg \u2713',
                'Opadry Clear (RM-6031) \u2014 MBR: 14.4 kg | EBR: 14.4 kg \u2713',
                'Purified Water USP (RM-1001) \u2014 Granulation solvent, evaporated \u2713',
                'All CoAs current \u2713 | Dispensing yield: 100.0% \u2713'
            ]
        },
        {
            id: 'step-4',
            title_p: 'Reviewing Steps 1\u201310: Manufacturing procedure through packaging...',
            title_s: 'Manufacturing steps reviewed \u2014 3 MAJOR findings identified',
            reasoning: [
                'Steps 1-4 Dispensing through Wet Granulation: All 7 materials at exact MBR quantities \u2713',
                'MAJOR FINDING 1 \u2014 Granulation Yield: 94.2% vs MBR minimum 97.0% (delta: -2.8%) | No deviation report filed | Operator note: wiped bowl walls \u2014 not an acceptable corrective action under SOP-QA-007',
                'Steps 5-7 Fluid Bed Drying through Final Blending:',
                'MAJOR FINDING 2 \u2014 FBD-003 Calibration EXPIRED: Used 20-Feb-2026, expired 15-Jan-2026 (36 days past expiry) | No Equipment Release Authorization on file | Violation of SOP-EQP-004 Sec 2.1',
                'FBD-003 LOD results: 1.2-1.3% (spec NMT 1.5%) numerically pass, but data validity is compromised by expired equipment calibration',
                'Steps 8-10 Compression, Coating, Packaging:',
                'MAJOR FINDING 3 \u2014 IPC Blend Uniformity test NOT performed before compression | Mandatory per SOP-IPC-003 | Cannot be waived | No entry or authorization in batch record',
                'Compression passes: avg weight 750.2 mg \u2713 | Hardness 12.4 kP \u2713 | Friability 0.22-0.28% \u2713',
                'Metformin 500mg is uncoated \u2014 no coating step per MBR-MFH-500-001 \u2713 | Packaging reconciliation complete \u2713'
            ],
            artifacts: [
                {
                    id: 'mfg-steps-data', type: 'json', label: 'Manufacturing Steps \u2014 Batch Actuals vs Specification',
                    data: {
                        batch: 'MF-2026-0089',
                        parameters: [
                            { step: 'Dispensing', parameter: 'Yield', spec: '100%', actual: '100.0%', status: 'PASS' },
                            { step: 'Granulation', parameter: 'Granulation Yield', spec: 'NLT 97.0%', actual: '94.2%', status: 'MAJOR DEVIATION' },
                            { step: 'Granulation', parameter: 'Deviation Report Filed', spec: 'Required', actual: 'NOT FILED', status: 'MAJOR DEVIATION' },
                            { step: 'FBD-003', parameter: 'Calibration Status', spec: 'Current', actual: 'EXPIRED 15-Jan-2026', status: 'MAJOR DEVIATION' },
                            { step: 'FBD-003', parameter: 'Equipment Release Auth', spec: 'Required', actual: 'NOT ON FILE', status: 'MAJOR DEVIATION' },
                            { step: 'Drying', parameter: 'LOD (avg)', spec: 'NMT 1.5%', actual: '1.2%', status: 'PASS (validity compromised)' },
                            { step: 'Pre-Compression IPC', parameter: 'Blend Uniformity RSD', spec: 'NMT 2.0% MANDATORY', actual: 'NOT PERFORMED', status: 'MAJOR DEVIATION' },
                            { step: 'Compression', parameter: 'Avg Tablet Weight', spec: '750 mg +/-3%', actual: '750.2 mg', status: 'PASS' },
                            { step: 'Compression', parameter: 'Hardness', spec: '10-16 kP', actual: '12.4 kP', status: 'PASS' }
                        ],
                        observations: 0, major_findings: 3, critical_findings: 0
                    }
                }
            ]
        },
        {
id: 'step-7',
            title_p: 'Running QC verification \u2014 results within spec despite process deviations...',
            title_s: 'QC results within specification \u2014 process record integrity compromised',
            reasoning: [
                'Assay: 99.4% of label claim (spec 95.0\u2013105.0%) \u2713',
                'Dissolution: 82% at 45 min (NLT 80%) \u2713',
                'Related Substances: Total 0.21% (NMT 1.0%) \u2713',
                'Uniformity of Dosage Units: AV 6.1 (spec \u226415.0) \u2713',
                'Microbial Limits: Pass USP <61>/<62> \u2713',
                'NOTE: QC results passing does not remediate GMP process record violations',
                'Calibration gap (MAJOR #2) means FBD-003 data integrity cannot be confirmed',
                'Missing IPC (MAJOR #3) is an unresolved documentation gap per 21 CFR 211.192'
            ],
            artifacts: [
                {
                    id: 'qc-json-002', type: 'json', label: 'QC Results Summary',
                    data: {
                        batch: 'MF-2026-0089', tests_performed: 10, tests_passed: 10,
                        assay_pct: 99.4, dissolution_45min_pct: 82, av_value: 6.1,
                        microbial_limits: 'Pass', note: 'QC pass does not remediate GMP violations',
                        overall_qc_status: 'PASS \u2014 but process record integrity compromised'
                    }
                }
            ]
        },
        {
            id: 'step-8',
            title_p: 'Calculating confidence score \u2014 3 MAJOR findings...',
            title_s: 'Confidence: 74% \u2014 3 MAJOR findings require human QA disposition',
            reasoning: [
                'MAJOR penalties: 3 \u00d7 (\u22128 pts) = \u221224 pts',
                'MINOR penalties: 1 \u00d7 (\u22123 pts) = \u22123 pts',
                'Base score: 100% \u2192 After penalties: 73% \u2192 floor adjustment: 74%',
                'Threshold: <80% = Full human review required before any disposition',
                'MAJOR #1: Granulation yield 95.8% (spec \u226598%) \u2014 no deviation opened',
                'MAJOR #2: FBD-003 calibration expired 35 days before use \u2014 data integrity risk',
                'MAJOR #3: Missing IPC at 14:30 compression \u2014 unresolved documentation gap',
                'Recommended disposition: HOLD \u2014 deviation reports required for all 3 MAJORs'
            ],
            artifacts: [
                {
                    id: 'findings-json-002', type: 'json', label: 'Findings Summary',
                    data: {
                        batch: 'MF-2026-0089', confidence_pct: 74,
                        critical_findings: 0, major_findings: 3, minor_findings: 1,
                        observations: 0, disposition: 'HOLD',
                        major_1: 'Granulation yield 95.8% vs >=98% spec \u2014 no deviation opened',
                        major_2: 'FBD-003 cal expired 35 days before use \u2014 21 CFR 211.68 violation',
                        major_3: 'Missing IPC at 14:30 compression \u2014 21 CFR 211.192 gap'
                    }
                },
                { id: 'dev-draft-pdf-002', type: 'pdf', label: 'Deviation Report Drafts', filename: 'deviation_drafts_MF-2026-0089.pdf', url: '/pdfs/deviation_drafts_MF-2026-0089.pdf' }
            ]
        }
    ];

    const hitlStep = {
        id: 'step-9',
        title_p: 'Awaiting QA disposition \u2014 HOLD recommendation pending approval...',
        title_s: 'QA disposition required \u2014 3 MAJOR findings \u2014 HOLD recommended',
        reasoning: [
            'Batch MF-2026-0089 cannot be released without QA disposition of 3 MAJOR findings',
            'MAJOR #1: Granulation yield 95.8% \u2014 deviation report DEV-MF-2026-0089-01 must be opened',
            'MAJOR #2: FBD-003 expired calibration \u2014 deviation DEV-MF-2026-0089-02 + retrospective cal assessment',
            'MAJOR #3: Missing IPC at 14:30 \u2014 deviation DEV-MF-2026-0089-03 + investigation',
            'Batch placed on quarantine hold pending QA countersignature on all 3 deviation reports',
            'Regulatory risk: unresolved MAJORs = potential 483 observation if inspected'
        ],
        artifacts: [
            { id: 'report-pdf-002', type: 'pdf', label: 'Batch Review Report', filename: 'review_report_MF-2026-0089.pdf', url: '/pdfs/review_report_MF-2026-0089.pdf' },
            {
                id: 'results-json-002', type: 'json', label: 'Review Results',
                data: {
                    batch: 'MF-2026-0089', confidence_pct: 74, disposition: 'HOLD',
                    major_findings: 3, minor_findings: 1,
                    action_required: 'QA must approve HOLD and open deviation reports for all 3 MAJORs'
                }
            },
            {
                id: 'decision-002', type: 'decision',
                data: {
                    question: 'QA Disposition — Batch MF-2026-0089',
                    options: [
                        { label: 'Approve HOLD — confirm batch on hold, open 3 deviation reports', signal: 'APPROVE_HOLD_MF0089' },
                        { label: 'Reject — release batch without deviation reports', signal: 'REJECT_HOLD_MF0089' }
                    ]
                }
            }
        ]
    };

    const postSignalStep = {
        id: 'step-10',
        title_p: 'Processing QA disposition confirmation...',
        title_s: 'QA disposition confirmed \u2014 batch MF-2026-0089 on HOLD',
        reasoning: [
            'QA disposition approved: HOLD \u2014 confirmed by authorized signatory',
            'Deviation reports opened: DEV-MF-2026-0089-01, -02, -03',
            'Batch MF-2026-0089 quarantine documentation filed \u2014 1,200,000 units on HOLD',
            'Investigation timeline: 30 business days per SOP-DEV-003',
            'QA team notified: D. Okafor (Kinsale), Sr. QA Manager copied',
            'Batch cannot be released until all 3 deviations are closed with documented root cause'
        ]
    };

    const allSteps = [...steps, ...steps2];

    for (let i = 0; i < allSteps.length; i++) {
        const step = allSteps[i];
        updateProcessLog(PROCESS_ID, { id: step.id, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), title: step.title_p, status: 'processing' });
        await updateProcessListStatus(PROCESS_ID, 'In Progress', step.title_p);
        await delay(2200);
        updateProcessLog(PROCESS_ID, { id: step.id, title: step.title_s, status: 'success', reasoning: step.reasoning || [], artifacts: step.artifacts || [] });
        await updateProcessListStatus(PROCESS_ID, 'In Progress', step.title_s);
        await delay(1500);
    }

    // HITL step - warning
    updateProcessLog(PROCESS_ID, { id: hitlStep.id, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), title: hitlStep.title_p, status: 'processing' });
    await updateProcessListStatus(PROCESS_ID, 'In Progress', hitlStep.title_p);
    await delay(2200);
    updateProcessLog(PROCESS_ID, { id: hitlStep.id, title: hitlStep.title_s, status: 'warning', reasoning: hitlStep.reasoning, artifacts: hitlStep.artifacts }, { 'Review Status': 'Needs Review', 'Confidence': '74%', 'Disposition': 'HOLD' });
    await updateProcessListStatus(PROCESS_ID, 'Needs Review', hitlStep.title_s);

    await waitForSignal('APPROVE_HOLD_MF0089');
    await delay(800);

    // Post-signal step
    updateProcessLog(PROCESS_ID, { id: postSignalStep.id, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), title: postSignalStep.title_p, status: 'processing' });
    await updateProcessListStatus(PROCESS_ID, 'In Progress', postSignalStep.title_p);
    await delay(2000);
    updateProcessLog(PROCESS_ID, { id: postSignalStep.id, title: postSignalStep.title_s, status: 'completed', reasoning: postSignalStep.reasoning, artifacts: [] }, { 'Review Status': 'Done' });
    await updateProcessListStatus(PROCESS_ID, 'Done', postSignalStep.title_s);

    console.log(`${PROCESS_ID} Complete: ${CASE_NAME} \u2014 Final status: Done`);
})();
