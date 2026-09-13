import { ServiceDetail } from '../../types/service';

export const BANK_ACCOUNT_SERVICE: ServiceDetail = {
  id: 'bank-savings-account',
  slug: 'bank-savings-account',
  name: 'Digital Savings Bank Account (Instant Opening via Video KYC)',
  shortName: 'Bank Savings Account',
  tagline: 'Zero-balance or regular digital savings account opened in 10 minutes via Video KYC.',
  category: 'banking',
  issuingAuthority: 'Reserve Bank of India (RBI) Regulated Scheduled Banks (SBI, HDFC, ICICI, etc.)',
  mode: 'online_only',
  trustRating: 5,
  lastVerifiedDate: '13 September 2026',
  officialPortalUrl: 'https://bank.sbi / https://www.hdfcbank.com / https://www.icicibank.com',
  estimatedDuration: 'Account Number: Instant (10 minutes) | Debit Card Delivery: 5 to 7 days',
  standardFee: '₹0 (Free Account Opening; Annual debit card charges ₹150-₹300 per bank)',
  digiLockerAvailable: true,
  description: 'Digital savings account opening using RBI-mandated Video Customer Identification Process (V-CIP). Requires Aadhaar OTP and a short 2-minute live video call with a bank officer to activate full transaction limits without visiting a branch.',

  overviewFacts: [
    { key: 'Regulatory Authority', value: 'Reserve Bank of India (RBI)' },
    { key: 'Verification Mode', value: '100% Online Paperless via Video KYC (V-CIP)' },
    { key: 'Account Number Issuance', value: 'Generated immediately upon video call completion' },
    { key: 'Debit Card & Chequebook', value: 'Dispatched to Aadhaar address within 5 to 7 days' },
    { key: 'UPI & Net Banking', value: 'Instant activation via phone number' },
    { key: 'Initial Funding', value: '₹0 (for Zero-balance accounts) or ₹1,000 to ₹10,000 per bank rules' }
  ],

  eligibilityCriteria: [
    {
      title: 'Resident Indian Individuals',
      description: 'Must be an Indian resident aged 18 years or older with full legal capacity.',
      isEligible: true
    },
    {
      title: 'Valid Aadhaar & PAN Holder',
      description: 'Must possess original physical PAN card and Aadhaar linked to an active mobile number.',
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
      id: 'bank_pan',
      title: 'Original Physical PAN Card',
      purpose: 'Mandatory for tax reporting and Video KYC inspection',
      description: 'Must show the ORIGINAL physical plastic PAN card to the camera during video call (e-PAN on phone screen is NOT permitted by RBI):',
      isMandatory: true,
      options: [
        { id: 'pan_card', name: 'Original Physical PAN Card', category: 'identity', isOriginalRequired: true }
      ]
    },
    {
      id: 'bank_aadhaar',
      title: 'Aadhaar Card with Registered Mobile Number',
      purpose: 'Instant e-KYC demographic verification',
      description: 'Used for instant online OTP authentication:',
      isMandatory: true,
      options: [
        { id: 'aadhaar_card', name: 'Aadhaar Card (Mobile linked for OTP)', category: 'identity', isOriginalRequired: false }
      ]
    },
    {
      id: 'bank_signature',
      title: 'Blank White Paper & Blue/Black Pen for Live Signature',
      purpose: 'Capture specimen signature for chequebook and high-value transactions',
      description: 'You will sign on paper during the live video call while the officer observes:',
      isMandatory: true,
      options: [
        { id: 'scanned_signature', name: 'Live Pen & Paper Signature', category: 'photo_biometric', isOriginalRequired: true }
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
    }
  ],

  officialPortals: [
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
      question: 'Is a Video KYC savings account equal to an account opened at a physical branch?',
      answer: 'Yes, 100%. Under RBI master directions, a Video KYC verified account has zero transaction limit restrictions and carries the full privileges of a traditional branch account.'
    },
    {
      question: 'Can I open a bank account if my current address is different from my Aadhaar address?',
      answer: 'Yes. Most banks allow you to enter a separate "Communication / Current Address" during the digital form, where your debit card and chequebook will be couriered, while using Aadhaar as permanent identity proof.'
    }
  ]
};
