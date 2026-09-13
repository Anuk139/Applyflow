export interface MasterDocument {
  id: string;
  name: string;
  shortName: string;
  category: 'identity' | 'address' | 'date_of_birth' | 'income_financial' | 'educational' | 'photo_biometric' | 'contact_verification';
  commonAliases: string[];
  issuingBody: string;
  description: string;
  typicalValidity: string;
  isDigiLockerCompatible: boolean;
}

export const MASTER_DOCUMENTS: MasterDocument[] = [
  {
    id: 'aadhaar_card',
    name: 'Aadhaar Card (UIDAI)',
    shortName: 'Aadhaar',
    category: 'identity',
    commonAliases: ['Aadhar', 'UID', 'e-Aadhaar', 'Aadhaar Letter'],
    issuingBody: 'Unique Identification Authority of India (UIDAI)',
    description: '12-digit individual identification number. Acts as Proof of Identity (POI) and Proof of Address (POA).',
    typicalValidity: 'Lifetime (with periodic photo/biometric updates)',
    isDigiLockerCompatible: true
  },
  {
    id: 'pan_card',
    name: 'PAN Card (Permanent Account Number)',
    shortName: 'PAN Card',
    category: 'identity',
    commonAliases: ['PAN', 'e-PAN', 'Income Tax PAN'],
    issuingBody: 'Income Tax Department (via NSDL Protean / UTIITSL)',
    description: '10-digit alphanumeric identifier essential for financial transactions, banking, and identity proof.',
    typicalValidity: 'Lifetime',
    isDigiLockerCompatible: true
  },
  {
    id: 'voter_id',
    name: 'Voter ID Card (EPIC)',
    shortName: 'Voter ID',
    category: 'identity',
    commonAliases: ['EPIC', 'Election Card', 'e-EPIC'],
    issuingBody: 'Election Commission of India (ECI)',
    description: 'Elector Photo Identity Card used for voting and widely accepted as Identity and Address proof.',
    typicalValidity: 'Lifetime (valid while residing in current constituency)',
    isDigiLockerCompatible: true
  },
  {
    id: 'passport',
    name: 'Indian Passport',
    shortName: 'Passport',
    category: 'identity',
    commonAliases: ['Passport Book', 'Indian Passport', 'Travel Document'],
    issuingBody: 'Ministry of External Affairs (Consular, Passport & Visa Division)',
    description: 'Official travel document and gold-standard Proof of Identity, Address, and Date of Birth.',
    typicalValidity: '10 years (Adults) / 5 years (Minors)',
    isDigiLockerCompatible: true
  },
  {
    id: 'driving_licence',
    name: 'Driving Licence (DL)',
    shortName: 'Driving Licence',
    category: 'identity',
    commonAliases: ['DL', 'Drivers License', 'Driving Permit'],
    issuingBody: 'Ministry of Road Transport and Highways (MoRTH / State RTOs)',
    description: 'Authorises driving motor vehicles; accepted as Proof of Identity and Address across India.',
    typicalValidity: 'Up to age 40 or 20 years from issuance, then 5/3 years',
    isDigiLockerCompatible: true
  },
  {
    id: 'marksheet_10th',
    name: '10th Standard / Matriculation Certificate & Marksheet',
    shortName: '10th Marksheet',
    category: 'date_of_birth',
    commonAliases: ['SSC Certificate', 'CBSE 10th', 'Matriculation Certificate', 'SSLC'],
    issuingBody: 'State Boards, CBSE, ICSE, NIOS',
    description: 'Standard document accepted across India as definitive legal Proof of Date of Birth (DOB).',
    typicalValidity: 'Permanent',
    isDigiLockerCompatible: true
  },
  {
    id: 'marksheet_12th',
    name: '12th Standard / Higher Secondary Certificate',
    shortName: '12th Marksheet',
    category: 'educational',
    commonAliases: ['HSC', 'Intermediate Certificate', 'Plus Two', 'CBSE 12th'],
    issuingBody: 'State Secondary Boards, CBSE, ISC, NIOS',
    description: 'Educational proof needed for higher education, college admissions, and job applications.',
    typicalValidity: 'Permanent',
    isDigiLockerCompatible: true
  },
  {
    id: 'graduation_degree',
    name: 'Graduation / Degree Certificate & Marksheets',
    shortName: 'Degree Certificate',
    category: 'educational',
    commonAliases: ['Bachelor Degree', 'Provisional Degree', 'Consolidated Marksheet'],
    issuingBody: 'UGC-recognized Universities / Institutes',
    description: 'Proof of tertiary qualification for professional applications, employment, and competitive exams.',
    typicalValidity: 'Permanent',
    isDigiLockerCompatible: true
  },
  {
    id: 'bank_passbook_statement',
    name: 'Bank Passbook / 6-Month Bank Statement',
    shortName: 'Bank Passbook/Statement',
    category: 'income_financial',
    commonAliases: ['Passbook copy', 'Account Statement', 'Cancelled Cheque'],
    issuingBody: 'Scheduled Commercial Banks / Post Office Banks',
    description: 'With bank stamp, photo, and IFSC. Valid proof of address, financial status, and refund account.',
    typicalValidity: 'Recent (within last 3 months for statements)',
    isDigiLockerCompatible: false
  },
  {
    id: 'electricity_bill',
    name: 'Electricity / Utility Bill (Recent)',
    shortName: 'Electricity Bill',
    category: 'address',
    commonAliases: ['Power Bill', 'Discom Bill', 'Water Bill', 'Piped Gas Bill'],
    issuingBody: 'State Electricity Boards / Utility Providers',
    description: 'Accepted as address proof if issued in the applicant or parent/spouse name within last 3 months.',
    typicalValidity: 'Issued within last 90 days',
    isDigiLockerCompatible: true
  },
  {
    id: 'rent_agreement',
    name: 'Registered Rent / Lease Agreement',
    shortName: 'Rent Agreement',
    category: 'address',
    commonAliases: ['Tenancy Agreement', 'Registered Lease'],
    issuingBody: 'State Revenue / Sub-Registrar Office',
    description: 'Registered with the sub-registrar office for tenant address proof (unregistered often rejected).',
    typicalValidity: 'Valid during lease tenure (typically 11 months)',
    isDigiLockerCompatible: false
  },
  {
    id: 'ration_card',
    name: 'Ration Card / Food Security Card',
    shortName: 'Ration Card',
    category: 'address',
    commonAliases: ['FSC', 'NFSA Card', 'APL/BPL Card', 'Family Ration Card'],
    issuingBody: 'Department of Food, Civil Supplies and Consumer Affairs',
    description: 'Official household document establishing family composition, address, and food subsidy eligibility.',
    typicalValidity: 'Permanent (subject to periodic state KYC)',
    isDigiLockerCompatible: true
  },
  {
    id: 'birth_certificate',
    name: 'Birth Certificate',
    shortName: 'Birth Certificate',
    category: 'date_of_birth',
    commonAliases: ['Municipal Birth Certificate', 'Civil Registration Record'],
    issuingBody: 'Registrar of Births and Deaths / Municipal Corporation / Gram Panchayat',
    description: 'Primary legal proof of birth date and parentage under the Registration of Births and Deaths Act.',
    typicalValidity: 'Permanent',
    isDigiLockerCompatible: true
  },
  {
    id: 'income_certificate',
    name: 'Income Certificate (Revenue Authority)',
    shortName: 'Income Certificate',
    category: 'income_financial',
    commonAliases: ['Tahsidlar Income Certificate', 'MeeSeva/E-Seva Certificate'],
    issuingBody: 'Tehsildar / Sub-Divisional Magistrate (SDM) / Revenue Department',
    description: 'Essential for fee concessions, government scholarships, and Economically Weaker Section (EWS) schemes.',
    typicalValidity: '1 financial year (State specific: usually April to March)',
    isDigiLockerCompatible: true
  },
  {
    id: 'caste_certificate',
    name: 'Caste / Community Certificate (SC / ST / OBC)',
    shortName: 'Caste Certificate',
    category: 'identity',
    commonAliases: ['Community Certificate', 'OBC-NCL Certificate', 'SC/ST Certificate'],
    issuingBody: 'District Magistrate / Tehsildar / Competent Revenue Authority',
    description: 'Required for constitutional reservation benefits in education, competitive exams, and government employment.',
    typicalValidity: 'Permanent (SC/ST) / 1 year for OBC Non-Creamy Layer',
    isDigiLockerCompatible: true
  },
  {
    id: 'domicile_certificate',
    name: 'Domicile / Residence Certificate',
    shortName: 'Domicile Certificate',
    category: 'address',
    commonAliases: ['PRC', 'Permanent Resident Certificate', 'Nativity Certificate'],
    issuingBody: 'State Revenue Department / District Administration',
    description: 'Certifies permanent resident status in a state, needed for state-quota seats and state government jobs.',
    typicalValidity: 'Permanent or 3-5 years per state rules',
    isDigiLockerCompatible: true
  },
  {
    id: 'passport_photo',
    name: 'Recent Passport-Size Photographs',
    shortName: 'Passport Photo',
    category: 'photo_biometric',
    commonAliases: ['Colour Photo', '3.5 x 4.5 cm Photo', 'White background photo'],
    issuingBody: 'Self / Professional Studio',
    description: 'Taken within the last 3 months with a plain white or light off-white background, neutral expression.',
    typicalValidity: 'Taken within last 3 months',
    isDigiLockerCompatible: false
  },
  {
    id: 'scanned_signature',
    name: 'Scanned Specimen Signature',
    shortName: 'Signature Scan',
    category: 'photo_biometric',
    commonAliases: ['Signature Image', 'Black ink signature on white paper'],
    issuingBody: 'Applicant handwritten',
    description: 'Signed with black or blue ink pen on clean white unruled paper, cropped to 200x230 pixels.',
    typicalValidity: 'Permanent',
    isDigiLockerCompatible: false
  },
  {
    id: 'mobile_linked_aadhaar',
    name: 'Active Mobile Number Linked to Aadhaar (OTP Ready)',
    shortName: 'Aadhaar-Linked Mobile',
    category: 'contact_verification',
    commonAliases: ['UIDAI Registered Mobile', 'Aadhaar OTP Number'],
    issuingBody: 'Telecom Service Provider (Jio/Airtel/Vi/BSNL) registered in UIDAI',
    description: 'Mandatory for paperless e-KYC, DigiLocker authentication, and instant application verification.',
    typicalValidity: 'Active mobile subscription',
    isDigiLockerCompatible: false
  },
  {
    id: 'active_email',
    name: 'Active Personal Email ID',
    shortName: 'Email Address',
    category: 'contact_verification',
    commonAliases: ['Gmail/Outlook Address'],
    issuingBody: 'Email Service Provider',
    description: 'Required for receiving application reference numbers, acknowledgement slips, and appointment letters.',
    typicalValidity: 'Active inbox access',
    isDigiLockerCompatible: false
  }
];
