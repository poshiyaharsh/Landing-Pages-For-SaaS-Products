import React, { useState } from 'react';
import { Terminal, Copy, Check, Code2, ArrowUpRight, Cpu } from 'lucide-react';

interface DeveloperAPIProps {
  onToast: (title: string, message?: string) => void;
}

export const DeveloperAPI: React.FC<DeveloperAPIProps> = ({ onToast }) => {
  const [activeLang, setActiveLang] = useState<'javascript' | 'python' | 'curl'>('javascript');
  const [isCopied, setIsCopied] = useState(false);

  const snippets: Record<string, string> = {
    javascript: `import { VoiceFlowClient } from "@voiceflow/ai-sdk";

const client = new VoiceFlowClient({
  apiKey: process.env.VOICEFLOW_API_KEY
});

// Stream real-time audio chunk over WebSockets
const stream = await client.transcriptions.createStream({
  model: "whisper-v3-turbo",
  language: "en",
  vadSensitivity: 0.85,
  diarization: true
});

stream.on("transcript", (turn) => {
  console.log(\`[\${turn.timestamp}] \${turn.speaker}: \${turn.text}\`);
});`,
    python: `from voiceflow_ai import VoiceFlowClient

client = VoiceFlowClient(api_key="vf_live_xxxxxxxx")

# Transcribe audio file with speaker diarization & insights
response = client.transcriptions.create(
    audio_url="https://media.voiceflow.ai/recordings/call_01.mp3",
    language="en",
    generate_summary=True,
    sentiment_analysis=True
)

print(f"Summary: {response.summary.overview}")
for turn in response.transcript:
    print(f"[{turn.timestamp}] {turn.speaker}: {turn.text}")`,
    curl: `curl -X POST https://api.voiceflow.ai/v1/transcriptions \\
  -H "Authorization: Bearer vf_live_xxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "audioUrl": "https://media.voiceflow.ai/recordings/call_01.mp3",
    "language": "en",
    "vadSensitivity": 0.85,
    "diarization": true,
    "summary": true
  }'`
  };

  const sampleResponse = `{
  "status": "completed",
  "sessionId": "sess_894f2c19a",
  "language": "en-US",
  "durationSeconds": 14.20,
  "confidenceScore": 0.984,
  "speakerTurns": 3,
  "summary": {
    "intent": "product_launch_planning",
    "actionItemsLogged": 2,
    "sentiment": "positive"
  }
}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(snippets[activeLang]);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
    onToast('Code Snippet Copied', `${activeLang.toUpperCase()} SDK integration copied to clipboard.`);
  };

  return (
    <section id="developer-api" className="py-24 sm:py-36 bg-vf-bg-secondary border-b border-vf-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-vf-cyan block mb-3">
            DEVELOPER PLATFORM & SDKs
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-vf-text leading-tight mb-4">
            Voice intelligence, built into your product.
          </h2>
          <p className="text-base sm:text-lg text-vf-text-muted font-sans leading-relaxed">
            Ingest live WebRTC audio streams or batch audio files with minimal lines of code. Native Python, JavaScript, and cURL endpoints.
          </p>
        </div>

        {/* 2-Column Code Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Code Editor (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-vf-border bg-vf-surface shadow-cyan-glow overflow-hidden">
            {/* Header with Language Tabs */}
            <div className="bg-vf-bg px-6 py-3.5 flex items-center justify-between border-b border-vf-border/80">
              <div className="flex items-center gap-2">
                {(['javascript', 'python', 'curl'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setActiveLang(lang)}
                    className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                      activeLang === lang
                        ? 'bg-vf-surface border border-vf-cyan/40 text-vf-cyan font-bold'
                        : 'text-vf-text-muted hover:text-vf-text'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>

              <button
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-vf-border bg-vf-surface hover:bg-vf-surface-elevated text-xs font-mono text-vf-text-muted hover:text-vf-text transition-colors"
              >
                {isCopied ? <Check className="w-3.5 h-3.5 text-vf-green" /> : <Copy className="w-3.5 h-3.5 text-vf-cyan" />}
                <span>{isCopied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Code Body */}
            <div className="p-6 bg-vf-bg/95 overflow-x-auto">
              <pre className="font-mono text-xs text-vf-text leading-relaxed">
                <code>{snippets[activeLang]}</code>
              </pre>
            </div>

            <div className="px-6 py-3 bg-vf-surface border-t border-vf-border/60 flex items-center justify-between text-[11px] font-mono text-vf-text-muted">
              <span>Streaming WebSocket & REST HTTP/2 Supported</span>
              <span className="text-vf-cyan">SDK v2.4.0</span>
            </div>
          </div>

          {/* Right: Real-time Sample JSON Response (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl border border-vf-border bg-vf-surface p-6 sm:p-8 space-y-4 shadow-surface">
            <div className="flex items-center justify-between pb-3 border-b border-vf-border/60">
              <span className="text-xs font-mono text-vf-cyan uppercase tracking-wider flex items-center gap-2">
                <Terminal className="w-4 h-4" /> EXAMPLE RESPONSE (200 OK)
              </span>
              <span className="text-[10px] font-mono text-vf-green">Latency: 112ms</span>
            </div>

            <div className="p-4 rounded-xl bg-vf-bg border border-vf-border/80 overflow-x-auto">
              <pre className="font-mono text-[11px] text-vf-cyan leading-relaxed">
                <code>{sampleResponse}</code>
              </pre>
            </div>

            <div className="pt-2 text-xs font-mono text-vf-text-muted">
              Illustrative API endpoint and response model for developer review.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
