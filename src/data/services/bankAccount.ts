import { ServiceDetail } from '../../types/service';

export const BANK_ACCOUNT_SERVICE: ServiceDetail = {
  id: 'bank-savings-account',
  slug: 'bank-savings-account',
  name: 'Digital Savings Bank Account & RBI Master Direction on KYC',
  shortName: 'Bank Account & KYC',
  tagline: 'Zero-balance digital account opening via Video KYC (V-CIP) & official RBI Master Direction rules for OVDs, Re-KYC, and CKYCR.',
  category: 'banking',
  issuingAuthority: 'Reserve Bank of India (RBI) / Scheduled Commercial Banks',
  mode: 'online_only',
  trustRating: 4.9,
  lastVerifiedDate: 'September 2026',
  officialPortalUrl: 'https://www.rbi.org.in/commonman/english/Scripts/FAQs.aspx?Id=3782',
  estimatedDuration: '10 to 30 minutes (Instant account number & UPI)',
  standardFee: '₹0.00 (Zero opening fee / Zero minimum balance)',
  digiLockerAvailable: true,
  description: 'Complete step-by-step guidance for opening a full-service digital savings bank account from home using Video KYC (V-CIP), compliant with the Reserve Bank of India (RBI) Master Direction on KYC. Covers Officially Valid Documents (OVDs), Deemed OVDs for address, Small Accounts, CKYCR 14-digit identifiers, and Periodic Updation (Re-KYC).',

  overviewFacts: [
    { key: 'Account Type', value: 'Zero Balance Regular Savings Account (BSBDA / Digital Savings)' },
    { key: 'KYC Mode', value: 'Video-based Customer Identification Process (V-CIP) / e-KYC' },
    { key: 'RBI Regulation', value: 'RBI Master Direction on KYC (Updated 2024-2026)' },
    { key: 'OVD Count', value: '6 Officially Valid Documents (Aadhaar, Passport, DL, Voter ID, NREGA, NPR)' },
    { key: 'CKYCR Integration', value: '14-Digit KYC Identifier (KIN) for universal banking portability' },
    { key: 'Debit Card & UPI', value: 'Instant Virtual Debit Card + Physical Card delivered in 5-7 days' }
  ],

  eligibilityCriteria: [
    {
      title: 'Indian Resident Individual',
      description: 'Must be an Indian citizen residing within the territorial borders of India during the Video KYC call.',
      isEligible: true
    },
    {
      title: 'Age Requirement',
      description: 'Must be 18 years of age or older for contactless digital account opening.',
      isEligible: true
    },
    {
      title: 'Valid PAN & Aadhaar (or Form 60 / OVD)',
      description: 'Must hold PAN (or Form 60) and any one Officially Valid Document (OVD) with mobile OTP readiness.',
      isEligible: true
    },
    {
      title: 'New to Bank Customer',
      description: 'Applicant must not already have an active savings account in the same bank.',
      isEligible: true
    }
  ],

  documentRequirements: [
    {
      id: 'bank_ovd',
      title: 'RBI Officially Valid Document (OVD) for Identity & Address',
      purpose: 'Statutory Customer Due Diligence (CDD) under RBI Master Direction Paragraph 16',
      description: 'Under RBI regulations, any ONE of the following 6 Officially Valid Documents (OVDs) or equivalent e-document satisfies identity & address:',
      isMandatory: true,
      options: [
        { id: 'aadhaar_card', name: 'Proof of possession of Aadhaar number (OTP e-KYC / Offline XML)', category: 'identity', isOriginalRequired: false },
        { id: 'passport', name: 'Valid Indian Passport', category: 'identity', isOriginalRequired: true },
        { id: 'driving_licence', name: 'Driving Licence (Issued by State RTO)', category: 'identity', isOriginalRequired: true },
        { id: 'voter_id', name: 'Voter\'s Identity Card (Issued by Election Commission of India)', category: 'identity', isOriginalRequired: true },
        { id: 'nrega_job_card', name: 'Job Card issued by NREGA (Duly signed by State Govt officer)', category: 'identity', isOriginalRequired: true },
        { id: 'npr_letter', name: 'Letter issued by National Population Register (NPR)', category: 'identity', isOriginalRequired: true }
      ]
    },
    {
      id: 'bank_pan',
      title: 'Permanent Account Number (PAN) or Form 60',
      purpose: 'Mandatory under Income-tax Rules 1962 and RBI Master Direction for financial transactions',
      description: 'Must show the ORIGINAL physical plastic PAN card to the camera during video call (e-PAN on phone screen is NOT permitted by RBI):',
      isMandatory: true,
      options: [
        { id: 'pan_card', name: 'Original Physical PAN Card (Laminated plastic card in hand)', category: 'identity', isOriginalRequired: true },
        { id: 'form_60', name: 'Form No. 60 (Only if applicant does not possess a PAN card)', category: 'identity', isOriginalRequired: false }
      ]
    },
    {
      id: 'bank_deemed_ovd',
      title: 'Deemed OVDs for Proof of Current Address (If Primary OVD has old address)',
      purpose: 'Limited purpose proof of current residence with 3-month grace period',
      description: 'If your primary OVD shows your permanent address but you currently reside elsewhere, any ONE of the following deemed OVDs is acceptable:',
      isMandatory: false,
      options: [
        { id: 'utility_bill_elec', name: 'Electricity Bill (Not more than 2 months old)', category: 'address', isOriginalRequired: false },
        { id: 'utility_bill_water_gas', name: 'Water or Piped Gas Bill (Not more than 2 months old)', category: 'address', isOriginalRequired: false },
        { id: 'postpaid_phone_bill', name: 'Telephone or Post-paid Mobile Phone Bill (< 2 months old)', category: 'address', isOriginalRequired: false },
        { id: 'property_tax_receipt', name: 'Property or Municipal Tax Receipt', category: 'address', isOriginalRequired: false },
        { id: 'ppo_order', name: 'Pension Payment Order (PPO) containing current address', category: 'address', isOriginalRequired: false },
        { id: 'employer_allotment', name: 'Accommodation Allotment Letter from Govt/PSU/SCB/Listed Co.', category: 'address', isOriginalRequired: false }
      ]
    },
    {
      id: 'bank_signature',
      title: 'Blank White Paper & Pen for Live Specimen Signature',
      purpose: 'Capture specimen signature for chequebook and high-value transactions',
      description: 'You will sign on paper during the live video call while the officer observes:',
      isMandatory: true,
      options: [
        { id: 'scanned_signature', name: 'Live Pen & Paper Signature on Camera', category: 'photo_biometric', isOriginalRequired: true }
      ]
    }
  ],

  beforeApplyingChecklist: [
    {
      id: 'chk_bank_pan_phys',
      label: 'Original physical PAN card in hand (Photos/scans on phone are NOT accepted)',
      detail: 'RBI V-CIP guidelines strictly mandate holding up your physical plastic PAN card to the smartphone/laptop camera.',
      category: 'document',
      isCrucial: true
    },
    {
      id: 'chk_bank_aadhaar_otp',
      label: 'Phone linked with Aadhaar is active and receiving SMS',
      detail: 'Aadhaar e-KYC OTP expires in 10 minutes.',
      category: 'technical',
      isCrucial: true
    },
    {
      id: 'chk_bank_camera_location',
      label: 'Well-lit quiet room with GPS location permission enabled',
      detail: 'The bank app must verify you are physically inside Indian borders via GPS geofencing.',
      category: 'technical',
      isCrucial: true
    },
    {
      id: 'chk_bank_white_paper',
      label: 'Blank white sheet of paper & dark black/blue pen ready',
      detail: 'Bank officer will prompt you to sign on camera for signature archiving.',
      category: 'technical',
      isCrucial: true
    }
  ],

  officialPortals: [
    {
      label: 'RBI Master Direction on KYC - Official FAQs (Id=3782)',
      url: 'https://www.rbi.org.in/commonman/english/Scripts/FAQs.aspx?Id=3782',
      purpose: 'information',
      isGovtVerified: true,
      badgeText: 'RBI Official Regulatory FAQs',
      domainAlert: 'Authoritative Reserve Bank of India KYC instructions for all banks and citizens'
    },
    {
      label: 'Central KYC Registry (CKYCR Portal - ckycindia.in)',
      url: 'https://www.ckycindia.in',
      purpose: 'verification',
      isGovtVerified: true,
      badgeText: 'CKYCR Registry Portal',
      domainAlert: 'Find or verify your 14-digit KYC Identifier (KIN)'
    },
    {
      label: 'RBI Kehta Hai - Citizen Anti-Fraud Awareness',
      url: 'https://rbikehtahai.rbi.org.in',
      purpose: 'information',
      isGovtVerified: true,
      badgeText: 'RBI Kehta Hai Safety Portal'
    },
    {
      label: 'State Bank of India (SBI YONO Savings Account)',
      url: 'https://bank.sbi/web/personal-banking/accounts/saving-account/insta-plus-video-kyc-savings-account',
      purpose: 'application',
      isGovtVerified: true,
      badgeText: 'SBI Official Portal',
      domainAlert: 'Ensure URL begins with bank.sbi or onlinesbi.sbi'
    },
    {
      label: 'HDFC Bank Digital Account Opening',
      url: 'https://www.hdfcbank.com/personal/save/accounts/savings-accounts',
      purpose: 'application',
      isGovtVerified: true,
      badgeText: 'HDFC Official Portal'
    },
    {
      label: 'ICICI Bank Insta Save Account',
      url: 'https://www.icicibank.com/personal-banking/accounts/savings-account/insta-save-account',
      purpose: 'application',
      isGovtVerified: true,
      badgeText: 'ICICI Official Portal'
    }
  ],

  // Official Website Capabilities & Features Breakdown
  websiteFeatures: {
    portalName: 'Reserve Bank of India (RBI) - Master Direction on KYC Regulatory Framework',
    officialUrl: 'https://www.rbi.org.in/commonman/english/Scripts/FAQs.aspx?Id=3782',
    summary: 'The statutory Know Your Customer (KYC) regulatory framework published by the Reserve Bank of India (RBI) governing Customer Due Diligence (CDD), Officially Valid Documents (OVDs), Central KYC Records Registry (CKYCR), Video-based Customer Identification Process (V-CIP), and Periodic Updation (Re-KYC) across all banks and financial institutions.',
    highlights: [
      '6 Designated Officially Valid Documents (OVDs): Passport, DL, Aadhaar, Voter ID, NREGA Job Card, NPR Letter',
      'Deemed OVDs for address proof (utility bills < 2 months) with 3-month grace period to submit updated OVD',
      'Small Accounts framework: Zero OVD required, valid for 12 months (max balance ₹50k, deposits ₹1L/yr)',
      'CKYCR 14-digit KYC Identifier (KIN): Eliminates repetitive document submissions across financial entities',
      'Video KYC (V-CIP): Facial recognition & live audio-visual verification on par with branch visits',
      'Periodic Updation (Re-KYC): High risk (2 yrs), Medium (8 yrs), Low (10 yrs); self-declaration allowed if no change',
      'Inoperative Accounts (> 2 yrs dormant) reactivated via V-CIP or any branch without fees'
    ],
    featuresList: [
      {
        title: '6 Officially Valid Documents (OVD) Standard',
        description: 'Under Section 5 of the RBI Master Direction, only 6 documents constitute valid proof of identity and address: Passport, Driving Licence, proof of possession of Aadhaar, Voter Identity Card, NREGA Job Card, and NPR letter. Ration Card is NOT an OVD for banking.',
        category: 'core_service',
        url: 'https://www.rbi.org.in/commonman/english/Scripts/FAQs.aspx?Id=3782',
        badge: '6 Statutory OVDs'
      },
      {
        title: 'Deemed OVDs for Address Proof (3-Month Grace Period)',
        description: 'If your primary OVD lacks your current residential address, RBI permits submitting a deemed OVD (utility bills < 2 months old, property tax receipt, PPO, or employer allotment letter), provided an updated OVD is submitted within 3 months.',
        category: 'core_service',
        url: 'https://www.rbi.org.in/commonman/english/Scripts/FAQs.aspx?Id=3782',
        badge: '3-Month Window'
      },
      {
        title: 'Small Accounts Scheme (No OVD Required)',
        description: 'Under Paragraph 23 of the Master Direction, individuals lacking any OVD can open a "Small Account" with a self-attested photo and signature before a bank officer. Operational for 12 months with limits: balance <= ₹50k, credits <= ₹1L/year, withdrawals <= ₹10k/month.',
        category: 'core_service',
        url: 'https://www.rbi.org.in/commonman/english/Scripts/FAQs.aspx?Id=3782',
        badge: 'Zero OVD Access'
      },
      {
        title: 'Central KYC Records Registry (CKYCR) & 14-Digit KIN',
        description: 'Centralized registry (www.ckycindia.in) that stores verified customer KYC records. Once an RE uploads your data, you receive a 14-digit KYC Identifier (KIN). Sharing this KIN with other banks or mutual funds eliminates resubmitting physical documents.',
        category: 'tracking_records',
        url: 'https://www.ckycindia.in',
        badge: 'Universal KIN'
      },
      {
        title: 'Video-based Customer Identification Process (V-CIP)',
        description: 'RBI-regulated contactless onboarding method using live audio-visual interaction, geo-tagging inside India, and AI facial matching against Aadhaar/PAN. RBI clarifies that blinking eyes or specific facial gestures are NOT mandatory for liveness check, ensuring PwD accessibility.',
        category: 'verification',
        url: 'https://www.rbi.org.in/commonman/english/Scripts/FAQs.aspx?Id=3782',
        badge: 'Contactless V-CIP'
      },
      {
        title: 'Periodic Updation of KYC (Re-KYC Standards)',
        description: 'Periodic KYC refresh mandated at least once in 2 years for high-risk, 8 years for medium-risk, and 10 years for low-risk customers. If there is NO change in details, a simple self-declaration via Net Banking, Mobile App, ATM, or registered email/SMS is legally valid.',
        category: 'security_privacy',
        url: 'https://www.rbi.org.in/commonman/english/Scripts/FAQs.aspx?Id=3782',
        badge: 'Digital Re-KYC'
      },
      {
        title: 'Reactivation of Inoperative Accounts via V-CIP',
        description: 'Accounts with no customer-induced transactions for over 2 years are classified as inoperative. Under RBI instructions (Jan 2024), banks must facilitate activation at ANY branch (home or non-home) or through Video KYC (V-CIP) without charging fees.',
        category: 'core_service',
        url: 'https://www.rbi.org.in/commonman/english/Scripts/FAQs.aspx?Id=3782',
        badge: 'Free Activation'
      },
      {
        title: 'RBI Kehta Hai - Anti-Fraud & Phishing Protection',
        description: 'RBI warns the public never to click links embedded in unsolicited SMS or emails claiming your bank account or KYC is blocked. Banks never send links to complete KYC updates; all updates should be done via official banking portals only.',
        category: 'grievance_support',
        url: 'https://rbikehtahai.rbi.org.in',
        badge: 'Anti-Phishing'
      }
    ]
  },

  steps: [
    {
      stepNumber: 1,
      phase: 'before',
      title: 'Step 1: Choose Bank & Enter Mobile / Aadhaar Details',
      shortSummary: 'Enter mobile number, PAN, and complete Aadhaar OTP verification.',
      instructions: [
        'Open the official bank app (e.g. YONO SBI, HDFC MobileBanking, or iMobile) or official website.',
        'Click "Open Digital Savings Account (With Video KYC)".',
        'Enter your 10-digit mobile number and receive OTP.',
        'Enter your PAN Number and 12-digit Aadhaar Number.',
        'Enter the OTP sent by UIDAI to fetch your photo, name, date of birth, and address automatically.'
      ],
      whatToClick: 'Click "Open Digital Account" -> Enter PAN -> Enter Aadhaar & OTP.',
      cautionsAndWarnings: [
        'Ensure the mobile number matches the one registered in your Aadhaar card.'
      ],
      mockup: {
        screenTitle: 'Digital Savings Account - Aadhaar e-KYC Verification',
        portalName: 'Secure Banking Online Account Opening Portal',
        urlBar: 'https://apply.bank.sbi/account-opening/aadhaar-kyc',
        fields: [
          { name: 'mobile', label: 'Mobile Number', type: 'text', placeholder: 'Enter 10-digit mobile', helpText: 'Linked with Aadhaar' },
          { name: 'pan', label: 'Permanent Account Number (PAN)', type: 'text', placeholder: 'ABCDE1234F', helpText: '10-digit PAN' },
          { name: 'aadhaar', label: 'Aadhaar Number', type: 'text', placeholder: '12-digit Aadhaar', helpText: 'UIDAI OTP verification' }
        ],
        actionButtonText: 'SEND AADHAAR OTP & PROCEED',
        hotspots: [
          {
            id: 'hba1',
            title: 'Enter PAN Number',
            description: 'Enter your valid 10-digit PAN.',
            actionText: 'Type your PAN',
            xPercent: 50,
            yPercent: 42,
            highlightType: 'input'
          },
          {
            id: 'hba2',
            title: 'Send Aadhaar OTP',
            description: 'Triggers secure UIDAI e-KYC.',
            actionText: 'Click "SEND AADHAAR OTP"',
            xPercent: 50,
            yPercent: 82,
            highlightType: 'submit'
          }
        ]
      }
    },
    {
      stepNumber: 2,
      phase: 'during',
      title: 'Step 2: Enter Personal Profile & Nominee Details',
      shortSummary: 'Select occupation, annual income, branch, and register a nominee.',
      instructions: [
        'Select your marital status, father\'s name, mother\'s name.',
        'Select your occupation (Salaried / Self-Employed / Student / Professional) and annual income range.',
        'Select your preferred home branch (nearest branch to your residence).',
        'Add a Nominee: Name, date of birth, and relationship (Father, Mother, Spouse, Child). Nominee is vital for account safety.'
      ],
      whatToClick: 'Fill nominee details -> Select Home Branch -> Click "Proceed to Video KYC".',
      cautionsAndWarnings: [
        'Never skip nominee registration; it ensures your family has legal claim in emergencies.'
      ],
      mockup: {
        screenTitle: 'Applicant Profile & Nominee Details',
        portalName: 'Digital Banking Onboarding Engine',
        urlBar: 'https://apply.bank.sbi/account-opening/profile',
        fields: [
          { name: 'occupation', label: 'Occupation Type', type: 'select', options: ['Salaried (Private)', 'Salaried (Govt)', 'Student', 'Self-Employed / Business'], helpText: 'Income category' },
          { name: 'nomineeName', label: 'Nominee Full Name', type: 'text', placeholder: 'Enter Nominee Name', helpText: 'Legal beneficiary' },
          { name: 'nomineeRelation', label: 'Nominee Relationship', type: 'select', options: ['Mother', 'Father', 'Spouse', 'Son', 'Daughter'], helpText: 'Relation to applicant' }
        ],
        actionButtonText: 'PROCEED TO VIDEO KYC (V-CIP)',
        hotspots: [
          {
            id: 'hba3',
            title: 'Nominee Details',
            description: 'Enter name of your trusted family nominee.',
            actionText: 'Enter nominee name',
            xPercent: 50,
            yPercent: 45,
            highlightType: 'input'
          },
          {
            id: 'hba4',
            title: 'Start Video KYC',
            description: 'Initiate call with bank verification officer.',
            actionText: 'Click "PROCEED TO VIDEO KYC"',
            xPercent: 50,
            yPercent: 86,
            highlightType: 'submit'
          }
        ]
      }
    },
    {
      stepNumber: 3,
      phase: 'during',
      title: 'Step 3: Connect Live Video KYC Call with Bank Officer',
      shortSummary: '2-minute video call: Show original PAN card, sign on paper, answer basic questions.',
      instructions: [
        'Allow Camera, Microphone, and Location permissions when prompted by browser.',
        'A bank officer will connect on the video call within 1-2 minutes.',
        'The officer will ask you to state your full name and date of birth.',
        'Turn your camera to the rear or hold your physical PAN card up to the camera so the officer can capture a clear photo of your PAN.',
        'Sign with a blue/black pen on a white paper while the camera points at your hand.',
        'The officer will take a live screenshot of your face with geotag.'
      ],
      whatToClick: 'Click "Start Video Call" -> Allow permissions -> Show PAN card to camera.',
      cautionsAndWarnings: [
        'No other person should be in the frame or whispering answers to you; RBI rules require single-person presence.'
      ],
      mockup: {
        screenTitle: 'Video Customer Identification Process (V-CIP) Call',
        portalName: 'RBI Compliant Secure Video KYC Console',
        urlBar: 'https://vkyc.bank.sbi/live-session',
        fields: [
          { name: 'officerFeed', label: 'Bank Verification Officer', type: 'text', placeholder: '[Officer Connected: Suresh K - SBI KYC Desk]', helpText: 'Authorized Bank Officer' },
          { name: 'panInspection', label: 'PAN Card Camera Capture', type: 'text', placeholder: '[Hold PAN within bounding box - Capturing]', helpText: 'Clear un-blurred view' },
          { name: 'signatureCapture', label: 'Live Signature Capture', type: 'text', placeholder: '[Applicant signing on white paper - Verified]', helpText: 'Signature captured' }
        ],
        actionButtonText: 'VIDEO KYC SUCCESSFULLY COMPLETED',
        hotspots: [
          {
            id: 'hba5',
            title: 'PAN Card Alignment Box',
            description: 'Hold physical card steady inside this frame.',
            actionText: 'Hold PAN card steady to camera',
            xPercent: 50,
            yPercent: 48,
            highlightType: 'warning'
          }
        ]
      }
    },
    {
      stepNumber: 4,
      phase: 'after',
      title: 'Step 4: Receive Account Details & Activate Mobile Banking / UPI',
      shortSummary: 'Get Account Number, IFSC, and Customer ID via SMS; setup UPI instantly.',
      instructions: [
        'Within 10 minutes of Video KYC completion, you receive an SMS with your Account Number, IFSC Code, and Customer ID (CIF).',
        'Open BHIM, Google Pay, PhonePe, or Paytm.',
        'Select your bank and add your new account. UPI works immediately for receiving and sending funds.',
        'Set up Internet Banking password on the official bank portal.',
        'Your Welcome Kit (EMV Platinum/Classic Debit Card & Chequebook) will arrive by courier within 5 to 7 days.'
      ],
      whatToClick: 'Copy Account Number & IFSC -> Open UPI app to link account.',
      cautionsAndWarnings: [
        'Never share your Internet Banking password, UPI PIN, or debit card OTP with anyone, even bank employees!'
      ],
      mockup: {
        screenTitle: 'Account Activated - Welcome to Digital Banking',
        portalName: 'Instant Account Allocation Receipt',
        urlBar: 'https://apply.bank.sbi/account-opening/welcome',
        fields: [
          { name: 'acctNumber', label: 'Savings Account Number', type: 'text', placeholder: '409182746194', helpText: 'Active immediately' },
          { name: 'ifsc', label: 'Branch IFSC Code', type: 'text', placeholder: 'SBIN0012345', helpText: 'For NEFT/RTGS/IMPS' },
          { name: 'cardDispatch', label: 'Personalized Debit Card Dispatch', type: 'text', placeholder: 'Contactless RuPay/Visa Card dispatched via BlueDart / India Post', helpText: 'Expected in 5-7 days' }
        ],
        actionButtonText: 'SETUP UPI & INTERNET BANKING',
        hotspots: [
          {
            id: 'hba6',
            title: 'Account Number & IFSC',
            description: 'Copy these details and store in your Smart Document Assistant Vault.',
            actionText: 'Copy Account Number & IFSC',
            xPercent: 50,
            yPercent: 35,
            highlightType: 'warning'
          }
        ]
      }
    }
  ],

  feesStructure: [
    {
      type: 'Zero Balance / Digital Account Opening',
      amount: '₹0.00 (No opening charges)',
      paymentModes: ['Free'],
      notes: 'No minimum balance penalty on digital Basic Savings Bank Deposit Accounts (BSBDA)'
    },
    {
      type: 'Annual Debit Card Maintenance (AMC)',
      amount: '₹125 to ₹300 + GST (varies by card tier - Classic vs Platinum)',
      paymentModes: ['Auto-debited annually from account balance']
    }
  ],

  timelines: [
    { stage: 'Aadhaar e-KYC & Form Fill', duration: '5 Minutes' },
    { stage: 'Live Video KYC Call', duration: '2 to 3 Minutes' },
    { stage: 'Account Number & IFSC SMS', duration: '10 to 30 Minutes' },
    { stage: 'Welcome Kit (Debit Card/Chequebook) Courier', duration: '5 to 7 Working Days' }
  ],

  trackingGuide: {
    identifierName: 'Application Reference Number (URN)',
    sampleFormat: 'AC-2026-9810482 (Alphanumeric)',
    stepsToTrack: [
      'Visit your chosen bank\'s account tracking link or app.',
      'Enter your registered mobile number and date of birth.',
      'Enter OTP to view account status and courier tracking tracking for debit card.'
    ],
    directTrackingUrl: 'https://bank.sbi'
  },

  afterSubmissionActions: [
    {
      title: 'Link with UPI apps',
      description: 'Link your new savings account with Google Pay, PhonePe, or BHIM for instant merchant and peer transfers.',
      timeline: 'Instant upon receiving account number',
      isPhysicalVisitRequired: false
    },
    {
      title: 'Receive and Activate Debit Card',
      description: 'Receive card via courier, generate ATM PIN via mobile banking or nearest ATM.',
      timeline: 'Within 5 to 7 days',
      isPhysicalVisitRequired: false
    }
  ],

  commonMistakes: [
    {
      mistake: 'Trying to show a soft copy or photocopy of PAN during Video KYC',
      howToAvoid: 'You MUST possess the original laminated plastic PAN card in your hands. RBI regulations strictly prohibit digital screen displays of PAN.',
      consequence: 'Bank officer will immediately terminate the call and reject the application.'
    },
    {
      mistake: 'VPN enabled on smartphone during video call',
      howToAvoid: 'Disable all VPNs and ensure GPS location services are turned ON.',
      consequence: 'Geofence check fails and system marks location as outside India.'
    }
  ],

  rejectionTroubleshooting: [
    {
      issue: 'Video KYC connection keeps dropping',
      resolution: 'Switch from mobile data to stable Wi-Fi or resume the application link from a laptop using Google Chrome browser.'
    },
    {
      issue: 'Account status shows "Pending Branch Verification"',
      resolution: 'Occasionally, if signature or photo quality was ambiguous, the system requests a 1-time signature submission at your local home branch.'
    }
  ],

  faqs: [
    {
      question: 'What are the official documents required for opening an individual bank account under RBI Master Direction?',
      answer: 'Under Question 5 of the RBI Master Direction on KYC, an individual must submit: (a) Any ONE of the 6 Officially Valid Documents (OVDs): Passport, Driving Licence, Proof of possession of Aadhaar number, Voter\'s Identity Card, NREGA Job Card (signed by State officer), or Letter issued by the National Population Register (NPR); and (b) PAN or equivalent e-document, or Form No. 60 as defined in Income-tax Rules, 1962.'
    },
    {
      question: 'Is Aadhaar card mandatory for opening a bank account under RBI KYC rules?',
      answer: 'No. As clarified in Question 10 of the RBI Master Direction FAQs, Aadhaar is only mandatory if you wish to receive government subsidies, grants, or benefits under Section 7 of the Aadhaar Act (such as DBT, PM-KISAN, or LPG subsidy). For regular bank accounts, providing Aadhaar is purely voluntary, and you may submit any other OVD such as Passport, Voter ID, or Driving Licence.'
    },
    {
      question: 'What is a "Small Account" and how can someone without any OVD open it?',
      answer: 'Under Paragraph 23 of the Master Direction (FAQ Q6), if a customer does not possess any OVD, they can still open a "Small Account" by submitting a self-attested photograph and signing/thumb-printing in the presence of a bank officer. It remains operational for 12 months with limits: balance never exceeding ₹50,000, total credits not exceeding ₹1,00,000 per financial year, and total withdrawals/transfers capped at ₹10,000 per month.'
    },
    {
      question: 'Can I open an account in another city if my OVD shows my hometown address?',
      answer: 'Yes (FAQ Q7 & Q8). You can submit a "deemed to be OVD" for current address proof (utility bill not older than 2 months for electricity/water/piped gas/postpaid mobile, property tax receipt, or employer accommodation allotment letter). You are given a 3-month grace period to submit an updated OVD showing your current address.'
    },
    {
      question: 'What is a Central KYC Registry (CKYCR) KYC Identifier (KIN)?',
      answer: 'A KYC Identifier is a unique 14-digit code assigned to you by the Central KYC Records Registry (www.ckycindia.in) after your first verified account (FAQ Q14). You can provide your KIN to any new bank, mutual fund, or insurance company with your consent, which downloads your verified KYC data directly and eliminates the need to submit physical documents again.'
    },
    {
      question: 'Are eye blinking or facial gestures mandatory during Video KYC (V-CIP)?',
      answer: 'No. In FAQ Q20, the Reserve Bank of India explicitly states that making specific facial gestures like blinking of eyes, smiling, or frowning is NOT mandatory for the liveness check. Banks are instructed to provide reasonable accommodation for special needs and Persons with Disabilities (PwDs).'
    },
    {
      question: 'How often do banks require Periodic Updation of KYC (Re-KYC) and do I need to visit the branch?',
      answer: 'Under FAQ Q22 & Q24, periodic updation must be conducted at least once in 2 years for high-risk, 8 years for medium-risk, and 10 years for low-risk customers. If there is NO change in your information, you do NOT need to visit a branch—a simple self-declaration submitted via Internet Banking, Mobile App, ATM, or registered email/SMS is legally valid.'
    },
    {
      question: 'What is an inoperative account and how can it be reactivated under RBI guidelines?',
      answer: 'Under RBI\'s circular DOR.SOG(LEG).REC/64 dated January 1, 2024 (FAQ Q36 & Q37), an account with no customer-induced transactions for over 2 years is inoperative. Banks must facilitate reactivation at ANY branch (home or non-home) or through Video KYC (V-CIP) completely free of cost upon submitting updated KYC details.'
    },
    {
      question: 'What should I do if I receive an SMS or email with links to update KYC?',
      answer: 'Under FAQ Q29 and RBI Kehta Hai notices, you must NEVER click on links embedded in SMS or emails claiming your KYC is expiring or bank account is blocked. Banks never send links to complete KYC. These are cyber fraud scams designed to drain accounts. Always initiate updates directly through official banking apps or at the branch.'
    }
  ]
};
