'use strict';
const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.join(__dirname, '..');
const PUBLIC_DATA_DIR = path.join(PROJECT_ROOT, 'public/data');
const PROCESSES_FILE = path.join(PUBLIC_DATA_DIR, 'processes.json');
const PROCESS_ID = 'BRR_001';
const CASE_NAME = 'Atorvastatin Calcium 40mg | AT-2026-0142';

const readJson = (file) => (fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : {});
const writeJson = (file, data) => fs.writeFileSync(file, JSON.stringify(data, null, 4));
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const updateProcessLog = (processId, logEntry, keyDetailsUpdate = {}) => {
    const processFile = path.join(PUBLIC_DATA_DIR, `process_${processId}.json`);
    let data = { logs: [], keyDetails: {}, sidebarArtifacts: [] };
    if (fs.existsSync(processFile)) data = readJson(processFile);
    if (logEntry) {
        const existingIdx = logEntry.id ? data.logs.findIndex(l => l.id === logEntry.id) : -1;
        if (existingIdx !== -1) {
            data.logs[existingIdx] = { ...data.logs[existingIdx], ...logEntry };
        } else {
            data.logs.push(logEntry);
        }
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
            req.write(body);
            req.end();
        });
    } catch (e) {
        try {
            const processes = JSON.parse(fs.readFileSync(PROCESSES_FILE, 'utf8'));
            const idx = processes.findIndex(p => p.id === String(processId));
            if (idx !== -1) { processes[idx].status = status; processes[idx].currentStatus = currentStatus; fs.writeFileSync(PROCESSES_FILE, JSON.stringify(processes, null, 4)); }
        } catch (err) { }
    }
};

(async () => {
    console.log(`Starting ${PROCESS_ID}: ${CASE_NAME}...`);
    writeJson(path.join(PUBLIC_DATA_DIR, `process_${PROCESS_ID}.json`), {
        logs: [],
        keyDetails: {
            'Batch Number': 'AT-2026-0142',
            'Product': 'Atorvastatin Calcium 40mg Film-Coated Tablets',
            'Batch Size': '500,000 units',
            'Site': 'Lilly Indianapolis',
            'MBR Reference': 'MBR-ATV-040-003 v2.1',
            'Review Status': 'In Progress'
        }
    });

    const steps = [
        {
            id: 'step-1',
            title_p: 'Retrieving executed batch record from email...',
            title_s: 'EBR AT-2026-0142 received from S. Chen, Lilly Indianapolis \u2014 document loaded',
            reasoning: [
                'Source: sarah.chen@lilly.com \u2192 quality-inbox@lilly.com',
                'Subject: EBR Submission for Review \u2014 AT-2026-0142 Atorvastatin Calcium 40mg Tablets',
                'Attachment: ebr_AT-2026-0142.pdf (67 pages)',
                'Batch: AT-2026-0142 | 500,000 units | Manufactured: 08\u201311-Mar-2026',
                'Site: Lilly Indianapolis, IN'
            ],
            artifacts: [
                {
                    id: 'ebr-email-001', type: 'email_draft', label: 'Incoming EBR Submission',
                    subject: 'EBR Submission for Review \u2014 AT-2026-0142 Atorvastatin Calcium 40mg Tablets',
                    from: 'sarah.chen@lilly.com', to: 'quality-inbox@lilly.com',
                    body: 'Hi Quality team,\n\nPlease find attached the executed batch record for AT-2026-0142 (Atorvastatin Calcium 40mg Film-Coated Tablets, 500,000 units, Lilly Indianapolis).\n\nManufacture dates: 08\u201311-Mar-2026. All in-process checks completed. One observation noted in Step 7 (blend time) \u2014 within acceptable range per SOP-BLN-004 discretion.\n\nPlease confirm receipt.\n\nBest,\nSarah Chen\nSenior QA Associate, Lilly Indianapolis',
                    isIncoming: true, timestamp: '2026-03-11T16:42:00Z'
                },
                { id: 'ebr-pdf-001', type: 'pdf', label: 'EBR AT-2026-0142', filename: 'ebr_AT-2026-0142.pdf', url: '/pdfs/ebr_AT-2026-0142.pdf' }
            ]
        },
        {
            id: 'step-2',
            title_p: 'Retrieving Master Batch Record via Veeva Vault browser agent...',
            title_s: 'MBR-ATV-040-003 v2.1 retrieved \u2014 current approved version confirmed',
            reasoning: [
                'Browser agent: vault.lilly.com \u2192 Library \u2192 Master Batch Records',
                'Search: "ATV-040-003" \u2014 1 result found',
                'Document: MBR-ATV-040-003 v2.1 | Status: Current Approved | Effective: 15-Jan-2026',
                'Previous version v2.0 superseded \u2014 v2.1 is the applicable version for this batch',
                'Download successful \u2014 PDF 94 pages'
            ],
            artifacts: [
                { id: 'mbr-video-001', type: 'video', label: 'Veeva Vault MBR Retrieval', title: 'Veeva Vault \u2014 MBR-ATV-040-003 Retrieval', url: '/videos/brr_001_veeva_vault_mbr_retrieval.webm' },
                { id: 'mbr-pdf-001', type: 'pdf', label: 'MBR-ATV-040-003 v2.1', filename: 'mbr_ATV-040-003_v2.1.pdf', url: '/pdfs/mbr_ATV-040-003_v2.1.pdf' }
            ]
        },
        {
            id: 'step-3',
            title_p: 'Parsing BOM and dispensing records \u2014 8 materials...',
            title_s: 'BOM complete \u2014 all 8 materials dispensed within specification',
            reasoning: [
                'Atorvastatin Calcium USP (RM-4021) \u2014 MBR: 42.6 kg | EBR: 42.6 kg \u2713',
                'Lactose Monohydrate NF (RM-2001) \u2014 MBR: 120.0 kg | EBR: 120.0 kg \u2713',
                'Microcrystalline Cellulose PH-102 (RM-2018) \u2014 MBR: 55.0 kg | EBR: 55.0 kg \u2713',
                'Croscarmellose Sodium NF (RM-2031) \u2014 MBR: 8.0 kg | EBR: 8.0 kg \u2713',
                'Hydroxypropyl Cellulose EF (RM-3011) \u2014 MBR: 4.0 kg | EBR: 4.0 kg \u2713',
                'Magnesium Stearate NF (RM-2041) \u2014 MBR: 2.0 kg | EBR: 2.0 kg \u2713',
                'Opadry II White (RM-6021) \u2014 MBR: 12.5 kg | EBR: 12.5 kg \u2713',
                'Purified Water USP (RM-1001) \u2014 Used in granulation, evaporated \u2713',
                'All CoAs current \u2713 | All suppliers on approved list \u2713 | Dispensing yield: 100.0% \u2713'
            ],
            artifacts: [
                {
                    id: 'bom-json-001', type: 'json', label: 'BOM Verification Results',
                    data: {
                        batch: 'AT-2026-0142', materials_checked: 8, all_within_spec: true,
                        dispensing_yield_pct: 100.0, coa_status: 'All current',
                        supplier_status: 'All approved'
                    }
                }
            ]
        },
        {
            id: 'step-4',
            title_p: 'Reviewing Steps 1\u201310: Manufacturing procedure through packaging...',
            title_s: 'Manufacturing steps reviewed \u2014 1 OBSERVATION: blend time +1 min, within SOP discretion',
            reasoning: [
                'Steps 1-2 Dispensing/Sieving: All 8 materials at exact MBR quantities \u2713 | Env 21\u00b0C/38% RH \u2713 | Yield 99.8% \u2713',
                'Steps 3-5 Pre-Blend, Granulation, Drying: RMG-001 impeller 250 RPM \u2713 | Endpoint 17.2 kW (spec 15-20 kW) \u2713 | FBD-001 cal exp Jun-2026 \u2713 | LOD avg 1.8% (spec NMT 2.0%) \u2713',
                'Steps 6-7 Milling/Blending: 20 mesh \u2713 | Yield 99.2% \u2713 | OBSERVATION: Blend time 18 min vs MBR max 17 min',
                '  -> SOP-BLN-004 Sec 3.2: single exceedance NMT 1.5 min, documentation only | IPC blend uniformity RSD 0.8% (spec NMT 1.5%) \u2713 \u2014 no product impact',
                'Steps 8-9 Compression/Coating: TBP-003 avg weight 467.8 mg \u2713 | Hardness 10.1 kP \u2713 | Friability 0.18% \u2713 | Weight gain 3.2% (spec 3.0-3.5%) \u2713',
                'Step 10 Packaging: Reconciliation 99.6% \u2713 | All equipment calibrations current \u2713 | All operator signatures complete \u2713'
            ],
            artifacts: [
                {
                    id: 'mfg-steps-data', type: 'json', label: 'Manufacturing Steps \u2014 Batch Actuals vs Specification',
                    data: {
                        batch: 'AT-2026-0142',
                        parameters: [
                            { step: 'Dispensing', parameter: 'Yield', spec: '100%', actual: '100.0%', status: 'PASS' },
                            { step: 'Granulation', parameter: 'Endpoint Power', spec: '15-20 kW', actual: '17.2 kW', status: 'PASS' },
                            { step: 'Drying', parameter: 'LOD (avg)', spec: 'NMT 2.0%', actual: '1.8%', status: 'PASS' },
                            { step: 'Final Blend', parameter: 'Blend Time', spec: '15-17 min', actual: '18 min', status: 'OBSERVATION' },
                            { step: 'Final Blend', parameter: 'IPC Blend Uniformity RSD', spec: 'NMT 1.5%', actual: '0.8%', status: 'PASS' },
                            { step: 'Compression', parameter: 'Avg Tablet Weight', spec: '467 mg +/-3%', actual: '467.8 mg', status: 'PASS' },
                            { step: 'Compression', parameter: 'Hardness', spec: '8-12 kP', actual: '10.1 kP', status: 'PASS' },
                            { step: 'Film Coating', parameter: 'Weight Gain', spec: '3.0-3.5%', actual: '3.2%', status: 'PASS' },
                            { step: 'Film Coating', parameter: 'Inlet Temp Range', spec: '65-70 deg C', actual: '65-68 deg C', status: 'PASS' }
                        ],
                        observations: 1, major_findings: 0, critical_findings: 0
                    }
                }
            ]
        },
    ];
    const steps2 = [
        {
        {
            id: 'step-7',
            title_p: 'Running QC verification \u2014 12 tests for film-coated tablets...',
            title_s: 'QC complete \u2014 12/12 specifications met',
            reasoning: [
                'Appearance: White, oval, film-coated tablets, no defects \u2713',
                'Identification: Positive for Atorvastatin by HPLC \u2713',
                'Assay: 100.2% of label claim (spec 95.0\u2013105.0%) \u2713',
                'Dissolution: 88% at 30 min (NLT 80%) \u2713',
                'Related Substances: Max individual 0.08% (NMT 0.2%) \u2713 | Total 0.14% (NMT 1.0%) \u2713',
                'Uniformity of Dosage Units: AV 4.2 (spec \u226415.0) \u2713',
                'Disintegration: 3.8 min (spec \u22646 min) \u2713',
                'Hardness: 10.3 kP (spec 8\u201312 kP) \u2713',
                'Friability: 0.18% (NMT 0.5%) \u2713',
                'Water Content: 1.9% (NMT 3.0%) \u2713',
                'Microbial Limits: Pass USP <61>/<62> \u2713',
                'Particle Size D90: 82 \u03bcm (spec \u226490 \u03bcm) \u2713'
            ],
            artifacts: [
                {
                    id: 'qc-json-001', type: 'json', label: 'QC Results Summary',
                    data: {
                        batch: 'AT-2026-0142', tests_performed: 12, tests_passed: 12,
                        assay_pct: 100.2, dissolution_30min_pct: 88, av_value: 4.2,
                        friability_pct: 0.18, water_content_pct: 1.9,
                        microbial_limits: 'Pass', overall_qc_status: 'PASS'
                    }
                }
            ]
        },
        {
            id: 'step-8',
            title_p: 'Running 68-point batch record checklist...',
            title_s: '68-point checklist complete \u2014 67/68 items pass',
            reasoning: [
                'Manufacturing procedure compliance: 25/25 \u2713',
                'In-process controls: 15/15 \u2713',
                'Equipment qualification and calibration: 12/12 \u2713',
                'Operator training and signatures: 10/10 \u2713',
                'Environmental monitoring: 4/4 \u2713',
                'Yield reconciliation: 1/1 \u2713',
                'OBSERVATION item: Blend time Step 7 (18 min vs 17 min max) \u2014 noted, SOP-BLN-004 discretion applied',
                'Overall checklist score: 67/68 (98.5%) \u2014 single observation does not affect releasability'
            ]
        },
        {
            id: 'step-9',
            title_p: 'Calculating confidence score \u2014 1 OBSERVATION finding...',
            title_s: 'Confidence: 97% \u2014 Batch AT-2026-0142 meets all release criteria',
            reasoning: [
                'OBSERVATION penalty: 1 \u00d7 (\u22121 pt) = \u22121 pt',
                'Base score: 100% \u2192 After penalties: 97%',
                'Threshold: \u226595% = Eligible for release recommendation',
                'All 12 QC specifications met \u2013 no Out-of-Specification results',
                'All 8 BOM materials verified \u2013 no discrepancies',
                'OBSERVATION fully documented per SOP-BLN-004 \u2013 product quality unaffected',
                'Recommended disposition: RELEASE'
            ],
            artifacts: [
                {
                    id: 'findings-json-001', type: 'json', label: 'Findings Summary',
                    data: {
                        batch: 'AT-2026-0142', confidence_pct: 97,
                        critical_findings: 0, major_findings: 0, minor_findings: 0,
                        observations: 1, disposition: 'RELEASE',
                        observation_detail: 'Blend time 18 min vs 17 min max \u2014 SOP-BLN-004 discretion applied'
                    }
                }
            ]
        },
        {
            id: 'step-10',
            title_p: 'Generating batch review report and finalizing...',
            title_s: 'Review complete \u2014 batch AT-2026-0142 recommended for RELEASE',
            reasoning: [
                'Review report CR-AT-2026-0142 generated',
                '500,000 units Atorvastatin Calcium 40mg Film-Coated Tablets cleared for release',
                'Certificate of Analysis attached \u2014 all specifications met',
                'Single OBSERVATION documented and closed per SOP-BLN-004 Section 3.2',
                'Review time: 4 min 12 sec (manual equivalent: \u223c3.5 hours)',
                'Batch disposition: APPROVED FOR RELEASE'
            ],
            artifacts: [
                { id: 'report-pdf-001', type: 'pdf', label: 'Batch Review Report', filename: 'review_report_AT-2026-0142.pdf', url: '/pdfs/review_report_AT-2026-0142.pdf' },
                {
                    id: 'results-json-001', type: 'json', label: 'Review Results',
                    data: {
                        batch: 'AT-2026-0142', product: 'Atorvastatin Calcium 40mg Film-Coated Tablets',
                        site: 'Lilly Indianapolis', units: 500000, disposition: 'RELEASE',
                        confidence_pct: 97, review_time_sec: 252, final_status: 'Done'
                    }
                }
            ]
        }
    ];

    const allSteps = [...steps, ...steps2];

    for (let i = 0; i < allSteps.length; i++) {
        const step = allSteps[i];
        const isFinal = i === allSteps.length - 1;

        updateProcessLog(PROCESS_ID, {
            id: step.id,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            title: step.title_p,
            status: 'processing'
        });
        await updateProcessListStatus(PROCESS_ID, 'In Progress', step.title_p);
        await delay(2200);

        updateProcessLog(PROCESS_ID, {
            id: step.id,
            title: step.title_s,
            status: isFinal ? 'completed' : 'success',
            reasoning: step.reasoning || [],
            artifacts: step.artifacts || []
        }, isFinal ? { 'Review Status': 'Done', 'Confidence': '97%', 'Disposition': 'RELEASE' } : {});
        await updateProcessListStatus(PROCESS_ID, isFinal ? 'Done' : 'In Progress', step.title_s);
        await delay(1500);
    }

    console.log(`${PROCESS_ID} Complete: ${CASE_NAME}`);
})();
