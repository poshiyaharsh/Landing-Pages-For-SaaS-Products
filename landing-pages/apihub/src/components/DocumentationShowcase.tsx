import React, { useState } from 'react';
import { BookOpen, Copy, Check, Code, Terminal, Layers } from 'lucide-react';

interface DocumentationShowcaseProps {
  onShowToast: (msg: string) => void;
}

export const DocumentationShowcase: React.FC<DocumentationShowcaseProps> = ({ onShowToast }) => {
  const [lang, setLang] = useState<'curl' | 'typescript' | 'python' | 'go'>('typescript');
  const [copied, setCopied] = useState(false);

  const snippets = {
    curl: `curl -X POST https://api.hyperion.dev/v2/payments/charge \\
  -H "Authorization: Bearer test_key_99fa1408b0" \\
  -H "Content-Type: application/json" \\
  -H "Idempotency-Key: idemp_991820a" \\
  -d '{
    "amount_cents": 12500,
    "currency": "usd",
    "customer_id": "cus_8941031aa",
    "payment_method": "pm_card_visa_4242"
  }'`,
    typescript: `import { ApiHubClient } from '@apihub/sdk';

const client = new ApiHubClient({
  apiKey: process.env.APIHUB_SECRET_KEY,
  environment: 'production',
});

const charge = await client.payments.createCharge({
  amountCents: 12500,
  currency: 'usd',
  customerId: 'cus_8941031aa',
  paymentMethod: 'pm_card_visa_4242',
  idempotencyKey: 'idemp_991820a'
});

console.log('Charge created:', charge.id, charge.status);`,
    python: `from apihub import ApiHubClient
import os

client = ApiHubClient(api_key=os.environ.get("APIHUB_SECRET_KEY"))

charge = client.payments.create_charge(
    amount_cents=12500,
    currency="usd",
    customer_id="cus_8941031aa",
    payment_method="pm_card_visa_4242",
    idempotency_key="idemp_991820a"
)

print(f"Charge {charge.id} completed with status: {charge.status}")`,
    go: `package main

import (
	"context"
	"fmt"
	"github.com/apihub/sdk-go"
)

func main() {
	client := apihub.NewClient("test_key_99fa1408b0")
	charge, err := client.Payments.CreateCharge(context.Background(), &apihub.ChargeParams{
		AmountCents: 12500,
		Currency:    "usd",
		CustomerID:  "cus_8941031aa",
	})
	if err != nil {
		panic(err)
	}
	fmt.Printf("Charge created: %s\\n", charge.ID)
}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[lang]);
    setCopied(true);
    onShowToast(`${lang.toUpperCase()} snippet copied to clipboard!`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="docs" className="py-24 bg-[#020617] border-t border-slate-800 font-mono relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/60 text-cyan-300 text-xs tracking-wide mb-4">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            DEVELOPER DOCUMENTATION SHOWCASE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive reference documentation
          </h2>
          <p className="mt-4 text-zinc-400 font-sans text-base leading-relaxed">
            Every endpoint includes complete type signatures, error status codes, and multi-language SDK examples.
          </p>
        </div>

        {/* Documentation Card */}
        <div className="bg-[#0B0F19] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          {/* Endpoint Header Bar */}
          <div className="p-5 border-b border-slate-800 bg-slate-950 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-md bg-cyan-950 border border-cyan-800/80 text-cyan-400 font-bold text-xs">
                POST
              </span>
              <span className="text-sm font-bold text-white">/v2/payments/charge</span>
              <span className="text-xs text-zinc-400 font-sans hidden sm:inline">&mdash; Process an authorized charge</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] text-zinc-500">Rate Limit: 10,000 req/min</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                Idempotent
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
            {/* Left: Parameter Definition Table (6 cols) */}
            <div className="lg:col-span-6 p-6 border-b lg:border-b-0 lg:border-r border-slate-800/80">
              <h3 className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-4">
                Request Parameters (application/json)
              </h3>

              <div className="space-y-4 font-sans text-xs">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center justify-between font-mono mb-1">
                    <span className="font-bold text-cyan-400">amount_cents</span>
                    <span className="text-[11px] text-zinc-500">integer &bull; required</span>
                  </div>
                  <p className="text-zinc-400 leading-relaxed">
                    Amount intended to be collected in smallest currency unit (e.g. cents for USD). Must be &ge; 50.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center justify-between font-mono mb-1">
                    <span className="font-bold text-cyan-400">currency</span>
                    <span className="text-[11px] text-zinc-500">string &bull; required</span>
                  </div>
                  <p className="text-zinc-400 leading-relaxed">
                    Three-letter ISO currency code. Supported: <code className="text-cyan-300 font-mono">usd</code>, <code className="text-cyan-300 font-mono">eur</code>, <code className="text-cyan-300 font-mono">gbp</code>, <code className="text-cyan-300 font-mono">cad</code>.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center justify-between font-mono mb-1">
                    <span className="font-bold text-cyan-400">customer_id</span>
                    <span className="text-[11px] text-zinc-500">string &bull; required</span>
                  </div>
                  <p className="text-zinc-400 leading-relaxed">
                    Identifier of the Customer entity to charge (e.g. <code className="text-cyan-300 font-mono">cus_8941031aa</code>).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center justify-between font-mono mb-1">
                    <span className="font-bold text-cyan-400">idempotency_key</span>
                    <span className="text-[11px] text-zinc-500">header &bull; optional</span>
                  </div>
                  <p className="text-zinc-400 leading-relaxed">
                    Unique client UUID to guarantee transaction safety across automatic retries.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Code Sample Box with Language Tabs (6 cols) */}
            <div className="lg:col-span-6 p-6 bg-[#080C14] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-1.5">
                    {(['typescript', 'python', 'go', 'curl'] as const).map((l) => (
                      <button
                        key={l}
                        onClick={() => setLang(l)}
                        className={`px-3 py-1 rounded-md text-xs transition-colors capitalize ${
                          lang === l
                            ? 'bg-slate-800 text-cyan-400 font-bold border border-cyan-500/30'
                            : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={handleCopy}
                    className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-zinc-400 hover:text-white transition-colors flex items-center gap-1 text-xs"
                    aria-label="Copy code snippet"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copy</span>
                  </button>
                </div>

                <pre className="text-xs text-zinc-300 leading-relaxed overflow-x-auto p-4 rounded-xl bg-slate-950 border border-slate-900 max-h-[380px]">
                  {snippets[lang]}
                </pre>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-zinc-500">
                <span>SDK Version: @apihub/sdk v2.4.0</span>
                <span className="text-cyan-400">Zero Dependencies &bull; Tree-shakable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
