# SyncSpace — One Workspace for Every Team

> **One workspace. Every team.**  
> Collaborative workspace and team productivity SaaS designed for startups, remote teams, product squads, and distributed organizations.

---

## 1. Product Overview

SyncSpace brings projects, conversations, documents, and decisions together in one beautifully organized spatial workspace. Rather than isolating tasks in disconnected tools, SyncSpace establishes persistent proximity between roadmaps, planning specs, and active discussion threads.

### Core Value Proposition
- **Shared Workspaces**: Organize projects, documents, tasks, and resources by team (Product, Engineering, Brand, Operations).
- **Live Collaboration**: Real-time presence indicators, teammate avatars, and live activity streams.
- **Connected Conversations**: Inline threads and discussions kept directly adjacent to the tasks and documents they inform.
- **Visual Project Planning**: Interactive sprint board with task progression (Backlog → In Progress → Review → Done).
- **Central Knowledge Hub**: Structured documentation with markdown formatting and linked dependencies.
- **Team-Wide Visibility**: Executive progress summaries, capacity mapping, and milestone health tracking.

---

## 2. Design System & Tokens (UI/UX Pro Max)

SyncSpace was designed following the **UI/UX Pro Max** methodology using the `Motion-Driven & Spatial` design profile:

- **Background Canvas**: `#FAF9FC` (Warm spatial off-white)
- **Primary Text**: `#0F172A` (Deep ink typography)
- **Primary Accent**: `#4F46E5` / `#6366F1` (Indigo primary)
- **Collaboration / Presence**: `#10B981` / `#059669` (Emerald live presence & success)
- **Warning / Review**: `#D97706` / `#F59E0B` (Amber badges)
- **Urgent / Critical**: `#E11D48` (Rose priority tag)
- **Typography Pairing**: Plus Jakarta Sans (Headings & Wordmarks) + Inter (Interface & Body Text) + JetBrains Mono (Technical IDs & Timestamps)

---

## 3. Technology Stack

- **Framework**: React 19 + TypeScript 5.7
- **Bundler & Dev Server**: Vite 6.2 (running on port `5195`)
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **Celebration**: Canvas Confetti (workspace initialization flow)

---

## 4. Local Development

```bash
# Navigate to SyncSpace project
cd landing-pages/syncspace

# Install dependencies
npm install

# Run local development server
npm run dev

# Build for production
npm run build

# Preview production bundle
npm run preview
```

---

## 5. Notes on Simulated Capabilities

This project is an interactive frontend demonstration. The task transitions on the sprint board, document previews, and presence indicators use localized client-side React state. In production, real-time multiplayer synchronization would connect to an operational WebSocket service (e.g. Liveblocks, Yjs, or Supabase Realtime).

---

© 2026 SyncSpace Inc. All rights reserved.
