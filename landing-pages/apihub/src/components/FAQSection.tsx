import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'Does APIHub support OpenAPI 3.1, Swagger 2.0, and GraphQL?',
    answer: 'Yes. APIHub natively parses OpenAPI 3.0 & 3.1 specifications (both JSON and YAML), Swagger 2.0 legacy schemas, and GraphQL introspection AST schemas. You can also import Postman collections and cURL commands with instant contract conversion.'
  },
  {
    question: 'How do the global edge mock servers simulate responses?',
    answer: 'When you import a schema, APIHub compiles mock routes across 42 global edge locations. Mocks generate schema-compliant synthetic data, handle query filtering, respect pagination headers, and can simulate configurable network latencies and failure rates (e.g. 5% random 503s).'
  },
  {
    question: 'Can APIHub block breaking schema changes in our CI/CD pipeline?',
    answer: 'Yes! The APIHub CLI compares your pull request schema against the live production catalog. If a required field is deleted, a type changes (e.g. integer to string), or an enum value is removed, the CI check exits with code 1 and annotates the exact offending diff.'
  },
  {
    question: 'What authentication and authorization schemes are supported?',
    answer: 'APIHub supports standard OAuth2 / OpenID Connect (OIDC) JWT tokens, HMAC SHA-256 API secret keys, AWS Signature v4, and mTLS (Mutual TLS 1.3) client certificates. You can configure granular permission scopes per endpoint.'
  },
  {
    question: 'Can we self-host the APIHub gateway inside our private AWS or GCP VPC?',
    answer: 'Yes. On our Platform plan, you can run the APIHub Envoy-based edge proxy directly in your private Amazon EKS, Google GKE, or Azure AKS cluster using our official Helm chart, keeping all payload traffic strictly within your internal boundary.'
  },
  {
    question: 'How does APIHub handle webhook event signatures and delivery retries?',
    answer: 'Outbound webhooks are signed using HMAC SHA-256 with timestamp headers to prevent replay attacks. If the destination endpoint returns a non-2xx status, APIHub initiates an exponential backoff retry schedule (up to 72 hours) with complete payload audit history.'
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#080C14] border-t border-slate-800 font-mono relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/60 text-cyan-300 text-xs tracking-wide mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-zinc-400 font-sans text-base">
            Everything you need to know about API documentation, schema management, and edge proxies.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-[#0B0F19] border border-slate-800 rounded-xl overflow-hidden transition-colors duration-200"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-zinc-200">{faq.question}</span>
                  <span className="p-1 rounded-lg bg-slate-900 text-zinc-400 flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-cyan-400" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm font-sans text-zinc-400 leading-relaxed border-t border-slate-800/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
