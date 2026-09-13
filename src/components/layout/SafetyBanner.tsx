import React from 'react';
import { ShieldAlert, CheckCircle2, Lock } from 'lucide-react';

export const SafetyBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white text-xs py-2 px-4 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        
        <div className="flex items-center gap-2 flex-1 min-w-[280px]">
          <span className="flex items-center justify-center p-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <Lock className="w-3.5 h-3.5" />
          </span>
          <p className="font-medium text-slate-200">
            <strong className="text-white">Official Government & Banking Safety Notice:</strong> Always check that portal URLs end in <code className="bg-black/30 px-1 py-0.5 rounded text-emerald-300 font-mono">.gov.in</code> or <code className="bg-black/30 px-1 py-0.5 rounded text-emerald-300 font-mono">.nic.in</code>.
          </p>
        </div>

        <div className="flex items-center gap-4 text-slate-300 text-[11px]">
          <span className="hidden sm:flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Zero Data Collected on Servers
          </span>
          <span className="flex items-center gap-1 text-amber-300">
            <ShieldAlert className="w-3.5 h-3.5" />
            Never enter OTPs on third-party sites
          </span>
        </div>

      </div>
    </div>
  );
};
