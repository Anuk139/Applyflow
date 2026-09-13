import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight, 
  RotateCcw, 
  Filter, 
  FolderCheck,
  CheckSquare,
  Square,
  HelpCircle
} from 'lucide-react';
import { MASTER_DOCUMENTS } from '../../data/masterDocuments';
import { ALL_SERVICES } from '../../data/services';
import { useApp } from '../../context/AppContext';
import { calculateServiceReadiness } from '../../utils/readiness';

export const ReverseMatcher: React.FC = () => {
  const { 
    userVault, 
    toggleVaultDocument, 
    setVaultDocument, 
    resetVault, 
    navigateToService 
  } = useApp();

  const [filterCategory, setFilterCategory] = useState<string>('all');

  // Trigger confetti when user hits 100% on any service
  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // ignore
    }
  };

  const handleToggleDoc = (docId: string) => {
    toggleVaultDocument(docId);
  };

  const applyStudentPreset = () => {
    resetVault();
    const studentDocs = [
      'aadhaar_card',
      'mobile_linked_aadhaar',
      'marksheet_10th',
      'marksheet_12th',
      'passport_photo',
      'active_email',
      'bank_passbook_statement'
    ];
    studentDocs.forEach(id => setVaultDocument(id, true));
    triggerCelebration();
  };

  const applyCitizenPreset = () => {
    resetVault();
    const commonDocs = [
      'aadhaar_card',
      'pan_card',
      'voter_id',
      'mobile_linked_aadhaar',
      'electricity_bill',
      'bank_passbook_statement',
      'passport_photo'
    ];
    commonDocs.forEach(id => setVaultDocument(id, true));
    triggerCelebration();
  };

  // Evaluate readiness across all services
  const evaluatedServices = ALL_SERVICES.map(service => {
    return {
      service,
      readiness: calculateServiceReadiness(service, userVault)
    };
  });

  const readyServices = evaluatedServices.filter(item => item.readiness.status === 'ready');
  const almostReadyServices = evaluatedServices.filter(item => item.readiness.status === 'almost_ready');
  const missingServices = evaluatedServices.filter(item => item.readiness.status === 'missing_critical');

  const activeDocCount = Object.values(userVault).filter(Boolean).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-brand-900 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            Reverse Document Readiness Matcher
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            "What do I have?" → "What can I apply for?"
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Select the identity, address, and academic documents you currently possess. Our system instantly matches your checklist against official government and banking requirements to show exactly what you are prepared for.
          </p>

          {/* Quick Presets */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs text-slate-400 font-semibold mr-1">Quick Presets:</span>
            <button
              onClick={applyCitizenPreset}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/15 transition-colors"
            >
              Standard Adult Citizen (Aadhaar, PAN, Voter, Bank)
            </button>
            <button
              onClick={applyStudentPreset}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/15 transition-colors"
            >
              College Student (10th/12th Marksheet, Aadhaar, Bank)
            </button>
            <button
              onClick={resetVault}
              className="px-3 py-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-300 text-xs font-semibold border border-red-500/30 transition-colors flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              Reset All
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Document Selection (Left) vs Readiness Matches (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Master Documents Checklist */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm sticky top-20">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div>
                <h2 className="font-bold text-base text-slate-900 flex items-center gap-2">
                  <FolderCheck className="w-5 h-5 text-brand-600" />
                  <span>I Currently Have:</span>
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Check all documents available in original or digital format
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 font-bold text-xs border border-brand-200">
                {activeDocCount} Selected
              </span>
            </div>

            {/* Checklist Items */}
            <div className="space-y-1.5 max-h-[60vh] overflow-y-auto pr-1">
              {MASTER_DOCUMENTS.map((doc) => {
                const isChecked = !!userVault[doc.id];
                return (
                  <div
                    key={doc.id}
                    onClick={() => handleToggleDoc(doc.id)}
                    className={`flex items-start gap-3 p-2.5 rounded-xl border transition-all cursor-pointer select-none ${
                      isChecked
                        ? 'bg-brand-50/70 border-brand-300 text-slate-900 shadow-xs'
                        : 'bg-white border-slate-100 text-slate-700 hover:bg-slate-50 hover:border-slate-200'
                    }`}
                  >
                    <div className="mt-0.5 flex-shrink-0 text-brand-600">
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 fill-brand-600 text-white" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-300" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-xs text-slate-900 leading-tight">
                        {doc.name}
                      </div>
                      <p className="text-[11px] text-slate-500 truncate mt-0.5">
                        {doc.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Matched Services */}
        <div className="lg:col-span-7 space-y-6">

          {/* Summary Overview Bar */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black text-emerald-700">
                {readyServices.length}
              </div>
              <div className="text-xs font-bold text-emerald-800 mt-1 flex items-center justify-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Ready</span>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black text-amber-700">
                {almostReadyServices.length}
              </div>
              <div className="text-xs font-bold text-amber-800 mt-1 flex items-center justify-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Almost Ready</span>
              </div>
            </div>

            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black text-slate-700">
                {missingServices.length}
              </div>
              <div className="text-xs font-bold text-slate-600 mt-1 flex items-center justify-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 text-slate-400" />
                <span>Action Needed</span>
              </div>
            </div>
          </div>

          {/* Section 1: 🟢 100% Ready to Apply */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <h2 className="font-extrabold text-base text-slate-900 tracking-tight">
                🟢 Ready to Apply Immediately ({readyServices.length})
              </h2>
            </div>

            {readyServices.length === 0 ? (
              <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-6 text-center text-slate-500 text-sm">
                No services fully matched yet. Tick more documents on the left (e.g. Aadhaar, PAN, Photo) to unlock ready-to-apply applications!
              </div>
            ) : (
              <div className="space-y-3">
                {readyServices.map(({ service, readiness }) => (
                  <div 
                    key={service.id}
                    className="bg-white rounded-2xl border-2 border-emerald-500/40 p-5 shadow-sm hover:shadow-md transition-all space-y-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                            {service.category}
                          </span>
                          <span className="text-xs text-slate-500">
                            {service.issuingAuthority}
                          </span>
                        </div>
                        <h3 className="font-black text-lg text-slate-900 mt-1">
                          {service.name}
                        </h3>
                        <p className="text-xs text-slate-600 mt-0.5">
                          {service.tagline}
                        </p>
                      </div>

                      <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black border border-emerald-300 whitespace-nowrap">
                        100% Matched
                      </span>
                    </div>

                    {/* All matched items */}
                    <div className="bg-emerald-50/60 rounded-xl p-3 border border-emerald-100">
                      <div className="text-[11px] font-bold text-emerald-900 uppercase tracking-wide mb-1.5">
                        Matched Requirements ({readiness.availableItems.length}):
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {readiness.availableItems.map((item, idx) => (
                          <span key={idx} className="text-xs bg-white text-emerald-800 px-2 py-0.5 rounded-md border border-emerald-200 font-medium">
                            ✓ {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs text-slate-500 font-medium">
                        Standard Fee: <strong className="text-slate-800">{service.standardFee}</strong>
                      </span>
                      <button
                        onClick={() => navigateToService(service.id)}
                        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
                      >
                        <span>Start Visual Preparation</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Section 2: 🟡 Almost Ready (Need 1 or 2 extra documents) */}
          <div className="space-y-3 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <h2 className="font-extrabold text-base text-slate-900 tracking-tight">
                🟡 Almost Ready — Additional Document Required ({almostReadyServices.length})
              </h2>
            </div>

            <div className="space-y-3">
              {almostReadyServices.map(({ service, readiness }) => (
                <div 
                  key={service.id}
                  className="bg-white rounded-2xl border border-amber-300/80 p-5 shadow-sm hover:shadow-md transition-all space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                          {service.category}
                        </span>
                        <span className="text-xs text-slate-500">
                          {service.issuingAuthority}
                        </span>
                      </div>
                      <h3 className="font-black text-lg text-slate-900 mt-1">
                        {service.name}
                      </h3>
                      <p className="text-xs text-slate-600 mt-0.5">
                        {service.tagline}
                      </p>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-black border border-amber-300 whitespace-nowrap">
                      {readiness.readinessScore}% Ready
                    </span>
                  </div>

                  {/* Missing Requirement Alert Box */}
                  <div className="bg-amber-50 rounded-xl p-3 border border-amber-200 space-y-1.5">
                    <div className="text-[11px] font-bold text-amber-900 uppercase tracking-wide">
                      Missing To Reach 100%:
                    </div>
                    {readiness.missingRequirements.map((m, idx) => (
                      <div key={idx} className="text-xs text-amber-950 flex items-start gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-bold">{m.requirementTitle}:</strong>{' '}
                          <span className="text-amber-800">Need any one of: {m.suggestedOptions.slice(0, 3).join(', ')}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs text-slate-500 font-medium">
                      Estimated Duration: <strong className="text-slate-800">{service.estimatedDuration}</strong>
                    </span>
                    <button
                      onClick={() => navigateToService(service.id)}
                      className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
                    >
                      <span>View Preparation Steps</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: 🔴 Action Needed */}
          {missingServices.length > 0 && (
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-400" />
                <h2 className="font-extrabold text-base text-slate-700 tracking-tight">
                  🔴 Major Prerequisites Missing ({missingServices.length})
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {missingServices.map(({ service, readiness }) => (
                  <div 
                    key={service.id}
                    onClick={() => navigateToService(service.id)}
                    className="bg-white rounded-xl border border-slate-200 p-4 hover:border-slate-300 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-bold text-sm text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-1">
                        {service.name}
                      </h4>
                      <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                        {readiness.readinessScore}%
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                      Needs: {readiness.missingRequirements.map(m => m.requirementTitle).join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
