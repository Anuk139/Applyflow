import { ServiceDetail } from '../types/service';
import { ServiceReadinessResult } from '../types/user';

export function calculateServiceReadiness(
  service: ServiceDetail,
  userDocuments: Record<string, boolean>
): ServiceReadinessResult {
  const mandatoryRequirements = service.documentRequirements.filter(r => r.isMandatory);
  const totalCount = mandatoryRequirements.length;
  
  if (totalCount === 0) {
    return {
      serviceId: service.id,
      serviceName: service.name,
      category: service.category,
      readinessScore: 100,
      status: 'ready',
      matchedRequirementsCount: 0,
      totalRequirementsCount: 0,
      availableItems: [],
      missingRequirements: []
    };
  }

  let matchedCount = 0;
  const availableItems: string[] = [];
  const missingRequirements: {
    requirementTitle: string;
    isMandatory: boolean;
    suggestedOptions: string[];
  }[] = [];

  for (const req of mandatoryRequirements) {
    // Check if the user has any of the acceptable options for this requirement
    const matchedOption = req.options.find(opt => !!userDocuments[opt.id]);
    
    if (matchedOption) {
      matchedCount++;
      availableItems.push(`${req.title}: ${matchedOption.name}`);
    } else {
      missingRequirements.push({
        requirementTitle: req.title,
        isMandatory: req.isMandatory,
        suggestedOptions: req.options.map(opt => opt.name)
      });
    }
  }

  // Also check if critical technical prerequisites like mobile linked to Aadhaar is met
  const needsAadhaarMobile = service.beforeApplyingChecklist.some(
    c => c.isCrucial && c.id.includes('aadhaar')
  );
  if (needsAadhaarMobile && !userDocuments['mobile_linked_aadhaar']) {
    // If missing crucial mobile OTP linkage, mark as missing note
    missingRequirements.push({
      requirementTitle: 'Active Mobile Linked to Aadhaar',
      isMandatory: true,
      suggestedOptions: ['UIDAI Registered Mobile Number (for OTP e-KYC)']
    });
  }

  const score = Math.round((matchedCount / totalCount) * 100);

  let status: 'ready' | 'almost_ready' | 'missing_critical';
  if (score >= 100 && missingRequirements.length === 0) {
    status = 'ready';
  } else if (score >= 60 || missingRequirements.length <= 1) {
    status = 'almost_ready';
  } else {
    status = 'missing_critical';
  }

  return {
    serviceId: service.id,
    serviceName: service.name,
    category: service.category,
    readinessScore: score,
    status,
    matchedRequirementsCount: matchedCount,
    totalRequirementsCount: totalCount,
    availableItems,
    missingRequirements
  };
}

export function evaluateAllServicesReadiness(
  services: ServiceDetail[],
  userDocuments: Record<string, boolean>
): ServiceReadinessResult[] {
  return services.map(s => calculateServiceReadiness(s, userDocuments));
}
