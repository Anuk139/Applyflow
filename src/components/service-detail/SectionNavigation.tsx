import React from 'react';

interface SectionNavigationProps {
  activeSection: string;
  onSelectSection: (id: string) => void;
}

export const SectionNavigation: React.FC<SectionNavigationProps> = ({ 
  activeSection, 
  onSelectSection 
}) => {
  const sections = [
    { id: 'sec-overview', number: '01', label: 'Overview' },
    { id: 'sec-eligibility', number: '02', label: 'Eligibility' },
    { id: 'sec-documents', number: '03', label: 'Documents' },
    { id: 'sec-before-apply', number: '04', label: 'Before Apply' },
    { id: 'sec-portals', number: '05', label: 'Official Portals' },
    { id: 'sec-walkthrough', number: '06', label: 'Visual Guide' },
    { id: 'sec-fees', number: '07', label: 'Fees' },
    { id: 'sec-timelines', number: '08', label: 'Timelines' },
    { id: 'sec-tracking', number: '09', label: 'Track Status' },
    { id: 'sec-after-apply', number: '10', label: 'After Apply' },
    { id: 'sec-mistakes', number: '11', label: 'Mistakes' },
    { id: 'sec-faqs', number: '12', label: 'FAQs' },
  ];

  return (
    <div className="sticky top-16 z-30 bg-white/95 backdrop-blur border-y border-slate-200 shadow-xs py-2 px-2 sm:px-4 overflow-x-auto scrollbar-none no-print">
      <div className="max-w-7xl mx-auto flex items-center gap-1 sm:gap-2">
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => onSelectSection(sec.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                isActive
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span className={`text-[10px] font-mono ${isActive ? 'text-brand-200' : 'text-slate-400'}`}>
                {sec.number}
              </span>
              <span>{sec.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
