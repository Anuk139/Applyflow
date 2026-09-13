import React from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  CreditCard, 
  ShieldCheck, 
  ChevronRight, 
  Building2, 
  BookmarkPlus,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { ServiceDetail } from '../../types/service';
import { useApp } from '../../context/AppContext';
import { calculateServiceReadiness } from '../../utils/readiness';

interface ServiceCardProps {
  service: ServiceDetail;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { 
    userVault, 
    navigateToService, 
    addApplication, 
    getApplicationByServiceId,
    setActiveTab 
  } = useApp();

  const readiness = calculateServiceReadiness(service, userVault);
  const existingApp = getApplicationByServiceId(service.id);

  const getStatusBadge = () => {
    if (readiness.status === 'ready') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          100% Ready
        </span>
      );
    }
    if (readiness.status === 'almost_ready') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          {readiness.readinessScore}% Prepared
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
        <AlertCircle className="w-3.5 h-3.5 text-slate-500" />
        {readiness.readinessScore}% Prepared
      </span>
    );
  };

  const getModeBadge = () => {
    switch (service.mode) {
      case 'online_only':
        return (
          <span className="text-[11px] font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-md">
            100% Online Paperless
          </span>
        );
      case 'hybrid_appointment':
        return (
          <span className="text-[11px] font-semibold text-sky-700 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded-md">
            Online Form + In-Person Visit
          </span>
        );
      default:
        return (
          <span className="text-[11px] font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">
            In-person
          </span>
        );
    }
  };

  const handleStartPlan = (e: React.MouseEvent) => {
    e.stopPropagation();
    addApplication(service.id, service.shortName, service.category);
    navigateToService(service.id);
  };

  return (
    <div 
      onClick={() => navigateToService(service.id)}
      className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-brand-300 transition-all cursor-pointer flex flex-col justify-between group relative overflow-hidden"
    >
      {/* Top Section */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex flex-wrap items-center gap-1.5">
            {getModeBadge()}
            {service.digiLockerAvailable && (
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">
                DigiLocker
              </span>
            )}
          </div>
          <div>{getStatusBadge()}</div>
        </div>

        <h3 className="font-extrabold text-lg text-slate-900 group-hover:text-brand-600 transition-colors tracking-tight line-clamp-1">
          {service.name}
        </h3>

        <p className="text-xs text-slate-500 font-medium flex items-center gap-1 mt-1">
          <Building2 className="w-3.5 h-3.5 text-slate-400" />
          <span className="truncate">{service.issuingAuthority}</span>
        </p>

        <p className="text-sm text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
          {service.tagline}
        </p>
      </div>

      {/* Middle Specs */}
      <div className="my-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-600">
        <div className="flex items-center gap-1.5">
          <CreditCard className="w-4 h-4 text-slate-400 flex-shrink-0" />
          <span className="font-medium truncate">{service.standardFee}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
          <span className="font-medium truncate">{service.estimatedDuration}</span>
        </div>
      </div>

      {/* Missing Items Hint if not 100% ready */}
      {readiness.status !== 'ready' && readiness.missingRequirements.length > 0 && (
        <div className="mb-3 bg-amber-50/70 border border-amber-200/80 rounded-lg p-2 text-[11px] text-amber-900">
          <span className="font-bold">Missing: </span>
          <span>{readiness.missingRequirements[0].requirementTitle}</span>
          {readiness.missingRequirements.length > 1 && (
            <span className="font-medium text-amber-700"> (+{readiness.missingRequirements.length - 1} more)</span>
          )}
        </div>
      )}

      {/* Bottom CTA Row */}
      <div className="flex items-center gap-2 pt-2">
        <button
          onClick={handleStartPlan}
          className="flex-1 py-2 px-3 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1 shadow-sm"
        >
          <span>Prepare & Guide</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        {existingApp ? (
          <span className="px-2.5 py-2 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 text-xs font-semibold whitespace-nowrap">
            In Planner
          </span>
        ) : (
          <button
            onClick={(e) => {
              e.stopPropagation();
              addApplication(service.id, service.shortName, service.category);
            }}
            title="Add to My Applications Tracker"
            className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <BookmarkPlus className="w-4 h-4" />
          </button>
        )}
      </div>

    </div>
  );
};
