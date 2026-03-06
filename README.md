<div align="center">

# ⚡ Republic Economy Explorer

### The Central Hub for the Republic AI Ecosystem

**[🌐 Live Demo](http://republic-explorer.xyz) · [📊 Analytics](http://republic-explorer.xyz) · [🚀 Submit Project](http://republic-explorer.xyz)**

http://republic-explorer.xyz

![Republic AI](https://img.shields.io/badge/Republic_AI-Ecosystem-00ffb2?style=for-the-badge&labelColor=030509)
![Status](https://img.shields.io/badge/Status-Live-00ffb2?style=for-the-badge&labelColor=030509)
![License](https://img.shields.io/badge/License-MIT-00c8ff?style=for-the-badge&labelColor=030509)

---

*A public-facing economy explorer for the Republic AI blockchain. Browse, discover, and track every project building in the Republic ecosystem — with real-time on-chain data and AI-powered analytics.*

</div>

---

## 🔥 What is Republic Economy Explorer?

Republic Economy Explorer is the **central directory and analytics platform** for the entire Republic AI ecosystem. It serves as the go-to destination for anyone who wants to discover projects, track validators, analyze network health, and engage with the growing Republic economy.

Every piece of data is pulled **live from the blockchain** — no static content, no fake numbers. What you see is what's happening on-chain right now.

---

## ✨ Features

### 🔍 Ecosystem Directory
A fully searchable project directory where users can browse and discover every project building on Republic AI. Filter by category — DeFi, AI Agents, Model Hosting, Inference, Data Marketplaces, Research Labs, Developer Tooling, NFT, Gaming, and more. Each project card shows name, category, status (Live/Beta/Dev), description, and links to website and social media.

### 🏛 Validator Dashboard
Complete validator tracking system with **all 100 active validators** displayed in a beautiful ranked table. Each validator shows rank, moniker, colored avatar, stake amount, commission rate, and active/jailed status. Click any validator to see detailed information including voting power, operator address, and full statistics. Built-in search to find validators by name or address.

### 📊 Real-Time Analytics
Four interactive charts powered by Chart.js providing deep insights into the network:
- **Network Growth** — Validator count and compute jobs over time
- **Stake Distribution** — Top 10 validators by stake (bar chart)
- **Validator Status** — Active vs max slots (doughnut chart)
- **Commission Rates** — Distribution of validator commission rates

### 📈 Live Chain Stats
Real-time network statistics updated every 20 seconds directly from the blockchain:
- Block Height
- Active Validator Count
- Total Staked RAI
- Compute Jobs Processed
- Network Status

### 🚀 Project Submission
Any team or developer can submit their project to the directory through a clean, intuitive form. Fields include project name, category, description, website, Twitter/X handle, development status, and contact information. Projects appear instantly in the directory after submission.

### 🤖 AI Assistant
Built-in AI chatbot that answers questions about the Republic AI ecosystem. Ask about validators, compute jobs, RAI token, how to build on Republic, and more. Includes quick suggestion buttons for common questions.

### 🗺️ Roadmap
Visual timeline showing the Republic AI journey from Testnet Launch (Q1 2026) through Ecosystem Growth, Mainnet Prep, Mainnet Launch, and the AI Marketplace phase.

### 🤝 Ecosystem Partners
Showcase of the technology partners powering the Republic AI ecosystem — Cosmos, Tendermint, IBC Protocol, CosmWasm, Anthropic, and Hugging Face.

---

## 🎨 Design

The explorer features a **premium dark theme** with:
- Animated gradient orbs in the background
- Grid overlay for depth
- Neon green (#00ffb2) and blue (#00c8ff) accent colors
- Glassmorphism card effects
- Smooth hover animations and transitions
- Shimmer effects on the logo
- Floating icon animations
- JetBrains Mono for data, Outfit for UI
- Fully responsive — works on desktop, tablet, and mobile

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Backend | Node.js, Express |
| Charts | Chart.js |
| Data | Republic AI REST API, Local RPC Node |
| Database | JSON file storage |
| Proxy | Nginx reverse proxy |
| Fonts | Outfit, JetBrains Mono |

---

## 📡 Data Sources

| Endpoint | Description |
|----------|-------------|
| Republic REST API | Validator data, staking info, commission rates |
| Local RPC Node | Block height, block time, network status |
| Compute Validation CLI | Compute job tracking |

All data is fetched server-side to avoid CORS issues and cached for optimal performance.

---

## 🚀 Deployment

### Requirements
- Node.js 18+
- npm
- Nginx (for reverse proxy)
- Republic AI node (optional, for local RPC)

### Quick Start

```bash
git clone https://github.com/emilmehdiyev-33/republic-economy-explorer.git
cd republic-economy-explorer
npm install
node server.js
```

The explorer will be available at `http://localhost:3000`

### Production Setup with Nginx

```bash
# Install Nginx
apt install nginx -y

# Configure reverse proxy
cat > /etc/nginx/sites-available/republic-explorer << 'EOF'
server {
    listen 80;
    server_name your-domain.xyz;
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
EOF

ln -sf /etc/nginx/sites-available/republic-explorer /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
systemctl restart nginx
```

### Run as System Service

```bash
cat > /etc/systemd/system/republic-explorer.service << 'EOF'
[Unit]
Description=Republic Economy Explorer
After=network.target

[Service]
Type=simple
WorkingDirectory=/path/to/republic-economy-explorer
ExecStart=/usr/bin/node server.js
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable republic-explorer
systemctl start republic-explorer
```

---

## 📁 Project Structure

```
republic-economy-explorer/
├── server.js          # Express backend with API proxy
├── projects.json      # Project submissions database
├── package.json       # Dependencies
└── public/
    └── index.html     # Full frontend application
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/status` | Current block height and time |
| GET | `/api/validators` | All active validators with rank, stake, commission |
| GET | `/api/projects` | All submitted projects |
| POST | `/api/projects` | Submit a new project |
| POST | `/api/chat` | AI assistant endpoint |

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Submit projects to the directory
- Report bugs or suggest features
- Open pull requests with improvements
- Star the repo if you find it useful

---

## 📜 License

MIT — Built with ⚡ for the Republic AI ecosystem.

---

<div align="center">

**[🌐 republic-explorer.xyz](http://republic-explorer.xyz)**

*Powering the Republic AI Economy*

</div>
