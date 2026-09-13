import { ServiceDetail } from '../../types/service';

export const DRIVING_LICENSE_SERVICE: ServiceDetail = {
  id: 'driving-license',
  slug: 'driving-license',
  name: 'Driving Licence (Learner\'s Licence & Permanent DL via Parivahan)',
  shortName: 'Driving Licence',
  tagline: 'Official authorization to drive motor vehicles across India issued by State Transport RTOs.',
  category: 'government',
  issuingAuthority: 'Ministry of Road Transport and Highways (MoRTH) & State Transport RTOs',
  mode: 'hybrid_appointment',
  trustRating: 5,
  lastVerifiedDate: '13 September 2026',
  officialPortalUrl: 'https://sarathi.parivahan.gov.in',
  estimatedDuration: 'Learner\'s Licence: Instant / Same day | Permanent DL: 30 days after driving test',
  standardFee: '₹150 to ₹350 for LL | ₹700 to ₹1,000 for Permanent DL test & smart card',
  digiLockerAvailable: true,
  description: 'A two-stage licensing process: Stage 1 is the online Learner\'s Licence (LL) test taken from home via Aadhaar authentication; Stage 2 is the practical driving test at the Regional Transport Office (RTO) after 30 days to receive the Permanent Smart Card Driving Licence.',

  overviewFacts: [
    { key: 'Governing Portal', value: 'Sarathi Parivahan (sarathi.parivahan.gov.in)' },
    { key: 'Issuing Authority', value: 'State Transport Department & RTO' },
    { key: 'Learner\'s Test', value: 'Contactless online test from home (Aadhaar authentication)' },
    { key: 'Permanent DL Test', value: 'Mandatory physical driving track test at RTO' },
    { key: 'Minimum Waiting Period', value: 'Must hold valid Learner\'s Licence for at least 30 days before booking permanent test' },
    { key: 'Digital Validity', value: 'mParivahan & DigiLocker DL legally equivalent to physical card' }
  ],

  eligibilityCriteria: [
    {
      title: 'Motorcycles Without Gear (up to 50cc)',
      description: 'Minimum age 16 years (with written consent of parents/guardian).',
      isEligible: true
    },
    {
      title: 'Light Motor Vehicles (Cars / Non-Transport Two-Wheelers)',
      description: 'Minimum age 18 years. Can apply for MCWG (Motorcycle with Gear) and LMV (Light Motor Vehicle).',
      isEligible: true
    },
    {
      title: 'Transport / Commercial Vehicles',
      description: 'Minimum age 20 years, must have held a valid LMV licence for at least 1 year.',
      isEligible: true
    }
  ],

  documentRequirements: [
    {
      id: 'dl_age_proof',
      title: 'Proof of Age / Date of Birth',
      purpose: 'Verify age 18+ for LMV / MCWG',
      description: 'Any ONE of the following valid documents:',
      isMandatory: true,
      options: [
        { id: 'marksheet_10th', name: '10th Standard / Matriculation Certificate', category: 'date_of_birth' },
        { id: 'birth_certificate', name: 'Birth Certificate issued by Registrar', category: 'date_of_birth' },
        { id: 'passport', name: 'Indian Passport', category: 'date_of_birth' },
        { id: 'aadhaar_card', name: 'Aadhaar Card showing full date of birth', category: 'date_of_birth' }
      ]
    },
    {
      id: 'dl_address_proof',
      title: 'Proof of Present Address',
      purpose: 'Determine RTO jurisdiction',
      description: 'Address proof corresponding to the RTO area:',
      isMandatory: true,
      options: [
        { id: 'aadhaar_card', name: 'Aadhaar Card (Enables 100% contactless online test from home)', category: 'address' },
        { id: 'electricity_bill', name: 'Electricity / Water / Gas bill', category: 'address' },
        { id: 'voter_id', name: 'Electoral Photo ID Card (Voter ID)', category: 'address' },
        { id: 'rent_agreement', name: 'Registered Rent Agreement with sub-registrar seal', category: 'address' },
        { id: 'passport', name: 'Valid Passport', category: 'address' }
      ]
    },
    {
      id: 'dl_medical',
      title: 'Form 1 (Self-Declaration) & Form 1-A (Medical Certificate)',
      purpose: 'Physical fitness and vision declaration',
      description: 'Form 1 is self-declared online. Form 1-A signed by registered medical practitioner (MBBS) is required if age is 40+ or applying for commercial vehicle.',
      isMandatory: true,
      options: [
        { id: 'dl_form1', name: 'Form 1 Self-Declaration (Completed directly online on Sarathi)', category: 'other' }
      ]
    }
  ],

  beforeApplyingChecklist: [
    {
      id: 'chk_dl_aadhaar_auth',
      label: 'Aadhaar linked to active mobile (Crucial for taking online Learner test from home)',
      detail: 'Choosing Aadhaar authentication allows you to take the computer LL test directly from home on your webcam without ever visiting the RTO.',
      category: 'technical',
      isCrucial: true
    },
    {
      id: 'chk_dl_road_signs',
      label: 'Familiarity with Indian Road Signs and Traffic Signals',
      detail: 'The LL test consists of 15-20 multiple choice questions with a 60% passing mark requirement.',
      category: 'verification',
      isCrucial: true
    },
    {
      id: 'chk_dl_webcam',
      label: 'Working laptop/phone with front camera and good lighting',
      detail: 'Face authentication AI monitors the applicant during the online LL test.',
      category: 'technical',
      isCrucial: true
    }
  ],

  officialPortals: [
    {
      label: 'Sarathi Parivahan Official Portal (MoRTH)',
      url: 'https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do',
      purpose: 'application',
      isGovtVerified: true,
      badgeText: 'Official Portal (parivahan.gov.in)',
      domainAlert: 'Always verify domain ends with .parivahan.gov.in or .gov.in'
    },
    {
      label: 'Apply for Learner Licence (LL)',
      url: 'https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do',
      purpose: 'application',
      isGovtVerified: true,
      badgeText: 'Stage 1: Learner Licence'
    },
    {
      label: 'Apply for Driving Licence (Permanent DL)',
      url: 'https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do',
      purpose: 'application',
      isGovtVerified: true,
      badgeText: 'Stage 2: Permanent Driving Licence'
    },
    {
      label: 'Track Driving Licence Application Status',
      url: 'https://sarathi.parivahan.gov.in/sarathiservice/applViewStatus.do',
      purpose: 'tracking',
      isGovtVerified: true,
      badgeText: 'Status Tracker'
    }
  ],

  steps: [
    {
      stepNumber: 1,
      phase: 'before',
      title: 'Step 1: Select State & Apply for Learner\'s Licence',
      shortSummary: 'Choose State, select Aadhaar authentication, and pick vehicle classes.',
      instructions: [
        'Visit sarathi.parivahan.gov.in and select your State from the dropdown menu.',
        'Click "Apply for Learner Licence".',
        'Select "Submit via Aadhaar Authentication". This eliminates the need to visit the RTO for Learner\'s Licence.',
        'Enter 12-digit Aadhaar and verify with OTP.',
        'Select Vehicle Class: Motorcycle with Gear (MCWG) and/or Light Motor Vehicle (LMV).'
      ],
      whatToClick: 'Click "Apply for Learner Licence" -> Choose "Submit via Aadhaar Authentication".',
      cautionsAndWarnings: [
        'If you do not select Aadhaar authentication, you will have to physically visit the RTO to take the LL exam.'
      ],
      mockup: {
        screenTitle: 'Sarathi Parivahan - Learner Licence Application',
        portalName: 'Ministry of Road Transport and Highways (MoRTH)',
        urlBar: 'https://sarathi.parivahan.gov.in/sarathiservice/newLLDet.do',
        fields: [
          { name: 'authType', label: 'Authentication Mode', type: 'radio', options: ['Submit via Aadhaar Authentication (Contactless LL)', 'Submit without Aadhaar Authentication (Requires RTO visit)'], helpText: 'Choose Aadhaar mode for home test' },
          { name: 'vehicleClasses', label: 'Select Class of Vehicles (COV)', type: 'checkbox', options: ['Motor Cycle With Gear (MCWG)', 'Light Motor Vehicle (LMV - Car/Jeep)', 'Motor Cycle Without Gear (Scooter)'], helpText: 'Select MCWG and LMV' },
          { name: 'organDonor', label: 'Willing to donate organs in case of accidental death?', type: 'radio', options: ['Yes', 'No'], helpText: 'Optional noble declaration' }
        ],
        actionButtonText: 'SUBMIT APPLICATION & PAY LL FEE',
        hotspots: [
          {
            id: 'hdl1',
            title: 'Aadhaar Contactless Radio',
            description: 'Selecting this enables the online webcam test from home.',
            actionText: 'Choose "Submit via Aadhaar Authentication"',
            xPercent: 35,
            yPercent: 24,
            highlightType: 'click'
          },
          {
            id: 'hdl2',
            title: 'Class of Vehicles (COV)',
            description: 'Tick both MCWG and LMV if you want to drive bikes and cars.',
            actionText: 'Tick "MCWG" and "LMV"',
            xPercent: 40,
            yPercent: 55,
            highlightType: 'select'
          },
          {
            id: 'hdl3',
            title: 'Submit Button',
            description: 'Proceed to fee payment and safety tutorial video.',
            actionText: 'Click "SUBMIT"',
            xPercent: 50,
            yPercent: 88,
            highlightType: 'submit'
          }
        ]
      }
    },
    {
      stepNumber: 2,
      phase: 'during',
      title: 'Step 2: Watch Mandatory Road Safety Video & Take Online LL Exam',
      shortSummary: 'Watch the road safety tutorial and pass the 15-question online test.',
      instructions: [
        'Pay the Learner\'s Licence fee (approx ₹150 per class of vehicle).',
        'Watch the mandatory 10-minute Road Safety Tutorial Video on the portal without skipping.',
        'An SMS with your LL Test Password and URL will be sent to your mobile.',
        'Open the LL Test link in Google Chrome. Allow camera permission for face authentication.',
        'Answer 15-20 questions regarding road signs, lane discipline, and driving rules.',
        'Passing score is 60% (typically 9/15 or 12/20 correct answers).'
      ],
      whatToClick: 'Click "Road Safety Tutorial" -> Complete video -> Click "Online LL Test (STALL)".',
      cautionsAndWarnings: [
        'Do not look away from the camera or allow other people in the room; AI proctor will terminate the test.'
      ],
      mockup: {
        screenTitle: 'Screen-Test for Aid of Learner Licence (STALL)',
        portalName: 'Sarathi Automated Online Test Engine',
        urlBar: 'https://sarathi.parivahan.gov.in/stall/examScreen',
        fields: [
          { name: 'question', label: 'Question 4 of 15: What does a red octagonal sign indicate?', type: 'radio', options: ['STOP', 'GIVE WAY', 'NO ENTRY', 'SPEED LIMIT 50'], helpText: 'Timer: 30 seconds per question' },
          { name: 'cameraStatus', label: 'AI Proctor Webcam Status', type: 'text', placeholder: '[Face Detected & Centred - Green Status]', helpText: 'Webcam feed actively proctored' }
        ],
        actionButtonText: 'CONFIRM ANSWER & PROCEED',
        hotspots: [
          {
            id: 'hdl4',
            title: 'Select Correct Option',
            description: 'Click the radio button corresponding to the right answer.',
            actionText: 'Choose correct option',
            xPercent: 30,
            yPercent: 42,
            highlightType: 'select'
          },
          {
            id: 'hdl5',
            title: 'Confirm Answer',
            description: 'Click Confirm before the 30-second timer runs out.',
            actionText: 'Click "CONFIRM ANSWER"',
            xPercent: 50,
            yPercent: 82,
            highlightType: 'click'
          }
        ]
      }
    },
    {
      stepNumber: 3,
      phase: 'during',
      title: 'Step 3: Download Learner\'s Licence & Practice for 30 Days',
      shortSummary: 'Instantly download your digital LL PDF. Valid for 6 months.',
      instructions: [
        'Upon passing the online test, your Learner\'s Licence is generated instantly.',
        'Click "Print Learner\'s Licence (Form 3)". Enter Application Number and DOB.',
        'Your LL is valid for 6 months across India.',
        'You can legally drive with an "L" board, accompanied by an experienced permanent DL holder.',
        'Wait a mandatory minimum of 30 days before you can apply for the Permanent Driving Licence.'
      ],
      whatToClick: 'Click "Print Learner Licence (Form 3)" -> Download PDF.',
      cautionsAndWarnings: [
        'You cannot apply for the permanent driving test before 30 days from your LL issue date.'
      ],
      mockup: {
        screenTitle: 'Learner\'s Licence Generated (Form 3)',
        portalName: 'Sarathi Digital Licence Repository',
        urlBar: 'https://sarathi.parivahan.gov.in/sarathiservice/printLL',
        fields: [
          { name: 'llNumber', label: 'Learner Licence Number', type: 'text', placeholder: 'TS009/LL/0012345/2026', helpText: 'Valid for 180 days' },
          { name: 'minWaitNote', label: 'Permanent DL Eligibility Date', type: 'text', placeholder: 'Eligible for Permanent DL Driving Test from: 14/10/2026', helpText: 'After 30 days' }
        ],
        actionButtonText: 'DOWNLOAD LEARNER\'S LICENCE (FORM 3)',
        hotspots: [
          {
            id: 'hdl6',
            title: 'Download Form 3',
            description: 'Save the PDF on your phone and print a copy for your vehicle.',
            actionText: 'Click "DOWNLOAD LEARNER LICENCE"',
            xPercent: 50,
            yPercent: 78,
            highlightType: 'submit'
          }
        ]
      }
    },
    {
      stepNumber: 4,
      phase: 'during',
      title: 'Step 4: Book Permanent DL Driving Test Slot at RTO',
      shortSummary: 'After 30 days, pay DL fee and book driving track test appointment.',
      instructions: [
        'After 30 days, visit sarathi.parivahan.gov.in and click "Apply for Driving Licence".',
        'Enter your Learner Licence Number and Date of Birth.',
        'Pay the Permanent DL fee and smart card charge (approx ₹700 - ₹1000).',
        'Go to "Appointments" -> "Slot Booking DL Test".',
        'Select date and time slot at the Automated Driving Test Track (ADTT) at your RTO.',
        'Download the appointment confirmation slip.'
      ],
      whatToClick: 'Click "Slot Booking DL Test" -> Choose Date & Batch.',
      cautionsAndWarnings: [
        'Ensure the vehicle you bring for the test has valid Insurance, RC, and PUC certificate.'
      ],
      mockup: {
        screenTitle: 'DL Test Slot Booking Dashboard',
        portalName: 'Sarathi RTO Driving Test Appointment Engine',
        urlBar: 'https://sarathi.parivahan.gov.in/sarathiservice/dlSlotBooking',
        fields: [
          { name: 'llNoInput', label: 'Learner Licence Number', type: 'text', placeholder: 'TS009/LL/0012345/2026', helpText: 'Must be older than 30 days' },
          { name: 'rtoTrack', label: 'Automated Driving Test Track', type: 'select', options: ['RTO Track Kondapur, Hyderabad', 'RTO Track Electronic City, Bengaluru', 'RTO Andheri, Mumbai'], helpText: 'Sensory camera track' }
        ],
        actionButtonText: 'CONFIRM APPOINTMENT & PRINT SLIP',
        hotspots: [
          {
            id: 'hdl7',
            title: 'Slot Date Selection',
            description: 'Choose available slot from calendar.',
            actionText: 'Select test date slot',
            xPercent: 50,
            yPercent: 42,
            highlightType: 'click'
          },
          {
            id: 'hdl8',
            title: 'Confirm Booking',
            description: 'Generates gate pass for RTO track.',
            actionText: 'Click "CONFIRM APPOINTMENT"',
            xPercent: 50,
            yPercent: 82,
            highlightType: 'submit'
          }
        ]
      }
    },
    {
      stepNumber: 5,
      phase: 'after',
      title: 'Step 5: Pass Driving Test & Receive Smart Card DL',
      shortSummary: 'Perform \'8\' figure on two-wheeler and \'H\'/Gradient track on car; receive smart card.',
      instructions: [
        'Reach RTO track 30 minutes before test slot with your vehicle and original documents.',
        'Two-wheeler test: Ride through the "8" shaped track without putting feet down or touching borders.',
        'Four-wheeler test: Drive through "H" parking track, parallel parking, and reverse curve without hitting sensor poles.',
        'Motor Vehicle Inspector (MVI) approves test electronically.',
        'Biometric photo and signature for the permanent smart card is captured at the RTO counter.',
        'Smart Card DL is dispatched by Speed Post to your home within 15-30 days.',
        'Instant digital DL is available immediately on DigiLocker and mParivahan.'
      ],
      whatToClick: 'MVI updates approval online -> Download on DigiLocker.',
      cautionsAndWarnings: [
        'If you fail the driving test, you can re-attempt after 7 days upon paying a small re-test fee.'
      ],
      mockup: {
        screenTitle: 'Driving Test Result & Licence Printing Queue',
        portalName: 'State Transport RTO System',
        urlBar: 'https://sarathi.parivahan.gov.in/sarathiservice/testResult',
        fields: [
          { name: 'testResult', label: 'Practical Driving Test Result', type: 'text', placeholder: 'PASSED (Automated Sensor Score: 96/100)', helpText: 'Approved by MVI' },
          { name: 'dlNumber', label: 'Permanent DL Number Allocated', type: 'text', placeholder: 'TS-0920260019482', helpText: 'Lifetime driving licence number' },
          { name: 'smartCardStatus', label: 'Smart Card Printing Status', type: 'text', placeholder: 'Card Printed & Handed over to India Post Speed Post', helpText: 'Dispatched' }
        ],
        actionButtonText: 'ADD LICENCE TO DIGILOCKER',
        hotspots: [
          {
            id: 'hdl9',
            title: 'Permanent DL Number',
            description: 'Save this DL number in your Smart Document Assistant Vault.',
            actionText: 'Copy Permanent DL Number',
            xPercent: 50,
            yPercent: 42,
            highlightType: 'warning'
          }
        ]
      }
    }
  ],

  feesStructure: [
    {
      type: 'Learner Licence (LL) - One Class of Vehicle',
      amount: '₹150.00 (LL Issue) + ₹50.00 (Test Fee)',
      paymentModes: ['Net Banking', 'UPI', 'Debit/Credit Card'],
      notes: 'Total ₹200 for bike or ₹350 for bike + car'
    },
    {
      type: 'Permanent DL - Driving Test Fee',
      amount: '₹300.00 per vehicle class',
      paymentModes: ['Online via Sarathi']
    },
    {
      type: 'Smart Card DL Issue & Postal Dispatch',
      amount: '₹200.00 (Smart Card) + ₹50.00 (Speed Post)',
      paymentModes: ['Online via Sarathi']
    }
  ],

  timelines: [
    { stage: 'Learner Licence Online Test', duration: 'Same day (Instant on passing)' },
    { stage: 'Mandatory Practice Period', duration: 'Minimum 30 Days' },
    { stage: 'RTO Driving Track Test', duration: '1 Day (at scheduled appointment)' },
    { stage: 'Digital DL on DigiLocker', duration: '24 to 48 Hours after passing test' },
    { stage: 'Physical Smart Card Delivery', duration: '15 to 30 Days' }
  ],

  trackingGuide: {
    identifierName: 'Application Number',
    sampleFormat: '19482710 (8 digits)',
    stepsToTrack: [
      'Visit sarathi.parivahan.gov.in/sarathiservice/applViewStatus.do',
      'Enter your Application Number and Date of Birth.',
      'Enter captcha and click "Submit".',
      'The screen shows exact step completion: LL Test -> DL Slot -> Test Result -> Scrutiny -> Card Printing -> Speed Post Dispatch.'
    ],
    directTrackingUrl: 'https://sarathi.parivahan.gov.in/sarathiservice/applViewStatus.do',
    smsTrackingFormat: 'Updates sent via SMS from sender "V-VAHAN" or "M-PARIVAHAN".'
  },

  afterSubmissionActions: [
    {
      title: 'Practice with L-board',
      description: 'Practice driving for at least 30 days under supervision of a valid licence holder.',
      timeline: '30 to 180 days',
      isPhysicalVisitRequired: false
    },
    {
      title: 'Attend RTO Driving Test',
      description: 'Take practical test at RTO automated test track with your vehicle.',
      timeline: 'At scheduled appointment',
      isPhysicalVisitRequired: true
    },
    {
      title: 'Add DL to DigiLocker / mParivahan',
      description: 'Fetch your DL into DigiLocker app for legally recognized digital presentation during traffic checks.',
      timeline: 'Within 48 hours of test passing',
      isPhysicalVisitRequired: false
    }
  ],

  commonMistakes: [
    {
      mistake: 'Booking permanent DL test before completing 30 days',
      howToAvoid: 'The system locks slot booking until 30 calendar days have elapsed from the date your LL was generated.',
      consequence: 'Error: "You are not eligible for DL test yet".'
    },
    {
      mistake: 'Taking vehicle to RTO test without valid insurance or PUC',
      howToAvoid: 'Check that pollution under control (PUC) and vehicle insurance policy are active before driving to RTO track.',
      consequence: 'Inspector will disqualify vehicle before you can start the test.'
    }
  ],

  rejectionTroubleshooting: [
    {
      issue: 'Failed the online LL test from home',
      resolution: 'You can pay a small re-test fee (₹50) on Sarathi and re-attempt the online test after 24 hours.'
    },
    {
      issue: 'Failed the RTO practical driving test',
      resolution: 'Book a re-test appointment after 7 days on the Sarathi portal. Practice the reverse "S" and gradient stops.'
    }
  ],

  faqs: [
    {
      question: 'Is DigiLocker / mParivahan DL accepted by traffic police?',
      answer: 'Yes, 100%. Under Rule 139 of the Central Motor Vehicles Rules and MoRTH notifications, electronic documents shown via DigiLocker or mParivahan app are legally valid and must be accepted by traffic police across all states without requiring a physical card.'
    },
    {
      question: 'How long is a Learner\'s Licence valid?',
      answer: 'A Learner\'s Licence is valid for 6 months (180 days) from the date of issue. You must pass your permanent driving test within this 6-month period, or apply for a fresh LL.'
    },
    {
      question: 'Can I take the Learner Licence test from my smartphone?',
      answer: 'Yes. You can take the online contactless LL test on a smartphone with a front-facing camera in Google Chrome browser, provided your mobile number is linked with Aadhaar.'
    }
  ]
};
