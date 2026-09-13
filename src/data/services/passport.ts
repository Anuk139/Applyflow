import { ServiceDetail } from '../../types/service';

export const PASSPORT_SERVICE: ServiceDetail = {
  id: 'passport-seva',
  slug: 'passport',
  name: 'Indian Passport (Fresh / Re-issue via Passport Seva)',
  shortName: 'Indian Passport',
  tagline: 'Standard 36/60-page biometric travel document issued by Ministry of External Affairs.',
  category: 'government',
  issuingAuthority: 'Consular, Passport & Visa (CPV) Division, Ministry of External Affairs (MEA)',
  mode: 'hybrid_appointment',
  trustRating: 5,
  lastVerifiedDate: '13 September 2026',
  officialPortalUrl: 'https://www.passportindia.gov.in',
  estimatedDuration: 'Normal: 15 to 30 days | Tatkaal: 1 to 3 days',
  standardFee: '₹1,500 (Normal 36 pages) / ₹3,500 (Tatkaal 36 pages)',
  digiLockerAvailable: true,
  description: 'An official biometric passport issued under the Passports Act 1967. Essential for international travel and recognized globally as premier proof of Indian citizenship, date of birth, and identity.',

  overviewFacts: [
    { key: 'Issuing Ministry', value: 'Ministry of External Affairs (MEA)' },
    { key: 'Official Portal', value: 'passportindia.gov.in / mPassport Seva' },
    { key: 'Physical Visit Required', value: 'Yes, mandatory appointment at Passport Seva Kendra (PSK/POPSK)' },
    { key: 'Police Verification', value: 'Pre-issuance verification for Normal; Post-issuance for Tatkaal' },
    { key: 'Validity', value: '10 Years for adults (5 years or until age 18 for minors)' },
    { key: 'Booklet Options', value: 'Standard 36 pages / Jumbo 60 pages' }
  ],

  eligibilityCriteria: [
    {
      title: 'Indian Citizens by Birth / Descent / Registration',
      description: 'Must be an Indian citizen with no active criminal prosecution or adverse court orders preventing travel.',
      isEligible: true
    },
    {
      title: 'Minors (Below 18)',
      description: 'Require Annexure C or D consent from parents. Parents must carry valid passports if available.',
      isEligible: true
    },
    {
      title: 'Government Employees',
      description: 'Require Prior Intimation Letter (Annexure M) or Identity Certificate (Annexure A).',
      isEligible: true
    }
  ],

  documentRequirements: [
    {
      id: 'pass_dob',
      title: 'Proof of Date of Birth (DOB)',
      purpose: 'Verify date and place of birth',
      description: 'Any ONE of the following (carry original + 2 self-attested copies):',
      isMandatory: true,
      options: [
        { id: 'birth_certificate', name: 'Birth Certificate issued by Municipal Registrar', category: 'date_of_birth', isOriginalRequired: true },
        { id: 'marksheet_10th', name: '10th Standard / Matriculation Transfer/School Leaving Certificate', category: 'date_of_birth', isOriginalRequired: true },
        { id: 'aadhaar_card', name: 'Aadhaar Card / e-Aadhaar showing full DOB', category: 'date_of_birth', isOriginalRequired: true },
        { id: 'pan_card', name: 'PAN Card issued by Income Tax Dept', category: 'date_of_birth', isOriginalRequired: true }
      ]
    },
    {
      id: 'pass_poa',
      title: 'Proof of Present Address (Must be residing for past 1 year)',
      purpose: 'Police verification and dispatch address',
      description: 'Must reflect current residential address. Any ONE of:',
      isMandatory: true,
      options: [
        { id: 'aadhaar_card', name: 'Aadhaar Card with current address', category: 'address', isOriginalRequired: true },
        { id: 'bank_passbook_statement', name: 'Passbook of Running Bank Account (Scheduled Public/Private Bank with Photo & Stamp)', category: 'address', isOriginalRequired: true },
        { id: 'electricity_bill', name: 'Electricity / Water / Piped Gas Bill (Recent)', category: 'address', isOriginalRequired: true },
        { id: 'rent_agreement', name: 'Registered Rent Agreement (Minimum 1 year tenure)', category: 'address', isOriginalRequired: true }
      ]
    },
    {
      id: 'pass_non_ecr',
      title: 'Document for Non-ECR Category (Emigration Check Not Required)',
      purpose: 'Exemption from Emigration Check for overseas travel',
      description: 'To obtain Non-ECR status (exempt from emigration clearance for 18 countries):',
      isMandatory: false,
      options: [
        { id: 'marksheet_10th', name: 'Matriculation (10th Pass) or Higher Degree Certificate', category: 'educational', isOriginalRequired: true },
        { id: 'income_certificate', name: 'Income Tax Assessment Orders / Income Tax Payer status', category: 'income_financial', isOriginalRequired: true }
      ]
    }
  ],

  beforeApplyingChecklist: [
    {
      id: 'chk_pass_orig',
      label: 'Original documents + 2 sets of self-attested photocopies ready',
      detail: 'PSK verification counters inspect the originals and keep photocopies.',
      category: 'document',
      isCrucial: true
    },
    {
      id: 'chk_pass_address_period',
      label: 'Resided at current address for at least 1 year (or list previous addresses)',
      detail: 'If you resided at multiple addresses during the last 12 months, you must list all of them in the form for police verification.',
      category: 'verification',
      isCrucial: true
    },
    {
      id: 'chk_pass_online_payment',
      label: 'Online payment readiness (₹1,500 via SBI e-Pay / UPI / Cards)',
      detail: 'Appointment slots are booked only AFTER successful online payment.',
      category: 'financial',
      isCrucial: true
    }
  ],

  officialPortals: [
    {
      label: 'Official Passport Seva Portal (MEA)',
      url: 'https://www.passportindia.gov.in',
      purpose: 'application',
      isGovtVerified: true,
      badgeText: 'Official Portal (passportindia.gov.in)',
      domainAlert: 'Beware of fake scam portals charging exorbitant unofficial booking fees'
    },
    {
      label: 'Appointment Availability Status',
      url: 'https://www.passportindia.gov.in/AppOnlineProject/online/apptAvailStatus',
      purpose: 'information',
      isGovtVerified: true,
      badgeText: 'Check PSK Slot Availability'
    },
    {
      label: 'Track Passport Application Status (ARN)',
      url: 'https://www.passportindia.gov.in/AppOnlineProject/statusTracker/trackStatusInpNew',
      purpose: 'tracking',
      isGovtVerified: true,
      badgeText: 'Status Tracker'
    }
  ],

  steps: [
    {
      stepNumber: 1,
      phase: 'before',
      title: 'Step 1: Register Account & Fill Form Online',
      shortSummary: 'Create profile on passportindia.gov.in and fill Fresh Passport Form.',
      instructions: [
        'Go to passportindia.gov.in and click "New User Registration".',
        'Select your Passport Office based on your state/district.',
        'Enter personal name, email ID, and password.',
        'Click "Apply for Fresh Passport/Re-issue of Passport".',
        'Choose "Normal" or "Tatkaal" and "36 Pages" or "60 Pages".',
        'Enter applicant details, family details, present residential address, and emergency contact.'
      ],
      whatToClick: 'Click "Apply for Fresh Passport" -> Fill all sections A through G -> Click "Submit".',
      cautionsAndWarnings: [
        'Double check spelling of Parents\' names as listed on educational certificates.'
      ],
      mockup: {
        screenTitle: 'Passport Seva Online Form - Application Submission',
        portalName: 'Passport Seva Portal - Ministry of External Affairs',
        urlBar: 'https://portal2.passportindia.gov.in/AppOnlineProject/online/applyPassport',
        fields: [
          { name: 'appType', label: 'Applying For', type: 'radio', options: ['Fresh Passport', 'Re-issue of Passport'], helpText: 'Select Fresh Passport' },
          { name: 'scheme', label: 'Type of Application', type: 'radio', options: ['Normal (₹1500)', 'Tatkaal (₹3500)'], helpText: 'Normal takes 2-3 weeks' },
          { name: 'booklet', label: 'Type of Passport Booklet', type: 'radio', options: ['36 Pages', '60 Pages'], helpText: '36 pages is standard' },
          { name: 'nonEcr', label: 'Are you eligible for Non-ECR category?', type: 'radio', options: ['Yes (10th Pass or above)', 'No'], helpText: 'Select Yes if 10th passed' }
        ],
        actionButtonText: 'SUBMIT APPLICATION & PAY FEE',
        hotspots: [
          {
            id: 'hp1',
            title: 'Fresh Passport Radio Button',
            description: 'Pick Fresh Passport for first-time applicants.',
            actionText: 'Select "Fresh Passport"',
            xPercent: 30,
            yPercent: 24,
            highlightType: 'click'
          },
          {
            id: 'hp2',
            title: 'Non-ECR Eligibility',
            description: 'Selecting Yes prevents needing emigration clearance.',
            actionText: 'Choose "Yes" if 10th pass',
            xPercent: 30,
            yPercent: 68,
            highlightType: 'select'
          },
          {
            id: 'hp3',
            title: 'Submit Form',
            description: 'Submit form and generate Application Reference Number (ARN).',
            actionText: 'Click "SUBMIT"',
            xPercent: 78,
            yPercent: 88,
            highlightType: 'submit'
          }
        ]
      }
    },
    {
      stepNumber: 2,
      phase: 'during',
      title: 'Step 2: Pay Application Fee & Book Appointment Slot',
      shortSummary: 'Pay ₹1,500 online and choose your PSK/POPSK appointment date and time.',
      instructions: [
        'On "View Saved/Submitted Applications", select your ARN.',
        'Click "Pay and Schedule Appointment".',
        'Choose Payment Mode: Online Payment (SBI ePay, Internet Banking, Credit/Debit Card, UPI).',
        'Select your preferred Passport Seva Kendra (PSK) or Post Office PSK (POPSK).',
        'A calendar displays green dates (available slots). Click the date and select your time slot.',
        'Complete payment. Print the Application Receipt with barcode and appointment batch time.'
      ],
      whatToClick: 'Select PSK -> Click green slot date -> Click "Pay and Book Appointment".',
      cautionsAndWarnings: [
        'Arrive at the PSK only 15 minutes before your batch time. Entry is barred for earlier arrivals.'
      ],
      mockup: {
        screenTitle: 'Pay and Schedule Appointment Dashboard',
        portalName: 'Passport Seva Online Appointment Booking',
        urlBar: 'https://portal2.passportindia.gov.in/AppOnlineProject/online/scheduleAppt',
        fields: [
          { name: 'pskLocation', label: 'Select Passport Seva Kendra (PSK)', type: 'select', options: ['PSK Begumpet, Hyderabad', 'PSK Hitec City, Hyderabad', 'PSK Lalbagh, Bengaluru', 'PSK Lower Parel, Mumbai'], helpText: 'Choose nearest centre' },
          { name: 'dateSlot', label: 'Earliest Available Date', type: 'text', placeholder: 'Select from calendar (Green dates available)', helpText: 'Click date' }
        ],
        actionButtonText: 'PAY ₹1500 & CONFIRM APPOINTMENT',
        hotspots: [
          {
            id: 'hp4',
            title: 'Select PSK Location',
            description: 'Select your convenient PSK or Post Office PSK.',
            actionText: 'Choose your PSK location',
            xPercent: 50,
            yPercent: 32,
            highlightType: 'select'
          },
          {
            id: 'hp5',
            title: 'Confirm Slot & Pay',
            description: 'Triggers payment gateway and confirms appointment slip.',
            actionText: 'Click "PAY & CONFIRM"',
            xPercent: 50,
            yPercent: 82,
            highlightType: 'submit'
          }
        ]
      }
    },
    {
      stepNumber: 3,
      phase: 'during',
      title: 'Step 3: Visit PSK (Counters A, B, and C Process)',
      shortSummary: 'Walk through Counter A (Biometrics), Counter B (Verification), Counter C (Granting).',
      instructions: [
        'At PSK Entry: Show SMS/Printed appointment receipt and original Aadhaar.',
        'Token Counter: Get electronic token number.',
        'Counter A (TCS Staff): Document scanning, live photograph capture, fingerprint biometrics, applicant fee receipt.',
        'Counter B (Govt Verification Officer): Physical inspection of all original documents and photocopies.',
        'Counter C (Granting Officer): Final interview and decision (Granted / On Hold).',
        'Exit Counter: Hand over token and collect Exit Acknowledgment Letter.'
      ],
      whatToClick: 'Follow electronic token displays in waiting lounge.',
      cautionsAndWarnings: [
        'You do NOT need to bring passport photos for yourself! Live photo is taken at Counter A.'
      ],
      mockup: {
        screenTitle: 'Passport Seva Kendra - Counter Workflow',
        portalName: 'PSK Digital Token & Counter Guidance',
        urlBar: 'https://psk.internal.gov.in/tokenDisplay',
        fields: [
          { name: 'tokenNo', label: 'Your Token Number', type: 'text', placeholder: 'N-142 (Normal Category)', helpText: 'Watch LED display' },
          { name: 'counterA', label: 'Counter A: Biometrics & Scans', type: 'text', placeholder: 'Completed (Photo & Fingerprints captured)', helpText: 'Stage 1' },
          { name: 'counterB', label: 'Counter B: Verification', type: 'text', placeholder: 'Completed (Originals inspected)', helpText: 'Stage 2' },
          { name: 'counterC', label: 'Counter C: Granting Officer', type: 'text', placeholder: 'Status: GRANTED (Clear Police Verification Initiated)', helpText: 'Final Stage' }
        ],
        actionButtonText: 'COLLECT EXIT SLIP & DEPART',
        hotspots: [
          {
            id: 'hp6',
            title: 'Counter C Granting Status',
            description: 'Ensure the Exit Paper says "Application Status: Granted".',
            actionText: 'Inspect Granting Status on Exit Slip',
            xPercent: 50,
            yPercent: 70,
            highlightType: 'warning'
          }
        ]
      }
    },
    {
      stepNumber: 4,
      phase: 'after',
      title: 'Step 4: Police Verification at Local Police Station',
      shortSummary: 'Local police officer calls or visits to verify your address and background.',
      instructions: [
        'Within 3 to 7 days of PSK visit, the local police station will receive your electronic verification file (mPassport Police App).',
        'The police officer will call your mobile number and ask you to visit the station or will visit your house.',
        'Carry originals + photocopies of Aadhaar, 10th certificate, electricity bill, and two passport photos.',
        'Provide two local references (neighbours or friends with their phone numbers and addresses).',
        'Ensure the officer submits a "Clear" recommendation.'
      ],
      whatToClick: 'Answer phone call from local police intelligence branch.',
      cautionsAndWarnings: [
        'Do not pay any bribe. The official police verification fee is already included in your ₹1500 passport fee.'
      ],
      mockup: {
        screenTitle: 'Police Verification Tracking Module',
        portalName: 'mPassport Police Verification Ecosystem',
        urlBar: 'https://police.passportindia.gov.in/status',
        fields: [
          { name: 'policeStation', label: 'Assigned Police Station', type: 'text', placeholder: 'Jubilee Hills Police Station', helpText: 'Jurisdiction station' },
          { name: 'policeStatus', label: 'Verification Status', type: 'text', placeholder: 'Police Report Submitted: CLEAR (No adverse records found)', helpText: 'Status sent to RPO' }
        ],
        actionButtonText: 'VIEW PASSPORT PRINTING QUEUE',
        hotspots: [
          {
            id: 'hp7',
            title: 'Police Report Status',
            description: 'Once "Clear" report is logged, passport printing starts at India Security Press, Nashik.',
            actionText: 'Confirm Clear status',
            xPercent: 50,
            yPercent: 55,
            highlightType: 'warning'
          }
        ]
      }
    },
    {
      stepNumber: 5,
      phase: 'after',
      title: 'Step 5: Printing, Dispatch & India Post Speed Post Delivery',
      shortSummary: 'Passport is printed, laminated, and delivered to your doorstep.',
      instructions: [
        'You will receive an SMS: "Passport printed and dispatched via Speed Post tracking number: ED123456789IN".',
        'Use India Post tracking to view real-time delivery location.',
        'Only the applicant (or family member with authorization letter & ID proof) can receive the parcel.',
        'Sign the delivery slip upon handing over the parcel by the postman.'
      ],
      whatToClick: 'Track on indiapost.gov.in using Speed Post tracking number.',
      cautionsAndWarnings: [
        'Check passport booklet carefully: spelling of name, date of birth, place of birth, and parents\' names.'
      ],
      mockup: {
        screenTitle: 'Dispatch & Delivery Tracking',
        portalName: 'India Post Speed Post Tracking Integration',
        urlBar: 'https://www.indiapost.gov.in/_layouts/15/dpt/trackConsignment.aspx',
        fields: [
          { name: 'trackingNo', label: 'Speed Post Consignment Number', type: 'text', placeholder: 'ED847291048IN', helpText: 'India Post tracking ID' },
          { name: 'deliveryStatus', label: 'Current Delivery Status', type: 'text', placeholder: 'Item Delivered [Addressee: Applicant Signature Obtained]', helpText: 'Delivered' }
        ],
        actionButtonText: 'PASSPORT SAFELY RECEIVED',
        hotspots: [
          {
            id: 'hp8',
            title: 'Speed Post Tracking ID',
            description: 'Save this consignment number to monitor doorstep dispatch.',
            actionText: 'Copy consignment number',
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
      type: 'Normal Fresh / Re-issue (36 Pages Booklet)',
      amount: '₹1,500.00',
      paymentModes: ['Internet Banking', 'Debit/Credit Card', 'UPI', 'SBI Challan'],
      notes: 'Validity: 10 years for adults'
    },
    {
      type: 'Normal Fresh / Re-issue (60 Pages Jumbo Booklet)',
      amount: '₹2,000.00',
      paymentModes: ['Internet Banking', 'Debit/Credit Card', 'UPI'],
      notes: 'Recommended for frequent international travellers'
    },
    {
      type: 'Tatkaal Scheme (Urgent - 36 Pages)',
      amount: '₹3,500.00 (₹1,500 online + ₹2,000 at PSK counter)',
      paymentModes: ['Online + Cash/Card at PSK'],
      notes: 'Passport dispatched within 1 to 3 working days'
    }
  ],

  timelines: [
    { stage: 'Online Application & Slot Booking', duration: '1 to 2 Days' },
    { stage: 'PSK Physical Appointment', duration: '45 to 60 minutes at centre' },
    { stage: 'Police Verification', duration: '7 to 15 Days' },
    { stage: 'Passport Printing & Lamination', duration: '2 to 3 Days' },
    { stage: 'Speed Post Delivery to Doorstep', duration: '3 to 5 Days' }
  ],

  trackingGuide: {
    identifierName: 'Application Reference Number (ARN) / File Number',
    sampleFormat: 'HY107829104826 (Alphanumeric)',
    stepsToTrack: [
      'Visit passportindia.gov.in/AppOnlineProject/statusTracker/trackStatusInpNew',
      'Select Application Type: "Passport/PCC/IC/GEP".',
      'Enter your 15-character File Number / ARN.',
      'Enter your Date of Birth in DD/MM/YYYY format.',
      'Click "Track Status" to view the live status from application to dispatch.'
    ],
    directTrackingUrl: 'https://www.passportindia.gov.in/AppOnlineProject/statusTracker/trackStatusInpNew',
    smsTrackingFormat: 'SMS: STATUS <File Number> to 9704100100 (Standard SMS charges apply).'
  },

  afterSubmissionActions: [
    {
      title: 'Attend Police Verification',
      description: 'Police officer from local station contacts applicant to verify residential address and criminal background check.',
      timeline: 'Within 7 to 15 days',
      isPhysicalVisitRequired: true
    },
    {
      title: 'Receive Passport Booklet',
      description: 'Speed post delivery by India Post postman.',
      timeline: 'Within 20 to 30 days',
      isPhysicalVisitRequired: true
    }
  ],

  commonMistakes: [
    {
      mistake: 'Failing to mention past addresses lived in the last 1 year',
      howToAvoid: 'If you moved within the last 12 months, declare both addresses. Police verification must happen for all residences occupied in past year.',
      consequence: 'Police report marked "Adverse" with penalty up to ₹5,000.'
    },
    {
      mistake: 'Bringing unlaminated or damaged educational marksheets',
      howToAvoid: 'Ensure all educational certificates are in good condition without tears over your birth date or name.',
      consequence: 'Counter B officer puts application "On Hold".'
    }
  ],

  rejectionTroubleshooting: [
    {
      issue: 'Police Report marked "Adverse" or "Incomplete"',
      resolution: 'Visit the Regional Passport Office (RPO) with an enquiry appointment. Clarify the specific police objection and submit requested supplementary proofs.'
    },
    {
      issue: 'Show Cause Notice issued by RPO',
      resolution: 'Respond in writing within 30 days explaining the situation with valid documentary evidence.'
    }
  ],

  faqs: [
    {
      question: 'Do I need to carry passport size photographs to the PSK?',
      answer: 'NO. Adults and children above 4 years DO NOT need to bring photos. High-resolution digital photographs are taken on the spot at Counter A in the PSK. Only infants below 4 years require recent passport photographs against a white background.'
    },
    {
      question: 'Can I reschedule my PSK appointment if I cannot attend?',
      answer: 'Yes. MEA allows up to 3 appointment reschedules within 1 year from the date of original payment.'
    },
    {
      question: 'What is the difference between ECR and Non-ECR passport?',
      answer: 'Non-ECR (Emigration Check Not Required) means you can travel anywhere in the world for work without needing emigration clearance from Protector of Emigrants. Any person who has passed 10th standard or pays income tax qualifies for Non-ECR.'
    }
  ]
};
