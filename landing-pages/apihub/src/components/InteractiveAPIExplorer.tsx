import React, { useState } from 'react';
import { 
  Play, 
  Copy, 
  Check, 
  Trash2, 
  Terminal, 
  RotateCcw, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  ArrowRight,
  Database,
  Filter,
  Code
} from 'lucide-react';
import { SAMPLE_ENDPOINTS, INITIAL_REQUEST_HISTORY } from '../data/sampleData';
import { ApiEndpoint, HttpMethod, ApiRequestHistoryItem } from '../types';

interface InteractiveAPIExplorerProps {
  onShowToast: (msg: string) => void;
}

export const InteractiveAPIExplorer: React.FC<InteractiveAPIExplorerProps> = ({ onShowToast }) => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<ApiEndpoint>(SAMPLE_ENDPOINTS[1]); // Default to POST charge
  const [method, setMethod] = useState<HttpMethod>(SAMPLE_ENDPOINTS[1].method);
  const [path, setPath] = useState(SAMPLE_ENDPOINTS[1].path);
  const [requestBody, setRequestBody] = useState(SAMPLE_ENDPOINTS[1].sampleBody || '');
  const [headers, setHeaders] = useState<Record<string, string>>(SAMPLE_ENDPOINTS[1].defaultHeaders);
  const [activeTab, setActiveTab] = useState<'body' | 'headers' | 'schema'>('body');
  const [history, setHistory] = useState<ApiRequestHistoryItem[]>(INITIAL_REQUEST_HISTORY);
  
  // Execution state
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<any>(SAMPLE_ENDPOINTS[1].mockResponse);
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [copiedResponse, setCopiedResponse] = useState(false);
  const [copiedCurl, setCopiedCurl] = useState(false);

  // Switch endpoint
  const handleSelectEndpoint = (ep: ApiEndpoint) => {
    setSelectedEndpoint(ep);
    setMethod(ep.method);
    setPath(ep.path);
    setRequestBody(ep.sampleBody || '');
    setHeaders(ep.defaultHeaders);
    setResponse(ep.mockResponse);
    setJsonError(null);
    onShowToast(`Loaded endpoint: ${ep.method} ${ep.path}`);
  };

  // Send request simulation
  const handleSendRequest = () => {
    setJsonError(null);

    // Validate JSON if method is POST or PATCH and body is provided
    if ((method === 'POST' || method === 'PATCH') && requestBody.trim()) {
      try {
        JSON.parse(requestBody);
      } catch (err: any) {
        setJsonError(`Invalid JSON syntax: ${err.message}`);
        return;
      }
    }

    setIsLoading(true);

    // Realistic network simulation delay
    setTimeout(() => {
      setIsLoading(false);

      // Check if path matches mock
      let calculatedResponse = { ...selectedEndpoint.mockResponse };
      
      // If user modified body, reflect it in response where appropriate
      if ((method === 'POST' || method === 'PATCH') && requestBody.trim()) {
        try {
          const parsed = JSON.parse(requestBody);
          calculatedResponse = {
            ...calculatedResponse,
            data: {
              ...calculatedResponse.data,
              echoed_request_payload: parsed,
              timestamp_received: new Date().toISOString()
            }
          };
        } catch {
          // ignore
        }
      }

      setResponse(calculatedResponse);

      // Add to history
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
      const newHistoryItem: ApiRequestHistoryItem = {
        id: `req-${Date.now()}`,
        timestamp: timeStr,
        method: method,
        path: path,
        status: calculatedResponse.status,
        latency: calculatedResponse.latency + Math.floor(Math.random() * 8)
      };

      setHistory(prev => [newHistoryItem, ...prev.slice(0, 7)]);
      onShowToast(`Simulated request completed with HTTP ${calculatedResponse.status}`);
    }, 450);
  };

  const handleCopyResponse = () => {
    navigator.clipboard.writeText(JSON.stringify(response.data, null, 2));
    setCopiedResponse(true);
    onShowToast('Response JSON copied to clipboard');
    setTimeout(() => setCopiedResponse(false), 2000);
  };

  const handleCopyCurl = () => {
    const curl = `curl -X ${method} https://api.hyperion.dev${path} \\\n  -H "Authorization: ${headers['Authorization'] || 'Bearer key'}" ${requestBody ? `\\\n  -d '${requestBody.replace(/\n/g, '')}'` : ''}`;
    navigator.clipboard.writeText(curl);
    setCopiedCurl(true);
    onShowToast('cURL command copied to clipboard');
    setTimeout(() => setCopiedCurl(false), 2000);
  };

  const handleReset = () => {
    handleSelectEndpoint(selectedEndpoint);
    onShowToast('Endpoint state restored to default fixture.');
  };

  const handleClearHistory = () => {
    setHistory([]);
    onShowToast('Request history cleared.');
  };

  return (
    <section id="explorer" className="py-24 bg-[#080C14] border-t border-slate-800 font-mono relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/60 text-cyan-300 text-xs tracking-wide mb-4">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            INTERACTIVE API EXPLORER
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Test and inspect APIs in real-time
          </h2>
          <p className="mt-4 text-zinc-400 font-sans text-base leading-relaxed">
            Execute deterministic local API requests, inspect HTTP headers, evaluate JSON schemas, and review sanitized responses in a safe sandbox.
          </p>
          <div className="mt-3 text-xs text-zinc-500 font-mono">
            * Fully client-side interactive simulation &mdash; no unauthenticated external network requests are made.
          </div>
        </div>

        {/* Main Explorer Console Card */}
        <div className="rounded-2xl border border-slate-800 bg-[#0B0F19] shadow-2xl shadow-cyan-950/30 overflow-hidden">
          {/* Top URL Bar with Method Selector */}
          <div className="p-4 sm:p-5 border-b border-slate-800/90 bg-slate-950/70 flex flex-col md:flex-row items-stretch md:items-center gap-3">
            <div className="flex items-center gap-2">
              {/* Method Selector */}
              <select
                value={method}
                onChange={(e) => setMethod(e.target.value as HttpMethod)}
                className={`px-3 py-2 rounded-lg font-bold text-xs border focus:outline-none transition-colors ${
                  method === 'GET' ? 'bg-emerald-950/80 border-emerald-800 text-emerald-400' :
                  method === 'POST' ? 'bg-cyan-950/80 border-cyan-800 text-cyan-400' :
                  method === 'PATCH' ? 'bg-purple-950/80 border-purple-800 text-purple-400' :
                  'bg-slate-800 border-slate-700 text-white'
                }`}
              >
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PATCH">PATCH</option>
                <option value="DELETE">DELETE</option>
              </select>

              {/* Host prefix */}
              <div className="hidden sm:flex items-center px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-zinc-500">
                https://api.hyperion.dev
              </div>
            </div>

            {/* Path Input */}
            <div className="flex-grow flex items-center rounded-lg bg-slate-900 border border-slate-700 focus-within:border-cyan-400 px-3 py-2 text-xs">
              <span className="text-zinc-500 sm:hidden">https://api.hyperion.dev</span>
              <input
                type="text"
                value={path}
                onChange={(e) => setPath(e.target.value)}
                className="bg-transparent text-white focus:outline-none flex-grow font-mono pl-1"
                placeholder="/v2/endpoint"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleSendRequest}
                disabled={isLoading}
                className="flex-grow sm:flex-initial px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-black font-semibold text-xs tracking-wide transition-all shadow-md shadow-cyan-950/50 flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {isLoading ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Executing...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Send demo request</span>
                  </>
                )}
              </button>

              <button
                onClick={handleCopyCurl}
                title="Copy as cURL"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-zinc-400 hover:text-white transition-colors"
                aria-label="Copy cURL"
              >
                {copiedCurl ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>

              <button
                onClick={handleReset}
                title="Reset Fixture"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-zinc-400 hover:text-white transition-colors"
                aria-label="Reset endpoint state"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main workspace body: Left catalog, Middle request editor, Right response inspector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
            {/* Column 1: Endpoint Catalog (3 cols) */}
            <div className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-slate-800/80 p-4 bg-[#080C14]">
              <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-3 px-1">
                <span className="uppercase tracking-wider font-semibold">Sample Endpoints</span>
                <span className="text-cyan-400">{SAMPLE_ENDPOINTS.length} available</span>
              </div>

              <div className="space-y-1.5">
                {SAMPLE_ENDPOINTS.map((ep) => {
                  const isSelected = selectedEndpoint.id === ep.id;
                  return (
                    <button
                      key={ep.id}
                      onClick={() => handleSelectEndpoint(ep)}
                      className={`w-full text-left p-2.5 rounded-xl text-xs transition-all flex flex-col gap-1 ${
                        isSelected 
                          ? 'bg-slate-800/90 border border-cyan-500/50 text-white shadow-sm' 
                          : 'hover:bg-slate-900/60 border border-transparent text-zinc-400'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded font-mono ${
                          ep.method === 'GET' ? 'bg-emerald-950 text-emerald-400' :
                          ep.method === 'POST' ? 'bg-cyan-950 text-cyan-400' : 'bg-purple-950 text-purple-400'
                        }`}>
                          {ep.method}
                        </span>
                        <span className="text-[10px] text-zinc-500 font-mono">{ep.version}</span>
                      </div>
                      <span className="text-xs font-semibold text-zinc-200 truncate">{ep.name}</span>
                      <span className="text-[11px] text-zinc-500 truncate font-mono">{ep.path}</span>
                    </button>
                  );
                })}
              </div>

              {/* Request History snippet */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-2 px-1">
                  <span className="uppercase tracking-wider font-semibold">Recent Executions</span>
                  {history.length > 0 && (
                    <button 
                      onClick={handleClearHistory}
                      className="text-zinc-500 hover:text-rose-400 transition-colors p-0.5"
                      title="Clear History"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  )}
                </div>

                <div className="space-y-1">
                  {history.map((item) => (
                    <div 
                      key={item.id}
                      className="p-1.5 rounded-lg bg-slate-950/60 border border-slate-800/60 text-[10px] flex items-center justify-between font-mono"
                    >
                      <div className="flex items-center gap-1.5 truncate">
                        <span className={item.status < 300 ? 'text-emerald-400' : 'text-rose-400'}>
                          {item.status}
                        </span>
                        <span className="text-zinc-400 truncate">{item.path}</span>
                      </div>
                      <span className="text-zinc-500 flex-shrink-0">{item.latency}ms</span>
                    </div>
                  ))}
                  {history.length === 0 && (
                    <div className="text-[11px] text-zinc-600 italic py-2 text-center">
                      No request history yet.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Column 2: Request Config Tabs (4 cols) */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-800/80 p-4 bg-[#0B0F19] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 border-b border-slate-800/80 pb-2 mb-3">
                  <button
                    onClick={() => setActiveTab('body')}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                      activeTab === 'body' ? 'bg-slate-800 text-cyan-400' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    JSON Body
                  </button>
                  <button
                    onClick={() => setActiveTab('headers')}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                      activeTab === 'headers' ? 'bg-slate-800 text-cyan-400' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Headers ({Object.keys(headers).length})
                  </button>
                  <button
                    onClick={() => setActiveTab('schema')}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                      activeTab === 'schema' ? 'bg-slate-800 text-cyan-400' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Parameters
                  </button>
                </div>

                {/* Tab content */}
                {activeTab === 'body' && (
                  <div>
                    <div className="text-[11px] text-zinc-500 mb-2 flex items-center justify-between">
                      <span>Editable Payload</span>
                      <span className="text-[10px] text-cyan-500/80">application/json</span>
                    </div>
                    <textarea
                      value={requestBody}
                      onChange={(e) => {
                        setRequestBody(e.target.value);
                        setJsonError(null);
                      }}
                      rows={14}
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-cyan-300 font-mono focus:outline-none focus:border-cyan-400 leading-relaxed resize-none"
                      placeholder="{\n  // Enter JSON request body\n}"
                    />
                    {jsonError && (
                      <div className="mt-2 p-2.5 rounded-lg bg-rose-950/70 border border-rose-800/80 text-rose-300 text-xs flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>{jsonError}</span>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'headers' && (
                  <div className="space-y-2">
                    <div className="text-[11px] text-zinc-500 mb-2">Configured Request Headers</div>
                    {Object.entries(headers).map(([k, v], idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs">
                        <input
                          type="text"
                          readOnly
                          value={k}
                          className="w-1/2 p-2 rounded-lg bg-slate-950 border border-slate-800 text-zinc-300 font-mono"
                        />
                        <input
                          type="text"
                          value={v}
                          onChange={(e) => {
                            const newHeaders = { ...headers, [k]: e.target.value };
                            setHeaders(newHeaders);
                          }}
                          className="w-1/2 p-2 rounded-lg bg-slate-900 border border-slate-700 text-cyan-300 font-mono focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'schema' && (
                  <div className="space-y-3">
                    <div className="text-[11px] text-zinc-500 mb-1">OpenAPI 3.1 Parameters</div>
                    {selectedEndpoint.schema.parameters.map((param, pIdx) => (
                      <div key={pIdx} className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-xs">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-white">{param.name}</span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-zinc-400">
                            {param.in} &bull; {param.type}
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-400 font-sans">{param.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-slate-800/80 text-[11px] text-zinc-500">
                <span className="text-zinc-400">Category:</span> {selectedEndpoint.category}
              </div>
            </div>

            {/* Column 3: Live Response Inspector (5 cols) */}
            <div className="lg:col-span-5 p-4 bg-[#080C14] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                      response.status < 300 ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/60' : 'bg-rose-950 text-rose-400'
                    }`}>
                      {response.status} {response.statusText}
                    </span>
                    <span className="text-[11px] text-zinc-400 font-mono">
                      {response.latency}ms
                    </span>
                    <span className="text-[11px] text-zinc-500 font-mono">
                      {response.size}
                    </span>
                  </div>

                  <button
                    onClick={handleCopyResponse}
                    className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-zinc-400 hover:text-white transition-colors flex items-center gap-1 text-xs"
                    aria-label="Copy Response JSON"
                  >
                    {copiedResponse ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>JSON</span>
                  </button>
                </div>

                {/* Pretty printed JSON output */}
                <div className="relative">
                  <pre className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-emerald-300 font-mono overflow-x-auto max-h-[380px] leading-relaxed select-text">
                    {JSON.stringify(response.data, null, 2)}
                  </pre>
                </div>
              </div>

              {/* Response Headers footer */}
              <div className="mt-4 pt-3 border-t border-slate-800/80">
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1.5">Returned Edge Headers</div>
                <div className="grid grid-cols-2 gap-1 text-[10px] font-mono text-zinc-400">
                  {Object.entries(response.headers || {}).slice(0, 4).map(([hk, hv], hIdx) => (
                    <div key={hIdx} className="truncate">
                      <span className="text-zinc-500">{hk}:</span> {String(hv)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
