const express = require("express");
const axios = require("axios");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = 3000;
const REST = "https://rest.republicai.io";
const RPC = "http://localhost:26657";

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/status", async (req, res) => {
  try {
    const r = await axios.get(`${RPC}/status`, { timeout: 10000 });
    const i = r.data.result.sync_info;
    res.json({ block: parseInt(i.latest_block_height), time: i.latest_block_time });
  } catch { res.json({ block: 0, time: "N/A" }); }
});

app.get("/api/validators", async (req, res) => {
  try {
    const r = await axios.get(`${REST}/cosmos/staking/v1beta1/validators?status=BOND_STATUS_BONDED&pagination.limit=300`, { timeout: 15000 });
    const vals = (r.data.validators || []).sort((a, b) => parseInt(b.tokens || "0") - parseInt(a.tokens || "0")).map((v, i) => ({
      rank: i + 1,
      moniker: v.description?.moniker || "Unknown",
      operator: v.operator_address || "",
      tokens: Math.floor(parseInt(v.tokens || "0") / 1e18),
      commission: (parseFloat(v.commission?.commission_rates?.rate || "0") * 100).toFixed(0) + "%",
      jailed: v.jailed || false,
      website: v.description?.website || "",
      details: v.description?.details || "",
      identity: v.description?.identity || ""
    }));
    let totalStaked = 0;
    vals.forEach(v => { totalStaked += v.tokens; });
    res.json({ validators: vals, total: vals.length, totalStaked });
  } catch { res.json({ validators: [], total: 0, totalStaked: 0 }); }
});

const DB = path.join(__dirname, "projects.json");
function ldP() { try { if (fs.existsSync(DB)) return JSON.parse(fs.readFileSync(DB, "utf8")); } catch {} return []; }
function svP(p) { fs.writeFileSync(DB, JSON.stringify(p, null, 2)); }

app.get("/api/projects", (req, res) => res.json(ldP()));
app.post("/api/projects", (req, res) => {
  const { name, category, desc, website, twitter, status, contact } = req.body;
  if (!name || !desc) return res.status(400).json({ error: "Required" });
  const ps = ldP();
  const p = { id: Date.now(), name, category: category || "other", desc, website: website || "", twitter: twitter || "", status: status || "beta", contact: contact || "", createdAt: new Date().toISOString() };
  ps.unshift(p); svP(ps);
  res.json({ success: true, project: p });
});

app.post("/api/chat", async (req, res) => {
  try {
    const r = await axios.post("https://api.anthropic.com/v1/messages", {
      model: "claude-sonnet-4-20250514", max_tokens: 1000,
      system: "You are Republic AI Economy Explorer assistant. Republic AI is an L1 blockchain for decentralized AI compute. ~100 active validators, RAI token, currently on testnet. Categories: DeFi, AI agents, model hosting, inference, data marketplaces, research labs, developer tooling. Keep answers concise (2-4 sentences), friendly, helpful.",
      messages: [{ role: "user", content: req.body.message }]
    }, { headers: { "Content-Type": "application/json" }, timeout: 30000 });
    res.json({ reply: r.data.content?.map(b => b.text || "").join("") || "Try again." });
  } catch { res.json({ reply: "AI is thinking too hard right now. Try again in a moment!" }); }
});

app.listen(PORT, "0.0.0.0", () => console.log(`\n  ⚡ Republic Economy Explorer\n  🌐 http://0.0.0.0:${PORT}\n`));
