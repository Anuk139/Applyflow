import { ServiceDetail } from '../../types/service';
import { PAN_CARD_SERVICE } from './panCard';
import { AADHAAR_SERVICE } from './aadhaar';
import { VOTER_ID_SERVICE } from './voterId';
import { PASSPORT_SERVICE } from './passport';
import { DRIVING_LICENSE_SERVICE } from './drivingLicense';
import { BANK_ACCOUNT_SERVICE } from './bankAccount';
import { SCHOLARSHIP_SERVICE } from './scholarship';
import { EPFO_UAN_SERVICE } from './epfoUan';

export const ALL_SERVICES: ServiceDetail[] = [
  PAN_CARD_SERVICE,
  AADHAAR_SERVICE,
  VOTER_ID_SERVICE,
  PASSPORT_SERVICE,
  DRIVING_LICENSE_SERVICE,
  BANK_ACCOUNT_SERVICE,
  SCHOLARSHIP_SERVICE,
  EPFO_UAN_SERVICE,
];

// Rich service keyword aliases map for fuzzy search
const SERVICE_KEYWORDS: Record<string, string[]> = {
  'pan-card': [
    'pan', 'pancard', 'pan card', 'form 49a', '49a', 'e-pan', 'epan', 'instant pan', 
    'tax id', 'income tax', 'nsdl', 'protean', 'uti', 'utiitsl', 'tin', 'financial id'
  ],
  'aadhaar-card': [
    'aadhaar', 'aadhar', 'aadhar card', 'aadhaar card', 'uidai', 'myaadhaar', 
    'uid', 'eid', 'enrolment', 'enrollment', 'biometrics', 'fingerprint', 'iris', 
    'baal aadhaar', 'ask', 'aadhaar seva kendra', 'demographic update', 'address update'
  ],
  'voter-id': [
    'voter', 'voter id', 'voter card', 'voters', 'voting', 'election', 'election card', 
    'epic', 'e-epic', 'form 6', 'form 8', 'form6', 'form8', 'eci', 'blo', 'constituency',
    'polling', 'elector', 'electoral roll', 'voters.eci.gov.in'
  ],
  'passport-seva': [
    'passport', 'indian passport', 'pass port', 'tatkaal', 'tatkal', 'psk', 'popsk', 
    'passport seva', 'mea', 'rpo', 'consular', 'travel document', 'emigration', 
    'non-ecr', 'ecr', 'police verification', 'visa'
  ],
  'driving-license': [
    'driving', 'driving licence', 'driving license', 'dl', 'learner', 'learners', 'll', 
    'learner licence', 'rto', 'sarathi', 'parivahan', 'morth', 'vehicle', 'motorcycle', 
    'mcwg', 'lmv', 'car licence', 'bike licence', 'stall test', 'driving test'
  ],
  'bank-savings-account': [
    'bank', 'banking', 'savings account', 'bank account', 'open bank account', 
    'video kyc', 'vkyc', 'v-cip', 'zero balance', 'sbi', 'hdfc', 'icici', 'debit card', 
    'chequebook', 'upi', 'net banking', 'cif', 'ifsc'
  ],
  'national-scholarship-portal': [
    'scholarship', 'scholarships', 'nsp', 'national scholarship', 'otr', 'face auth', 
    'college fees', 'post matric', 'pre matric', 'merit', 'aicte', 'ugc', 'dbt', 
    'financial grant', 'education loan', 'bonafide', 'pfms'
  ],
  'epfo-uan-service': [
    'pf', 'epf', 'epfo', 'uan', 'provident fund', 'pf withdrawal', 'form 31', 'form 19', 
    'form 10c', 'advance pf', 'pf balance', 'passbook', 'pension', 'claim status', 
    'salary slip', 'labour ministry'
  ]
};

export function getServiceById(id: string): ServiceDetail | undefined {
  return ALL_SERVICES.find(s => s.id === id || s.slug === id);
}

export function getServicesByCategory(category: string): ServiceDetail[] {
  if (category === 'all') return ALL_SERVICES;
  return ALL_SERVICES.filter(s => s.category === category);
}

export function searchServices(query: string): ServiceDetail[] {
  const clean = query.trim().toLowerCase();
  if (!clean) return ALL_SERVICES;

  // Split multi-word queries
  const searchTerms = clean.split(/\s+/).filter(Boolean);

  const scoredServices = ALL_SERVICES.map(service => {
    let primaryScore = 0;
    let secondaryScore = 0;

    const nameLower = service.name.toLowerCase();
    const shortNameLower = service.shortName.toLowerCase();
    const taglineLower = service.tagline.toLowerCase();
    const authorityLower = service.issuingAuthority.toLowerCase();
    const categoryLower = service.category.toLowerCase();
    const keywords = SERVICE_KEYWORDS[service.id] || [];

    // 1. Direct full query matching against service identity
    if (shortNameLower === clean || nameLower === clean || service.id === clean) {
      primaryScore += 300;
    } else if (shortNameLower.startsWith(clean) || nameLower.startsWith(clean)) {
      primaryScore += 200;
    } else if (shortNameLower.includes(clean) || nameLower.includes(clean)) {
      primaryScore += 150;
    }

    // 2. Keyword exact / alias matches
    for (const kw of keywords) {
      if (kw === clean) {
        primaryScore += 250;
        break;
      } else if (kw.startsWith(clean)) {
        primaryScore += 120;
        break;
      } else if (kw.includes(clean) || clean.includes(kw)) {
        primaryScore += 80;
        break;
      }
    }

    // 3. Tagline, authority, and category matches
    if (taglineLower.includes(clean)) primaryScore += 35;
    if (authorityLower.includes(clean)) primaryScore += 35;
    if (categoryLower.includes(clean)) primaryScore += 25;

    // 4. Term-by-term matching (for multi-word queries like "voter card")
    for (const term of searchTerms) {
      if (term.length < 2) continue;
      if (shortNameLower.includes(term)) primaryScore += 45;
      if (nameLower.includes(term)) primaryScore += 35;
      if (keywords.some(k => k.includes(term))) primaryScore += 35;
      if (taglineLower.includes(term)) primaryScore += 15;
      if (authorityLower.includes(term)) primaryScore += 15;

      // Check document requirements (secondary match)
      const docMatch = service.documentRequirements.some(req => 
        req.title.toLowerCase().includes(term) ||
        req.options.some(opt => opt.name.toLowerCase().includes(term))
      );
      if (docMatch) {
        secondaryScore += 20;
      }
    }

    return { 
      service, 
      primaryScore, 
      secondaryScore 
    };
  });

  // If any service matched directly by name or keywords, return ONLY primary matches
  const hasPrimaryMatches = scoredServices.some(item => item.primaryScore > 0);

  if (hasPrimaryMatches) {
    return scoredServices
      .filter(item => item.primaryScore > 0)
      .sort((a, b) => b.primaryScore - a.primaryScore)
      .map(item => item.service);
  }

  // Fallback: If no service matched by name or keywords, return services that accept this document
  return scoredServices
    .filter(item => item.secondaryScore > 0)
    .sort((a, b) => b.secondaryScore - a.secondaryScore)
    .map(item => item.service);
}
