import { ServiceDetail } from '../../types/service';

export const SCHOLARSHIP_SERVICE: ServiceDetail = {
  id: 'national-scholarship-portal',
  slug: 'nsp-scholarship',
  name: 'National Scholarship Portal (NSP - Pre/Post Matric & Higher Education Schemes)',
  shortName: 'NSP Scholarship',
  tagline: 'Single unified portal for Central and State government scholarships and financial grants.',
  category: 'education',
  issuingAuthority: 'Ministry of Electronics and IT & Ministry of Education, Govt of India',
  mode: 'online_only',
  trustRating: 5,
  lastVerifiedDate: '13 September 2026',
  officialPortalUrl: 'https://scholarships.gov.in',
  estimatedDuration: 'Verification by Institute & State: 30-60 days | Direct DBT Disbursement to Bank',
  standardFee: '₹0.00 (100% Free)',
  digiLockerAvailable: true,
  description: 'National Scholarship Portal (NSP) is a one-stop digital platform through which students across India apply for Central Sector Schemes, UGC/AICTE scholarships, and State Schemes. Funds are credited directly to the student\'s Aadhaar-seeded bank account through DBT.',

  overviewFacts: [
    { key: 'Nodal Body', value: 'Ministry of Electronics and Information Technology (MeitY)' },
    { key: 'Scholarship Schemes', value: 'Over 100 Central, UGC, AICTE & State Government Schemes' },
    { key: 'Disbursement Method', value: 'Direct Benefit Transfer (DBT) directly into bank account' },
    { key: 'Application Fee', value: '₹0.00 (Completely Free)' },
    { key: 'One-Time Registration (OTR)', value: 'Mandatory OTR Face-Auth / Aadhaar Registration' },
    { key: 'Aadhaar Seeding', value: 'Bank account must be seeded with NPCI / Aadhaar' }
  ],

  eligibilityCriteria: [
    {
      title: 'Enrolled Students',
      description: 'Students currently enrolled in recognized schools, colleges, ITIs, polytechnics, or universities with valid AISHE/UDISE codes.',
      isEligible: true
    },
    {
      title: 'Income Criteria (Scheme Specific)',
      description: 'Family income ceiling varies by scheme (typically up to ₹2.5 Lakh per annum for Post-Matric, or up to ₹8.0 Lakh for Merit-cum-Means).',
      isEligible: true
    },
    {
      title: 'Academic Marks Criteria',
      description: 'Minimum 50% to 60% marks in previous qualifying board/degree examination.',
      isEligible: true
    }
  ],

  documentRequirements: [
    {
      id: 'sch_bonafide',
      title: 'Bonafide Student Certificate / College Admission Fee Receipt',
      purpose: 'Proof of active enrollment in recognized educational institution',
      description: 'Bonafide certificate issued by Head of Institute with stamp and roll number:',
      isMandatory: true,
      options: [
        { id: 'sch_bonafide_cert', name: 'Bonafide Certificate / Current Year Fee Receipt', category: 'educational', isOriginalRequired: true }
      ]
    },
    {
      id: 'sch_income',
      title: 'Income Certificate (Issued by Revenue Competent Authority)',
      purpose: 'Verify household income eligibility',
      description: 'Must be issued by Tehsildar / Revenue Officer in parent\'s name for current financial year:',
      isMandatory: true,
      options: [
        { id: 'income_certificate', name: 'Competent Authority Income Certificate', category: 'income_financial', isOriginalRequired: true }
      ]
    },
    {
      id: 'sch_caste',
      title: 'Caste / Community Certificate (For Reserved Schemes)',
      purpose: 'Required for SC / ST / OBC / Minority specific schemes',
      description: 'Not required for general merit schemes:',
      isMandatory: false,
      options: [
        { id: 'caste_certificate', name: 'Caste / Community Certificate (SC/ST/OBC)', category: 'identity', isOriginalRequired: true }
      ]
    },
    {
      id: 'sch_marks',
      title: 'Previous Qualifying Marksheet',
      purpose: 'Verify minimum marks criteria',
      description: 'Marksheet of 10th, 12th, or previous university semester:',
      isMandatory: true,
      options: [
        { id: 'marksheet_10th', name: '10th Standard Marksheet', category: 'educational' },
        { id: 'marksheet_12th', name: '12th Standard Marksheet', category: 'educational' },
        { id: 'graduation_degree', name: 'Previous Year Marksheet / Degree Certificate', category: 'educational' }
      ]
    },
    {
      id: 'sch_bank',
      title: 'Aadhaar-Seeded Bank Account Passbook Copy',
      purpose: 'Receive scholarship DBT disbursement',
      description: 'Student\'s own bank account with IFSC code and bank seal. Must be NPCI mapped:',
      isMandatory: true,
      options: [
        { id: 'bank_passbook_statement', name: 'Bank Passbook / Statement copy with IFSC', category: 'income_financial' }
      ]
    }
  ],

  beforeApplyingChecklist: [
    {
      id: 'chk_sch_npcimapped',
      label: 'Bank account is active and seeded with Aadhaar on NPCI mapper',
      detail: 'Govt funds fail if bank account is not mapped to Aadhaar in the National Payments Corporation of India (NPCI) database.',
      category: 'financial',
      isCrucial: true
    },
    {
      id: 'chk_sch_income_valid',
      label: 'Income Certificate is valid for current financial year',
      detail: 'Expired certificates will be rejected during District Nodal Officer scrutiny.',
      category: 'document',
      isCrucial: true
    },
    {
      id: 'chk_sch_institute_aishe',
      label: 'Know your College / School AISHE or UDISE Code',
      detail: 'Ask your college scholarship clerk for the exact AISHE code.',
      category: 'technical',
      isCrucial: true
    }
  ],

  officialPortals: [
    {
      label: 'National Scholarship Portal Official Website',
      url: 'https://scholarships.gov.in',
      purpose: 'application',
      isGovtVerified: true,
      badgeText: 'Official Portal (scholarships.gov.in)',
      domainAlert: 'Ensure URL ends with scholarships.gov.in'
    },
    {
      label: 'Check Aadhaar Bank Seeding Status (UIDAI / NPCI)',
      url: 'https://myaadhaar.uidai.gov.in/check-aadhaar-banking-status',
      purpose: 'verification',
      isGovtVerified: true,
      badgeText: 'Verify NPCI DBT Seeding'
    },
    {
      label: 'Track Scholarship Application Status',
      url: 'https://scholarships.gov.in/fresh/newstdRegfrmInstruction',
      purpose: 'tracking',
      isGovtVerified: true,
      badgeText: 'Status Tracker'
    }
  ],

  steps: [
    {
      stepNumber: 1,
      phase: 'before',
      title: 'Step 1: Generate One-Time Registration (OTR) via Face-Auth App',
      shortSummary: 'Download NSP OTR App, authenticate with Aadhaar face scan, and generate OTR Number.',
      instructions: [
        'Download the official "NSP OTR App" and "Aadhaar FaceRD" app from Google Play Store.',
        'Enter student\'s Aadhaar number and verify with mobile OTP.',
        'Perform live face authentication via Aadhaar FaceRD.',
        'System generates a unique 14-digit One-Time Registration (OTR) Number and password sent to your mobile.'
      ],
      whatToClick: 'Download NSP OTR App -> Enter Aadhaar -> Complete Face Scan -> Save OTR.',
      cautionsAndWarnings: [
        'Aadhaar details (Name, DOB, Gender) must match your educational certificates exactly.'
      ],
      mockup: {
        screenTitle: 'National Scholarship Portal - One Time Registration (OTR)',
        portalName: 'National Scholarship Portal (NSP)',
        urlBar: 'https://scholarships.gov.in/otr/registration',
        fields: [
          { name: 'otrNumber', label: '14-digit OTR Number', type: 'text', placeholder: 'OTR2026001948271', helpText: 'Lifetime registration ID' },
          { name: 'faceAuthStatus', label: 'Aadhaar Face Authentication', type: 'text', placeholder: 'Biometric Match Confirmed - 97%', helpText: 'Verified via UIDAI FaceRD' }
        ],
        actionButtonText: 'PROCEED TO SCHEME APPLICATION',
        hotspots: [
          {
            id: 'hsc1',
            title: 'OTR Registration Number',
            description: 'Save this 14-digit number to apply for any scholarship scheme.',
            actionText: 'Save OTR Number',
            xPercent: 50,
            yPercent: 35,
            highlightType: 'warning'
          }
        ]
      }
    },
    {
      stepNumber: 2,
      phase: 'during',
      title: 'Step 2: Login to NSP & Select Eligible Scholarship Scheme',
      shortSummary: 'Login with OTR, select course, and choose matching scholarship scheme.',
      instructions: [
        'Login on scholarships.gov.in with OTR Number and password.',
        'Fill Academic Details: Current Institute, Course/Class, Present Class Year, Mode of Study (Regular/Full-Time).',
        'Enter Previous Board Exam details and marks percentage.',
        'Based on your category, income, and course, eligible schemes will appear on screen.',
        'Select the appropriate Central Sector or State Scheme.'
      ],
      whatToClick: 'Click "Apply for Scholarship" -> Fill Academic Profile -> Choose Scheme.',
      cautionsAndWarnings: [
        'You can apply for multiple eligible schemes, but can only receive financial disbursement from ONE government scholarship.'
      ],
      mockup: {
        screenTitle: 'NSP Schemes Selection Dashboard',
        portalName: 'National Scholarship Portal - Scheme Allocation',
        urlBar: 'https://scholarships.gov.in/student/schemes',
        fields: [
          { name: 'institution', label: 'Select Educational Institution', type: 'text', placeholder: 'Search by AISHE / UDISE Code or Name', helpText: 'Select your registered college' },
          { name: 'course', label: 'Present Course / Degree', type: 'select', options: ['B.Tech / B.E (Engineering)', 'MBBS (Medical)', 'B.Sc / B.Com / B.A', 'Polytechnic Diploma'], helpText: 'Course enrolled' },
          { name: 'schemeChoice', label: 'Eligible Scholarship Schemes', type: 'radio', options: ['Post Matric Scholarship for Minorities / SC / ST', 'Central Sector Scheme of Scholarship for College and University Students', 'Pragati / Saksham Scholarship (AICTE)'], helpText: 'Select applicable scheme' }
        ],
        actionButtonText: 'SAVE & UPLOAD DOCUMENTS',
        hotspots: [
          {
            id: 'hsc2',
            title: 'Select Scheme',
            description: 'Choose the scheme you qualify for.',
            actionText: 'Select scholarship scheme',
            xPercent: 30,
            yPercent: 65,
            highlightType: 'select'
          },
          {
            id: 'hsc3',
            title: 'Save & Upload',
            description: 'Proceed to upload supporting documents.',
            actionText: 'Click "SAVE & UPLOAD"',
            xPercent: 78,
            yPercent: 88,
            highlightType: 'submit'
          }
        ]
      }
    },
    {
      stepNumber: 3,
      phase: 'during',
      title: 'Step 3: Upload Documents & Final Submission',
      shortSummary: 'Upload Bonafide, Marksheet, Income Certificate, and submit.',
      instructions: [
        'Download the system-generated Bonafide Certificate template.',
        'Get it signed and stamped by your College Principal or Registrar.',
        'Upload clear PDF scans of Bonafide Certificate, Income Certificate, Caste Certificate, and Marksheet (max 200 KB each).',
        'Click "Final Submit". Print the final application form with your Application ID.'
      ],
      whatToClick: 'Upload signed Bonafide PDF -> Click "Final Submit".',
      cautionsAndWarnings: [
        'Once submitted, the form CANNOT be edited unless sent back by the college nodal officer for defect correction.'
      ],
      mockup: {
        screenTitle: 'NSP Document Upload & Final Confirmation',
        portalName: 'NSP Document Management Engine',
        urlBar: 'https://scholarships.gov.in/student/uploadDocs',
        fields: [
          { name: 'bonafideUpload', label: 'Stamped Bonafide Certificate', type: 'file', helpText: 'Signed by College Principal' },
          { name: 'incomeUpload', label: 'Valid Income Certificate', type: 'file', helpText: 'Issued by Tehsildar' },
          { name: 'finalSubmit', label: 'Declaration & Final Submission', type: 'checkbox', helpText: 'All details verified' }
        ],
        actionButtonText: 'FINAL SUBMIT SCHOLARSHIP APPLICATION',
        hotspots: [
          {
            id: 'hsc4',
            title: 'Final Submit Button',
            description: 'Submits file to Institute Nodal Officer (INO) queue.',
            actionText: 'Click "FINAL SUBMIT"',
            xPercent: 50,
            yPercent: 82,
            highlightType: 'submit'
          }
        ]
      }
    },
    {
      stepNumber: 4,
      phase: 'after',
      title: 'Step 4: College Verification & Direct DBT Disbursement',
      shortSummary: 'College verifies application -> State Nodal Officer approves -> Funds sent via DBT.',
      instructions: [
        'Submit a hard copy of the printed application and photocopies of documents to your college scholarship cell.',
        'Institute Nodal Officer (INO) verifies your records on the portal.',
        'District / State Nodal Officer gives administrative approval.',
        'Ministry generates the Merit List / Sanction Order.',
        'Funds are transferred directly via PFMS (Public Financial Management System) into your Aadhaar-linked bank account.'
      ],
      whatToClick: 'Submit hardcopy to College Office -> Monitor PFMS tracking.',
      cautionsAndWarnings: [
        'Track status weekly. If marked "Defective", you get 7 days to re-upload the corrected document.'
      ],
      mockup: {
        screenTitle: 'NSP Application Lifecycle Tracking',
        portalName: 'Public Financial Management System (PFMS) & NSP Integration',
        urlBar: 'https://scholarships.gov.in/student/track',
        fields: [
          { name: 'appId', label: 'NSP Application ID', type: 'text', placeholder: 'TS2026270019482', helpText: 'Unique tracking ID' },
          { name: 'verificationStatus', label: 'Verification Level', type: 'text', placeholder: 'Verified by Institute -> Verified by State Officer -> Sanctioned', helpText: 'Approved' },
          { name: 'dbtPayment', label: 'DBT Payment Status (PFMS)', type: 'text', placeholder: 'Payment Successful: ₹50,000 credited to Bank Account ending in ****4102', helpText: 'Disbursed' }
        ],
        actionButtonText: 'VIEW PAYMENT TRANSACTION DETAILS',
        hotspots: [
          {
            id: 'hsc5',
            title: 'PFMS Credit Status',
            description: 'Check credit reference number and date.',
            actionText: 'View payment details',
            xPercent: 50,
            yPercent: 62,
            highlightType: 'warning'
          }
        ]
      }
    }
  ],

  feesStructure: [
    {
      type: 'NSP Portal Application',
      amount: '₹0.00 (100% Free)',
      paymentModes: ['Free by Government of India'],
      notes: 'No agency or institution is permitted to charge fees for scholarship submission'
    }
  ],

  timelines: [
    { stage: 'OTR Face-Auth Registration', duration: '5 to 10 Minutes' },
    { stage: 'Online Application & Document Upload', duration: 'Same day' },
    { stage: 'College / Institute Level Verification', duration: '15 to 30 Days' },
    { stage: 'State / Ministry Merit & Sanction', duration: '30 to 60 Days' },
    { stage: 'Direct DBT Transfer into Bank Account', duration: 'Varies by academic cycle (Typically Oct-Feb)' }
  ],

  trackingGuide: {
    identifierName: 'NSP Application ID / OTR Number',
    sampleFormat: 'TS2026270019482 (Alphanumeric)',
    stepsToTrack: [
      'Login to scholarships.gov.in using your OTR or Application ID and password.',
      'Click "Track Application Status" in the left sidebar.',
      'Check status stages: "Application Verified by INO", "Application Verified by SNO", "Scholarship Sanctioned", or "Payment Processed by PFMS".'
    ],
    directTrackingUrl: 'https://scholarships.gov.in',
    smsTrackingFormat: 'Updates sent via SMS from sender "NSP-GOV".'
  },

  afterSubmissionActions: [
    {
      title: 'Submit Paper Copy to College Scholarship Counter',
      description: 'Hand over printed application and attached copies to college office for INO approval.',
      timeline: 'Within 5 days of online submission',
      isPhysicalVisitRequired: true
    },
    {
      title: 'Monitor Bank Account for DBT Credit',
      description: 'Funds will be deposited directly by Central/State government.',
      timeline: 'End of academic quarter',
      isPhysicalVisitRequired: false
    }
  ],

  commonMistakes: [
    {
      mistake: 'Bank account not mapped with Aadhaar on NPCI mapper',
      howToAvoid: 'Visit your bank branch and submit the "Aadhaar Seeding with NPCI Mapper Consent Form".',
      consequence: 'PFMS payment fails with error: "Aadhaar not mapped to customer identifier".'
    },
    {
      mistake: 'Selecting wrong college AISHE code',
      howToAvoid: 'Check the exact AISHE code with your college administration.',
      consequence: 'Your application gets routed to a different college and sits unverified until deadline.'
    }
  ],

  rejectionTroubleshooting: [
    {
      issue: 'Application marked "Defective" by Institute',
      resolution: 'Login immediately to NSP. Read the defect remark (e.g. "Fee receipt unreadable"). Re-upload the clean document and re-submit within 7 days.'
    },
    {
      issue: 'PFMS Payment Failed',
      resolution: 'Ensure your savings account does not have a minor limit, freeze, or dormancy. Request your bank to enable DBT transactions.'
    }
  ],

  faqs: [
    {
      question: 'Can I apply for more than one scholarship on NSP?',
      answer: 'You can apply for multiple eligible schemes to maximize your chances, but according to government rules, you are allowed to receive financial benefit from only ONE scholarship scheme per academic year.'
    },
    {
      question: 'What is OTR in National Scholarship Portal?',
      answer: 'One-Time Registration (OTR) is a unique 14-digit reference number that replaces repeated data entry. It is linked with Aadhaar biometrics and remains valid for your entire academic journey across school, graduation, and postgraduate studies.'
    }
  ]
};
