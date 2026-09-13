import React, { useState, useEffect } from 'react';
import { 
  CheckSquare, 
  Square, 
  CheckCircle2, 
  AlertCircle, 
  Camera, 
  FileText, 
  Sparkles,
  Printer
} from 'lucide-react';
import { ServiceDetail } from '../../types/service';
import { loadServiceChecklist, saveServiceChecklist } from '../../utils/storage';

interface InteractiveChecklistSectionProps {
  service: ServiceDetail;
  onPrint: () => void;
}

export const InteractiveChecklistSection: React.FC<InteractiveChecklistSectionProps> = ({ 
  service,
  onPrint 
}) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    return loadServiceChecklist(service.id);
  });

  useEffect(() => {
    saveServiceChecklist(service.id, checkedItems);
  }, [checkedItems, service.id]);

  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const checklist = service.beforeApplyingChecklist;
  const totalItems = checklist.length;
  const completedCount = checklist.filter(c => !!checkedItems[c.id]).length;
  const progressPercent = totalItems > 0 ? Math.round((completedCount / totalItems) * 100) : 100;

  return (
    <section id="sec-before-apply" className="space-y-6 pt-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
              Section 04
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs font-semibold text-slate-500">Preparation Checklist</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mt-0.5">
            Before You Apply Checklist & Preparation
          </h2>
        </div>

        <button
          onClick={onPrint}
          className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors flex items-center gap-1.5 self-start sm:self-auto border border-slate-200"
        >
          <Printer className="w-3.5 h-3.5 text-slate-600" />
          <span>Print Preparation Sheet</span>
        </button>
      </div>

      {/* Progress Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-slate-900 text-sm">
              Your Checklist Readiness:
            </span>
            <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-brand-100 text-brand-800 border border-brand-200">
              {completedCount} of {totalItems} items completed ({progressPercent}%)
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Tick off each prerequisite as you prepare your files and information.
          </p>
        </div>

        <div className="w-full sm:w-56 bg-slate-100 rounded-full h-3 overflow-hidden border border-slate-200">
          <div 
            className="h-full bg-brand-600 transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Interactive Checkbox Items */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs space-y-2">
        {checklist.map((item) => {
          const isDone = !!checkedItems[item.id];
          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all cursor-pointer select-none ${
                isDone
                  ? 'bg-emerald-50/50 border-emerald-300/80 text-slate-900'
                  : 'bg-white border-slate-100 hover:bg-slate-50 hover:border-slate-200 text-slate-700'
              }`}
            >
              <div className="mt-0.5 flex-shrink-0">
                {isDone ? (
                  <CheckSquare className="w-5 h-5 text-emerald-600 fill-emerald-600/20" />
                ) : (
                  <Square className="w-5 h-5 text-slate-300" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`text-xs sm:text-sm font-bold ${isDone ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                    {item.label}
                  </span>
                  {item.isCrucial && (
                    <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-red-100 text-red-700 border border-red-200">
                      Crucial
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Photo and Scan Specs Grid */}
      {(service.photoSpecs || service.scanSpecs) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {service.photoSpecs && (
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-sm font-extrabold text-slate-900 border-b border-slate-100 pb-2">
                <Camera className="w-4 h-4 text-brand-600" />
                <span>Photograph Specifications</span>
              </div>
              <div className="space-y-2 text-xs text-slate-700">
                <div><strong>Dimensions:</strong> {service.photoSpecs.dimensions}</div>
                <div><strong>Background:</strong> {service.photoSpecs.background}</div>
                <div><strong>Max File Size:</strong> {service.photoSpecs.maxSize}</div>
                <div><strong>Format:</strong> {service.photoSpecs.format}</div>
                <p className="text-[11px] text-slate-500 italic pt-1 border-t border-slate-100">
                  {service.photoSpecs.notes}
                </p>
              </div>
            </div>
          )}

          {service.scanSpecs && (
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-sm font-extrabold text-slate-900 border-b border-slate-100 pb-2">
                <FileText className="w-4 h-4 text-indigo-600" />
                <span>Scanned Document Specifications</span>
              </div>
              <div className="space-y-2 text-xs text-slate-700">
                <div><strong>Format:</strong> {service.scanSpecs.format}</div>
                <div><strong>Max File Size:</strong> {service.scanSpecs.maxSize}</div>
                <div><strong>Resolution:</strong> {service.scanSpecs.resolution}</div>
                <p className="text-[11px] text-slate-500 italic pt-1 border-t border-slate-100">
                  {service.scanSpecs.notes}
                </p>
              </div>
            </div>
          )}

        </div>
      )}

    </section>
  );
};
