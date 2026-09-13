import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  ExternalLink, 
  ShieldCheck, 
  Clock, 
  CreditCard, 
  AlertTriangle, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Layers, 
  Building,
  Lock,
  Search,
  Check,
  Info
} from 'lucide-react';
import { ServiceDetail } from '../../types/service';
import { useApp } from '../../context/AppContext';

interface SectionProps {
  service: ServiceDetail;
}

// 01: Overview & Essential Facts
export const OverviewSection: React.FC<SectionProps> = ({ service }) => {
  return (
    <section id="sec-overview" className="space-y-4 pt-6">
      <div className="border-b border-slate-200 pb-3">
        <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">Section 01</span>
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">
          Overview & Essential Service Facts
        </h2>
      </div>

      <p className="text-sm text-slate-700 leading-relaxed">
        {service.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
        {service.overviewFacts.map((fact, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
            <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">
              {fact.key}
            </span>
            <span className="text-sm font-extrabold text-slate-900 mt-1 block">
              {fact.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

// 02: Who Can Apply (Eligibility)
export const EligibilitySection: React.FC<SectionProps> = ({ service }) => {
  return (
    <section id="sec-eligibility" className="space-y-4 pt-6">
      <div className="border-b border-slate-200 pb-3">
        <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">Section 02</span>
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">
          Who Can Apply? (Eligibility Criteria)
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {service.eligibilityCriteria.map((item, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex items-start gap-3"
          >
            <div className="mt-0.5 p-1 rounded-full bg-emerald-100 text-emerald-700">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-slate-900">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// 03: Acceptable Documents Matrix
export const DocumentsSection: React.FC<SectionProps> = ({ service }) => {
  const { userVault } = useApp();

  return (
    <section id="sec-documents" className="space-y-6 pt-6">
      <div className="border-b border-slate-200 pb-3">
        <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">Section 03</span>
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">
          Required Documents & Acceptable Alternatives
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          For each requirement group, you only need <strong>ANY ONE</strong> of the approved alternatives.
        </p>
      </div>

      <div className="space-y-4">
        {service.documentRequirements.map((group) => {
          const userHasAny = group.options.some(opt => !!userVault[opt.id]);

          return (
            <div 
              key={group.id} 
              className={`bg-white rounded-2xl border p-5 shadow-xs transition-all ${
                userHasAny ? 'border-emerald-300 bg-emerald-50/20' : 'border-slate-200'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-extrabold text-base text-slate-900">
                    {group.title}
                  </h3>
                  {group.isMandatory ? (
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-red-100 text-red-700 border border-red-200">
                      Mandatory
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      Optional
                    </span>
                  )}
                </div>

                {userHasAny && (
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    Available in your Vault
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-500 mb-3">
                {group.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {group.options.map((opt) => {
                  const isCheckedInVault = !!userVault[opt.id];
                  return (
                    <div 
                      key={opt.id}
                      className={`p-2.5 rounded-xl border text-xs flex items-center justify-between gap-2 ${
                        isCheckedInVault
                          ? 'bg-emerald-50 text-emerald-900 border-emerald-300 font-semibold'
                          : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className={`w-2 h-2 rounded-full ${isCheckedInVault ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                        <span className="truncate">{opt.name}</span>
                      </div>
                      {opt.isOriginalRequired && (
                        <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded flex-shrink-0">
                          Original
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// 05: Official Portals Directory
export const OfficialPortalsSection: React.FC<SectionProps> = ({ service }) => {
  return (
    <section id="sec-portals" className="space-y-4 pt-6">
      <div className="border-b border-slate-200 pb-3">
        <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">Section 05</span>
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">
          Verified Official Websites & Service Directory
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Always ensure you apply exclusively on genuine government and banking domains.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {service.officialPortals.map((portal, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between space-y-3"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  {portal.badgeText}
                </span>
                <span className="text-[11px] font-bold text-slate-400 capitalize">
                  {portal.purpose}
                </span>
              </div>

              <h4 className="font-extrabold text-sm text-slate-900">
                {portal.label}
              </h4>

              {portal.domainAlert && (
                <p className="text-[11px] text-amber-800 bg-amber-50 rounded-lg p-2 border border-amber-200/80 mt-2 font-medium">
                  ⚠️ {portal.domainAlert}
                </p>
              )}
            </div>

            <a
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 bg-brand-50 hover:bg-brand-100 text-brand-700 text-xs font-bold rounded-xl border border-brand-200 transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Visit Verified Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

// 07 & 08: Fees & Processing Timelines
export const FeesTimelineSection: React.FC<SectionProps> = ({ service }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6">
      
      {/* 07: Fees */}
      <section id="sec-fees" className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="border-b border-slate-100 pb-3">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">Section 07</span>
          <h3 className="text-xl font-black text-slate-900 tracking-tight">
            Official Fees & Payment Methods
          </h3>
        </div>

        <div className="space-y-3">
          {service.feesStructure.map((fee, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <div className="flex items-start justify-between gap-2">
                <span className="font-bold text-xs text-slate-800">{fee.type}</span>
                <span className="font-black text-sm text-brand-700">{fee.amount}</span>
              </div>
              <div className="text-[11px] text-slate-500">
                Modes: {fee.paymentModes.join(', ')}
              </div>
              {fee.notes && (
                <div className="text-[11px] text-slate-400 italic">
                  Note: {fee.notes}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 08: Timelines */}
      <section id="sec-timelines" className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="border-b border-slate-100 pb-3">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">Section 08</span>
          <h3 className="text-xl font-black text-slate-900 tracking-tight">
            Processing Timelines & SLA
          </h3>
        </div>

        <div className="space-y-3">
          {service.timelines.map((time, idx) => (
            <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-500" />
                <span className="font-bold text-xs text-slate-800">{time.stage}</span>
              </div>
              <span className="font-extrabold text-xs text-slate-900 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                {time.duration}
              </span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

// 09: How to Track Application
export const TrackingSection: React.FC<SectionProps> = ({ service }) => {
  const guide = service.trackingGuide;

  return (
    <section id="sec-tracking" className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5 pt-6">
      <div className="border-b border-slate-100 pb-3">
        <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">Section 09</span>
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">
          How to Track Application Status
        </h2>
      </div>

      <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-2">
        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          Tracking Identifier:
        </div>
        <div className="font-extrabold text-slate-900 text-sm">
          {guide.identifierName}
        </div>
        <div className="text-xs text-slate-600 font-mono bg-white px-3 py-1.5 rounded-lg border border-slate-200 inline-block">
          Sample Format: {guide.sampleFormat}
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900">
          Step-by-step instructions to check status:
        </h4>
        <ul className="space-y-2 text-xs text-slate-700">
          {guide.stepsToTrack.map((step, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="w-4 h-4 rounded-full bg-brand-100 text-brand-700 font-bold flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </div>

      {guide.smsTrackingFormat && (
        <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-900 font-medium">
          📱 <strong>SMS Tracking:</strong> {guide.smsTrackingFormat}
        </div>
      )}

      <div>
        <a
          href={guide.directTrackingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
        >
          <span>Open Direct Official Tracking Link</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};

// 10: After Submission Actions
export const AfterSubmissionSection: React.FC<SectionProps> = ({ service }) => {
  return (
    <section id="sec-after-apply" className="space-y-4 pt-6">
      <div className="border-b border-slate-200 pb-3">
        <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">Section 10</span>
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">
          What Happens After Submission? (Next Steps)
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {service.afterSubmissionActions.map((action, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-2">
            <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 font-extrabold flex items-center justify-center text-xs">
              {idx + 1}
            </span>
            <h4 className="font-extrabold text-sm text-slate-900">
              {action.title}
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {action.description}
            </p>
            <div className="pt-2 text-[11px] font-bold text-brand-700">
              ⏱️ Expected Timeline: {action.timeline}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// 11: Common Mistakes & Rejection Handling
export const MistakesTroubleshootingSection: React.FC<SectionProps> = ({ service }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6">
      
      {/* Mistakes */}
      <section id="sec-mistakes" className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="border-b border-slate-100 pb-3">
          <span className="text-xs font-bold text-red-600 uppercase tracking-wider">Section 11</span>
          <h3 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            <span>Top Common Application Mistakes</span>
          </h3>
        </div>

        <div className="space-y-3">
          {service.commonMistakes.map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-red-50/50 border border-red-200 space-y-1.5">
              <h4 className="font-extrabold text-xs text-red-950">
                ❌ {item.mistake}
              </h4>
              <p className="text-xs text-slate-700">
                <strong>How to avoid:</strong> {item.howToAvoid}
              </p>
              <div className="text-[11px] text-red-700 font-medium">
                Consequence: {item.consequence}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="border-b border-slate-100 pb-3">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Troubleshooting</span>
          <h3 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-500" />
            <span>Rejection & Stuck Status Solutions</span>
          </h3>
        </div>

        <div className="space-y-3">
          {service.rejectionTroubleshooting.map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-amber-50/50 border border-amber-200 space-y-1.5">
              <h4 className="font-extrabold text-xs text-amber-950">
                ⚠️ Issue: {item.issue}
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong>Resolution:</strong> {item.resolution}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

// 12: FAQs
export const FaqSection: React.FC<SectionProps> = ({ service }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(prev => prev === idx ? null : idx);
  };

  return (
    <section id="sec-faqs" className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4 pt-6">
      <div className="border-b border-slate-100 pb-3">
        <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">Section 12</span>
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">
          Frequently Asked Questions (FAQs)
        </h2>
      </div>

      <div className="space-y-2.5">
        {service.faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx}
              className="border border-slate-200 rounded-xl overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-4 bg-slate-50 hover:bg-slate-100 transition-colors flex items-center justify-between gap-3 font-bold text-xs sm:text-sm text-slate-900"
              >
                <span>{faq.question}</span>
                {isOpen ? <ChevronUp className="w-4 h-4 text-slate-500 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-500 flex-shrink-0" />}
              </button>

              {isOpen && (
                <div className="p-4 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
