import React from 'react';
import { DollarSign, TrendingUp, AlertCircle, ArrowRight, CheckCircle2, Sparkles, Sliders } from 'lucide-react';
import { SAMPLE_COST_DATA } from '../data/sampleData';

interface CostDashboardProps {
  onToast: (title: string, desc?: string, type?: 'success' | 'info' | 'warning' | 'blue') => void;
}

export const CostDashboard: React.FC<CostDashboardProps> = ({ onToast }) => {
  const data = SAMPLE_COST_DATA;

  const handleApplyOptimization = (title: string, saving: string) => {
    onToast(
      'Optimization Applied',
      `Executed rule for "${title}". Projected saving: ${saving}.`,
      'success'
    );
  };

  return (
    <section id="cost" className="py-24 bg-nest-bg border-b border-nest-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-nest-blue font-semibold">
            FINANCIAL GOVERNANCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-nest-text mt-3">
            Know where your resources go.
          </h2>
          <p className="text-base text-nest-secondary mt-4 leading-relaxed">
            Eliminate cloud bill shock. Track compute, database, storage, and egress consumption in real time with automated idle-instance detection.
          </p>
        </div>

        {/* Cost Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">
          {/* Left Summary Card (col-span-5) */}
          <div className="lg:col-span-5 bg-white border border-nest-border rounded-nest-xl p-6 sm:p-7 shadow-subtle space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-nest-border">
                <span className="text-xs font-mono uppercase text-nest-muted font-semibold">
                  Current Month Forecast
                </span>
                <span className="text-[10px] font-mono text-nest-green bg-emerald-50 px-2 py-0.5 rounded font-medium">
                  Within Safe Quota
                </span>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold font-display text-nest-text">
                    ${data.monthlySpend.toFixed(2)}
                  </span>
                  <span className="text-xs font-mono text-nest-secondary">/ ${data.monthlyBudget.toFixed(2)} cap</span>
                </div>
                <p className="text-xs text-nest-secondary leading-relaxed">
                  Total projected cloud expenditures across all active Kubernetes clusters and database instances for the current calendar billing cycle.
                </p>
              </div>

              {/* Budget Progress Meter */}
              <div className="mt-6 space-y-1.5 font-mono text-xs">
                <div className="flex justify-between text-[11px] text-nest-secondary">
                  <span>80.5% Budget Utilization</span>
                  <span className="text-nest-green font-semibold">$165.50 Buffer</span>
                </div>
                <div className="w-full bg-nest-subtle h-2.5 rounded-full overflow-hidden flex">
                  {data.categories.map((cat, idx) => (
                    <div
                      key={idx}
                      className={`${cat.color} h-full transition-all`}
                      style={{ width: `${cat.percentage}%` }}
                      title={`${cat.category}: ${cat.percentage}%`}
                    />
                  ))}
                </div>
              </div>

              {/* Category Breakdown */}
              <div className="space-y-2.5 mt-6 pt-5 border-t border-nest-border text-xs font-mono">
                {data.categories.map((cat, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${cat.color}`} />
                      <span className="text-nest-text font-medium">{cat.category}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-nest-muted">{cat.percentage}%</span>
                      <span className="font-bold text-nest-text">${cat.amount.toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-nest-border text-[11px] font-mono text-nest-muted flex justify-between">
              <span>Billing Cycle: June 1 - June 30</span>
              <span>Updated 5m ago</span>
            </div>
          </div>

          {/* Right Spend Trend & Monthly Scale (col-span-7) */}
          <div className="lg:col-span-7 bg-white border border-nest-border rounded-nest-xl p-6 sm:p-7 shadow-subtle space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-nest-border">
                <h4 className="font-bold font-display text-nest-text text-sm">
                  Historical Spending Trend (Last 6 Months)
                </h4>
                <span className="text-xs font-mono text-nest-blue">+3.8% monthly average</span>
              </div>

              {/* Monthly Bar Histogram */}
              <div className="mt-6 bg-nest-bg rounded-nest p-4 border border-nest-border space-y-3">
                <div className="h-44 flex items-end justify-between gap-3 pt-6 pb-2 px-2 border-b border-nest-border/60">
                  {data.trends.map((t, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 group relative">
                      <div
                        className="w-full bg-nest-blue/80 group-hover:bg-nest-blue rounded-t transition-all duration-300"
                        style={{ height: `${(t.amount / 850) * 100}%` }}
                      />
                      <span className="text-[10px] font-mono text-nest-secondary">{t.month}</span>
                      <div className="opacity-0 group-hover:opacity-100 absolute -top-7 bg-nest-text text-white text-[9px] font-mono py-0.5 px-1.5 rounded pointer-events-none transition-opacity whitespace-nowrap z-20">
                        ${t.amount}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-[10px] font-mono text-nest-muted px-2">
                  <span>Jan ($540)</span>
                  <span>Budget Threshold: $850.00</span>
                  <span>Jun ($684.50)</span>
                </div>
              </div>
            </div>

            {/* Cost Optimization Recommendations */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-nest-muted font-semibold block">
                Automated Optimization Recommendations (Save $124/mo)
              </span>

              <div className="space-y-2">
                {data.suggestions.map((sug, i) => (
                  <div
                    key={i}
                    className="p-3 bg-nest-bg rounded-nest border border-nest-border flex items-center justify-between gap-3 text-xs"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-nest-text font-display">{sug.title}</span>
                        <span className="text-[10px] font-mono bg-emerald-50 text-nest-green px-1.5 py-0.2 rounded font-bold">
                          {sug.saving}
                        </span>
                      </div>
                      <p className="text-[11px] text-nest-secondary mt-0.5 leading-snug">{sug.desc}</p>
                    </div>

                    <button
                      onClick={() => handleApplyOptimization(sug.title, sug.saving)}
                      className="px-2.5 py-1 text-[11px] font-mono font-medium text-nest-blue bg-nest-blue-soft hover:bg-nest-blue/20 rounded transition-colors shrink-0"
                    >
                      Apply
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="text-[11px] font-mono text-nest-muted text-center">
          * Illustrative telemetry estimation models. Does not constitute guaranteed contractual billing guarantees.
        </p>
      </div>
    </section>
  );
};
