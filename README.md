<div align="center">

# ⚡ Republic Economy Explorer

### The Central Hub for the Republic AI Ecosystem

**[🌐 Live — republic-explorer.xyz](https://republic-explorer.xyz)**

![Republic AI](https://img.shields.io/badge/Republic_AI-Ecosystem-00ffb2?style=for-the-badge&labelColor=030509)
![Status](https://img.shields.io/badge/Status-Live-00ffb2?style=for-the-badge&labelColor=030509)
![Validators](https://img.shields.io/badge/Validators-100-00c8ff?style=for-the-badge&labelColor=030509)
![License](https://img.shields.io/badge/License-MIT-b47aff?style=for-the-badge&labelColor=030509)

---

*A full-featured economy explorer and blockchain analytics platform for the Republic AI network. Real-time on-chain data. Wallet tracking. Transaction history. Validator analytics.*

</div>

---

## 🔥 What is Republic Economy Explorer?

Republic Economy Explorer is the **central directory, blockchain explorer, and analytics platform** for the Republic AI ecosystem. Every piece of data is pulled **live from the blockchain** — block height, validators, staking, transactions, wallet balances — all real-time.

**Live:** [https://republic-explorer.xyz](https://republic-explorer.xyz)

---

## ✨ Features

### 🔎 Blockchain Explorer
Full blockchain explorer with wallet, transaction, and block search:
- **Wallet Search** — Enter any `rai1...` address to see balance, staked amount, delegations, and full transaction history with RAI amounts
- **Transaction Details** — Click any TX to see hash, status, block, type, time, gas used, and RAI amount transferred
- **Block Search** — Search by block height to see block details, timestamp, chain ID, and transaction count
- **Back Navigation** — Browser back button and in-app back button work correctly between searches

### 🏛 Validator Dashboard
Complete validator tracking with all 100 active validators:
- Ranked by stake with colored avatars
- Search validators by name or operator address
- Click any validator for detailed profile — stake, commission, voting power, rank, operator address
- Auto-updates every 20 seconds from the chain

### 📊 Real-Time Analytics
Four interactive charts powered by Chart.js:
- **Network Growth** — Validator count and compute jobs over time
- **Stake Distribution** — Top 10 validators by stake
- **Validator Status** — Active vs max slots
- **Commission Rates** — Distribution of validator commission rates

### 📈 Live Chain Stats
Real-time network statistics updated every 20 seconds:
- Block Height
- Active Validator Count (100)
- Total Staked (88M+ RAI)
- Compute Jobs (100+)
- Network Status

### 🚀 Project Directory & Submission
- Browse and discover projects building on Republic AI
- Filter by category — DeFi, AI Agents, Model Hosting, Inference, Data Markets, Research, Dev Tools, NFT, Gaming
- Submit your project directly through the platform

### 🤖 AI Assistant
Built-in AI chatbot answering questions about Republic AI — validators, compute jobs, RAI token, how to build on Republic.

### 🗺️ Roadmap & Partners
Visual timeline from Testnet Launch through Mainnet and AI Marketplace, plus ecosystem partner showcase.

---

## 🔒 Security

- **HTTPS/SSL** — All traffic encrypted with Let's Encrypt
- **Security Headers** — X-Frame-Options, X-Content-Type-Options, X-XSS-Protection, Referrer-Policy
- **Server Version Hidden** — No version information exposed
- **Rate Limiting** — API rate limiting against DDoS
- **Firewall** — UFW configured, only essential ports open (22, 80, 443)
- **No Sensitive Data** — No API keys, passwords, or secrets in codebase

---

## 🎨 Design

- Premium dark theme with animated gradient orbs
- Grid overlay background
- Neon green (#00ffb2) and blue (#00c8ff) accents
- Glassmorphism card effects with hover animations
- Splash screen with logo animation on load
- Republic AI logo as favicon
- Responsive design for mobile and desktop
- JetBrains Mono for data, Outfit for UI

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Backend | Node.js, Express |
| Charts | Chart.js |
| Data | Republic AI REST API, Local RPC Node |
| Proxy | Nginx reverse proxy with SSL |
| Security | Let's Encrypt, UFW, rate limiting |
| Fonts | Outfit, JetBrains Mono |

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/status` | Block height and time |
| GET | `/api/validators` | All validators with rank, stake, commission |
| GET | `/api/account/:address` | Wallet balance, delegations, TX history |
| GET | `/api/tx/:hash` | Transaction details with amount |
| GET | `/api/block/:height` | Block details |
| GET | `/api/projects` | All submitted projects |
| POST | `/api/projects` | Submit a new project |
| POST | `/api/chat` | AI assistant |

---

## 🚀 Deployment

### Quick Start

```bash
git clone https://github.com/emilmehdiyev-33/republic-economy-explorer.git
cd republic-economy-explorer
npm install
node server.js
```

Available at `http://localhost:3000`

### Production (Nginx + SSL)

```bash
apt install nginx certbot python3-certbot-nginx -y

# Configure Nginx reverse proxy
# Setup SSL with certbot
# Enable UFW firewall
# Run as systemd service
```

See deployment docs for full instructions.

---

## 🤝 Contributing

Contributions welcome! Star the repo if you find it useful.

---

## 📜 License

MIT — Built with ⚡ for the Republic AI ecosystem.

---

<div align="center">

**[🌐 republic-explorer.xyz](https://republic-explorer.xyz)**

*Powering the Republic AI Economy*

Built by [Emil Mehdiyev](https://github.com/emilmehdiyev-33)

</div>
