import { ServiceDetail } from '../../types/service';

export const AADHAAR_SERVICE: ServiceDetail = {
  id: 'aadhaar-card',
  slug: 'aadhaar-card',
  name: 'Aadhaar Card (New Enrolment & Mandatory Biometrics)',
  shortName: 'Aadhaar Card',
  tagline: '12-digit foundational identity issued by UIDAI for all residents of India.',
  category: 'government',
  issuingAuthority: 'Unique Identification Authority of India (UIDAI), Ministry of Electronics & IT',
  mode: 'hybrid_appointment',
  trustRating: 5,
  lastVerifiedDate: '13 September 2026',
  officialPortalUrl: 'https://myaadhaar.uidai.gov.in',
  estimatedDuration: '15 to 90 days after biometric capture',
  standardFee: '₹0 (Free for Fresh Enrolment) / ₹50 for Demographic update / ₹100 for Biometric update',
  digiLockerAvailable: true,
  description: 'Aadhaar is a 12-digit unique random identification number issued to residents of India after biometrics (fingerprints, iris, and facial photo) and demographic verification. It serves as universal proof of identity and address across India.',

  overviewFacts: [
    { key: 'Issuing Authority', value: 'UIDAI (Govt of India)' },
    { key: 'Fresh Enrolment Fee', value: '100% Free of cost at all authorized ASK centres' },
    { key: 'Official Portal', value: 'myAadhaar (myaadhaar.uidai.gov.in)' },
    { key: 'Mandatory Visit', value: 'In-person physical visit required for 10 fingerprints + Iris scan' },
    { key: 'Validity', value: 'Lifetime (Mandatory biometric update at age 5 & 15 for children)' },
    { key: 'DigiLocker / mAadhaar', value: 'Instant legal digital download available' }
  ],

  eligibilityCriteria: [
    {
      title: 'Indian Residents',
      description: 'Any individual residing in India for 182 days or more in the preceding 12 months (irrespective of nationality).',
      isEligible: true
    },
    {
      title: 'Minors & Newborns (Baal Aadhaar)',
      description: 'Newborns and children up to 5 years can be enrolled using birth certificate and parent Aadhaar (blue Baal Aadhaar without biometrics).',
      isEligible: true
    },
    {
      title: 'NRIs Holding Valid Indian Passport',
      description: 'NRIs holding valid Indian passport can apply immediately upon arrival without the 182-day waiting period.',
      isEligible: true
    }
  ],

  documentRequirements: [
    {
      id: 'aadh_poi',
      title: 'Proof of Identity (POI)',
      purpose: 'Verify full legal name and photograph',
      description: 'Must carry ORIGINAL document to the Aadhaar Seva Kendra. Any ONE of the following:',
      isMandatory: true,
      options: [
        { id: 'passport', name: 'Valid Indian Passport', category: 'identity', isOriginalRequired: true },
        { id: 'pan_card', name: 'PAN Card / e-PAN', category: 'identity', isOriginalRequired: true },
        { id: 'voter_id', name: 'Voter Photo Identity Card (EPIC)', category: 'identity', isOriginalRequired: true },
        { id: 'driving_licence', name: 'Driving Licence', category: 'identity', isOriginalRequired: true },
        { id: 'ration_card', name: 'Ration Card / PDS Photo Card', category: 'identity', isOriginalRequired: true },
        { id: 'marksheet_10th', name: 'School/University Marksheet with photo', category: 'educational', isOriginalRequired: true }
      ]
    },
    {
      id: 'aadh_poa',
      title: 'Proof of Address (POA)',
      purpose: 'Establish exact residential address for postal delivery',
      description: 'Must contain full address with PIN code. Any ONE of the following:',
      isMandatory: true,
      options: [
        { id: 'passport', name: 'Valid Passport', category: 'address', isOriginalRequired: true },
        { id: 'bank_passbook_statement', name: 'Bank Passbook / Statement with photo & bank seal', category: 'address', isOriginalRequired: true },
        { id: 'electricity_bill', name: 'Electricity Bill (Not older than 3 months)', category: 'address', isOriginalRequired: true },
        { id: 'rent_agreement', name: 'Registered Lease / Rent Agreement (Registered with Sub-Registrar)', category: 'address', isOriginalRequired: true },
        { id: 'voter_id', name: 'Voter ID Card', category: 'address', isOriginalRequired: true }
      ]
    },
    {
      id: 'aadh_dob',
      title: 'Proof of Date of Birth (DOB)',
      purpose: 'Establish exact verified birth date (otherwise recorded as Declared)',
      description: 'To obtain "Verified" birth date status on your Aadhaar:',
      isMandatory: true,
      options: [
        { id: 'birth_certificate', name: 'Birth Certificate issued by Municipal Corporation / Registrar', category: 'date_of_birth', isOriginalRequired: true },
        { id: 'marksheet_10th', name: '10th Standard / Matriculation Board Certificate', category: 'date_of_birth', isOriginalRequired: true },
        { id: 'passport', name: 'Indian Passport', category: 'date_of_birth', isOriginalRequired: true }
      ]
    }
  ],

  beforeApplyingChecklist: [
    {
      id: 'chk_orig_docs',
      label: 'Carry ORIGINAL physical documents (photocopies without originals are rejected)',
      detail: 'The Aadhaar enrolment operator will scan your original documents on the spot and return them immediately.',
      category: 'document',
      isCrucial: true
    },
    {
      id: 'chk_mobile_number',
      label: 'Have an active personal mobile number for OTP and alerts',
      detail: 'Registering your personal mobile number is vital; without it you cannot download e-Aadhaar or do paperless e-KYC in the future.',
      category: 'technical',
      isCrucial: true
    },
    {
      id: 'chk_appointment_booked',
      label: 'Book an appointment slot online to avoid long queues at the centre',
      detail: 'Using myAadhaar "Book an Appointment", you skip long lines and complete the process in 15 minutes.',
      category: 'verification',
      isCrucial: false
    }
  ],

  officialPortals: [
    {
      label: 'UIDAI Official Portal (uidai.gov.in / हिन्दी)',
      url: 'https://uidai.gov.in/hi',
      purpose: 'information',
      isGovtVerified: true,
      badgeText: 'UIDAI Main Portal (हिन्दी/English)',
      domainAlert: 'Always verify official URL is uidai.gov.in. Beware of fake lookalike sites.'
    },
    {
      label: 'myAadhaar Citizen Self-Service Portal',
      url: 'https://myaadhaar.uidai.gov.in',
      purpose: 'application',
      isGovtVerified: true,
      badgeText: 'myAadhaar Self-Service',
      domainAlert: 'Ensure domain ends with uidai.gov.in'
    },
    {
      label: 'Book an Appointment at Aadhaar Seva Kendra (ASK)',
      url: 'https://appointments.uidai.gov.in/bookappointment.aspx',
      purpose: 'application',
      isGovtVerified: true,
      badgeText: 'Online Slot Booking'
    },
    {
      label: 'Check Aadhaar Enrolment Status (28-digit EID)',
      url: 'https://myaadhaar.uidai.gov.in/check-aadhaar-status',
      purpose: 'tracking',
      isGovtVerified: true,
      badgeText: 'Status Tracker'
    },
    {
      label: 'Download Electronic e-Aadhaar (PDF / Masked)',
      url: 'https://myaadhaar.uidai.gov.in/gen-aeid',
      purpose: 'verification',
      isGovtVerified: true,
      badgeText: 'Download e-Aadhaar'
    },
    {
      label: 'Order Official Aadhaar PVC Card (₹50)',
      url: 'https://myaadhaar.uidai.gov.in/gen-pvc',
      purpose: 'application',
      isGovtVerified: true,
      badgeText: 'Order PVC Card'
    }
  ],

  // Official Website Capabilities & Features Breakdown
  websiteFeatures: {
    portalName: 'UIDAI Official Portal & myAadhaar (भारतीय विशिष्ट पहचान प्राधिकरण)',
    officialUrl: 'https://uidai.gov.in/hi',
    summary: 'The comprehensive digital identity portal operated by the Unique Identification Authority of India (UIDAI), offering citizen self-service in 13+ languages (including Hindi), biometric fraud protection, online appointment booking, and instant document management.',
    highlights: [
      'Full bilingual support: हिन्दी (Hindi), English, and regional Indian languages on uidai.gov.in/hi',
      'Download standard or high-privacy Masked Aadhaar (xxxx-xxxx-1234)',
      'Lock / Unlock Biometrics & Virtual ID (VID) for total fraud protection',
      'Check NPCI Bank Seeding status for DBT government benefits',
      'Order weather-proof PVC smart card delivered by Speed Post for ₹50'
    ],
    featuresList: [
      {
        title: 'Download Electronic e-Aadhaar (Regular & Masked)',
        description: 'Download a digitally signed, legally valid PDF Aadhaar. Choose "Masked Aadhaar" to hide the first 8 digits (shows only xxxx-xxxx-1234) for privacy during hotel check-ins and non-statutory KYC.',
        category: 'core_service',
        url: 'https://myaadhaar.uidai.gov.in/gen-aeid',
        badge: 'Instant PDF'
      },
      {
        title: 'Order Official Aadhaar PVC Card',
        description: 'Order a durable, wallet-sized synthetic PVC card equipped with a digitally signed secure QR code, hologram, microtext, and ghost image for ₹50 inclusive of Speed Post delivery.',
        category: 'core_service',
        url: 'https://myaadhaar.uidai.gov.in/gen-pvc',
        badge: '₹50 Delivered'
      },
      {
        title: 'Book an Appointment at Aadhaar Seva Kendra (ASK)',
        description: 'Schedule a guaranteed date & time slot at an official UIDAI-run or Registrar Aadhaar Seva Kendra for fresh enrolment, biometric update, or name/DOB changes without waiting in lines.',
        category: 'core_service',
        url: 'https://appointments.uidai.gov.in/bookappointment.aspx',
        badge: 'Skip Queues'
      },
      {
        title: 'Lock / Unlock Biometrics',
        description: 'Protect your fingerprints and iris scans against cyber frauds and unauthorized financial transactions (AePS) by locking your biometrics online. Instantly unlock via OTP when needed.',
        category: 'security_privacy',
        url: 'https://myaadhaar.uidai.gov.in/lock-unlock-biometrics',
        badge: 'Anti-Fraud'
      },
      {
        title: 'Generate Virtual ID (VID)',
        description: 'Generate a temporary, revocable 16-digit Virtual ID that can be shared in place of your 12-digit Aadhaar number for authentication with banks, telecom, and verification agencies.',
        category: 'security_privacy',
        url: 'https://myaadhaar.uidai.gov.in/vid-generation',
        badge: 'Privacy Safe'
      },
      {
        title: 'Free Document Update (POI & POA Revalidation)',
        description: 'Upload valid Proof of Identity and Proof of Address documents online for free to strengthen Aadhaar accuracy, especially recommended for Aadhaar cards issued over 10 years ago.',
        category: 'core_service',
        url: 'https://myaadhaar.uidai.gov.in/document-update',
        badge: 'Free Online'
      },
      {
        title: 'Check Bank Seeding Status (NPCI DBT Mapper)',
        description: 'Verify in real-time which bank account is actively linked with your Aadhaar number to receive government subsidies, PM-KISAN grants, scholarships, and LPG subsidies.',
        category: 'verification',
        url: 'https://myaadhaar.uidai.gov.in/bank-seeding-status',
        badge: 'DBT Direct Benefit'
      },
      {
        title: 'Aadhaar Authentication History',
        description: 'Inspect a detailed audit trail of your last 50 authentications (OTP, Biometric, Demographic) including exact timestamps and requesting entity names to detect any unauthorized access.',
        category: 'tracking_records',
        url: 'https://myaadhaar.uidai.gov.in/auth-history',
        badge: 'Audit Trail'
      },
      {
        title: 'Verify Email & Mobile Number',
        description: 'Confirm whether your current active mobile number and email ID are properly registered in UIDAI records before initiating online services or OTP authentication.',
        category: 'verification',
        url: 'https://myaadhaar.uidai.gov.in/verify-email-mobile',
        badge: 'Verify Status'
      },
      {
        title: 'Retrieve Lost EID / Aadhaar Number',
        description: 'Recover forgotten 12-digit Aadhaar number or 28-digit Enrolment ID (EID) by entering your name and registered mobile number; receive UID immediately via SMS.',
        category: 'core_service',
        url: 'https://myaadhaar.uidai.gov.in/retrieve-eid-uid',
        badge: 'Instant SMS'
      },
      {
        title: 'Grievance Redressal & 1947 Toll-Free Support',
        description: 'Lodge grievances regarding delayed cards, operator misconduct, or status issues; track complaint progress online or contact the 24x7 toll-free helpline 1947 in 12 languages.',
        category: 'grievance_support',
        url: 'https://myaadhaar.uidai.gov.in/file-complaint',
        badge: 'Toll-Free 1947'
      }
    ]
  },

  steps: [
    {
      stepNumber: 1,
      phase: 'before',
      title: 'Step 1: Locate Nearest Centre & Book Slot Online',
      shortSummary: 'Find an official Aadhaar Seva Kendra (ASK) and reserve a time slot.',
      instructions: [
        'Visit appointments.uidai.gov.in or myAadhaar portal.',
        'Select your City/Location (UIDAI run ASK or Banks/Post Office centres).',
        'Choose "New Aadhaar Enrolment" and enter your mobile number to receive verification OTP.',
        'Select your preferred date and time slot. Download the appointment slip with QR code.'
      ],
      whatToClick: 'Click "Book an Appointment" -> Select City/Location -> Click "Proceed to Book Appointment".',
      cautionsAndWarnings: [
        'Beware of unauthorized local shops charging extra fees. Fresh enrolment is legally ₹0 FREE.'
      ],
      mockup: {
        screenTitle: 'UIDAI Appointment Booking Service',
        portalName: 'myAadhaar Portal - Unique Identification Authority of India',
        urlBar: 'https://appointments.uidai.gov.in/bookappointment.aspx',
        fields: [
          { name: 'citySelect', label: 'Select your City / Location', type: 'select', options: ['Delhi - Inderlok / Mohan Cooperative', 'Bengaluru - Hebbal / Jayanagar', 'Hyderabad - Madhapur / Tolichowki', 'Mumbai - Andheri / Ghatkopar', 'Chennai - Koyambedu'], helpText: 'Choose official UIDAI Aadhaar Seva Kendra' },
          { name: 'serviceType', label: 'Choose Service Required', type: 'radio', options: ['New Aadhaar Enrolment (Free)', 'Aadhaar Update (Demographic/Biometric)', 'Manage Appointments'], helpText: 'Select New Enrolment' },
          { name: 'mobilePhone', label: 'Mobile Number for Verification', type: 'text', placeholder: 'Enter 10-digit mobile number', helpText: 'OTP will be sent to book slot' }
        ],
        actionButtonText: 'GENERATE OTP & PROCEED TO SLOT SELECTION',
        hotspots: [
          {
            id: 'ha1',
            title: 'City Dropdown',
            description: 'Pick your city to locate direct UIDAI centres.',
            actionText: 'Select your city from list',
            xPercent: 50,
            yPercent: 28,
            highlightType: 'select'
          },
          {
            id: 'ha2',
            title: 'New Enrolment Option',
            description: 'Always choose New Aadhaar Enrolment for first-time applicants.',
            actionText: 'Choose "New Aadhaar Enrolment"',
            xPercent: 30,
            yPercent: 50,
            highlightType: 'click'
          },
          {
            id: 'ha3',
            title: 'Proceed Button',
            description: 'Click to trigger OTP and display calendar slots.',
            actionText: 'Click "GENERATE OTP"',
            xPercent: 50,
            yPercent: 86,
            highlightType: 'submit'
          }
        ]
      }
    },
    {
      stepNumber: 2,
      phase: 'during',
      title: 'Step 2: Visit Centre & Submit Original Documents',
      shortSummary: 'Reach 10 minutes before appointment with original documents.',
      instructions: [
        'Present your appointment token at the reception desk to get a token number.',
        'When called to the operator desk, hand over your original POI, POA, and DOB documents.',
        'The operator will scan your documents into the official UIDAI ECMP software.'
      ],
      whatToClick: 'Operator handles software entry; you verify on applicant-facing dual display.',
      cautionsAndWarnings: [
        'Always check the applicant-facing second monitor carefully while the operator is typing your name, address, and birthdate.'
      ],
      mockup: {
        screenTitle: 'Enrolment Client Multi-Platform (ECMP) - Demographic Capture',
        portalName: 'UIDAI Official Enrolment Terminal',
        urlBar: 'https://internal.uidai.gov.in/ecmp/residentEnrolment',
        fields: [
          { name: 'fullName', label: 'Full Name of Resident', type: 'text', placeholder: 'Enter full name in English & Regional Language', helpText: 'Verify spelling on applicant monitor' },
          { name: 'gender', label: 'Gender', type: 'radio', options: ['Male', 'Female', 'Transgender'], helpText: 'Verify demographic' },
          { name: 'dobField', label: 'Date of Birth (DOB)', type: 'date', helpText: 'Should show Verified if DOB proof is submitted' },
          { name: 'address', label: 'Care of (C/o) & Complete Street Address', type: 'text', placeholder: 'Door No, Street, Landmark, Pin code', helpText: 'Check PIN code accuracy' }
        ],
        actionButtonText: 'PROCEED TO BIOMETRIC CAPTURE',
        hotspots: [
          {
            id: 'ha4',
            title: 'Applicant Monitor Verification',
            description: 'Watch the secondary screen to ensure no typos in name or address.',
            actionText: 'Verify your name spelling on monitor',
            xPercent: 50,
            yPercent: 28,
            highlightType: 'warning'
          },
          {
            id: 'ha5',
            title: 'Biometric Stage',
            description: 'Operator will now activate fingerprint and iris scanners.',
            actionText: 'Prepare hands and eyes for scanning',
            xPercent: 50,
            yPercent: 88,
            highlightType: 'click'
          }
        ]
      }
    },
    {
      stepNumber: 3,
      phase: 'during',
      title: 'Step 3: Biometric Capture (Iris, Fingerprints & Face Photo)',
      shortSummary: 'Capture 10 fingerprints, dual iris scans, and facial photograph.',
      instructions: [
        'Face the white backdrop camera for your frontal facial photograph. Keep hair off forehead.',
        'Place 4 fingers of left hand on the scanner, then 4 fingers of right hand, then both thumbs.',
        'Look directly into the dual iris scanner without blinking for 5 seconds.',
        'Review the screen: Green indicates high-quality scan; yellow/red requires re-capture.'
      ],
      whatToClick: 'Operator prompts you to place fingers on optical biometric slab.',
      cautionsAndWarnings: [
        'Ensure hands are clean, dry, and free from mehendi/grease for maximum biometric score.'
      ],
      mockup: {
        screenTitle: 'Biometric Capture Dashboard',
        portalName: 'UIDAI Biometric Acquisition Suite',
        urlBar: 'https://internal.uidai.gov.in/ecmp/biometricCapture',
        fields: [
          { name: 'photoPreview', label: 'Facial Photograph', type: 'text', placeholder: '[Face Captured: Quality 94% - Acceptable]', helpText: 'Clear portrait with neutral expression' },
          { name: 'fingerprints', label: '10 Fingerprint Slaps', type: 'text', placeholder: '[Left 4: 98% | Right 4: 95% | Thumbs: 99%]', helpText: 'All ten digits captured' },
          { name: 'iris', label: 'Dual Iris Scans', type: 'text', placeholder: '[Left Iris: OK | Right Iris: OK]', helpText: 'Both irises captured' }
        ],
        actionButtonText: 'OPERATOR & RESIDENT BIOMETRIC SIGN-OFF',
        hotspots: [
          {
            id: 'ha6',
            title: 'Quality Indicator',
            description: 'Check that green status indicates satisfactory biometric score.',
            actionText: 'Ensure green bars are visible',
            xPercent: 70,
            yPercent: 42,
            highlightType: 'warning'
          }
        ]
      }
    },
    {
      stepNumber: 4,
      phase: 'after',
      title: 'Step 4: Collect Enrolment Acknowledgement Slip (EID)',
      shortSummary: 'Get the printed acknowledgement slip containing your 28-digit EID.',
      instructions: [
        'Sign the printed confirmation form and hand it to the operator.',
        'The operator will hand you your Official Enrolment Acknowledgement Slip.',
        'The slip contains a 14-digit Enrolment Number and a 14-digit Date/Time stamp (forming the 28-digit Enrolment ID: EID).',
        'Keep this receipt safe. You need the 28-digit EID to track status and download e-Aadhaar.'
      ],
      whatToClick: 'Store your 28-digit EID in Smart Document Assistant Tracker.',
      cautionsAndWarnings: [
        'Never lose your Enrolment Slip before your Aadhaar number is generated!'
      ],
      mockup: {
        screenTitle: 'Aadhaar Enrolment Acknowledgement Slip',
        portalName: 'UIDAI Official Resident Receipt',
        urlBar: 'https://myaadhaar.uidai.gov.in/printReceipt',
        fields: [
          { name: 'eidNumber', label: 'Enrolment No (EID)', type: 'text', placeholder: '1234/12345/12345 | 13/09/2026 14:32:10', helpText: '14-digit Enrolment ID + 14-digit timestamp' },
          { name: 'residentDetails', label: 'Enrolled Resident Name', type: 'text', placeholder: 'Applicant Full Name', helpText: 'Verified demographic profile' },
          { name: 'feeCharged', label: 'Total Amount Charged', type: 'text', placeholder: '₹0.00 (Zero Rupees - Fresh Enrolment)', helpText: 'Always zero for new enrolment' }
        ],
        actionButtonText: 'FINISH VISIT & TRACK STATUS ONLINE',
        hotspots: [
          {
            id: 'ha7',
            title: '28-digit Enrolment ID (EID)',
            description: 'The combination of Enrolment No and Date/Time is your tracking key.',
            actionText: 'Save this 28-digit number',
            xPercent: 50,
            yPercent: 32,
            highlightType: 'warning'
          }
        ]
      }
    }
  ],

  feesStructure: [
    {
      type: 'Aadhaar Fresh Enrolment',
      amount: '₹0.00 (100% Free by Law)',
      paymentModes: ['No payment required'],
      notes: 'No government centre or operator is allowed to charge for fresh enrolment.'
    },
    {
      type: 'Mandatory Biometric Update for Children (Ages 5 & 15)',
      amount: '₹0.00 (Free)',
      paymentModes: ['Free'],
      notes: 'Mandatory updates for growing children are free.'
    },
    {
      type: 'Demographic Update (Name, Address, Mobile, DOB)',
      amount: '₹50.00',
      paymentModes: ['Cash at ASK', 'Online UPI/Card on myAadhaar']
    },
    {
      type: 'Biometric Update (Photo, Fingerprints, Iris for adults)',
      amount: '₹100.00',
      paymentModes: ['Cash at ASK', 'POS Machine']
    }
  ],

  timelines: [
    { stage: 'Biometric Capture at Centre', duration: '15 to 20 minutes' },
    { stage: 'Data Upload to Central ID Repository (CIDR)', duration: '24 to 48 Hours' },
    { stage: 'De-duplication & UID Generation', duration: '15 to 30 Days' },
    { stage: 'Downloadable e-Aadhaar Ready', duration: 'Within 30 Days typically' },
    { stage: 'Physical Letter Delivery by Speed Post', duration: '30 to 90 Days' }
  ],

  trackingGuide: {
    identifierName: '28-Digit Enrolment ID (EID)',
    sampleFormat: '1234/12345/12345 (14 digits) + YYYYMMDDHHMMSS (14 digits)',
    stepsToTrack: [
      'Go to myaadhaar.uidai.gov.in/check-aadhaar-status',
      'Enter your 14-digit Enrolment Number.',
      'Enter the date and time printed on your acknowledgement slip in YYYYMMDDHHMMSS format.',
      'Enter the captcha code and click "Submit".',
      'Status will show: "Under Processing", "Aadhaar Generated", or "Rejected (with reason)".'
    ],
    directTrackingUrl: 'https://myaadhaar.uidai.gov.in/check-aadhaar-status',
    smsTrackingFormat: 'Call UIDAI toll-free helpline 1947 or SMS: UID STATUS <14-digit EID> to 51969.'
  },

  afterSubmissionActions: [
    {
      title: 'Wait for UID Generation SMS',
      description: 'You will receive an SMS from VM-UIDAI stating "Your Aadhaar has been generated".',
      timeline: '15 to 30 days',
      isPhysicalVisitRequired: false
    },
    {
      title: 'Download Electronic e-Aadhaar PDF',
      description: 'Visit myAadhaar portal and download the password-protected e-Aadhaar PDF.',
      timeline: 'Immediately upon generation',
      isPhysicalVisitRequired: false
    },
    {
      title: 'Physical Aadhaar Letter Delivery',
      description: 'India Post postman will deliver the printed Aadhaar letter to your registered address.',
      timeline: '30 to 90 days',
      isPhysicalVisitRequired: false
    }
  ],

  commonMistakes: [
    {
      mistake: 'Not carrying original documents to the centre',
      howToAvoid: 'Operators cannot accept xerox copies or digital phone photos without originals.',
      consequence: 'Operator will reject the token and ask you to return another day.'
    },
    {
      mistake: 'Forgetting to register a mobile number',
      howToAvoid: 'Explicitly tell the operator your mobile number and double check it on the secondary monitor.',
      consequence: 'You will NOT be able to download e-Aadhaar or complete online OTP verifications.'
    }
  ],

  rejectionTroubleshooting: [
    {
      issue: 'Rejection due to "Duplicate Biometrics Found"',
      resolution: 'This means you were previously enrolled (perhaps during childhood or school camp). Call 1947 with your demographic details or visit an ASK to retrieve your existing EID/UID.'
    },
    {
      issue: 'Status stuck at "Under Manual Verification"',
      resolution: 'Aadhaar quality checks take up to 90 days in certain regions. If it exceeds 90 days, file a grievance on pgportal.gov.in or call 1947.'
    }
  ],

  faqs: [
    {
      question: 'Is e-Aadhaar downloaded from the internet legally valid?',
      answer: 'Yes. As per the Aadhaar Act 2016 and UIDAI circulars, downloaded e-Aadhaar is equally valid as the physical letter sent via post.'
    },
    {
      question: 'What is the password to open the downloaded e-Aadhaar PDF?',
      answer: 'The password is the first 4 letters of your name in CAPITAL letters followed by your year of birth (YYYY). Example: If your name is SURESH KUMAR and year of birth is 1990, the password is SURE1990.'
    },
    {
      question: 'Can I do fresh Aadhaar enrolment completely online from home?',
      answer: 'No. Biometric capture (10 fingerprints, dual iris, and photo) legally requires physical presence at an authorized centre. Only appointment booking and demographic updates for existing Aadhaar holders can be done online.'
    }
  ]
};
