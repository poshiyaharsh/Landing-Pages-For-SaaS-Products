import React from 'react';
import { Database, HardDrive, CheckCircle2, ShieldCheck, RefreshCw, ArrowRight, Server } from 'lucide-react';
import { SAMPLE_DATABASES, SAMPLE_STORAGE } from '../data/sampleData';

interface DatabaseStorageProps {
  onToast: (title: string, desc?: string, type?: 'success' | 'info' | 'warning' | 'blue') => void;
}

export const DatabaseStorage: React.FC<DatabaseStorageProps> = ({ onToast }) => {
  const handleBackupNow = (dbName: string) => {
    onToast('Snapshot Scheduled', `Triggered point-in-time backup snapshot for ${dbName}.`, 'blue');
  };

  return (
    <section className="py-24 bg-white border-b border-nest-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-nest-blue font-semibold">
            STATEFUL SERVICES & PERSISTENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-nest-text mt-3">
            Keep your data services organized.
          </h2>
          <p className="text-base text-nest-secondary mt-4 leading-relaxed">
            Manage relational databases, low-latency in-memory caches, and S3-compatible object buckets with automated snapshots and storage growth controls.
          </p>
        </div>

        {/* Database Management Cards */}
        <div className="space-y-6 mb-12">
          <div className="flex items-center justify-between pb-2 border-b border-nest-border">
            <h3 className="text-base font-bold font-display text-nest-text flex items-center gap-2">
              <Database className="w-4 h-4 text-nest-blue" />
              Managed Database Clusters
            </h3>
            <span className="text-xs font-mono text-nest-muted">3 Instances Active</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SAMPLE_DATABASES.map((db) => (
              <div
                key={db.id}
                className="bg-nest-bg border border-nest-border rounded-nest-xl p-6 shadow-subtle hover:border-nest-blue/40 transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase bg-white border border-nest-border px-2 py-0.5 rounded text-nest-secondary font-medium">
                      {db.engine} {db.version}
                    </span>
                    <span className="text-[10px] font-mono text-nest-green flex items-center gap-1 font-semibold">
                      <CheckCircle2 className="w-3 h-3" /> {db.status}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold font-display text-nest-text">{db.name}</h4>
                  <span className="text-[11px] text-nest-secondary font-mono block mt-0.5">
                    Env: {db.environment} · {db.iops}
                  </span>

                  {/* Storage Meter */}
                  <div className="mt-4 p-3 bg-white border border-nest-border rounded-nest space-y-1.5 font-mono text-xs">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-nest-muted">Allocated Storage</span>
                      <span className="font-semibold text-nest-text">{db.storageUsed} / {db.storageTotal}</span>
                    </div>
                    <div className="w-full bg-nest-subtle h-1.5 rounded-full overflow-hidden">
                      <div className="bg-nest-blue h-full w-[43%]" />
                    </div>
                    <div className="flex justify-between text-[10px] text-nest-secondary pt-1">
                      <span>Active Conns: {db.connectionsActive}</span>
                      <span>Max Pool: {db.connectionsMax}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-nest-border/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-[10px] text-nest-muted truncate max-w-[160px]">{db.lastBackup}</span>
                  <button
                    onClick={() => handleBackupNow(db.name)}
                    className="text-nest-blue hover:underline text-[11px] font-semibold"
                  >
                    Snapshot Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Storage Buckets & Volumes */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-nest-border">
            <h3 className="text-base font-bold font-display text-nest-text flex items-center gap-2">
              <HardDrive className="w-4 h-4 text-nest-blue" />
              Object Storage & Persistent Volumes
            </h3>
            <span className="text-xs font-mono text-nest-muted">752 GB Total Stored</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SAMPLE_STORAGE.map((stg) => (
              <div
                key={stg.id}
                className="bg-nest-bg border border-nest-border rounded-nest-xl p-6 shadow-subtle flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono bg-white border border-nest-border px-2 py-0.5 rounded text-nest-secondary">
                      {stg.type}
                    </span>
                    <span className="text-[10px] font-mono text-nest-muted">{stg.region}</span>
                  </div>

                  <h4 className="text-sm font-bold font-display text-nest-text">{stg.name}</h4>
                  <span className="text-[11px] text-nest-secondary font-mono block mt-0.5">
                    {stg.objectsCount}
                  </span>

                  <div className="mt-4 p-3 bg-white border border-nest-border rounded-nest font-mono text-xs space-y-1">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-nest-muted">Capacity Consumed:</span>
                      <span className="font-semibold text-nest-text">{stg.capacityUsed}</span>
                    </div>
                    <div className="flex justify-between text-[10px] text-nest-secondary">
                      <span>Quota Limit:</span>
                      <span>{stg.capacityTotal}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-nest-border/60 text-[10px] font-mono text-nest-muted flex justify-between">
                  <span>Last activity:</span>
                  <span className="text-nest-secondary">{stg.lastActivity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
