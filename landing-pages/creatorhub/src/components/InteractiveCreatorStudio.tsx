import React, { useState } from 'react';
import {
  Calendar as CalendarIcon,
  List,
  Filter,
  Copy,
  Check,
  RotateCcw,
  Sparkles,
  Save,
  Video,
  Eye,
  CheckSquare,
  Square,
  Share2,
  Tag,
  DollarSign,
  TrendingUp,
} from 'lucide-react';
import { initialContentItems, sampleCampaigns } from '../data/sampleData';
import { ContentItem, CreatorPlatform, ContentStatus, BrandCampaign } from '../types';

interface InteractiveCreatorStudioProps {
  onShowToast: (msg: string, type?: 'success' | 'info') => void;
}

export const InteractiveCreatorStudio: React.FC<InteractiveCreatorStudioProps> = ({ onShowToast }) => {
  const [contentList, setContentList] = useState<ContentItem[]>(initialContentItems);
  const [campaigns, setCampaigns] = useState<BrandCampaign[]>(sampleCampaigns);
  const [selectedPlatform, setSelectedPlatform] = useState<CreatorPlatform>('all');
  const [selectedItemId, setSelectedItemId] = useState<string>(initialContentItems[0].id);
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('calendar');
  const [copiedCaption, setCopiedCaption] = useState(false);

  // Active selected content item
  const selectedItem = contentList.find((i) => i.id === selectedItemId) || contentList[0];

  // Filtering
  const filteredItems = selectedPlatform === 'all'
    ? contentList
    : contentList.filter((item) => item.platform === selectedPlatform);

  // Update item details
  const handleUpdateTitle = (newTitle: string) => {
    setContentList((prev) =>
      prev.map((item) => (item.id === selectedItem.id ? { ...item, title: newTitle } : item))
    );
  };

  const handleUpdateStatus = (newStatus: ContentStatus) => {
    setContentList((prev) =>
      prev.map((item) => (item.id === selectedItem.id ? { ...item, status: newStatus } : item))
    );
    onShowToast(`Content status updated to "${newStatus.toUpperCase()}"`, 'success');
  };

  const handleCopyCaption = () => {
    navigator.clipboard.writeText(selectedItem.caption);
    setCopiedCaption(true);
    onShowToast('Caption and hashtags copied to clipboard!', 'success');
    setTimeout(() => setCopiedCaption(false), 2000);
  };

  const handleToggleTask = (campaignId: string, taskId: string) => {
    setCampaigns((prev) =>
      prev.map((camp) => {
        if (camp.id !== campaignId) return camp;
        return {
          ...camp,
          tasks: camp.tasks.map((t) => (t.id === taskId ? { ...t, completed: !t.completed } : t)),
        };
      })
    );
    onShowToast('Sponsor deliverable checklist updated.', 'info');
  };

  const handleSaveDemoState = () => {
    onShowToast('Studio draft changes saved in browser memory! (Local demo simulation)', 'success');
  };

  const handleResetDemoState = () => {
    setContentList(initialContentItems);
    setCampaigns(sampleCampaigns);
    setSelectedPlatform('all');
    setSelectedItemId(initialContentItems[0].id);
    onShowToast('Studio reset to clean initial demo state.', 'info');
  };

  return (
    <section id="studio" className="py-20 md:py-28 bg-[#0F0C1B] border-t border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-semibold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE CREATOR WORKSPACE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Your weekly production studio.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Switch between calendar and list views, edit live content titles, toggle status checkpoints, and manage sponsor campaign tasks.
          </p>
        </div>

        {/* Studio Console */}
        <div className="rounded-3xl bg-[#140F24] border border-white/10 shadow-2xl overflow-hidden">
          {/* Top Filter and Action Bar */}
          <div className="p-4 sm:p-5 bg-[#1B142F] border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            {/* Platform Filter Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
              <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 whitespace-nowrap">
                <Filter className="w-3.5 h-3.5 text-pink-400" /> Platform:
              </span>
              <div className="inline-flex rounded-xl bg-[#0B0A10] p-1 border border-white/10 text-xs">
                {(['all', 'youtube', 'tiktok', 'newsletter', 'podcast', 'instagram'] as CreatorPlatform[]).map(
                  (plat) => (
                    <button
                      key={plat}
                      onClick={() => {
                        setSelectedPlatform(plat);
                        onShowToast(`Filtered by ${plat.toUpperCase()}`, 'info');
                      }}
                      className={`px-3 py-1 rounded-lg font-medium capitalize transition-all whitespace-nowrap ${
                        selectedPlatform === plat
                          ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold shadow'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {plat === 'all' ? 'All Channels' : plat}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* View Switcher & Demo Action Controls */}
            <div className="flex items-center gap-2.5">
              <div className="inline-flex rounded-xl bg-[#0B0A10] p-1 border border-white/10 text-xs">
                <button
                  onClick={() => setViewMode('calendar')}
                  className={`px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-all ${
                    viewMode === 'calendar'
                      ? 'bg-pink-500/20 text-pink-300 font-bold border border-pink-500/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <CalendarIcon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Calendar</span>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-all ${
                    viewMode === 'list'
                      ? 'bg-pink-500/20 text-pink-300 font-bold border border-pink-500/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <List className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">List View</span>
                </button>
              </div>

              <button
                onClick={handleSaveDemoState}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 border border-pink-500/30 text-xs font-semibold transition-colors"
                title="Save current studio state locally"
              >
                <Save className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Save</span>
              </button>

              <button
                onClick={handleResetDemoState}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-xs font-medium transition-colors"
                title="Reset to original mock content"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            </div>
          </div>

          {/* Local state disclosure banner */}
          <div className="bg-pink-950/30 border-b border-pink-500/20 px-4 py-2 flex items-center justify-between text-[11px] text-pink-300">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-pink-400 shrink-0" />
              Interactive Creator Sandbox — Edits are maintained in local client memory. No real accounts are altered.
            </span>
            <span className="hidden md:inline font-mono text-slate-400">Total Items: {filteredItems.length}</span>
          </div>

          {/* Main 2-Column Studio Workspace */}
          <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Content Items (Calendar or List) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>Production Pipeline</span>
                  <span className="px-2 py-0.5 rounded-md bg-white/10 text-xs text-pink-300 font-mono">
                    {selectedPlatform.toUpperCase()}
                  </span>
                </h3>
                <span className="text-xs text-slate-400">Click any card to inspect & edit</span>
              </div>

              {viewMode === 'calendar' ? (
                /* Calendar Grid Layout */
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {filteredItems.map((item) => {
                    const isSelected = item.id === selectedItem.id;
                    return (
                      <div
                        key={item.id}
                        onClick={() => setSelectedItemId(item.id)}
                        className={`p-4 rounded-2xl cursor-pointer transition-all border relative flex flex-col justify-between ${
                          isSelected
                            ? 'bg-[#22183D] border-pink-500 shadow-lg shadow-pink-500/20 ring-1 ring-pink-500'
                            : 'bg-[#181229] border-white/5 hover:border-white/20'
                        }`}
                      >
                        <div>
                          {/* Top Tag & Status */}
                          <div className="flex items-center justify-between gap-2 mb-2.5">
                            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/10 text-pink-300 font-bold">
                              {item.platform}
                            </span>
                            <span
                              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full capitalize ${
                                item.status === 'published'
                                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/40'
                                  : item.status === 'scheduled'
                                  ? 'bg-violet-950 text-violet-300 border border-violet-800/40'
                                  : 'bg-amber-950 text-amber-300 border border-amber-800/40'
                              }`}
                            >
                              {item.status}
                            </span>
                          </div>

                          {/* Gradient Thumbnail Bar */}
                          <div
                            className={`w-full h-12 rounded-xl bg-gradient-to-r ${item.thumbnailGradient} p-2 mb-3 flex items-end justify-between shadow-inner`}
                          >
                            <span className="text-[10px] text-white/90 font-mono drop-shadow">
                              {item.viewsEstimate}
                            </span>
                            {item.sponsorPayout && (
                              <span className="px-1.5 py-0.5 rounded bg-black/50 text-[10px] font-mono text-emerald-300 font-bold">
                                {item.sponsorPayout}
                              </span>
                            )}
                          </div>

                          {/* Title */}
                          <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-2 leading-snug mb-2">
                            {item.title}
                          </h4>
                        </div>

                        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                          <span>{item.scheduledDate}</span>
                          {isSelected && <span className="text-pink-400 font-bold">Active</span>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* List View Layout */
                <div className="space-y-2">
                  {filteredItems.map((item) => {
                    const isSelected = item.id === selectedItem.id;
                    return (
                      <div
                        key={item.id}
                        onClick={() => setSelectedItemId(item.id)}
                        className={`p-3.5 rounded-xl cursor-pointer transition-all border flex items-center justify-between gap-3 ${
                          isSelected
                            ? 'bg-[#22183D] border-pink-500'
                            : 'bg-[#181229] border-white/5 hover:border-white/15'
                        }`}
                      >
                        <div className="flex items-center gap-3 truncate">
                          <div
                            className={`w-10 h-10 rounded-lg shrink-0 bg-gradient-to-r ${item.thumbnailGradient} flex items-center justify-center text-white text-xs font-bold`}
                          >
                            <Video className="w-4 h-4" />
                          </div>
                          <div className="truncate">
                            <span className="text-[10px] font-mono text-pink-400 uppercase mr-2">
                              {item.platform}
                            </span>
                            <span className="text-xs sm:text-sm font-semibold text-white truncate block sm:inline">
                              {item.title}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                          <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                            {item.scheduledDate}
                          </span>
                          <span
                            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full capitalize ${
                              item.status === 'published'
                                ? 'bg-emerald-950 text-emerald-300'
                                : item.status === 'scheduled'
                                ? 'bg-violet-950 text-violet-300'
                                : 'bg-amber-950 text-amber-300'
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Right Column: Active Content Inspector & Campaign Checklist */}
            <div className="lg:col-span-5 space-y-5">
              {/* Content Detail Panel */}
              <div className="p-5 rounded-2xl bg-[#1B142F] border border-white/10 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                    <Video className="w-4 h-4 text-pink-400" /> Detail Inspector
                  </span>
                  <div className="flex items-center gap-1">
                    {(['draft', 'scheduled', 'published'] as ContentStatus[]).map((st) => (
                      <button
                        key={st}
                        onClick={() => handleUpdateStatus(st)}
                        className={`px-2 py-0.5 rounded text-[10px] font-semibold capitalize transition-all ${
                          selectedItem.status === st
                            ? 'bg-pink-500 text-white font-bold'
                            : 'bg-white/5 text-slate-400 hover:text-white'
                        }`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Editable Title */}
                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-1">
                    Content Title (Editable)
                  </label>
                  <input
                    type="text"
                    value={selectedItem.title}
                    onChange={(e) => handleUpdateTitle(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#0B0A10] border border-white/10 text-white text-xs sm:text-sm font-semibold focus:outline-none focus:border-pink-500"
                  />
                </div>

                {/* Performance & Sponsor Callout */}
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-[#140F24] border border-white/5">
                    <span className="text-[10px] text-slate-400 block">Est. Reach</span>
                    <span className="text-white font-bold">{selectedItem.viewsEstimate}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#140F24] border border-white/5">
                    <span className="text-[10px] text-slate-400 block">Sponsor Value</span>
                    <span className="text-emerald-400 font-bold">
                      {selectedItem.sponsorPayout || 'Organic Content'}
                    </span>
                  </div>
                </div>

                {/* Caption & Copy Action */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-medium text-slate-300">Caption & Tagline</span>
                    <button
                      onClick={handleCopyCaption}
                      className="text-[11px] font-semibold text-pink-400 hover:text-pink-300 flex items-center gap-1 font-mono"
                    >
                      {copiedCaption ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedCaption ? 'Copied' : 'Copy Caption'}</span>
                    </button>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0B0A10] border border-white/10 text-xs text-slate-300 leading-relaxed font-sans">
                    {selectedItem.caption}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {selectedItem.tags.map((tg) => (
                      <span key={tg} className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-pink-300 font-mono">
                        {tg}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Active Brand Campaign Deliverables Checklist */}
              <div className="p-5 rounded-2xl bg-[#1B142F] border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4 text-emerald-400" /> Active Sponsor Deliverables
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">$7,500 contracted</span>
                </div>

                <div className="space-y-3 pt-1">
                  {campaigns.map((camp) => (
                    <div key={camp.id} className="p-3 rounded-xl bg-[#140F24] border border-white/5 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-white">{camp.brand}</span>
                        <span className="text-emerald-400 font-mono font-semibold">{camp.payout}</span>
                      </div>
                      <p className="text-[11px] text-slate-400">{camp.deliverable}</p>

                      <div className="space-y-1.5 pt-1">
                        {camp.tasks.map((task) => (
                          <div
                            key={task.id}
                            onClick={() => handleToggleTask(camp.id, task.id)}
                            className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer hover:text-white transition-colors"
                          >
                            {task.completed ? (
                              <CheckSquare className="w-4 h-4 text-pink-400 shrink-0" />
                            ) : (
                              <Square className="w-4 h-4 text-slate-500 shrink-0" />
                            )}
                            <span className={task.completed ? 'line-through text-slate-500' : ''}>
                              {task.title}
                            </span>
                          </div>
                        ))}
                      </div>
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
