'use strict';
const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.join(__dirname, '..');
const PUBLIC_DATA_DIR = path.join(PROJECT_ROOT, 'public/data');
const PROCESSES_FILE = path.join(PUBLIC_DATA_DIR, 'processes.json');
const PROCESS_ID = 'BRR_008';
const CASE_NAME = 'Warfarin Sodium Tablets 5mg (NTI) | WS-2024-0033';

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

(async () => {
    console.log(`Starting ${PROCESS_ID}: ${CASE_NAME}...`);
    writeJson(path.join(PUBLIC_DATA_DIR, `process_${PROCESS_ID}.json`), {
        logs: [], keyDetails: {
            'Batch Number': 'WS-2024-0033',
            'Product': 'Warfarin Sodium Tablets 5mg (NTI)',
            'Batch Size': '200,000 tablets',
            'Site': 'Lilly Indianapolis',
            'MBR Reference': 'MPR-WAR-5-v14',
            'Review Status': 'In Progress'
        }
    });

    const allSteps = [
        {
            id: 'step-1',
            title_p: 'Ingesting MBR and EBR for Warfarin Sodium Tablets 5mg (NTI)...',
            title_s: 'MBR (1612 lines) and EBR (1414 lines) ingested \u2014 WS-2024-0033 loaded',
            reasoning: [
                'MBR reference: MPR-WAR-5-v14 \u2014 1612 lines parsed across 19 sections',
                'EBR batch: WS-2024-0033 \u2014 1414 lines parsed, manufactured 08-May-2024',
                'Product: Warfarin Sodium Tablets 5mg (NTI \u2014 Narrow Therapeutic Index)',
                'Manufacturing date range: 08-May-2024 (dispensing) through 09-May-2024 (packaging)',
                'Both documents structured and ready for 72-point GMP checklist review'
            ],
            artifacts: [
                { id: 'ebr-pdf-008', type: 'pdf', label: 'EBR WS-2024-0033', filename: '04_warfarin_ebr.pdf', url: '/pdfs/04_warfarin_ebr.pdf' },
                { id: 'mbr-pdf-008', type: 'pdf', label: 'MBR MPR-WAR-5-v14', filename: '04_warfarin_mbr.pdf', url: '/pdfs/04_warfarin_mbr.pdf' }
            ]
        },
        {
            id: 'step-2',
            title_p: 'Executing 72-point GMP checklist for NTI product...',
            title_s: '72-point checklist: 71 pass, 0 fail, 1 N/A \u2014 clean batch confirmed',
            reasoning: [
                'Cat A-B (Document + BOM): 22/22 compliant \u2014 all materials, codes, weights, CoAs, and dual balance verification confirmed',
                'Cat C (QA Witness NTI): 6/6 compliant \u2014 LP signed at all 3 mandatory NTI witness points (dispensing, compression start, packaging yield)',
                'Cat D-F (Equipment, Env, Process/IPC): 24/24 compliant \u2014 all calibrations current, env within spec, all CPPs and IPC checks passed',
                'Cat G-H (QC results, LIMS integrity): 13/13 compliant \u2014 assay 99.4%, CU RSD 1.8%, dissolution 95.4% min; all LIMS deltas = 1 min',
                'Cat I-K (Yield, Mass Balance, Packaging, Deviations): 8/8 compliant, 1 N/A \u2014 98.5% overall yield, 0.09% unaccounted, no deviations'
            ]
        },
        {
            id: 'step-3',
            title_p: 'Classifying findings and verifying NTI-specific requirements...',
            title_s: '0 findings \u2014 clean batch. Confidence: 99% \u2014 RELEASE recommended',
            reasoning: [
                'Primary finding: none \u2014 all 72 checklist items resolved as compliant or N/A',
                'Finding type: clean_batch. Severity: N/A \u2014 no deviations, no OOS, no missing signatures, no LIMS discrepancies',
                'NTI-specific note: human reviewer pre-annotation on Item 17 (BAL-02) marked FAIL in error; EBR Section 1.4 rows 1-2 confirm both 100g and 500g reference weights passed with dual countersign',
                'Correct assessment: Item 17 is PASS \u2014 pre-annotation overridden based on EBR evidence',
                'Confidence: 99% \u2014 1pt withheld for N/A item (no environmental excursions, cannot fully score Item 40); auto-approve eligible'
            ]
        },
        {
            id: 'step-4',
            title_p: 'Generating release recommendation for NTI batch WS-2024-0033...',
            title_s: 'Review complete \u2014 batch WS-2024-0033 APPROVED FOR RELEASE',
            isFinal: true,
            reasoning: [
                'All 72 checklist categories reviewed \u2014 71 compliant, 1 N/A (no environmental excursions)',
                'No blocking findings: 0 critical, 0 major, 0 minor deviations identified',
                'Confidence 99% \u2014 routing to QA spot-check (auto-approve eligible tier)',
                'All NTI specifications met: assay 99.4%, CU RSD 1.8%, dissolution 95.4%, balance verification dual-confirmed',
                'Recommended disposition: RELEASE \u2014 forward to QA for spot-check review and final release sign-off'
            ],
            artifacts: [{
                id: 'results-json-008', type: 'json', label: 'Consolidated Review Results',
                data: {
                    pair_id: 'pair-04-warfarin', batch_number: 'WS-2024-0033',
                    product_name: 'Warfarin Sodium Tablets 5mg', mbr_reference: 'MPR-WAR-5-v14',
                    disposition: 'RELEASE', primary_finding_type: 'clean_batch',
                    primary_finding_severity: 'N/A', confidence_pct: 99,
                    critical_findings: 0, major_findings: 0, minor_findings: 0, total_findings: 0,
                    routing: 'Forward to QA for spot-check review and final release sign-off. Auto-approve eligible (confidence >= 95%, zero critical/major findings).',
                    review_timestamp: '2026-03-25T03:54:32.961332+00:00'
                }
            }]
        }
    ];

    for (let i = 0; i < allSteps.length; i++) {
        const step = allSteps[i];
        const isFinal = !!step.isFinal;
        updateProcessLog(PROCESS_ID, { id: step.id, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), title: step.title_p, status: 'processing' });
        await updateProcessListStatus(PROCESS_ID, 'In Progress', step.title_p);
        await delay(2200);
        updateProcessLog(PROCESS_ID, {
            id: step.id, title: step.title_s,
            status: isFinal ? 'completed' : 'success',
            reasoning: step.reasoning, artifacts: step.artifacts || []
        }, isFinal ? { 'Review Status': 'Done', 'Confidence': '99%', 'Disposition': 'RELEASE' } : {});
        await updateProcessListStatus(PROCESS_ID, isFinal ? 'Done' : 'In Progress', step.title_s);
        await delay(1500);
    }

    console.log(`${PROCESS_ID} Complete \u2014 RELEASE`);
})();
