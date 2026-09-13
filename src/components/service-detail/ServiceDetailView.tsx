import React, { useState } from 'react';
import { ChevronLeft, Share2, Printer, BookmarkPlus, Sparkles } from 'lucide-react';
import { getServiceById } from '../../data/services';
import { useApp } from '../../context/AppContext';
import { ServiceHero } from './ServiceHero';
import { SectionNavigation } from './SectionNavigation';
import { InteractiveChecklistSection } from './InteractiveChecklistSection';
import { VisualWalkthroughSection } from './VisualWalkthroughSection';
import { 
  OverviewSection, 
  EligibilitySection, 
  DocumentsSection, 
  OfficialPortalsSection, 
  FeesTimelineSection, 
  TrackingSection, 
  AfterSubmissionSection, 
  MistakesTroubleshootingSection, 
  FaqSection 
} from './DetailSections';
import { PrintableChecklist } from '../print/PrintableChecklist';

interface ServiceDetailViewProps {
  serviceId: string;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({ serviceId }) => {
  const { setActiveTab } = useApp();
  const [activeSection, setActiveSection] = useState<string>('sec-overview');
  const [isPrintModalOpen, setIsPrintModalOpen] = useState<boolean>(false);

  const service = getServiceById(serviceId);

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-800">Service Not Found</h2>
        <p className="text-slate-500">The requested service guide could not be located.</p>
        <button
          onClick={() => setActiveTab('home')}
          className="px-4 py-2 rounded-xl bg-brand-600 text-white text-sm font-bold"
        >
          Return to Explore
        </button>
      </div>
    );
  }

  const handleSelectSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -130;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-8 pb-16">
      
      {/* Back link & Actions Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex items-center justify-between no-print">
        <button
          onClick={() => setActiveTab('home')}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-brand-600 transition-colors py-1 px-2.5 rounded-lg hover:bg-slate-100"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPrintModalOpen(true)}
            className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 flex items-center gap-1.5 transition-colors"
          >
            <Printer className="w-3.5 h-3.5 text-slate-500" />
            <span>Print Sheet</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceHero service={service} onPrint={() => setIsPrintModalOpen(true)} />
      </div>

      {/* Sticky 12-Section Bar */}
      <SectionNavigation 
        activeSection={activeSection} 
        onSelectSection={handleSelectSection} 
      />

      {/* 12 Sections Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* 01: Overview */}
        <OverviewSection service={service} />

        {/* 02: Eligibility */}
        <EligibilitySection service={service} />

        {/* 03: Documents Alternatives Matrix */}
        <DocumentsSection service={service} />

        {/* 04: Before You Apply Interactive Checklist */}
        <InteractiveChecklistSection 
          service={service} 
          onPrint={() => setIsPrintModalOpen(true)} 
        />

        {/* 05: Official Portals */}
        <OfficialPortalsSection service={service} />

        {/* 06: Visual Step-by-Step Walkthrough with Screen Mockups */}
        <VisualWalkthroughSection 
          steps={service.steps} 
          serviceName={service.shortName} 
        />

        {/* 07 & 08: Fees & Timelines */}
        <FeesTimelineSection service={service} />

        {/* 09: How to Track Status */}
        <TrackingSection service={service} />

        {/* 10: After Submission Actions */}
        <AfterSubmissionSection service={service} />

        {/* 11: Common Mistakes & Troubleshooting */}
        <MistakesTroubleshootingSection service={service} />

        {/* 12: FAQs */}
        <FaqSection service={service} />

      </div>

      {/* Print Modal */}
      {isPrintModalOpen && (
        <PrintableChecklist 
          service={service} 
          onClose={() => setIsPrintModalOpen(false)} 
        />
      )}

    </div>
  );
};
