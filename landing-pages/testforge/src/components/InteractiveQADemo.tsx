import React, { useState } from 'react';
import {
  Play,
  RotateCcw,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Copy,
  Check,
  Terminal,
  FolderTree,
  Bug,
  Filter,
  FileCode,
  Clock,
  Sparkles,
  Info,
} from 'lucide-react';
import { sampleSuites, sampleTestCases } from '../data/sampleData';
import { TestCase, TestFilter, TestSuite } from '../types';

interface InteractiveQADemoProps {
  onShowToast: (msg: string, type?: 'success' | 'info') => void;
}

export const InteractiveQADemo: React.FC<InteractiveQADemoProps> = ({ onShowToast }) => {
  const [selectedSuiteId, setSelectedSuiteId] = useState<string>(sampleSuites[0].id);
  const [testFilter, setTestFilter] = useState<TestFilter>('all');
  const [selectedTestId, setSelectedTestId] = useState<string>(sampleTestCases[0].id);
  const [isRunning, setIsRunning] = useState(false);
  const [runProgress, setRunProgress] = useState(100);
  const [copiedDiff, setCopiedDiff] = useState(false);

  // Active suite & tests
  const activeSuite =
    sampleSuites.find((s) => s.id === selectedSuiteId) || sampleSuites[0];

  const suiteTests = sampleTestCases.filter((t) => t.suiteId === activeSuite.id);

  const filteredTests = testFilter === 'all'
    ? suiteTests
    : suiteTests.filter((t) => t.status === testFilter);

  // Active test
  const activeTest =
    filteredTests.find((t) => t.id === selectedTestId) ||
    filteredTests[0] ||
    suiteTests[0] ||
    sampleTestCases[0];

  const handleRunSimulation = () => {
    setIsRunning(true);
    setRunProgress(15);
    onShowToast('Executing distributed test worker matrix across 8 threads...', 'info');

    setTimeout(() => setRunProgress(45), 400);
    setTimeout(() => setRunProgress(80), 800);
    setTimeout(() => {
      setRunProgress(100);
      setIsRunning(false);
      onShowToast(
        `Simulation finished in 1.42s: ${activeSuite.passedCount} passed, ${activeSuite.failedCount} failed.`,
        'success'
      );
    }, 1300);
  };

  const handleCopyDiff = () => {
    if (activeTest.failure) {
      navigator.clipboard.writeText(
        `${activeTest.failure.errorName}\n\n${activeTest.failure.diffSnippet}\n\n${activeTest.failure.stackTrace}`
      );
      setCopiedDiff(true);
      onShowToast('Failure stack trace and diff copied to clipboard!', 'success');
      setTimeout(() => setCopiedDiff(false), 2000);
    }
  };

  const handleReset = () => {
    setSelectedSuiteId(sampleSuites[0].id);
    setTestFilter('all');
    setSelectedTestId(sampleTestCases[0].id);
    setRunProgress(100);
    setIsRunning(false);
    onShowToast('Test suite execution reset to default state.', 'info');
  };

  return (
    <section id="demo" className="py-20 md:py-28 bg-[#070B14] border-t border-white/10 font-mono scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#10172A] border border-emerald-500/30 text-emerald-400 text-xs">
            <Terminal className="w-3.5 h-3.5" />
            <span>INTERACTIVE QA SUITE RUNNER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Execute, triage, and debug.
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm font-sans">
            Select a test suite, run the simulated runner sequence, inspect failing assertion diffs, and copy clean stack traces.
          </p>
        </div>

        {/* Console Container */}
        <div className="rounded-2xl bg-[#0D1424] border border-white/15 shadow-2xl overflow-hidden">
          {/* Top Control Bar */}
          <div className="p-4 bg-[#10172A] border-b border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
            {/* Suite Selector Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              <span className="text-slate-400 font-bold uppercase flex items-center gap-1 text-[11px] whitespace-nowrap">
                <FolderTree className="w-3.5 h-3.5 text-emerald-400" /> Suite:
              </span>
              <div className="inline-flex rounded-xl bg-[#070B14] p-1 border border-white/10 text-xs">
                {sampleSuites.map((suite) => (
                  <button
                    key={suite.id}
                    onClick={() => {
                      setSelectedSuiteId(suite.id);
                      setTestFilter('all');
                      const firstInSuite = sampleTestCases.find((t) => t.suiteId === suite.id);
                      if (firstInSuite) setSelectedTestId(firstInSuite.id);
                    }}
                    className={`px-3 py-1 rounded-lg transition-all whitespace-nowrap ${
                      selectedSuiteId === suite.id
                        ? 'bg-emerald-500 text-slate-950 font-bold shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {suite.name.split('.')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Run Button & Controls */}
            <div className="flex items-center gap-3">
              <button
                disabled={isRunning}
                onClick={handleRunSimulation}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-95 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20 disabled:opacity-50"
              >
                <Play className="w-3.5 h-3.5 fill-slate-950" />
                <span>{isRunning ? 'Running Matrix...' : 'Run Sample Tests'}</span>
              </button>

              <button
                onClick={handleReset}
                className="flex items-center gap-1 px-3 py-2 rounded-xl bg-[#070B14] border border-white/10 text-slate-300 hover:text-white text-xs transition-colors"
                title="Reset test suite state"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            </div>
          </div>

          {/* Progress Bar (Visible during simulated execution) */}
          {isRunning && (
            <div className="w-full bg-[#070B14] h-1.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-full transition-all duration-300"
                style={{ width: `${runProgress}%` }}
              />
            </div>
          )}

          {/* Disclaimer Banner */}
          <div className="bg-emerald-950/30 border-b border-emerald-500/20 px-4 py-1.5 flex items-center justify-between text-[11px] text-emerald-300">
            <span className="flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              Notice: Simulated client-side QA run. No actual host repository or local code is executed.
            </span>
            <span className="hidden md:inline text-slate-400">FRAMEWORK: {activeSuite.framework}</span>
          </div>

          {/* Main 2-Column QA Layout */}
          <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Test Suite Tree & Test Cases (5 Cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center justify-between text-xs pb-1">
                <span className="font-bold text-white uppercase tracking-wider">
                  Suite Cases ({filteredTests.length})
                </span>

                {/* Filter buttons */}
                <div className="inline-flex rounded-lg bg-[#070B14] p-0.5 border border-white/10 text-[10px]">
                  {(['all', 'failed', 'passed'] as TestFilter[]).map((f) => (
                    <button
                      key={f}
                      onClick={() => setTestFilter(f)}
                      className={`px-2 py-0.5 rounded capitalize ${
                        testFilter === f ? 'bg-[#182238] text-emerald-300 font-bold' : 'text-slate-400'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Test Items */}
              <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1">
                {filteredTests.map((test) => {
                  const isSelected = test.id === activeTest.id;
                  return (
                    <div
                      key={test.id}
                      onClick={() => setSelectedTestId(test.id)}
                      className={`p-3.5 rounded-xl cursor-pointer transition-all border flex items-start justify-between gap-3 ${
                        isSelected
                          ? 'bg-[#18253D] border-emerald-500 shadow-md ring-1 ring-emerald-500'
                          : 'bg-[#070B14] border-white/5 hover:border-white/15'
                      }`}
                    >
                      <div className="flex items-start gap-2.5 truncate">
                        {test.status === 'passed' ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        ) : test.status === 'failed' ? (
                          <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        ) : (
                          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        )}
                        <div className="truncate">
                          <p className="text-xs text-white font-medium truncate">{test.name}</p>
                          <span className="text-[10px] text-slate-500 block truncate">
                            {test.fileLocation}
                          </span>
                        </div>
                      </div>

                      <span className="text-[10px] text-slate-400 shrink-0">
                        {test.durationMs}ms
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Active Test Assertion, Diff & Stack Trace (7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              {/* Test Detail Inspector */}
              <div className="p-5 rounded-2xl bg-[#10172A] border border-white/10 space-y-3">
                <div className="flex items-start justify-between gap-3 pb-3 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                          activeTest.status === 'passed'
                            ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/40'
                            : activeTest.status === 'failed'
                            ? 'bg-rose-950 text-rose-300 border border-rose-800/40'
                            : 'bg-amber-950 text-amber-300 border border-amber-800/40'
                        }`}
                      >
                        {activeTest.status}
                      </span>
                      <span className="text-xs text-slate-400">{activeTest.durationMs}ms</span>
                    </div>
                    <h3 className="text-sm font-bold text-white leading-snug">{activeTest.name}</h3>
                    <p className="text-[11px] text-slate-500 mt-1">{activeTest.fileLocation}</p>
                  </div>

                  {activeTest.failure && (
                    <button
                      onClick={handleCopyDiff}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#070B14] border border-white/10 text-xs text-emerald-400 hover:text-emerald-300 transition-colors shrink-0"
                    >
                      {copiedDiff ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedDiff ? 'Copied' : 'Copy Diff'}</span>
                    </button>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {activeTest.tags.map((tg) => (
                    <span key={tg} className="px-2 py-0.5 rounded bg-[#070B14] text-[10px] text-slate-300 border border-white/5">
                      #{tg}
                    </span>
                  ))}
                </div>

                {/* Assertion Failure Detail or Pass Success Summary */}
                {activeTest.failure ? (
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold text-rose-400 uppercase block">
                      Failure Diagnostic:
                    </span>
                    <div className="p-3 rounded-xl bg-[#070B14] border border-rose-500/20 text-xs space-y-2">
                      <p className="text-rose-300 font-bold">{activeTest.failure.errorName}</p>
                      <pre className="text-[11px] text-slate-300 whitespace-pre-wrap leading-relaxed">
                        {activeTest.failure.diffSnippet}
                      </pre>
                    </div>

                    <span className="text-[11px] font-bold text-slate-400 uppercase block pt-1">
                      Stack Trace:
                    </span>
                    <pre className="p-3 rounded-xl bg-[#070B14] border border-white/5 text-[10px] text-slate-400 overflow-x-auto leading-relaxed">
                      {activeTest.failure.stackTrace}
                    </pre>
                  </div>
                ) : (
                  <div className="p-6 rounded-xl bg-[#070B14] border border-emerald-500/20 text-center space-y-2 my-4">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                    <h4 className="text-sm font-bold text-white">All Assertions Satisfied</h4>
                    <p className="text-xs text-slate-400 font-sans">
                      Execution completed deterministically with zero assertion violations or timeout warnings.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
