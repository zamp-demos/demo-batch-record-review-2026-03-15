try { require('dotenv').config(); } catch(e) {}

const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const PORT = process.env.PORT || 3001;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const MODEL_NAME = process.env.VITE_MODEL || 'gemini-1.5-flash';

const DATA_DIR = path.join(__dirname, 'public/data');
const SRC_DATA_DIR = path.join(__dirname, 'src/data');
const SIGNALS_FILE = path.join(__dirname, 'interaction-signals.json');
const FEEDBACK_QUEUE_PATH = path.join(DATA_DIR, 'feedbackQueue.json');
const KB_VERSIONS_PATH = path.join(DATA_DIR, 'kbVersions.json');
const KB_CONTENT_PATH = path.join(SRC_DATA_DIR, 'knowledgeBase.md');
const SNAPSHOTS_DIR = path.join(DATA_DIR, 'snapshots');

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
};

let state = { sent: false, confirmed: false, signals: {} };
const runningProcesses = new Map();

// Startup: ensure files/dirs exist
if (!fs.existsSync(SNAPSHOTS_DIR)) fs.mkdirSync(SNAPSHOTS_DIR, { recursive: true });
if (!fs.existsSync(FEEDBACK_QUEUE_PATH)) fs.writeFileSync(FEEDBACK_QUEUE_PATH, '[]');
if (!fs.existsSync(KB_VERSIONS_PATH)) fs.writeFileSync(KB_VERSIONS_PATH, '[]');
if (!fs.existsSync(SIGNALS_FILE)) {
    fs.writeFileSync(SIGNALS_FILE, JSON.stringify({
        APPROVE_HOLD_MF0089: false,
        APPROVE_RELEASE_OM0217: false
    }, null, 4));
}

const processesPath = path.join(DATA_DIR, 'processes.json');
const basePath = path.join(DATA_DIR, 'base_processes.json');
if (!fs.existsSync(processesPath) && fs.existsSync(basePath)) {
    fs.copyFileSync(basePath, processesPath);
}

// Helper: read body
function readBody(req) {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', chunk => body += chunk.toString());
        req.on('end', () => {
            try { resolve(JSON.parse(body)); } catch(e) { resolve({}); }
        });
        req.on('error', reject);
    });
}

// Helper: serve static file
function serveStatic(res, filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html', '.js': 'application/javascript',
        '.css': 'text/css', '.json': 'application/json',
        '.png': 'image/png', '.jpg': 'image/jpeg',
        '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
        '.pdf': 'application/pdf', '.webm': 'video/webm',
        '.woff': 'font/woff', '.woff2': 'font/woff2',
        '.ttf': 'font/ttf', '.md': 'text/markdown'
    };
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    if (fs.existsSync(filePath)) {
        res.writeHead(200, { 'Content-Type': contentType, ...corsHeaders });
        fs.createReadStream(filePath).pipe(res);
    } else {
        res.writeHead(404, corsHeaders);
        res.end('Not found');
    }
}

async function callGemini(systemPrompt, messages) {
    if (!GEMINI_API_KEY) throw new Error('GEMINI_API_KEY not set');
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
    const chat = model.startChat({
        systemInstruction: systemPrompt,
        history: messages.slice(0, -1).map(m => ({
            role: m.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: m.content }]
        }))
    });
    const last = messages[messages.length - 1];
    const result = await chat.sendMessage(last.content);
    return result.response.text();
}

const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, `http://localhost:${PORT}`);
    const cleanPath = url.pathname;

    if (req.method === 'OPTIONS') {
        res.writeHead(204, corsHeaders);
        res.end();
        return;
    }

    // --- RESET ---
    if (req.method === 'GET' && cleanPath === '/api/reset') {
        state = { sent: false, confirmed: false, signals: {} };
        console.log('Demo Reset Triggered');

        fs.writeFileSync(SIGNALS_FILE, JSON.stringify({
            APPROVE_HOLD_MF0089: false,
            APPROVE_HOLD_LS0031: false,
            REJECT_HOLD_MF0089: false,
            REJECT_HOLD_LS0031: false
        }, null, 4));

        runningProcesses.forEach((proc) => {
            try { process.kill(-proc.pid, 'SIGKILL'); } catch(e) {}
        });
        runningProcesses.clear();

        exec('pkill -9 -f "node(.*)simulation_scripts" || true', () => {
            setTimeout(() => {
                const cases = [
                    {
                        id: "BRR_001",
                        name: "Atorvastatin Calcium 40mg Film-Coated Tablets",
                        category: "Batch Record Review",
                        stockId: "AT-2026-0142",
                        year: "2026-03-15",
                        status: "In Progress",
                        currentStatus: "Initializing...",
                        site: "Lilly Indianapolis",
                        batchSize: "500,000 units",
                        mbr: "MBR-ATV-040-003 v2.1",
                        confidence: null,
                        disposition: null
                    },
                    {
                        id: "BRR_002",
                        name: "Metformin HCl 500mg Tablets",
                        category: "Batch Record Review",
                        stockId: "MF-2026-0089",
                        year: "2026-03-15",
                        status: "In Progress",
                        currentStatus: "Initializing...",
                        site: "Lilly Kinsale",
                        batchSize: "1,200,000 units",
                        mbr: "MBR-MFH-500-001 v3.0",
                        confidence: null,
                        disposition: null
                    },
                    {
                        id: "BRR_003",
                        name: "Lisinopril 10mg Tablets",
                        category: "Batch Record Review",
                        stockId: "LS-2026-0031",
                        year: "2026-03-15",
                        status: "In Progress",
                        currentStatus: "Initializing...",
                        site: "Eurofins Mfg GmbH Mannheim",
                        batchSize: "800,000 units",
                        mbr: "MBR-LIS-010-002 v1.4",
                        confidence: null,
                        disposition: null
                    }
                ];
                fs.writeFileSync(processesPath, JSON.stringify(cases, null, 4));
                fs.writeFileSync(FEEDBACK_QUEUE_PATH, '[]');
                fs.writeFileSync(KB_VERSIONS_PATH, '[]');

                const scripts = [
                    { file: 'brr_story_1_done.cjs', id: 'BRR_001' },
                    { file: 'brr_story_2_needs_review.cjs', id: 'BRR_002' },
                    { file: 'brr_story_3_needs_review.cjs', id: 'BRR_003' }
                ];

                let totalDelay = 0;
                scripts.forEach((script) => {
                    setTimeout(() => {
                        const scriptPath = path.join(__dirname, 'simulation_scripts', script.file);
                        const child = exec(
                            `node "${scriptPath}" > "${scriptPath}.log" 2>&1`,
                            (error) => {
                                if (error && error.code !== 0) {
                                    console.error(`${script.file} error:`, error.message);
                                }
                                runningProcesses.delete(script.id);
                            }
                        );
                        child.unref && child.unref();
                        runningProcesses.set(script.id, child);
                    }, totalDelay * 1000);
                    totalDelay += 2;
                });
            }, 1000);
        });

        res.writeHead(200, { 'Content-Type': 'application/json', ...corsHeaders });
        res.end(JSON.stringify({ status: 'ok' }));
        return;
    }

    // --- EMAIL STATUS ---
    if (req.method === 'GET' && cleanPath === '/email-status') {
        res.writeHead(200, { 'Content-Type': 'application/json', ...corsHeaders });
        res.end(JSON.stringify({ sent: state.sent }));
        return;
    }
    if (req.method === 'POST' && cleanPath === '/email-status') {
        const body = await readBody(req);
        state.sent = body.sent !== undefined ? body.sent : state.sent;

        if (state.sent) {
            // Case BRR_003: Advance flow when escalation email is sent
            const brr003Path = path.join(DATA_DIR, 'process_BRR_003.json');
            if (fs.existsSync(brr003Path)) {
                try {
                    const data = JSON.parse(fs.readFileSync(brr003Path, 'utf8'));
                    if (!data.logs.some(l => l.id === 'step-10')) {
                        data.logs.push({
                            "id": "step-10",
                            "time": "10:15 AM",
                            "title": "Escalation sent to Eurofins QA Director — batch LS-2026-0031 on HOLD pending investigation",
                            "status": "completed",
                            "reasoning": [
                                "Email sent to: dr.k.weber@eurofins-mfg.com | CC: regulatory-affairs@lilly.com, dr.p.mwangi@lilly.com",
                                "OOS investigation reference assigned: OOS-2026-0031",
                                "Batch status: HOLD — quarantine documentation filed",
                                "Response expected: within 5 business days per CMO Quality Agreement",
                                "Lilly QA notified: Dr. P. Mwangi and site quality director copied"
                            ]
                        });
                        fs.writeFileSync(brr003Path, JSON.stringify(data, null, 4));
                    }
                } catch (e) {
                    console.error("Error updating BRR_003 data:", e);
                }
            }
        }

        res.writeHead(200, { 'Content-Type': 'application/json', ...corsHeaders });
        res.end(JSON.stringify({ status: 'ok' }));
        return;
    }

    // --- SIGNAL STATUS ---
    if (req.method === 'GET' && cleanPath === '/signal-status') {
        let signals = {};
        try { signals = JSON.parse(fs.readFileSync(SIGNALS_FILE, 'utf8')); } catch(e) {}
        res.writeHead(200, { 'Content-Type': 'application/json', ...corsHeaders });
        res.end(JSON.stringify(signals));
        return;
    }
    if (req.method === 'POST' && cleanPath === '/signal') {
        const body = await readBody(req);
        let signals = {};
        try { signals = JSON.parse(fs.readFileSync(SIGNALS_FILE, 'utf8')); } catch(e) {}
        if (body.signal) signals[body.signal] = true;
        fs.writeFileSync(SIGNALS_FILE, JSON.stringify(signals, null, 4));
        state.signals = signals;
        res.writeHead(200, { 'Content-Type': 'application/json', ...corsHeaders });
        res.end(JSON.stringify({ status: 'ok', signal: body.signal }));
        return;
    }

    // --- UPDATE STATUS ---
    if (req.method === 'POST' && cleanPath === '/api/update-status') {
        const body = await readBody(req);
        try {
            let processes = JSON.parse(fs.readFileSync(processesPath, 'utf8'));
            const idx = processes.findIndex(p => p.id === body.id);
            if (idx !== -1) {
                processes[idx] = { ...processes[idx], ...body };
                fs.writeFileSync(processesPath, JSON.stringify(processes, null, 4));
            }
        } catch(e) { console.error('update-status error:', e.message); }
        res.writeHead(200, { 'Content-Type': 'application/json', ...corsHeaders });
        res.end(JSON.stringify({ status: 'ok' }));
        return;
    }

    // --- DEBUG PATHS ---
    if (req.method === 'GET' && cleanPath === '/debug-paths') {
        res.writeHead(200, { 'Content-Type': 'application/json', ...corsHeaders });
        res.end(JSON.stringify({
            DATA_DIR, SIGNALS_FILE, processesPath,
            signalsExist: fs.existsSync(SIGNALS_FILE),
            processesExist: fs.existsSync(processesPath)
        }));
        return;
    }

    // --- CHAT (KB + Work-with-Pace) ---
    if (req.method === 'POST' && cleanPath === '/api/chat') {
        try {
            const parsed = await readBody(req);
            let responseText;
            if (parsed.messages && parsed.systemPrompt) {
                // Work-with-Pace contract
                responseText = await callGemini(parsed.systemPrompt, parsed.messages);
            } else {
                // KB chat contract
                const { message, knowledgeBase, history = [] } = parsed;
                const systemPrompt = `You are a knowledgeable assistant for Lilly's Batch Record Review process. Use the following knowledge base to answer questions accurately and concisely.\n\n${knowledgeBase}`;
                const messages = [
                    ...history.map(h => ({ role: h.role, content: h.content })),
                    { role: 'user', content: message }
                ];
                responseText = await callGemini(systemPrompt, messages);
            }
            res.writeHead(200, { 'Content-Type': 'application/json', ...corsHeaders });
            res.end(JSON.stringify({ response: responseText }));
        } catch(e) {
            console.error('chat error:', e.message);
            res.writeHead(500, { 'Content-Type': 'application/json', ...corsHeaders });
            res.end(JSON.stringify({ error: e.message }));
        }
        return;
    }

    // --- FEEDBACK QUESTIONS ---
    if (req.method === 'POST' && cleanPath === '/api/feedback/questions') {
        try {
            const { feedback, knowledgeBase } = await readBody(req);
            const systemPrompt = `You are a helpful assistant for a pharmaceutical batch record review system. Generate exactly 3 clarifying questions to better understand user feedback about the knowledge base.`;
            const messages = [{ role: 'user', content: `Feedback: "${feedback}"\n\nKnowledge Base excerpt:\n${knowledgeBase}\n\nGenerate 3 clarifying questions as a JSON array: ["Q1?", "Q2?", "Q3?"]` }];
            const text = await callGemini(systemPrompt, messages);
            const match = text.match(/\[[\s\S]*\]/);
            const questions = match ? JSON.parse(match[0]) : ["Can you clarify what's incorrect?", "What should the correct information be?", "Is this specific to a batch or general policy?"];
            res.writeHead(200, { 'Content-Type': 'application/json', ...corsHeaders });
            res.end(JSON.stringify({ questions }));
        } catch(e) {
            res.writeHead(500, { 'Content-Type': 'application/json', ...corsHeaders });
            res.end(JSON.stringify({ error: e.message }));
        }
        return;
    }

    // --- FEEDBACK SUMMARIZE ---
    if (req.method === 'POST' && cleanPath === '/api/feedback/summarize') {
        try {
            const { feedback, questions, answers, knowledgeBase } = await readBody(req);
            const systemPrompt = `You are an expert in pharmaceutical batch record review. Summarize user feedback into a concrete KB update proposal.`;
            const qaText = questions.map((q, i) => `Q: ${q}\nA: ${answers[i] || 'N/A'}`).join('\n\n');
            const messages = [{ role: 'user', content: `Original feedback: "${feedback}"\n\nClarifying Q&A:\n${qaText}\n\nKB context:\n${knowledgeBase}\n\nWrite a 2-3 sentence summary of what should be changed in the KB.` }];
            const summary = await callGemini(systemPrompt, messages);
            res.writeHead(200, { 'Content-Type': 'application/json', ...corsHeaders });
            res.end(JSON.stringify({ summary }));
        } catch(e) {
            res.writeHead(500, { 'Content-Type': 'application/json', ...corsHeaders });
            res.end(JSON.stringify({ error: e.message }));
        }
        return;
    }

    // --- FEEDBACK QUEUE (GET / POST / DELETE) ---
    if (cleanPath === '/api/feedback/queue' && req.method === 'GET') {
        try {
            const queue = JSON.parse(fs.readFileSync(FEEDBACK_QUEUE_PATH, 'utf8'));
            res.writeHead(200, { 'Content-Type': 'application/json', ...corsHeaders });
            res.end(JSON.stringify({ queue }));
        } catch(e) {
            res.writeHead(200, { 'Content-Type': 'application/json', ...corsHeaders });
            res.end(JSON.stringify({ queue: [] }));
        }
        return;
    }
    if (cleanPath === '/api/feedback/queue' && req.method === 'POST') {
        try {
            const item = await readBody(req);
            let queue = [];
            try { queue = JSON.parse(fs.readFileSync(FEEDBACK_QUEUE_PATH, 'utf8')); } catch(e) {}
            queue.push({ ...item, status: 'pending', timestamp: new Date().toISOString() });
            fs.writeFileSync(FEEDBACK_QUEUE_PATH, JSON.stringify(queue, null, 4));
            res.writeHead(200, { 'Content-Type': 'application/json', ...corsHeaders });
            res.end(JSON.stringify({ status: 'ok' }));
        } catch(e) {
            res.writeHead(500, { 'Content-Type': 'application/json', ...corsHeaders });
            res.end(JSON.stringify({ error: e.message }));
        }
        return;
    }
    const deleteMatch = cleanPath.match(/^\/api\/feedback\/queue\/(.+)$/);
    if (deleteMatch && req.method === 'DELETE') {
        try {
            const id = decodeURIComponent(deleteMatch[1]);
            let queue = [];
            try { queue = JSON.parse(fs.readFileSync(FEEDBACK_QUEUE_PATH, 'utf8')); } catch(e) {}
            queue = queue.filter(item => item.id !== id);
            fs.writeFileSync(FEEDBACK_QUEUE_PATH, JSON.stringify(queue, null, 4));
            res.writeHead(200, { 'Content-Type': 'application/json', ...corsHeaders });
            res.end(JSON.stringify({ status: 'ok' }));
        } catch(e) {
            res.writeHead(500, { 'Content-Type': 'application/json', ...corsHeaders });
            res.end(JSON.stringify({ error: e.message }));
        }
        return;
    }

    // --- FEEDBACK APPLY ---
    if (req.method === 'POST' && cleanPath === '/api/feedback/apply') {
        try {
            const { feedbackId } = await readBody(req);
            let queue = [];
            try { queue = JSON.parse(fs.readFileSync(FEEDBACK_QUEUE_PATH, 'utf8')); } catch(e) {}
            const item = queue.find(q => q.id === feedbackId);
            if (!item) {
                res.writeHead(404, { 'Content-Type': 'application/json', ...corsHeaders });
                res.end(JSON.stringify({ error: 'Feedback item not found' }));
                return;
            }
            const currentKB = fs.existsSync(KB_CONTENT_PATH) ? fs.readFileSync(KB_CONTENT_PATH, 'utf8') : '';
            const systemPrompt = `You are an expert editor for pharmaceutical knowledge bases. Apply the requested change to the knowledge base content. Return ONLY the updated knowledge base content, no commentary.`;
            const messages = [{ role: 'user', content: `Current KB:\n${currentKB}\n\nChange to apply: ${item.summary}\n\nReturn the updated KB content.` }];
            const updatedKB = await callGemini(systemPrompt, messages);

            // Save snapshots
            const ts = Date.now();
            const prevFile = `kb_v${ts}_prev.md`;
            const snapFile = `kb_v${ts}_snap.md`;
            fs.writeFileSync(path.join(SNAPSHOTS_DIR, prevFile), currentKB);
            fs.writeFileSync(path.join(SNAPSHOTS_DIR, snapFile), updatedKB);
            fs.writeFileSync(KB_CONTENT_PATH, updatedKB);

            let versions = [];
            try { versions = JSON.parse(fs.readFileSync(KB_VERSIONS_PATH, 'utf8')); } catch(e) {}
            versions.unshift({ id: `v${ts}`, timestamp: new Date().toISOString(), snapshotFile: snapFile, previousFile: prevFile, changes: [item.summary] });
            fs.writeFileSync(KB_VERSIONS_PATH, JSON.stringify(versions, null, 4));

            // Remove from queue
            queue = queue.filter(q => q.id !== feedbackId);
            fs.writeFileSync(FEEDBACK_QUEUE_PATH, JSON.stringify(queue, null, 4));

            res.writeHead(200, { 'Content-Type': 'application/json', ...corsHeaders });
            res.end(JSON.stringify({ success: true, content: updatedKB }));
        } catch(e) {
            console.error('feedback apply error:', e.message);
            res.writeHead(500, { 'Content-Type': 'application/json', ...corsHeaders });
            res.end(JSON.stringify({ error: e.message }));
        }
        return;
    }

    // --- KB CONTENT ---
    if (req.method === 'GET' && cleanPath === '/api/kb/content') {
        try {
            const versionId = url.searchParams.get('versionId');
            let content;
            if (versionId) {
                let versions = [];
                try { versions = JSON.parse(fs.readFileSync(KB_VERSIONS_PATH, 'utf8')); } catch(e) {}
                const ver = versions.find(v => v.id === versionId);
                if (ver) {
                    content = fs.readFileSync(path.join(SNAPSHOTS_DIR, ver.snapshotFile), 'utf8');
                } else {
                    content = fs.existsSync(KB_CONTENT_PATH) ? fs.readFileSync(KB_CONTENT_PATH, 'utf8') : '';
                }
            } else {
                content = fs.existsSync(KB_CONTENT_PATH) ? fs.readFileSync(KB_CONTENT_PATH, 'utf8') : '';
            }
            res.writeHead(200, { 'Content-Type': 'application/json', ...corsHeaders });
            res.end(JSON.stringify({ content }));
        } catch(e) {
            res.writeHead(500, { 'Content-Type': 'application/json', ...corsHeaders });
            res.end(JSON.stringify({ error: e.message }));
        }
        return;
    }

    // --- KB VERSIONS ---
    if (req.method === 'GET' && cleanPath === '/api/kb/versions') {
        try {
            const versions = JSON.parse(fs.readFileSync(KB_VERSIONS_PATH, 'utf8'));
            res.writeHead(200, { 'Content-Type': 'application/json', ...corsHeaders });
            res.end(JSON.stringify({ versions }));
        } catch(e) {
            res.writeHead(200, { 'Content-Type': 'application/json', ...corsHeaders });
            res.end(JSON.stringify({ versions: [] }));
        }
        return;
    }

    // --- KB SNAPSHOT ---
    const snapMatch = cleanPath.match(/^\/api\/kb\/snapshot\/(.+)$/);
    if (snapMatch && req.method === 'GET') {
        const filename = decodeURIComponent(snapMatch[1]);
        const snapPath = path.join(SNAPSHOTS_DIR, filename);
        if (fs.existsSync(snapPath)) {
            res.writeHead(200, { 'Content-Type': 'text/markdown', ...corsHeaders });
            res.end(fs.readFileSync(snapPath, 'utf8'));
        } else {
            res.writeHead(404, corsHeaders);
            res.end('Snapshot not found');
        }
        return;
    }

    // --- KB UPDATE ---
    if (req.method === 'POST' && cleanPath === '/api/kb/update') {
        try {
            const { content } = await readBody(req);
            fs.writeFileSync(KB_CONTENT_PATH, content);
            res.writeHead(200, { 'Content-Type': 'application/json', ...corsHeaders });
            res.end(JSON.stringify({ status: 'ok' }));
        } catch(e) {
            res.writeHead(500, { 'Content-Type': 'application/json', ...corsHeaders });
            res.end(JSON.stringify({ error: e.message }));
        }
        return;
    }

    // --- STATIC FILE SERVING ---
    let filePath;
    if (cleanPath === '/' || cleanPath === '') {
        filePath = path.join(__dirname, 'public', 'index.html');
    } else {
        filePath = path.join(__dirname, 'public', cleanPath);
    }

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        serveStatic(res, filePath);
    } else {
        // SPA fallback - serve index.html for all non-file routes
        const indexPath = path.join(__dirname, 'public', 'index.html');
        if (fs.existsSync(indexPath)) {
            serveStatic(res, indexPath);
        } else {
            res.writeHead(404, corsHeaders);
            res.end('Not found');
        }
    }
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Interaction server running on port ${PORT}`);
    console.log(`Gemini API: ${GEMINI_API_KEY ? 'configured' : 'NOT SET'}`);
});
