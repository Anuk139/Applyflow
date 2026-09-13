export interface UserDocumentItem {
  id: string;
  documentId: string; // references MasterDocument.id
  documentName: string;
  category: string;
  hasDocument: boolean;
  notes?: string;
  documentNumberMasked?: string;
  updatedAt: string;
}

export interface ApplicationTrackerItem {
  id: string; // unique ID
  serviceId: string;
  serviceName: string;
  category: string;
  status: 'preparing' | 'submitted' | 'appointment_booked' | 'in_verification' | 'approved_downloaded' | 'rejected';
  referenceNumber?: string; // ARN / URN / Ack Number
  appliedDate?: string;
  appointmentDate?: string;
  appointmentVenue?: string;
  officialTrackingUrl?: string;
  completedChecklistIds: string[]; // checklist item IDs completed
  notes?: string;
  lastUpdated: string;
}

export interface ServiceReadinessResult {
  serviceId: string;
  serviceName: string;
  category: string;
  readinessScore: number; // 0 to 100
  status: 'ready' | 'almost_ready' | 'missing_critical';
  matchedRequirementsCount: number;
  totalRequirementsCount: number;
  availableItems: string[];
  missingRequirements: {
    requirementTitle: string;
    isMandatory: boolean;
    suggestedOptions: string[];
  }[];
}
