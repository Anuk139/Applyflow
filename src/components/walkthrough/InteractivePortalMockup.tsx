import React, { useState } from 'react';
import { 
  Laptop, 
  Smartphone, 
  Lock, 
  ExternalLink, 
  HelpCircle, 
  MousePointer2, 
  Sparkles,
  AlertTriangle,
  Info
} from 'lucide-react';
import { ApplicationStep, HotspotAnnotation } from '../../types/service';

interface InteractivePortalMockupProps {
  step: ApplicationStep;
}

export const InteractivePortalMockup: React.FC<InteractivePortalMockupProps> = ({ step }) => {
  const [isMobileView, setIsMobileView] = useState<boolean>(false);
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null);
  const [showAllHotspots, setShowAllHotspots] = useState<boolean>(true);

  const { mockup } = step;

  // Toggle "Show me where to click"
  const toggleHotspots = () => {
    setShowAllHotspots(prev => !prev);
    if (!showAllHotspots && mockup.hotspots.length > 0) {
      setActiveHotspotId(mockup.hotspots[0].id);
    }
  };

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden text-slate-100 transition-all">
      
      {/* Browser Chrome Header */}
      <div className="bg-slate-800/95 px-4 py-2.5 border-b border-slate-700/80 flex flex-wrap items-center justify-between gap-3 select-none">
        
        {/* Window controls & Portal Name */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-xs font-semibold text-slate-300 truncate max-w-[200px] sm:max-w-xs">
            {mockup.portalName}
          </span>
        </div>

        {/* Address Bar */}
        <div className="flex-1 max-w-md hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-700 text-xs text-slate-300 font-mono">
          <Lock className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
          <span className="truncate">{mockup.urlBar}</span>
        </div>

        {/* Action Controls: Show Where To Click & Device Toggle */}
        <div className="flex items-center gap-2">
          {/* Signature "Show Me Where to Click" Button */}
          <button
            onClick={toggleHotspots}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              showAllHotspots
                ? 'bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-500/30'
                : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
            }`}
          >
            <MousePointer2 className="w-3.5 h-3.5 animate-bounce-soft" />
            <span>{showAllHotspots ? 'Hotspots ON' : 'Show Where to Click'}</span>
          </button>

          {/* Desktop vs Mobile Toggle */}
          <div className="flex items-center bg-slate-700/80 rounded-lg p-0.5 border border-slate-600">
            <button
              onClick={() => setIsMobileView(false)}
              className={`p-1.5 rounded text-xs transition-colors ${
                !isMobileView ? 'bg-brand-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
              title="Desktop View"
            >
              <Laptop className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setIsMobileView(true)}
              className={`p-1.5 rounded text-xs transition-colors ${
                isMobileView ? 'bg-brand-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
              title="Mobile Screen View"
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Simulated Screen Body */}
      <div className={`p-4 sm:p-6 transition-all mx-auto ${
        isMobileView 
          ? 'max-w-sm bg-slate-950 border-x border-slate-700 min-h-[480px] my-4 rounded-3xl p-5 shadow-inner' 
          : 'w-full bg-slate-900/60'
      }`}>

        {/* Mobile View Notch / Speaker */}
        {isMobileView && (
          <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-4 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-slate-900 mr-2" />
            <div className="w-8 h-1 bg-slate-700 rounded-full" />
          </div>
        )}

        {/* Screen Title & Verification Indicator */}
        <div className="border-b border-slate-700 pb-3 mb-5 flex items-center justify-between gap-2">
          <div>
            <span className="text-[11px] font-bold text-brand-400 uppercase tracking-wider block">
              Official Portal Interface
            </span>
            <h4 className="text-base sm:text-lg font-extrabold text-white">
              {mockup.screenTitle}
            </h4>
          </div>
          <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded-full font-bold">
            Simulated Safe View
          </span>
        </div>

        {/* Interactive Form Fields Mockup */}
        <div className="space-y-4">
          {mockup.fields.map((field, idx) => {
            // Check if this field has a corresponding hotspot
            const matchingHotspot = mockup.hotspots.find(h => 
              h.actionText.toLowerCase().includes(field.label.toLowerCase().slice(0, 8)) ||
              h.description.toLowerCase().includes(field.name.toLowerCase())
            );

            const isHighlighted = showAllHotspots && matchingHotspot;

            return (
              <div 
                key={idx} 
                className={`p-3 rounded-xl transition-all relative ${
                  isHighlighted 
                    ? 'bg-slate-800 border-2 border-red-500/80 shadow-lg shadow-red-500/10' 
                    : 'bg-slate-800/60 border border-slate-700'
                }`}
              >
                {/* Hotspot Marker Tooltip if matched */}
                {isHighlighted && (
                  <div className="absolute -top-3 right-3 bg-red-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-full shadow-md animate-pulse-glow flex items-center gap-1">
                    <MousePointer2 className="w-2.5 h-2.5" />
                    <span>Click / Enter Here</span>
                  </div>
                )}

                <label className="block text-xs font-bold text-slate-200 mb-1">
                  {field.label}
                </label>

                {field.type === 'select' ? (
                  <div className="relative">
                    <select 
                      disabled 
                      className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-xs text-slate-300 appearance-none font-medium"
                    >
                      {field.options?.map((opt, oIdx) => (
                        <option key={oIdx}>{opt}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                      ▼
                    </div>
                  </div>
                ) : field.type === 'radio' ? (
                  <div className="space-y-1.5 mt-1.5">
                    {field.options?.map((opt, oIdx) => (
                      <label key={oIdx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                        <input type="radio" checked={oIdx === 0} readOnly className="accent-brand-500 text-brand-600" />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                ) : field.type === 'checkbox' ? (
                  <label className="flex items-start gap-2 text-xs text-slate-300 font-medium mt-1">
                    <input type="checkbox" checked readOnly className="mt-0.5 accent-brand-500" />
                    <span>{field.label}</span>
                  </label>
                ) : (
                  <input
                    type="text"
                    disabled
                    placeholder={field.placeholder || 'Enter value as requested'}
                    className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-xs text-slate-300 font-medium"
                  />
                )}

                {/* Helper hint */}
                <p className="text-[11px] text-slate-400 mt-1.5 flex items-center gap-1">
                  <Info className="w-3 h-3 text-brand-400 flex-shrink-0" />
                  <span>{field.helpText}</span>
                </p>
              </div>
            );
          })}

          {/* Action Submission Button */}
          <div className="pt-2 relative">
            {showAllHotspots && (
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-full shadow-md animate-bounce-soft flex items-center gap-1">
                <span>👇 Target Button</span>
              </div>
            )}
            
            <button
              disabled
              className="w-full py-3 px-4 bg-brand-600 text-white font-extrabold text-sm rounded-xl border border-brand-400/30 flex items-center justify-center gap-2 shadow-lg"
            >
              <span>{mockup.actionButtonText}</span>
            </button>
          </div>
        </div>

        {/* Hotspot Explanations Card */}
        {showAllHotspots && mockup.hotspots.length > 0 && (
          <div className="mt-6 p-4 rounded-xl bg-red-950/40 border border-red-800/80 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-wider">
              <MousePointer2 className="w-4 h-4 text-red-400" />
              <span>Interactive Action Instructions:</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-200">
              {mockup.hotspots.map((h, hIdx) => (
                <li key={h.id} className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                    {hIdx + 1}
                  </span>
                  <div>
                    <strong className="text-white">{h.title}:</strong>{' '}
                    <span className="text-slate-300">{h.actionText}. {h.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Mobile View Disclaimer */}
        {isMobileView && mockup.mobileNote && (
          <div className="mt-4 p-2.5 rounded-lg bg-slate-800 text-[11px] text-slate-400 border border-slate-700 flex items-start gap-1.5">
            <Smartphone className="w-3.5 h-3.5 text-brand-400 flex-shrink-0 mt-0.5" />
            <span><strong>Mobile Tip:</strong> {mockup.mobileNote}</span>
          </div>
        )}

      </div>

    </div>
  );
};
