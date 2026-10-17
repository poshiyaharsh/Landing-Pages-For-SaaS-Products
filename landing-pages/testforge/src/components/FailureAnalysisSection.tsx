import React, { useState } from 'react';
import { Bug, Copy, Check, Terminal, FileCode, CheckCircle2 } from 'lucide-react';

export const FailureAnalysisSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const sampleDiff = `- Expected Status: 409 Conflict { code: "IDEMPOTENCY_REPLAY_DETECTED" }
+ Received Status: 200 OK { token: "eyJhbGciOi...", sessionActive: true }

Diff Breakdown:
  src/auth/__tests__/session.spec.ts:152:12
  150 |   const res2 = await client.post('/api/v2/auth/login', payload);
  151 |   
> 152 |   expect(res2.status).toBe(409);
      |                       ^
  153 |   expect(res2.body.code).toBe('IDEMPOTENCY_REPLAY_DETECTED');`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleDiff);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="triage" className="py-20 md:py-28 bg-[#0A0F1D] border-t border-white/10 font-mono scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#10172A] border border-rose-500/30 text-rose-400 text-xs">
            <Bug className="w-3.5 h-3.5" />
            <span>SUB-SECOND FAILURE TRIAGE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Pinpoint failures in seconds.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-sans">
            Clear visual separation between expected assertion, actual return, AST line context, and relevant stack frames.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl bg-[#10172A] border border-white/10 shadow-2xl overflow-hidden">
          {/* Top Bar */}
          <div className="p-4 bg-[#070B14] border-b border-white/10 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="text-white font-bold">AssertionError: [Security Regression]</span>
              <span className="text-slate-500 hidden sm:inline">src/auth/__tests__/session.spec.ts:152</span>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#18233C] border border-white/10 text-emerald-400 hover:text-emerald-300 text-xs"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Failure'}</span>
            </button>
          </div>

          <div className="p-5 sm:p-6 space-y-4">
            <div className="p-4 rounded-xl bg-[#070B14] border border-rose-500/20 text-xs">
              <pre className="text-slate-300 leading-relaxed overflow-x-auto whitespace-pre font-mono">
                <span className="text-rose-400">- Expected Status: 409 Conflict</span>{'\n'}
                <span className="text-emerald-400">+ Received Status: 200 OK</span>{'\n\n'}
                <span className="text-slate-400">Diff Breakdown:</span>{'\n'}
                <span className="text-slate-500">  src/auth/__tests__/session.spec.ts:152:12</span>{'\n'}
                <span className="text-slate-500">  150 |   const res2 = await client.post('/api/v2/auth/login', payload);</span>{'\n'}
                <span className="text-slate-500">  151 |   </span>{'\n'}
                <span className="text-rose-400">&gt; 152 |   expect(res2.status).toBe(409);</span>{'\n'}
                <span className="text-slate-500">      |                       ^</span>{'\n'}
                <span className="text-slate-500">  153 |   expect(res2.body.code).toBe('IDEMPOTENCY_REPLAY_DETECTED');</span>
              </pre>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="p-3 rounded-lg bg-[#070B14] border border-white/5">
                <span className="text-[10px] text-slate-500 block uppercase">Root-Cause Analysis</span>
                <span className="text-rose-400 font-bold">Stale Redis Cache Key</span>
              </div>
              <div className="p-3 rounded-lg bg-[#070B14] border border-white/5">
                <span className="text-[10px] text-slate-500 block uppercase">Flakiness Score</span>
                <span className="text-emerald-400 font-bold">0.0% (Deterministic Bug)</span>
              </div>
              <div className="p-3 rounded-lg bg-[#070B14] border border-white/5">
                <span className="text-[10px] text-slate-500 block uppercase">Regression Origin</span>
                <span className="text-white font-bold">commit 3d8e410</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
