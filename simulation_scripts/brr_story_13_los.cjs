'use strict';
const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.join(__dirname, '..');
const PUBLIC_DATA_DIR = path.join(PROJECT_ROOT, 'public/data');
const PROCESSES_FILE = path.join(PUBLIC_DATA_DIR, 'processes.json');
const PROCESS_ID = 'BRR_013';
const CASE_NAME = 'Losartan Potassium Tablets USP 50mg | LOS-2024-0512';
const SIGNAL_KEY = 'APPROVE_HOLD_LOS0512';

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
            'Batch Number': 'LOS-2024-0512',
            'Product': 'Losartan Potassium Tablets USP, 50mg',
            'Batch Size': '75,000 tablets',
            'Site': 'Lilly Kinsale',
            'MBR Reference': 'MPR-LOS-50-v07',
            'Review Status': 'In Progress'
        }
    });

    const steps = [
        {
            id: 'step-1',
            title_p: 'Ingesting MBR MPR-LOS-50-v07 and EBR LOS-2024-0512...',
            title_s: 'MBR and EBR ingested \u2014 LOS-2024-0512 loaded for review',
            reasoning: [
                'Batch record review initiated for batch LOS-2024-0512',
                'Product: Losartan Potassium Tablets USP, 50mg; MBR reference MPR-LOS-50-v07 (v07, effective 01-Jan-2024)',
                'Batch size 75,000 tablets; expiry May-2027 (36-month shelf life from 14-May-2024)',
                'All 10 personnel signatures documented; all 72 checklist items reviewed by Diana Walsh on 22-May-2024',
                'Review scope: 72-point QA checklist, field-by-field comparison, QC results, yields, OOS compliance'
            ],
            artifacts: [
                { id: 'ebr-pdf-013', type: 'pdf', label: 'EBR LOS-2024-0512', filename: '10_losartan_ebr.pdf', url: '/pdfs/10_losartan_ebr.pdf' },
                { id: 'mbr-pdf-013', type: 'pdf', label: 'MBR MPR-LOS-50-v07', filename: '10_losartan_mbr.pdf', url: '/pdfs/10_losartan_mbr.pdf' }
            ]
        },
        {
            id: 'step-2',
            title_p: 'Verifying materials, process CPPs, yield, and environmental monitoring...',
            title_s: 'All materials, CPPs, yields, and EM compliant \u2014 overall yield 98.5%, 8 stages pass',
            reasoning: [
                'Dispensing: all 10 raw materials within \u00b10.5% tolerance; all AR numbers verified; double verification present (TK/VS) for all quantities \u2014 PASS',
                'CPPs: granulation impeller 205/248 rpm (spec 150\u2013300), endpoint 21.3 A (spec 18\u201324), LOD 2.0\u20132.2% (spec 1.5\u20133.0%), compression main force 14.4\u201314.6 kN (spec 10\u201320 kN) \u2014 all PASS',
                'Yields: wet granulation 98.7%, drying 98.9%, milling 99.6%, blending 99.1%, compression 99.1%, coating 99.9%, packaging 99.6% \u2014 all above minimum specs; overall 98.5% (73,890 tablets)',
                'EM: all 14 room-condition pairs within ISO 8 particulate limits; highest microbial 15 CFU/m\u00b3 (limit \u2264200); purified water TOC 185\u2013210 ppb (\u2264500) \u2014 all PASS',
                'Documentation: all 10 personnel in signature log with IDs and roles; training records (TRN-GMP-2024) current; label reconciliation 100% accounted for (2,600 issued, 2,471 used, 5 damaged, 124 returned)'
            ]
        },
        {
            id: 'step-3',
            title_p: 'Reviewing QC results and OOS investigation compliance...',
            title_s: 'CRITICAL: OOS result (EXP-3179 0.24% vs NMT 0.20%) not investigated \u2014 batch released without OOS protocol',
            reasoning: [
                'CRITICAL-1: EXP-3179 related substance result = 0.24% (duplicate confirmed: 0.24% and 0.24%) \u2014 MBR/USP limit NMT 0.20%. This is a confirmed OOS result, not a lab error',
                'CRITICAL-2: EBR Section 13.2 OOS tracking table is completely blank \u2014 no OOS number assigned; SOP-QA-005 requires Phase I investigation initiation immediately upon OOS identification',
                'EBR QA 72-point checklist Item 56 incorrectly marked \'Y\' (compliant) for EXP-3179 \u22640.20% despite 0.24% result; 21 CFR 211.192 requires all discrepancies to be fully investigated before batch disposition',
                'Batch was signed for release on 23-May-2024 without any OOS investigation being opened \u2014 direct GMP violation; deviation log shows \'None recorded\' despite confirmed OOS',
                'Other QC: assay 100.2% (pass), CU AV=5.8 (pass), dissolution 91.5% (pass), water 2.8% (pass) \u2014 EXP-3179 is the sole OOS; confidence 92% \u2014 HOLD'
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

    updateProcessLog(PROCESS_ID, { id: 'step-4', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), title: 'Drafting QA escalation for OOS without investigation...', status: 'processing' });
    await updateProcessListStatus(PROCESS_ID, 'In Progress', 'Drafting QA escalation for OOS without investigation...');
    await delay(2200);
    updateProcessLog(PROCESS_ID, {
        id: 'step-4',
        title: 'QA escalation drafted \u2014 awaiting send approval',
        status: 'warning',
        reasoning: [
            'EXP-3179 at 0.24% is a confirmed OOS (duplicate confirmed 0.24% + 0.24%) \u2014 MBR/USP limit NMT 0.20%',
            'OOS tracking table completely blank; no investigation opened; batch signed for release on 23-May-2024 in direct violation of 21 CFR 211.192',
            'QA checklist Item 56 incorrectly marked Y \u2014 must be corrected to N with deviation reference',
            'Phase I investigation required to determine root cause: storage conditions, synthesis impurity, or analytical method issue',
            'Batch must remain on HOLD until OOS investigation is closed with documented root cause and CAPA'
        ],
        artifacts: [{
            id: 'hitl-email-013', type: 'email_draft', label: 'QA Escalation \u2014 OOS Without Investigation', signal: SIGNAL_KEY,
            subject: 'HOLD: OOS Not Investigated \u2014 Batch LOS-2024-0512 Losartan 50mg',
            from: 'pace-review@lilly.com', to: 'qa.head@lilly.com',
            body: 'Dear QA Head,\n\nBatch LOS-2024-0512 (Losartan Potassium Tablets USP, 50mg) has been placed on HOLD.\n\nCRITICAL FINDING 1 \u2014 Out-of-Specification Result:\nEXP-3179 related substance result: 0.24% (duplicate confirmed: 0.24% and 0.24%). Specification: NMT 0.20%. This is a confirmed OOS result.\n\nCRITICAL FINDING 2 \u2014 No OOS Investigation Initiated:\nEBR Section 13.2 OOS tracking table is completely blank. No OOS number assigned. SOP-QA-005 requires Phase I investigation initiation immediately upon OOS identification. Batch was signed for release on 23-May-2024 without any investigation being opened. This is a direct violation of 21 CFR 211.192.\n\nAdditionally, QA 72-point checklist Item 56 was incorrectly marked \'Y\' (compliant) despite the 0.24% result.\n\nRequired actions:\n1. Place batch on HOLD immediately\n2. Open OOS investigation per SOP-QA-005\n3. Correct QA checklist Item 56 to N with deviation reference\n4. Phase I investigation to determine root cause (storage conditions, synthesis impurity, or analytical method issue)\n5. Do not release until investigation closed with root cause and CAPA\n\nBatch remains on HOLD.\n\nRegards,\nPace \u2014 Batch Record Review\nLilly Quality Operations',
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
        title: 'Review complete \u2014 batch LOS-2024-0512 on HOLD. OOS Phase I investigation initiated.',
        status: 'completed',
        reasoning: [
            'Escalation sent \u2014 OOS investigation per SOP-QA-005 opened for EXP-3179 (0.24% vs NMT 0.20%)',
            'QA checklist Item 56 correction in progress \u2014 to be updated to N with deviation reference',
            'Phase I investigation to determine root cause: storage, synthesis impurity, or analytical method',
            'All other QC parameters compliant; release gated on OOS closure with documented root cause and CAPA'
        ],
        artifacts: [{
            id: 'results-json-013', type: 'json', label: 'Consolidated Review Results',
            data: {
                pair_id: 'pair-10-losartan', batch_number: 'LOS-2024-0512',
                product_name: 'Losartan Potassium Tablets USP, 50 mg', mbr_reference: 'MPR-LOS-50-v07',
                disposition: 'HOLD', primary_finding_type: 'oos_without_investigation',
                primary_finding_severity: 'CRITICAL', confidence_pct: 92,
                critical_findings: 2, major_findings: 0, minor_findings: 0, total_findings: 2,
                routing: 'Place batch on HOLD; open OOS investigation per SOP-QA-005; correct QA checklist Item 56 to N with deviation reference; do not release until investigation closed with root cause and CAPA',
                review_timestamp: '2026-03-25T04:30:21.625032+00:00'
            }
        }]
    }, { 'Review Status': 'Done' });
    await updateProcessListStatus(PROCESS_ID, 'Done', 'Review complete \u2014 batch LOS-2024-0512 on HOLD');
    console.log(`${PROCESS_ID} Complete`);
})();
