import { ServiceDetail } from '../../types/service';

export const VOTER_ID_SERVICE: ServiceDetail = {
  id: 'voter-id',
  slug: 'voter-id',
  name: 'Voter ID Card (New Registration - Form 6)',
  shortName: 'Voter ID',
  tagline: 'Electors Photo Identity Card (EPIC) for democratic voting rights and official identity.',
  category: 'government',
  issuingAuthority: 'Election Commission of India (ECI)',
  mode: 'online_only',
  trustRating: 5,
  lastVerifiedDate: '13 September 2026',
  officialPortalUrl: 'https://voters.eci.gov.in',
  estimatedDuration: '15 to 30 days (Free Doorstep Delivery of PVC EPIC Card)',
  standardFee: '₹0.00 (100% Free by Govt of India)',
  digiLockerAvailable: true,
  description: 'The Elector Photo Identity Card (EPIC) is issued by the Election Commission of India to all eligible Indian citizens aged 18 or above. It grants voting rights in Lok Sabha and Assembly elections, and functions as recognized proof of identity and residence.',

  overviewFacts: [
    { key: 'Issuing Body', value: 'Election Commission of India (ECI)' },
    { key: 'Application Form', value: 'Form 6 (For New Voters / First Time Registration)' },
    { key: 'Fee', value: '₹0.00 (Completely Free of cost)' },
    { key: 'Digital e-EPIC', value: 'Instant downloadable PDF with secure QR code' },
    { key: 'Physical Card', value: 'Color PVC voter card delivered free by Speed Post' },
    { key: 'Official Portal', value: 'voters.eci.gov.in / ECISVEEP' }
  ],

  eligibilityCriteria: [
    {
      title: 'Indian Citizens',
      description: 'Must be an Indian citizen residing in the constituency applied for.',
      isEligible: true
    },
    {
      title: 'Age Eligibility (18+ or Qualifying Dates)',
      description: 'Applicants who are 18 years old or will turn 18 on any of the 4 qualifying dates (1 Jan, 1 Apr, 1 Jul, 1 Oct) can apply.',
      isEligible: true
    },
    {
      title: 'Ordinary Resident of Assembly Constituency',
      description: 'Must be an ordinary resident at the address specified in the application.',
      isEligible: true
    }
  ],

  documentRequirements: [
    {
      id: 'voter_photo',
      title: 'Passport Size Photograph',
      purpose: 'Printed on the EPIC voter card and electoral roll',
      description: 'Color photograph with white background (max 2 MB JPEG).',
      isMandatory: true,
      options: [
        { id: 'passport_photo', name: 'Recent Passport Size Color Photo (4.5cm x 3.5cm)', category: 'photo_biometric' }
      ]
    },
    {
      id: 'voter_dob',
      title: 'Proof of Date of Birth (Age Proof)',
      purpose: 'Verify that applicant has completed 18 years of age',
      description: 'Any ONE of the following self-attested documents:',
      isMandatory: true,
      options: [
        { id: 'birth_certificate', name: 'Birth Certificate issued by Municipal Authority', category: 'date_of_birth' },
        { id: 'aadhaar_card', name: 'Aadhaar Card (Showing full DOB)', category: 'date_of_birth' },
        { id: 'pan_card', name: 'PAN Card', category: 'date_of_birth' },
        { id: 'marksheet_10th', name: '10th Standard / Matriculation Marksheet/Certificate', category: 'date_of_birth' },
        { id: 'driving_licence', name: 'Driving Licence', category: 'date_of_birth' },
        { id: 'passport', name: 'Indian Passport', category: 'date_of_birth' }
      ]
    },
    {
      id: 'voter_poa',
      title: 'Proof of Ordinary Residence (Address Proof)',
      purpose: 'Assign local polling station and assembly constituency',
      description: 'Address proof in the name of applicant or parent/spouse. Any ONE of:',
      isMandatory: true,
      options: [
        { id: 'aadhaar_card', name: 'Aadhaar Card with current residence address', category: 'address' },
        { id: 'electricity_bill', name: 'Water / Electricity / Gas connection bill (Last 1 year)', category: 'address' },
        { id: 'bank_passbook_statement', name: 'Current passbook of Scheduled Bank / Post Office', category: 'address' },
        { id: 'passport', name: 'Indian Passport', category: 'address' },
        { id: 'rent_agreement', name: 'Registered Rent / Lease Deed', category: 'address' }
      ]
    }
  ],

  beforeApplyingChecklist: [
    {
      id: 'chk_voter_age',
      label: 'Age is 18 years or turning 18 in current calendar quarter',
      detail: 'ECI allows prospective applications on 4 qualifying quarterly dates (Jan 1, Apr 1, Jul 1, Oct 1).',
      category: 'verification',
      isCrucial: true
    },
    {
      id: 'chk_voter_photo_crop',
      label: 'Cropped passport-size photo ready (< 2MB JPG/JPEG)',
      detail: 'Clear frontal face portrait with plain white background.',
      category: 'technical',
      isCrucial: true
    },
    {
      id: 'chk_voter_family_epic',
      label: 'Family member\'s EPIC number ready (Optional but highly recommended)',
      detail: 'Providing your father, mother, or spouse\'s EPIC ensures you get assigned the identical polling booth.',
      category: 'document',
      isCrucial: false
    }
  ],

  officialPortals: [
    {
      label: 'Official ECI Voter Portal (voters.eci.gov.in)',
      url: 'https://voters.eci.gov.in',
      purpose: 'application',
      isGovtVerified: true,
      badgeText: 'Official Portal (voters.eci.gov.in)',
      domainAlert: 'Only use voters.eci.gov.in. Voter registration in India is 100% free; never pay any third-party fee.'
    },
    {
      label: 'Form 6 Direct Application Link (New Voter)',
      url: 'https://voters.eci.gov.in/form6',
      purpose: 'application',
      isGovtVerified: true,
      badgeText: 'Form 6 (New Voter)'
    },
    {
      label: 'Track Form 6 Application Status',
      url: 'https://voters.eci.gov.in/track-application-status',
      purpose: 'tracking',
      isGovtVerified: true,
      badgeText: 'Status Tracker'
    },
    {
      label: 'Search in Electoral Roll (electoralsearch.eci.gov.in)',
      url: 'https://electoralsearch.eci.gov.in',
      purpose: 'verification',
      isGovtVerified: true,
      badgeText: 'Electoral Roll Search'
    },
    {
      label: 'Download e-EPIC Digital Voter Card (PDF)',
      url: 'https://voters.eci.gov.in/e-epic-download',
      purpose: 'verification',
      isGovtVerified: true,
      badgeText: 'e-EPIC PDF Download'
    }
  ],

  // Official Website Capabilities & Features Breakdown
  websiteFeatures: {
    portalName: 'Election Commission of India (ECI) Voters\' Service Portal',
    officialUrl: 'https://voters.eci.gov.in',
    summary: 'The national centralized citizen platform developed by the Election Commission of India (ECI) for all electoral services: enrolling first-time voters (Form 6), overseas citizens (Form 6A), corrections and address shifting (Form 8), deletions (Form 7), electoral roll lookups, and instant e-EPIC card downloads.',
    highlights: [
      '100% Free Citizen Service: No fee or government charge for registration, correction, or PVC card delivery',
      'Form 6 for Indian residents turning 18 & Form 6A for non-resident overseas Indian citizens',
      'Form 8 provides 4 key facilities: shifting residence, demographic correction, replacement EPIC, and PwD tagging',
      'Search Electoral Roll across India by Details, EPIC Number, or Mobile Number OTP',
      'Download secure portable digital e-EPIC card with authenticated cryptographic QR code',
      'Look up exact contact numbers of your Booth Level Officer (BLO) and designated Polling Station'
    ],
    featuresList: [
      {
        title: 'Form 6: New Voter Registration',
        description: 'Primary application form for Indian citizens turning 18 years of age or individuals who have moved into a new assembly constituency and need fresh enrolment.',
        category: 'core_service',
        url: 'https://voters.eci.gov.in/form6',
        badge: 'Form 6'
      },
      {
        title: 'Form 6A: Overseas Indian Electors (NRI)',
        description: 'Dedicated enrolment module for non-resident Indian citizens residing abroad who have not acquired citizenship of any other country, allowing them to vote in their home constituency.',
        category: 'core_service',
        url: 'https://voters.eci.gov.in/form6a',
        badge: 'Form 6A (NRI)'
      },
      {
        title: 'Form 7: Objection & Deletion of Name',
        description: 'Allows filing an objection to proposed inclusion of a name or requesting deletion of an existing entry from the electoral roll due to death, permanent migration, or duplicate entries.',
        category: 'core_service',
        url: 'https://voters.eci.gov.in/form7',
        badge: 'Form 7'
      },
      {
        title: 'Form 8: Correction, Shifting, Replacement & PwD Marking',
        description: 'Multi-purpose electoral modification form: (i) Shifting of residence to a new address, (ii) Correction of entries in existing roll (name, age, DOB, photo, mobile), (iii) Replacement of lost/damaged EPIC, and (iv) Marking as Person with Disabilities (PwD).',
        category: 'core_service',
        url: 'https://voters.eci.gov.in/form8',
        badge: 'Form 8'
      },
      {
        title: 'Search in Electoral Roll (3 Search Modes)',
        description: 'Verify your name in the official national voters list via 3 convenient modes on electoralsearch.eci.gov.in: by Demographic Details (Name, Father\'s Name, AC), by 10-digit EPIC Number, or by Mobile Number with OTP.',
        category: 'verification',
        url: 'https://electoralsearch.eci.gov.in',
        badge: 'Search Roll'
      },
      {
        title: 'e-EPIC Digital Voter Card Download',
        description: 'Download a secure, tamper-proof digital PDF version of your Voter Photo Identity Card with a high-resolution photograph and QR code, recognized on par with physical voter cards.',
        category: 'core_service',
        url: 'https://voters.eci.gov.in/e-epic-download',
        badge: 'Digital e-EPIC'
      },
      {
        title: 'Know Your Polling Station & Election Officials',
        description: 'Instantly view your designated Polling Station name, building address, and contact details of your local Booth Level Officer (BLO), Electoral Registration Officer (ERO), and District Election Officer (DEO).',
        category: 'verification',
        url: 'https://voters.eci.gov.in',
        badge: 'Find BLO'
      },
      {
        title: 'Track Application Status with Reference ID',
        description: 'Enter your unique Form Reference Number to monitor the 4-stage progression of your voter application: Submitted → Appointed BLO → Field Verified → Accepted/Rejected.',
        category: 'tracking_records',
        url: 'https://voters.eci.gov.in/track-application-status',
        badge: 'Live Status'
      },
      {
        title: 'National Voter Helpline 1950 & Mobile App',
        description: 'Toll-free citizen assistance hotline (1950) operating across all states in multiple languages. Companion Voter Helpline App available on Android and iOS.',
        category: 'grievance_support',
        url: 'https://voters.eci.gov.in',
        badge: 'Toll-Free 1950'
      }
    ]
  },

  steps: [
    {
      stepNumber: 1,
      phase: 'before',
      title: 'Step 1: Sign Up / Login on ECI Voters Portal',
      shortSummary: 'Register on voters.eci.gov.in using your mobile number and OTP.',
      instructions: [
        'Navigate to the official portal: voters.eci.gov.in.',
        'Click "Sign-Up" in the top right corner if you do not have an account.',
        'Enter your 10-digit mobile number, email, and solve the captcha.',
        'Enter the OTP received on your mobile and set a secure password.',
        'Login with your mobile number and password.'
      ],
      whatToClick: 'Click "Sign Up" -> enter mobile -> enter OTP -> Click "Verify & Submit".',
      cautionsAndWarnings: [
        'Do not share your login password. ECI never calls asking for OTPs.'
      ],
      mockup: {
        screenTitle: 'Voters Service Portal - Sign Up / Login',
        portalName: 'Election Commission of India (ECI) National Portal',
        urlBar: 'https://voters.eci.gov.in/login',
        fields: [
          { name: 'mobileNo', label: 'Registered Mobile Number', type: 'text', placeholder: '10-digit mobile number', helpText: 'Used for OTP and application status SMS' },
          { name: 'captcha', label: 'Captcha Code', type: 'text', placeholder: 'Enter characters from image', helpText: 'Security verification' },
          { name: 'otp', label: 'One Time Password (OTP)', type: 'text', placeholder: '6-digit OTP', helpText: 'Received on SMS' }
        ],
        actionButtonText: 'VERIFY OTP & LOGIN',
        hotspots: [
          {
            id: 'hv1',
            title: 'Mobile Input',
            description: 'Enter your personal mobile number.',
            actionText: 'Enter 10-digit mobile',
            xPercent: 50,
            yPercent: 32,
            highlightType: 'input'
          },
          {
            id: 'hv2',
            title: 'Request OTP',
            description: 'Click to receive login code.',
            actionText: 'Click "Request OTP"',
            xPercent: 78,
            yPercent: 32,
            highlightType: 'click'
          },
          {
            id: 'hv3',
            title: 'Verify & Login',
            description: 'Log into the main ECI dashboard.',
            actionText: 'Click "VERIFY OTP & LOGIN"',
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
      title: 'Step 2: Select Form 6 (Register as a New Elector)',
      shortSummary: 'Open Form 6 and select your State, District, and Assembly Constituency.',
      instructions: [
        'On the main dashboard, locate the card titled "New registration for general electors (Form 6)".',
        'Click "Fill Form 6".',
        'Section A (Select State, District & AC): Select your State and District.',
        'Choose your Assembly Constituency (AC). If unsure, check a family member\'s voter card.'
      ],
      whatToClick: 'Click "Fill Form 6" -> Select State & Assembly Constituency.',
      cautionsAndWarnings: [
        'Ensure you select the exact Assembly Constituency where you currently reside.'
      ],
      mockup: {
        screenTitle: 'Form 6 - Application for Inclusion of Name in Electoral Roll',
        portalName: 'ECI Voters Portal - Form 6 Module',
        urlBar: 'https://voters.eci.gov.in/form6',
        fields: [
          { name: 'stateSelect', label: 'State / Union Territory', type: 'select', options: ['Telangana', 'Andhra Pradesh', 'Karnataka', 'Maharashtra', 'Delhi'], helpText: 'State of current residence' },
          { name: 'districtSelect', label: 'District', type: 'select', options: ['Hyderabad', 'Bengaluru Urban', 'Mumbai Suburban', 'Central Delhi'], helpText: 'District' },
          { name: 'acSelect', label: 'No. & Name of Assembly Constituency', type: 'select', options: ['58 - Jubilee Hills', '59 - Khairatabad', '60 - Sanathnagar'], helpText: 'Your electoral constituency' }
        ],
        actionButtonText: 'NEXT: PERSONAL DETAILS (SECTION B)',
        hotspots: [
          {
            id: 'hv4',
            title: 'Select Form 6',
            description: 'Form 6 is specifically for first-time voters or new constituency enrolment.',
            actionText: 'Select "Fill Form 6"',
            xPercent: 50,
            yPercent: 20,
            highlightType: 'click'
          },
          {
            id: 'hv5',
            title: 'Assembly Constituency',
            description: 'Select your local MLA voting constituency.',
            actionText: 'Choose your Assembly Constituency',
            xPercent: 50,
            yPercent: 62,
            highlightType: 'select'
          },
          {
            id: 'hv6',
            title: 'Section Next Button',
            description: 'Proceed to Personal Details section.',
            actionText: 'Click "NEXT"',
            xPercent: 82,
            yPercent: 88,
            highlightType: 'submit'
          }
        ]
      }
    },
    {
      stepNumber: 3,
      phase: 'during',
      title: 'Step 3: Enter Personal Details & Upload Photo',
      shortSummary: 'Enter name in English and regional language, upload passport photo.',
      instructions: [
        'Enter First Name and Surname. The portal automatically transliterates into regional language.',
        'Check the regional script spelling. If incorrect, use the built-in virtual keyboard icon to edit.',
        'Upload your passport photograph (max 2 MB, JPG/JPEG). Crop properly using the on-screen preview.',
        'Fill Section C (Relatives Details): Father, Mother, or Spouse name.'
      ],
      whatToClick: 'Click "Choose File" under Photograph -> Crop photo -> Click "Save".',
      cautionsAndWarnings: [
        'Ensure the photo is clear without sunglasses, hats, or shadows.'
      ],
      mockup: {
        screenTitle: 'Form 6 - Section B (Personal Details) & Section C (Relatives)',
        portalName: 'ECI Voters Portal - Form 6',
        urlBar: 'https://voters.eci.gov.in/form6/personal',
        fields: [
          { name: 'firstName', label: 'First Name followed by Middle Name', type: 'text', placeholder: 'Enter First & Middle name', helpText: 'In English' },
          { name: 'regionalName', label: 'Name in Regional Language (Auto-transliterated)', type: 'text', placeholder: 'Auto-transliterated text', helpText: 'Edit via keyboard icon if spelling differs' },
          { name: 'photoUpload', label: 'Upload Photograph (2MB max)', type: 'file', helpText: 'Passport size photo (4.5cm x 3.5cm)' },
          { name: 'relation', label: 'Name of Relative', type: 'text', placeholder: 'Father / Mother / Husband / Wife', helpText: 'Relative whose name will appear on Voter ID' }
        ],
        actionButtonText: 'NEXT: CONTACT & AADHAAR DETAILS',
        hotspots: [
          {
            id: 'hv7',
            title: 'Upload Photograph',
            description: 'Click Choose File and select your recent passport size photo.',
            actionText: 'Click "Choose File"',
            xPercent: 30,
            yPercent: 62,
            highlightType: 'click'
          },
          {
            id: 'hv8',
            title: 'Next Button',
            description: 'Proceed to enter contact and Aadhaar details.',
            actionText: 'Click "NEXT"',
            xPercent: 82,
            yPercent: 88,
            highlightType: 'submit'
          }
        ]
      }
    },
    {
      stepNumber: 4,
      phase: 'during',
      title: 'Step 4: Upload Address & Date of Birth Proofs, Submit Declaration',
      shortSummary: 'Upload supporting documents and submit Form 6.',
      instructions: [
        'Section E (Aadhaar Details): Enter Aadhaar Number to facilitate identity linkage (or check non-availability if you do not have Aadhaar).',
        'Section G (Date of Birth Details): Select DOB Proof document type (e.g. 10th marksheet or Aadhaar) and upload scanned copy.',
        'Section H (Present Address): Enter complete address with House No, Street, Village/Town, Post Office, and PIN Code.',
        'Upload Address Proof document.',
        'Complete the Declaration stating you are an Indian citizen and have not enrolled in any other constituency.',
        'Click "Preview and Submit". Review the generated Form 6 and click "Submit".'
      ],
      whatToClick: 'Click "Preview and Submit" -> Verify all information -> Click "Submit".',
      cautionsAndWarnings: [
        'Submitting false declarations in Form 6 is punishable with imprisonment up to 1 year under Section 31 of RPA 1950.'
      ],
      mockup: {
        screenTitle: 'Form 6 - Final Review & Declaration',
        portalName: 'ECI Voters Portal - Form 6 Submission',
        urlBar: 'https://voters.eci.gov.in/form6/preview',
        fields: [
          { name: 'declarationBox', label: 'I am a citizen of India and my place of ordinary residence is...', type: 'checkbox', helpText: 'Mandatory statutory declaration' },
          { name: 'place', label: 'Place of Application', type: 'text', placeholder: 'Your Town / City', helpText: 'City name' },
          { name: 'captchaFinal', label: 'Enter Captcha', type: 'text', placeholder: 'Enter Captcha', helpText: 'Final submission security code' }
        ],
        actionButtonText: 'SUBMIT FORM 6 APPLICATION',
        hotspots: [
          {
            id: 'hv9',
            title: 'Declaration Checkbox',
            description: 'Tick statutory declaration.',
            actionText: 'Tick declaration checkbox',
            xPercent: 12,
            yPercent: 42,
            highlightType: 'click'
          },
          {
            id: 'hv10',
            title: 'Submit Application Button',
            description: 'Final submission to Electoral Registration Officer (ERO).',
            actionText: 'Click "SUBMIT FORM 6"',
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
      title: 'Step 5: Save Reference Number & Download e-EPIC upon Approval',
      shortSummary: 'Copy the Reference ID (e.g. S12345678) and track field verification by BLO.',
      instructions: [
        'A green success dialog will appear showing your unique Application Reference Number (e.g., F6-TEL-12345678).',
        'Save this reference number in your Smart Document Assistant Tracker.',
        'The Booth Level Officer (BLO) may visit your residential address for physical field verification.',
        'Once approved by the ERO, an EPIC number is generated.',
        'You can immediately download your digital e-EPIC PDF from voters.eci.gov.in/e-epic-download.',
        'The physical color PVC card will be dispatched free of cost to your address via India Post Speed Post.'
      ],
      whatToClick: 'Click "Download Acknowledgement" -> Save Reference Number.',
      cautionsAndWarnings: [
        'Keep your original address proof handy for when the BLO calls or visits your residence.'
      ],
      mockup: {
        screenTitle: 'Application Submitted Successfully - ECI Form 6',
        portalName: 'ECI Acknowledgement Receipt',
        urlBar: 'https://voters.eci.gov.in/form6/success',
        fields: [
          { name: 'refNumber', label: 'Application Reference Number', type: 'text', placeholder: 'F6-AP-09823471', helpText: 'Use this reference number to track on portal' },
          { name: 'stage', label: 'Current Stage', type: 'text', placeholder: 'Submitted -> Field Verification by BLO -> Decision by ERO', helpText: 'Multi-stage workflow' }
        ],
        actionButtonText: 'DOWNLOAD ACKNOWLEDGEMENT RECEIPT',
        hotspots: [
          {
            id: 'hv11',
            title: 'Application Reference Number',
            description: 'Copy this unique alphanumeric code.',
            actionText: 'Copy your Reference Number',
            xPercent: 50,
            yPercent: 35,
            highlightType: 'warning'
          },
          {
            id: 'hv12',
            title: 'Download Receipt',
            description: 'Download the PDF acknowledgement for your records.',
            actionText: 'Click "DOWNLOAD ACKNOWLEDGEMENT"',
            xPercent: 50,
            yPercent: 78,
            highlightType: 'click'
          }
        ]
      }
    }
  ],

  feesStructure: [
    {
      type: 'Form 6 New Voter Registration',
      amount: '₹0.00 (100% Free)',
      paymentModes: ['Free by Government of India'],
      notes: 'No fee for online registration, verification, or physical PVC card delivery'
    },
    {
      type: 'e-EPIC Digital Download',
      amount: '₹0.00 (Free)',
      paymentModes: ['Free download from portal']
    }
  ],

  timelines: [
    { stage: 'Online Form 6 Submission', duration: 'Instant' },
    { stage: 'Scrutiny & BLO Field Verification', duration: '7 to 15 Days' },
    { stage: 'ERO Approval & EPIC Generation', duration: '15 to 30 Days' },
    { stage: 'Downloadable e-EPIC Available', duration: 'Immediately upon approval' },
    { stage: 'PVC Card Speed Post Delivery', duration: '30 to 45 Days' }
  ],

  trackingGuide: {
    identifierName: 'Application Reference Number',
    sampleFormat: 'F6-TEL-09823471 (Alphanumeric)',
    stepsToTrack: [
      'Visit voters.eci.gov.in/track-application-status',
      'Select your State from the dropdown list.',
      'Enter your Reference Number received after Form 6 submission.',
      'Click "Submit".',
      'The tracker displays the 4 stages: Submitted -> Appointed BLO -> Field Verified -> Accepted/Rejected.'
    ],
    directTrackingUrl: 'https://voters.eci.gov.in/track-application-status',
    smsTrackingFormat: 'Dial Voter Helpline Toll-Free: 1950 or use Voter Helpline App.'
  },

  afterSubmissionActions: [
    {
      title: 'Booth Level Officer (BLO) Verification',
      description: 'The local BLO may call or visit your home to verify that you reside at the specified address.',
      timeline: 'Within 7 to 15 days',
      isPhysicalVisitRequired: true
    },
    {
      title: 'Download Digital e-EPIC PDF',
      description: 'Once SMS notification confirms EPIC generation, download the secure digital voter card.',
      timeline: 'Immediately upon ERO approval',
      isPhysicalVisitRequired: false
    },
    {
      title: 'Receive Physical PVC Voter Card',
      description: 'India Post delivers the durable plastic voter card to your door.',
      timeline: 'Within 30-45 days',
      isPhysicalVisitRequired: false
    }
  ],

  commonMistakes: [
    {
      mistake: 'Applying in two constituencies simultaneously',
      howToAvoid: 'If moving cities, use Form 8 (Shifting of Residence), never apply for a new Form 6.',
      consequence: 'Dual registration is illegal under Section 17 & 18 of RPA 1950.'
    },
    {
      mistake: 'Uploading blurry photo or non-white background',
      howToAvoid: 'Use a clear passport photo taken against a clean white wall.',
      consequence: 'Form rejected during ERO administrative scrutiny.'
    }
  ],

  rejectionTroubleshooting: [
    {
      issue: 'Form Rejected with reason "Not an ordinary resident"',
      resolution: 'This happens if the BLO visited when you were not home and neighbours did not identify you. You can file Form 6 again with supplementary local utility bills or visit your local ERO office.'
    },
    {
      issue: 'BLO not visiting or status stuck for over 30 days',
      resolution: 'Call the National Voter Helpline at 1950 (free) with your Reference Number or contact your local Taluk/Tahsildar ERO cell.'
    }
  ],

  faqs: [
    {
      question: 'Is downloaded e-EPIC valid for voting at the polling station?',
      answer: 'Yes! The downloaded e-EPIC PDF is legally recognized and carries a digitally signed secure QR code. You can print it and present it at your polling booth.'
    },
    {
      question: 'Can I vote if I am 17 and a half years old?',
      answer: 'You can submit your advance application under Form 6 if you will turn 18 on 1st January, 1st April, 1st July, or 1st October of the following year. Your card will be processed and issued upon turning 18.'
    },
    {
      question: 'How do I know my polling station location?',
      answer: 'You can search on electoralsearch.eci.gov.in using your EPIC number or name to view your exact polling booth name, room number, and BLO contact number.'
    }
  ]
};
