import * as webllm from "https://esm.run/@mlc-ai/web-llm";

// --- CONFIGURATION ---
const SYSTEM_PROMPT = `You are a professional DIY and Home Repair Assistant. 
Your sole purpose is to provide advice on home maintenance, construction, plumbing, electrical work, and gardening. 
If the user asks about unrelated topics, politely steer them back to home improvement.`;

// Expanded DIY Lexicon (~300 concepts covered via root words)
const DIY_KEYWORDS = [
    'fix', 'repair', 'leak', 'broken', 'sink', 'toilet', 'wall', 'paint', 'tool', 'hammer', 'screw', 'door', 'shelf', 'diy', 'help',
    'clog', 'drain', 'pipe', 'faucet', 'plumb', 'tile', 'grout', 'seal', 'caulk', 'vent', 'duct', 'filter', 'hvac', 'furnace',
    'wire', 'switch', 'outlet', 'breaker', 'fuse', 'light', 'bulb', 'fixture', 'circuit', 'volt', 'amp', 'multimeter',
    'wood', 'lumber', 'drill', 'saw', 'sander', 'plane', 'chisel', 'glue', 'adhesive', 'stain', 'varnish', 'deck', 'fence',
    'hinge', 'latch', 'lock', 'knob', 'handle', 'frame', 'window', 'glass', 'screen', 'trim', 'molding', 'baseboard',
    'roof', 'gutter', 'shingle', 'siding', 'brick', 'mortar', 'concrete', 'cement', 'pave', 'driveway', 'patio',
    'garden', 'lawn', 'mow', 'plant', 'soil', 'mulch', 'trimmer', 'prune', 'hose', 'sprinkler', 'irrigation',
    'cabinet', 'counter', 'drawer', 'appliance', 'fridge', 'oven', 'washer', 'dryer', 'dishwasher', 'microwave',
    'drywall', 'plaster', 'patch', 'spackle', 'sand', 'wallpaper', 'ceiling', 'fan', 'attic', 'basement', 'garage',
    'stairs', 'railing', 'carpet', 'floor', 'laminate', 'vinyl', 'hardwood', 'underlay', 'insulation', 'weather'
];

// UI Elements
const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const statusLabel = document.getElementById('status');
const progressBar = document.getElementById('progress-bar');
const modelSelector = document.getElementById('model-selection');

// Restored Bigger Models
const models = [
    { id: "Llama-3.2-1B-Instruct-q4f16_1-MLC", name: "Llama 3.2 1B (Fastest - 660MB)" },
    { id: "Qwen2.5-1.5B-Instruct-q4f16_1-MLC", name: "Qwen 2.5 1.5B (Smart - 950MB)" },
    { id: "Gemma-2-2B-it-q4f16_1-MLC", name: "Gemma 2 2B (Best Quality - 1.6GB)" },
    { id: "Qwen2-0.5B-Instruct-q4f16_1-MLC", name: "Tiny Qwen (Ultra Light - 300MB)" }
];

modelSelector.innerHTML = models.map(m => `<option value="${m.id}">${m.name}</option>`).join('');

let engine;
let chatHistory = [{ role: "system", content: SYSTEM_PROMPT }];

async function loadModel() {
    statusLabel.innerText = "Initializing...";
    progressBar.style.display = "block";
    progressBar.value = 0;
    userInput.disabled = true;
    sendBtn.disabled = true;

    try {
        engine = await webllm.CreateMLCEngine(modelSelector.value, {
            initProgressCallback: (report) => {
                statusLabel.innerText = report.text;
                const match = report.text.match(/(\d+)%/);
                if (match) progressBar.value = match[1];
            }
        });
        statusLabel.innerText = "DIY Expert Ready";
        progressBar.style.display = "none";
        userInput.disabled = false;
        sendBtn.disabled = false;
    } catch (e) {
        statusLabel.innerText = "WebGPU Error - Check Browser";
    }
}

async function handleChat() {
    const rawText = userInput.value.trim();
    if (!rawText || !engine) return;

    appendMsg('user', rawText);
    userInput.value = '';

    // Advanced Guardrail Logic
    const lowerText = rawText.toLowerCase();
    const isDIYQuery = DIY_KEYWORDS.some(word => lowerText.includes(word)) || lowerText.length < 4;
    
    // We only block if it's long-form and contains ZERO diy keywords
    if (!isDIYQuery && lowerText.split(' ').length > 3) {
        appendMsg('ai', "I'm sorry, I'm only trained for home repairs and DIY advice. Is there something in your house that needs fixing?");
        return;
    }

    const aiDiv = appendMsg('ai', "Checking manuals...");
    chatHistory.push({ role: "user", content: rawText });

    try {
        const chunks = await engine.chat.completions.create({
            messages: chatHistory,
            stream: true,
            temperature: 0.4 // Slightly higher to avoid "I can't assist" loops
        });

        let fullText = "";
        for await (const chunk of chunks) {
            fullText += chunk.choices[0]?.delta?.content || "";
            aiDiv.innerText = fullText;
            chatLog.scrollTop = chatLog.scrollHeight;
        }
        chatHistory.push({ role: "assistant", content: fullText });
    } catch (err) {
        aiDiv.innerText = "Connection lost to the AI engine. Try refreshing.";
    }
}

function appendMsg(role, text) {
    const div = document.createElement('div');
    div.className = `message ${role}`;
    div.innerText = text;
    chatLog.appendChild(div);
    chatLog.scrollTop = chatLog.scrollHeight;
    return div;
}

sendBtn.addEventListener('click', handleChat);
modelSelector.addEventListener('change', loadModel);
loadModel();