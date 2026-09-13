import React, { useState } from 'react';
import { 
  ApplicationStep 
} from '../../types/service';
import { InteractivePortalMockup } from '../walkthrough/InteractivePortalMockup';
import { 
  ChevronLeft, 
  ChevronRight, 
  AlertTriangle, 
  CheckCircle2, 
  Volume2, 
  VolumeX, 
  MousePointer2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { speakText, stopSpeaking } from '../../utils/speech';

interface VisualWalkthroughSectionProps {
  steps: ApplicationStep[];
  serviceName: string;
}

export const VisualWalkthroughSection: React.FC<VisualWalkthroughSectionProps> = ({ 
  steps, 
  serviceName 
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  const step = steps[currentStepIndex];

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
      stopSpeaking();
      setIsSpeaking(false);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
      stopSpeaking();
      setIsSpeaking(false);
    }
  };

  const handleReadAloud = () => {
    if (isSpeaking) {
      stopSpeaking();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      const narrationText = `Step ${step.stepNumber}: ${step.title}. Summary: ${step.shortSummary}. Instructions: ${step.instructions.join('. ')}. Action required: ${step.whatToClick}. Important warning: ${step.cautionsAndWarnings.join('. ')}`;
      speakText(narrationText, () => setIsSpeaking(false));
    }
  };

  const getPhaseBadge = () => {
    switch (step.phase) {
      case 'before':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300">
            🟢 BEFORE APPLYING
          </span>
        );
      case 'during':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-blue-100 text-blue-800 border border-blue-300">
            🔵 DURING APPLICATION
          </span>
        );
      case 'after':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-800 border border-amber-300">
            🟠 AFTER SUBMISSION
          </span>
        );
    }
  };

  return (
    <section id="sec-walkthrough" className="space-y-6 pt-6">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
              Section 06
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs font-semibold text-slate-500">Visual Application Guide</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mt-0.5">
            Step-by-Step Screenshot & Action Walkthrough
          </h2>
        </div>

        {/* Read Aloud Button */}
        <button
          onClick={handleReadAloud}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border self-start sm:self-auto ${
            isSpeaking 
              ? 'bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-500/20 animate-pulse' 
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-purple-700'
          }`}
        >
          {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-purple-600" />}
          <span>{isSpeaking ? 'Stop Reading' : 'Read Instructions Aloud'}</span>
        </button>
      </div>

      {/* Step Progression Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2 scrollbar-none">
          {steps.map((s, idx) => {
            const isCurrent = idx === currentStepIndex;
            const isCompleted = idx < currentStepIndex;

            return (
              <button
                key={s.stepNumber}
                onClick={() => {
                  setCurrentStepIndex(idx);
                  stopSpeaking();
                  setIsSpeaking(false);
                }}
                className={`flex-1 min-w-[130px] p-2.5 rounded-xl border text-left transition-all ${
                  isCurrent
                    ? 'bg-brand-50 border-brand-500 ring-2 ring-brand-200 text-brand-900 shadow-xs'
                    : isCompleted
                    ? 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    : 'bg-white border-slate-100 text-slate-400 hover:border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-bold mb-1">
                  <span>Step {s.stepNumber}</span>
                  {isCompleted && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                </div>
                <div className="text-xs font-semibold truncate">
                  {s.title.replace(/^Step \d+:\s*/, '')}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step Detail Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        
        {/* Step Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              {getPhaseBadge()}
              <span className="text-xs font-bold text-slate-400">
                Step {step.stepNumber} of {steps.length}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {step.title}
            </h3>
            <p className="text-sm font-medium text-slate-600">
              {step.shortSummary}
            </p>
          </div>

          {/* Stepper Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={currentStepIndex === 0}
              className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              title="Previous Step"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentStepIndex === steps.length - 1}
              className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs flex items-center gap-1.5 disabled:opacity-30 disabled:cursor-not-allowed shadow-sm transition-all"
            >
              <span>Next Step</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Written Instructions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Instructions Column */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-3">
              <h4 className="font-extrabold text-xs text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-brand-600" />
                <span>Action Checklist for this Screen</span>
              </h4>
              <ul className="space-y-2">
                {step.instructions.map((inst, iIdx) => (
                  <li key={iIdx} className="text-xs text-slate-700 flex items-start gap-2 leading-relaxed">
                    <span className="w-4 h-4 rounded-full bg-brand-100 text-brand-700 font-bold flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                      {iIdx + 1}
                    </span>
                    <span>{inst}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What to Click Callout */}
            <div className="bg-brand-50/80 rounded-2xl p-4 border border-brand-200 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-black text-brand-900 uppercase tracking-wider">
                <MousePointer2 className="w-4 h-4 text-brand-600" />
                <span>What to click / select:</span>
              </div>
              <p className="text-xs text-brand-950 font-semibold leading-relaxed">
                👉 {step.whatToClick}
              </p>
            </div>

            {/* Caution and Warnings */}
            {step.cautionsAndWarnings.length > 0 && (
              <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-black text-amber-900 uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Important Caution:</span>
                </div>
                <ul className="space-y-1 text-xs text-amber-950 font-medium">
                  {step.cautionsAndWarnings.map((warn, wIdx) => (
                    <li key={wIdx}>• {warn}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Advance to next step prompt */}
            <div className="pt-2">
              <button
                onClick={handleNext}
                disabled={currentStepIndex === steps.length - 1}
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-200 disabled:text-slate-400 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <span>Continue to Step {Math.min(currentStepIndex + 2, steps.length)}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Simulated Screenshot / Mockup Column */}
          <div className="lg:col-span-7">
            <InteractivePortalMockup step={step} />
          </div>

        </div>

      </div>

    </section>
  );
};
