import React from 'react';
import { Printer, X, FileCheck, ExternalLink } from 'lucide-react';
import { ServiceDetail } from '../../types/service';

interface PrintableChecklistProps {
  service: ServiceDetail;
  onClose: () => void;
}

export const PrintableChecklist: React.FC<PrintableChecklistProps> = ({ service, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Controls Bar (Hidden in Print) */}
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-brand-400" />
            <span className="font-bold text-sm">Printable Preparation Sheet</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>Print Document / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Paper Area */}
        <div id="printable-area" className="p-8 sm:p-12 overflow-y-auto space-y-6 text-slate-900 bg-white">
          
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-4 flex items-start justify-between">
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-slate-500">
                SMART DOCUMENT ASSISTANT • OFFICIAL CITIZEN PREPARATION SHEET
              </div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight mt-1 text-slate-900">
                {service.name}
              </h1>
              <p className="text-xs text-slate-600 mt-1">
                Issuing Authority: <strong>{service.issuingAuthority}</strong>
              </p>
            </div>

            <div className="text-right text-xs">
              <div className="font-bold text-slate-900">Standard Fee: {service.standardFee}</div>
              <div className="text-slate-500">Expected Time: {service.estimatedDuration}</div>
              <div className="text-[10px] text-slate-400 mt-1">Date: {new Date().toLocaleDateString('en-IN')}</div>
            </div>
          </div>

          {/* Section 1: Pre-requisites Checklist */}
          <div className="space-y-3">
            <h2 className="text-sm font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              1. Things to Check Before Applying (Checklist)
            </h2>
            <div className="space-y-2">
              {service.beforeApplyingChecklist.map((item) => (
                <div key={item.id} className="flex items-start gap-2.5 text-xs">
                  <div className="w-4 h-4 border-2 border-slate-800 rounded flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">{item.label}</strong>
                    <p className="text-slate-600 text-[11px]">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Acceptable Documents Matrix */}
          <div className="space-y-3">
            <h2 className="text-sm font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              2. Acceptable Supporting Documents (Need Any 1 per group)
            </h2>
            <div className="space-y-2 text-xs">
              {service.documentRequirements.map((group) => (
                <div key={group.id} className="p-2.5 rounded-lg border border-slate-300">
                  <div className="font-bold text-slate-900 mb-1">
                    {group.title} {group.isMandatory ? '(Mandatory)' : '(Optional)'}:
                  </div>
                  <div className="text-slate-700 text-[11px]">
                    Acceptable alternatives: {group.options.map(o => o.name).join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Official Links & Verification URL */}
          <div className="space-y-2 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="font-bold text-slate-900">
              Verified Official Portal Address:
            </div>
            <p className="font-mono text-xs text-brand-700 break-all">
              {service.officialPortalUrl}
            </p>
            <p className="text-[11px] text-slate-500 italic">
              Notice: Never apply on unknown third-party URLs. Always check for .gov.in domain extensions.
            </p>
          </div>

          {/* Section 4: Applicant Notes Space */}
          <div className="space-y-2 pt-2 border-t border-slate-200">
            <div className="text-xs font-bold text-slate-900">
              Personal Application Records (Fill after submission):
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="border-b border-slate-400 py-1">
                Application / Acknowledgement No: ____________________
              </div>
              <div className="border-b border-slate-400 py-1">
                Date of Submission: ____________________
              </div>
              <div className="border-b border-slate-400 py-1">
                Appointment Date & Time: ____________________
              </div>
              <div className="border-b border-slate-400 py-1">
                Centre / Branch Location: ____________________
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="text-[10px] text-slate-400 text-center pt-4 border-t border-slate-100">
            Generated via Smart Document Assistant • Take this printed checklist along with your original documents to the centre or cyber café.
          </div>

        </div>

      </div>
    </div>
  );
};
