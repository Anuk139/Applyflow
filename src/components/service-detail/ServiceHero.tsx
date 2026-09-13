import React from 'react';
import { 
  Building2, 
  Star, 
  Calendar, 
  ExternalLink, 
  ShieldCheck, 
  BookmarkPlus, 
  Printer, 
  Clock, 
  CreditCard,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { ServiceDetail } from '../../types/service';
import { useApp } from '../../context/AppContext';
import { calculateServiceReadiness } from '../../utils/readiness';

interface ServiceHeroProps {
  service: ServiceDetail;
  onPrint: () => void;
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({ service, onPrint }) => {
  const { 
    userVault, 
    addApplication, 
    getApplicationByServiceId, 
    setActiveTab 
  } = useApp();

  const readiness = calculateServiceReadiness(service, userVault);
  const existingApp = getApplicationByServiceId(service.id);

  const handleAddToTracker = () => {
    addApplication(service.id, service.shortName, service.category);
    setActiveTab('tracker');
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden border border-slate-800">
      
      {/* Glow background accent */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl space-y-5 relative z-10">
        
        {/* Category & Verified Badge */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs uppercase font-extrabold tracking-wider px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30">
            {service.category} Service
          </span>

          <div className="flex items-center gap-1 text-xs text-amber-300 bg-amber-950/60 border border-amber-800 px-2.5 py-1 rounded-full font-bold">
            <div className="flex">
              {[...Array(service.trustRating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span>Official Gov Standard</span>
          </div>

          <span className="flex items-center gap-1 text-xs text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>Verified: {service.lastVerifiedDate}</span>
          </span>
        </div>

        {/* Main Title & Tagline */}
        <div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            {service.name}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-2 font-medium leading-relaxed">
            {service.tagline}
          </p>
        </div>

        {/* Authority & Core Stats */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300 pt-1">
          <div className="flex items-center gap-1.5">
            <Building2 className="w-4 h-4 text-brand-400" />
            <span className="font-semibold text-white">{service.issuingAuthority}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CreditCard className="w-4 h-4 text-brand-400" />
            <span>Fee: <strong className="text-white">{service.standardFee}</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-brand-400" />
            <span>Timeline: <strong className="text-white">{service.estimatedDuration}</strong></span>
          </div>
        </div>

        {/* Readiness Meter Banner */}
        <div className="p-4 rounded-2xl bg-white/10 backdrop-blur border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Your Preparation Readiness:
              </span>
              <span className={`text-xs font-black px-2 py-0.5 rounded-full ${
                readiness.status === 'ready' 
                  ? 'bg-emerald-500 text-white' 
                  : readiness.status === 'almost_ready'
                  ? 'bg-amber-500 text-slate-900'
                  : 'bg-slate-700 text-slate-200'
              }`}>
                {readiness.readinessScore}% Ready
              </span>
            </div>
            
            <p className="text-xs text-slate-300">
              {readiness.status === 'ready' 
                ? '🎉 You have all mandatory documents prepared in your vault!' 
                : `Missing: ${readiness.missingRequirements.map(m => m.requirementTitle).join(', ')}`}
            </p>
          </div>

          <div className="w-full sm:w-48 bg-slate-800 rounded-full h-2.5 overflow-hidden border border-slate-700">
            <div 
              className={`h-full transition-all duration-500 rounded-full ${
                readiness.status === 'ready' 
                  ? 'bg-emerald-500' 
                  : readiness.status === 'almost_ready'
                  ? 'bg-amber-400'
                  : 'bg-brand-500'
              }`}
              style={{ width: `${Math.max(readiness.readinessScore, 5)}%` }}
            />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* Direct link to official portal */}
          <a
            href={service.officialPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-extrabold transition-all shadow-lg shadow-emerald-900/30 flex items-center gap-2"
          >
            <span>Open Verified Official Portal</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* Add to Applications Planner */}
          {existingApp ? (
            <button
              onClick={() => setActiveTab('tracker')}
              className="px-4 py-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs sm:text-sm font-bold border border-amber-500/40 transition-colors flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>In Applications Planner</span>
            </button>
          ) : (
            <button
              onClick={handleAddToTracker}
              className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold border border-white/20 transition-colors flex items-center gap-2"
            >
              <BookmarkPlus className="w-4 h-4" />
              <span>Add to My Application Planner</span>
            </button>
          )}

          {/* Print Checklist Button */}
          <button
            onClick={onPrint}
            className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold border border-slate-700 transition-colors flex items-center gap-2"
            title="Print or export checklist to PDF"
          >
            <Printer className="w-4 h-4" />
            <span>Print Preparation Sheet</span>
          </button>
        </div>

      </div>

    </div>
  );
};
