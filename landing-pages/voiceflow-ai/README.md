# VoiceFlow AI — Intelligent Voice Interaction & Conversational Analytics Platform

> **“Turn conversations into intelligence.”**  
> Futuristic voice interface, cinematic dark UI, reactive audio waveforms, real-time transcription, intelligent conversation dashboards, and enterprise-grade conversational AI workflows.

---

## 1. Overview & Product Concept

**VoiceFlow AI** is a next-generation conversational intelligence and speech technology platform designed for modern product teams, contact centers, and autonomous voice agents. By unifying streaming speech recognition (STT), neural speech synthesis (TTS), speaker diarization, acoustic sentiment analysis, and LLM-driven insight extraction, VoiceFlow AI eliminates conversational fragmentation.

The landing page features a **cinematic dark aesthetic** (`#080B12` base, `#0E1320` secondary, `#131A28` surface) illuminated with **electric cyan** (`#52E8FF`), **violet** (`#8875FF`), and **soft blue** (`#6C9EFF`) accents, anchored by an interactive **Luminous Voice Orb** and live browser audio visualization components.

---

## 2. Key Capabilities & Features

1. **Luminous Voice Orb:**
   - Multi-layered translucent rotating concentric rings, orbital glowing particle physics, reactive plasma caustics, and live audio frequency response.
2. **Deterministic & Live Audio Visualization:**
   - Reusable waveform visualizer component supporting Horizontal, Frequency Spectrum (FFT), and Decibel Level Meter modes.
3. **Interactive Speech-to-Text Studio:**
   - Multi-session picker (Launch Planning, Support Escalation, Sales Discovery).
   - Real-time scrubbing with diarized speaker turns (`Speaker 01`, `Speaker 02`, `Customer`, `Support AI`).
   - One-click **Copy Transcript**, **Download .TXT file**, and **View Automated Summary Modal**.
4. **Conversation Intelligence Dashboard:**
   - Conversation volume, 98.4% average confidence, 88ms latency telemetry.
   - Interactive topic distribution bars and acoustic sentiment breakdown (74% positive, 18% neutral, 8% objections).
   - Tabbed deep-dive: *Key Takeaways*, *Decisions*, *Action Items*, *Open Questions*.
5. **Futuristic Voice Workspace (Command Center):**
   - 3-column enterprise interface mockup: Navigation sidebar, active audio queue & transcript inspector, and audio metadata telemetry panel.
6. **Visual Voice Agent Builder:**
   - Interactive conversational pipeline: Voice Input → Transcription → Intent Detection → LLM Response → Voice Output.
   - Clickable nodes with live parameter inspect panels.
   - Interactive chat simulator testing caller turns with dynamic agent responses.
7. **Neural Text-to-Speech Studio:**
   - 4 voice presets (*Aura*, *Zephyr*, *Serene*, *Vibe*) with personality styles (Professional, Conversational, Calm, Energetic).
   - Real client-side browser speech playback via native `window.speechSynthesis` with graceful fallbacks.
   - Speaking rate controls (0.75x to 1.5x) and reactive waveform playback sync.
8. **Developer API & Multi-Language SDK:**
   - Interactive tabs for **JavaScript**, **Python**, and **cURL**.
   - One-click copy, syntax highlighting, and sample JSON response telemetry.
9. **Integrations Matrix:**
   - Filterable cards for Slack, Salesforce, HubSpot, Zoom, Google Drive, Zapier, Webhooks, and REST APIs.
10. **Enterprise Privacy & Security:**
    - Zero biometric voiceprint retention, ephemeral memory processing (0s persistent disk retention), TLS 1.3 transport, and explicit optical microphone consent indicators.
11. **Transparent Pricing Architecture:**
    - Free ($0), Pro ($29/mo or $23/mo billed annually with 20% discount), and Business ($99/mo or $79/mo).
    - Clear prototype evaluation disclaimers (zero simulated credit card charges).
12. **10-Question Accessible FAQ:**
    - Animated accordion answering latency, browser compatibility, data handling, and custom vocabulary injection.
13. **Project Provisioning Modal:**
    - Interactive sandbox initialization modal with custom project name, use-case selector, latency tier, generated API keys, and celebratory confetti.

---

## 3. Technology Stack

- **Framework:** React 19 (TypeScript)
- **Bundler & Tooling:** Vite 6
- **Styling:** Tailwind CSS with custom voice aesthetic tokens
- **Typography:** Space Grotesk (display headings), Inter / Manrope (body copy), JetBrains Mono (technical metrics & code)
- **Icons:** Lucide React
- **Specialized Utilities:** Canvas Confetti, Web SpeechSynthesis API, Web AudioContext

---

## 4. Installation & Local Development

### Prerequisites
- Node.js 18+
- npm 9+

### Commands

```bash
# Navigate to project directory
cd "landing-pages/voiceflow-ai"

# Install dependencies
npm install

# Start Vite development server (default port: 5199)
npm run dev

# Run TypeScript check and production build
npm run build

# Preview production bundle
npm run preview
```

---

## 5. Project Structure

```
landing-pages/voiceflow-ai/
├── index.html                 # Semantic HTML entry with fonts & meta tags
├── package.json               # Scripts & dependencies
├── postcss.config.js          # PostCSS Tailwind config
├── tailwind.config.js         # Custom cyber acoustic design tokens
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite port & build configuration
├── src/
│   ├── main.tsx               # App mount entry point
│   ├── App.tsx                # Layout orchestration, state, modals, toasts
│   ├── index.css              # Custom utility classes & scrollbar styles
│   ├── types/
│   │   └── index.ts           # Type models for sessions, nodes, pricing, etc.
│   ├── data/
│   │   └── voiceflowData.ts   # Audio sessions, presets, FAQs, integrations
│   └── components/
│       ├── VoiceOrb.tsx             # 6-layer luminous animated voice orb
│       ├── WaveformVisualizer.tsx   # Canvas & SVG waveform visualizers
│       ├── Navbar.tsx               # Sticky header with soundwave/V logo
│       ├── HeroSection.tsx          # Hero with live simulated speech stream
│       ├── CapabilityStrip.tsx      # 6 credibility pillars
│       ├── ProblemSolution.tsx      # Problem statement & 5-step pipeline
│       ├── FeaturesSection.tsx      # 6 core feature deep dives
│       ├── SpeechToTextDemo.tsx     # Transcription scrubber & diarization
│       ├── ConversationDashboard.tsx# Sentiment, topics & meeting takeaways
│       ├── VoiceWorkspace.tsx       # Enterprise command center mockup
│       ├── AgentBuilder.tsx         # Node-based agent pipeline builder
│       ├── TextToSpeechStudio.tsx   # Speech synthesis playground
│       ├── DeveloperAPI.tsx         # Multi-language code snippets
│       ├── Integrations.tsx         # Filterable tool connectors
│       ├── UseCases.tsx             # 6 industry solutions
│       ├── SecuritySection.tsx      # Privacy architecture & zero biometrics
│       ├── Testimonials.tsx         # 3 editorial testimonial reviews
│       ├── Pricing.tsx              # Monthly / Annual tier cards
│       ├── FAQ.tsx                  # 10-item accessible accordion
│       ├── FinalCTA.tsx             # Dramatic closing section
│       ├── Footer.tsx               # Brand footer with legal modal links
│       ├── StartBuildingModal.tsx   # Project creation modal with confetti
│       └── Toast.tsx                # Non-intrusive cyber notification toasts
```

---

## 6. Audio & Browser Capabilities

- **Browser Speech Synthesis (`window.speechSynthesis`):**  
  The TTS Studio utilizes native browser speech synthesis when triggered by the operator. If unavailable in certain headless environments, the UI handles state gracefully and informs the user.
- **Opt-in Microphone AudioContext:**  
  Microphone capture is strictly operator-initiated. Denied permissions or unattached audio hardware are trapped safely with fallbacks to high-fidelity synthetic demo streams.
- **Accessible Motion:**  
  All orbital particle transforms and pulsating sound rings respect standard `prefers-reduced-motion` browser settings.

---

## 7. Connecting a Real Production Backend

To wire VoiceFlow AI to live streaming WebSocket endpoints or an on-premise model runner:

1. **Streaming Audio Ingestion:**
   Connect `HeroSection.tsx` and `SpeechToTextDemo.tsx` to an active WebSocket route (e.g. `wss://api.voiceflow.ai/v1/stream`) transmitting 16kHz PCM or Opus chunks.
2. **Environment Variables:**
   Create a `.env` file with:
   ```env
   VITE_VOICEFLOW_API_URL=https://api.voiceflow.ai/v1
   VITE_VOICEFLOW_WS_URL=wss://api.voiceflow.ai/v1/stream
   ```
3. **Speaker Diarization:**
   Pipe backend diarization clusters directly into the `SAMPLE_AUDIO_SESSIONS` transcript schema to display color-coded operator turns in real time.

---

## 8. License & Attribution

© 2026 VoiceFlow AI. All rights reserved. Created for conversational intelligence and next-generation voice interface exploration.
