import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'How does TestForge detect and quarantine flaky tests?',
    answer: 'TestForge analyzes timing variance, assertion patterns, and environmental dependencies across historical runs. When an assertion fails without code diffs on the same git commit hash, it is quarantined to prevent blocking PR merges while opening a root-cause issue.'
  },
  {
    question: 'Which test runners and CI/CD pipelines are supported?',
    answer: 'TestForge supports Playwright, Vitest, Jest, Cypress, PyTest, Go test, and JUnit out of the box. Any runner capable of outputting JUnit XML, OpenTelemetry test traces, or standard JSON reports can stream results seamlessly into GitHub Actions, GitLab CI, Buildkite, and CircleCI.'
  },
  {
    question: 'Does TestForge require read access to our proprietary source code?',
    answer: 'No. The TestForge reporter binary only parses test outcome metadata, stack traces, and test execution timings. In self-hosted or zero-data mode, code snippets are extracted only locally on your runner to produce visual diffs without uploading source code to our cloud.'
  },
  {
    question: 'Can developers run TestForge locally before pushing to git?',
    answer: 'Yes! The lightweight `testforge` CLI allows developers to run targeted test shards locally with identical failure diffing and trace capture. You can reproduce CI pipeline failures with a single command: `testforge reproduce <run-id>`.'
  },
  {
    question: 'How does the root-cause failure inspection work?',
    answer: 'When a test fails, TestForge captures the exact DOM state snapshot, network requests, console logs, and runtime variable values at the moment of failure. It isolates the delta between the expected value and the actual value, providing an instant reproduction curl script.'
  },
  {
    question: 'Can we deploy TestForge runners inside our private AWS or GCP VPC?',
    answer: 'Yes. On our Engineering plan, you can deploy the TestForge telemetry collector and storage daemon directly inside your Kubernetes cluster or VPC via Helm chart, keeping all test traces, videos, and network logs completely within your security perimeter.'
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 border-t border-emerald-950/40 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-700/40 text-emerald-300 text-xs font-mono font-medium tracking-wide mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-zinc-400 text-base">
            Everything you need to know about test observability, coverage metrics, and pipeline integration.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-zinc-900/60 border border-zinc-800 rounded-xl overflow-hidden transition-colors duration-200"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-zinc-200">{faq.question}</span>
                  <span className="p-1 rounded-lg bg-zinc-800 text-zinc-400 flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-emerald-400" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/60">
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
