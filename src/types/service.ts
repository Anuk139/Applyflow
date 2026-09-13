export type ServiceCategory = 
  | 'government' 
  | 'banking' 
  | 'education' 
  | 'employment' 
  | 'private';

export type ServiceMode = 'online_only' | 'hybrid_appointment' | 'in_person';

export type DocumentCategory = 
  | 'identity' 
  | 'address' 
  | 'date_of_birth' 
  | 'income_financial' 
  | 'educational' 
  | 'photo_biometric' 
  | 'relationship_marital'
  | 'other';

export interface AcceptableDocumentOption {
  id: string;
  name: string;
  category: DocumentCategory;
  description?: string;
  isOriginalRequired?: boolean;
  notes?: string;
}

export interface DocumentRequirementGroup {
  id: string;
  title: string;
  purpose: string; // e.g. "Proof of Identity (POI)", "Proof of Address (POA)"
  description: string;
  isMandatory: boolean;
  options: AcceptableDocumentOption[]; // Any one of these satisfies this requirement
}

export interface PrerequisiteChecklistItem {
  id: string;
  label: string;
  detail: string;
  category: 'document' | 'technical' | 'financial' | 'verification';
  isCrucial: boolean; // if false, application won't fail immediately
}

export interface OfficialPortalLink {
  label: string;
  url: string;
  purpose: 'information' | 'application' | 'tracking' | 'verification' | 'grievance';
  isGovtVerified: boolean;
  badgeText: string;
  domainAlert?: string;
}

export interface PortalFeature {
  title: string;
  description: string;
  category: 'core_service' | 'verification' | 'security_privacy' | 'tracking_records' | 'grievance_support';
  url?: string;
  badge?: string;
}

export interface WebsiteFeaturesGuide {
  portalName: string;
  officialUrl: string;
  summary: string;
  highlights: string[];
  featuresList: PortalFeature[];
  regulatoryReference?: {
    authority: string;
    circularOrOrder: string;
    url: string;
    keyTakeaways: string[];
  };
}

export interface HotspotAnnotation {
  id: string;
  title: string;
  description: string;
  actionText: string; // e.g. "Click 'New Application'", "Select 'Individual' dropdown"
  xPercent: number; // 0 to 100 on the screenshot / mockup frame
  yPercent: number;
  highlightType: 'click' | 'input' | 'select' | 'warning' | 'submit';
}

export interface StepFormField {
  name: string;
  label: string;
  type: 'text' | 'select' | 'date' | 'file' | 'radio' | 'checkbox';
  placeholder?: string;
  options?: string[];
  helpText: string;
  warningNote?: string;
}

export interface ApplicationStep {
  stepNumber: number;
  phase: 'before' | 'during' | 'after';
  title: string;
  shortSummary: string;
  instructions: string[];
  whatToClick: string;
  whatToEnter?: string[];
  whatToUpload?: string[];
  cautionsAndWarnings: string[];
  mockup: {
    screenTitle: string;
    portalName: string;
    urlBar: string;
    fields: StepFormField[];
    actionButtonText: string;
    hotspots: HotspotAnnotation[];
    mobileNote?: string;
  };
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  category: ServiceCategory;
  issuingAuthority: string;
  mode: ServiceMode;
  trustRating: number; // 1 to 5 stars
  lastVerifiedDate: string;
  officialPortalUrl: string;
  estimatedDuration: string;
  standardFee: string;
  digiLockerAvailable: boolean;
  description: string;
  
  // 12 Standardized Sections:
  // 01: Overview & Key Facts
  overviewFacts: {
    key: string;
    value: string;
    iconName?: string;
  }[];
  
  // 02: Who Can Apply (Eligibility)
  eligibilityCriteria: {
    title: string;
    description: string;
    isEligible: boolean;
  }[];

  // 03: Acceptable Documents Matrix
  documentRequirements: DocumentRequirementGroup[];

  // 04: Before You Apply (Pre-requisites)
  beforeApplyingChecklist: PrerequisiteChecklistItem[];
  photoSpecs?: {
    dimensions: string;
    background: string;
    maxSize: string;
    format: string;
    notes: string;
  };
  scanSpecs?: {
    format: string;
    maxSize: string;
    resolution: string;
    notes: string;
  };

  // 05: Official Portals Directory & Portal Features Breakdown
  officialPortals: OfficialPortalLink[];
  websiteFeatures?: WebsiteFeaturesGuide;

  // 06: Step-by-Step Visual Walkthrough
  steps: ApplicationStep[];

  // 07: Fees & Payment Structure
  feesStructure: {
    type: string;
    amount: string;
    paymentModes: string[];
    notes?: string;
  }[];

  // 08: Processing Timelines & SLAs
  timelines: {
    stage: string;
    duration: string;
    notes?: string;
  }[];

  // 09: How to Track Application
  trackingGuide: {
    identifierName: string; // e.g. "Acknowledgement Number (URN)", "Application Reference Number (ARN)"
    sampleFormat: string;
    stepsToTrack: string[];
    directTrackingUrl: string;
    smsTrackingFormat?: string;
  };

  // 10: After Submission Next Steps
  afterSubmissionActions: {
    title: string;
    description: string;
    timeline: string;
    isPhysicalVisitRequired: boolean;
  }[];

  // 11: Common Mistakes & Rejection Handling
  commonMistakes: {
    mistake: string;
    howToAvoid: string;
    consequence: string;
  }[];
  rejectionTroubleshooting: {
    issue: string;
    resolution: string;
  }[];

  // 12: FAQs
  faqs: ServiceFaq[];
}
