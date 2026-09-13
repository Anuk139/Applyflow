import { ServiceDetail } from '../../types/service';

export const PAN_CARD_SERVICE: ServiceDetail = {
  id: 'pan-card',
  slug: 'pan-card',
  name: 'PAN Card (Permanent Account Number)',
  shortName: 'PAN Card',
  tagline: 'Essential 10-digit tax and financial identity for banking, tax returns, and KYC.',
  category: 'government',
  issuingAuthority: 'Income Tax Department, Govt of India (via NSDL Protean / UTIITSL)',
  mode: 'online_only',
  trustRating: 5,
  lastVerifiedDate: '13 September 2026',
  officialPortalUrl: 'https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html',
  estimatedDuration: '7 to 15 working days (e-PAN in 24 to 48 hours)',
  standardFee: '₹107 for physical delivery in India (₹1,017 abroad)',
  digiLockerAvailable: true,
  description: 'A 10-digit alphanumeric character identification issued by the Indian Income Tax Department. Mandatory for opening bank accounts, income tax filing, high-value purchases, and financial investments.',

  // 01: Overview Facts
  overviewFacts: [
    { key: 'Issuing Department', value: 'Income Tax Department (CBDT)' },
    { key: 'Official Portals', value: 'NSDL Protean / UTIITSL / e-Filing ITD' },
    { key: 'Digital Format (e-PAN)', value: 'Legally 100% valid under IT Act 2000' },
    { key: 'Physical Card Delivery', value: 'Dispatched via India Post Speed Post' },
    { key: 'Aadhaar Linking', value: 'Mandatory by law for all Indian citizens' },
    { key: 'Validity', value: 'Lifetime permanent validity (does not expire)' }
  ],

  // 02: Who Can Apply (Eligibility)
  eligibilityCriteria: [
    {
      title: 'Indian Citizens (Adults)',
      description: 'Any Indian citizen above 18 years of age can apply independently under Form 49A.',
      isEligible: true
    },
    {
      title: 'Minors (Below 18 Years)',
      description: 'Parents or legal guardians can apply on behalf of a minor (Representative Assessee).',
      isEligible: true
    },
    {
      title: 'NRIs & Foreign Nationals',
      description: 'Non-Resident Indians apply under Form 49A; foreign citizens apply under Form 49AA.',
      isEligible: true
    },
    {
      title: 'Companies, HUFs & LLPs',
      description: 'Business entities require certificate of incorporation/partnership deed.',
      isEligible: true
    }
  ],

  // 03: Acceptable Documents Matrix
  documentRequirements: [
    {
      id: 'pan_poi',
      title: 'Proof of Identity (POI)',
      purpose: 'Verify applicant name, photo, and legal identity',
      description: 'Must contain full name and photo. Any ONE of the following is acceptable:',
      isMandatory: true,
      options: [
        { id: 'aadhaar_card', name: 'Aadhaar Card (Fastest for paperless e-KYC)', category: 'identity', isOriginalRequired: false },
        { id: 'voter_id', name: 'Voter Photo Identity Card (EPIC)', category: 'identity' },
        { id: 'passport', name: 'Valid Indian Passport', category: 'identity' },
        { id: 'driving_licence', name: 'Driving Licence', category: 'identity' },
        { id: 'ration_card', name: 'Ration Card having applicant photo', category: 'identity' }
      ]
    },
    {
      id: 'pan_poa',
      title: 'Proof of Address (POA)',
      purpose: 'Deliver physical PAN card and establish residential jurisdiction',
      description: 'Must match the delivery address entered. Any ONE of the following is acceptable:',
      isMandatory: true,
      options: [
        { id: 'aadhaar_card', name: 'Aadhaar Card (Address on Aadhaar will be used for delivery)', category: 'address' },
        { id: 'electricity_bill', name: 'Electricity Bill (Not older than 3 months)', category: 'address' },
        { id: 'bank_passbook_statement', name: 'Bank Account Statement / Passbook with bank stamp', category: 'address' },
        { id: 'passport', name: 'Passport with updated address', category: 'address' },
        { id: 'driving_licence', name: 'Driving Licence', category: 'address' }
      ]
    },
    {
      id: 'pan_dob',
      title: 'Proof of Date of Birth (DOB)',
      purpose: 'Verify exact date, month, and year of birth',
      description: 'Must show complete DD/MM/YYYY. Any ONE of the following is acceptable:',
      isMandatory: true,
      options: [
        { id: 'marksheet_10th', name: '10th Standard Matriculation Certificate / Marksheet', category: 'date_of_birth' },
        { id: 'birth_certificate', name: 'Birth Certificate issued by Municipal Authority / Registrar', category: 'date_of_birth' },
        { id: 'aadhaar_card', name: 'Aadhaar Card (Showing full DD/MM/YYYY date of birth)', category: 'date_of_birth' },
        { id: 'passport', name: 'Indian Passport', category: 'date_of_birth' }
      ]
    },
    {
      id: 'pan_photo_sig',
      title: 'Photographs & Signature (For Physical/e-Sign mode)',
      purpose: 'Printed on the physical card',
      description: 'Not required if using paperless Aadhaar e-KYC (Aadhaar photo is automatically used).',
      isMandatory: false,
      options: [
        { id: 'passport_photo', name: '2 Color passport photos (3.5 cm x 2.5 cm)', category: 'photo_biometric' },
        { id: 'scanned_signature', name: 'Scanned signature on white paper with black ink', category: 'photo_biometric' }
      ]
    }
  ],

  // 04: Before You Apply Checklist
  beforeApplyingChecklist: [
    {
      id: 'chk_aadhaar_active',
      label: 'Aadhaar is linked with active mobile number (Crucial for instant e-KYC)',
      detail: 'If your mobile is linked to Aadhaar, you can complete the entire application in 10 minutes without sending physical papers.',
      category: 'technical',
      isCrucial: true
    },
    {
      id: 'chk_name_match',
      label: 'Name spelling exactly matches Aadhaar & 10th certificate',
      detail: 'Ensure there is no mismatch in initials, middle name, or surname between your documents.',
      category: 'verification',
      isCrucial: true
    },
    {
      id: 'chk_scans_ready',
      label: 'Scanned files compressed under 200 KB (JPEG/PDF)',
      detail: 'Only required if applying via scanned document upload (e-Sign) mode.',
      category: 'technical',
      isCrucial: false
    },
    {
      id: 'chk_payment_ready',
      label: 'Payment method ready (UPI / Debit Card / Net Banking: ₹107)',
      detail: 'Government portal accepts UPI, RuPay, Visa, Mastercard, and Net Banking.',
      category: 'financial',
      isCrucial: true
    }
  ],
  photoSpecs: {
    dimensions: '3.5 cm x 2.5 cm (200 DPI)',
    background: 'Pure white background, no glare, face occupies 70%',
    maxSize: '50 KB (JPEG format)',
    format: 'JPEG / JPG',
    notes: 'If using Aadhaar OTP e-KYC, your Aadhaar photo will be used automatically.'
  },
  scanSpecs: {
    format: 'PDF (for supporting documents), JPEG (for photo & signature)',
    maxSize: 'Supporting docs max 300 KB each, Photo/Sig max 50 KB',
    resolution: '200 DPI black & white or color',
    notes: 'Do not password protect uploaded PDF files.'
  },

  // 05: Official Portals
  officialPortals: [
    {
      label: 'Protean (NSDL) Official Application Portal',
      url: 'https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html',
      purpose: 'application',
      isGovtVerified: true,
      badgeText: 'Official Authorized Portal',
      domainAlert: 'Always verify URL starts with onlineservices.nsdl.com or tin-nsdl.com'
    },
    {
      label: 'UTIITSL PAN Online Portal',
      url: 'https://www.pan.utiitsl.com/PAN/newAOA.do',
      purpose: 'application',
      isGovtVerified: true,
      badgeText: 'Official Authorized Portal',
      domainAlert: 'Alternative official provider designated by Income Tax Department'
    },
    {
      label: 'Track PAN Application Status (NSDL)',
      url: 'https://tin.tin.nsdl.com/pantan/StatusTrack.html',
      purpose: 'tracking',
      isGovtVerified: true,
      badgeText: 'Status Tracker'
    },
    {
      label: 'Instant e-PAN via Aadhaar (Income Tax e-Filing)',
      url: 'https://eportal.incometax.gov.in/iec/foservices/#/pre-login/instant-e-pan',
      purpose: 'application',
      isGovtVerified: true,
      badgeText: '100% Free Instant e-PAN (Paperless)'
    }
  ],

  // 06: Visual Step-by-Step Walkthrough
  steps: [
    {
      stepNumber: 1,
      phase: 'before',
      title: 'Step 1: Check Eligibility & Select Mode',
      shortSummary: 'Decide between Paperless Aadhaar e-KYC vs Scanned Documents upload.',
      instructions: [
        'Determine if your mobile number is currently active and linked with your Aadhaar card.',
        'If YES: Choose "Submit digitally through e-KYC & e-Sign (Paperless)". This requires NO physical document dispatch.',
        'If NO: Choose "Submit scanned images through e-Sign" (requires uploading photo/signature) or "Forward application documents physically".'
      ],
      whatToClick: 'Select "Application Type: New PAN - Indian Citizen (Form 49A)" and "Category: INDIVIDUAL".',
      cautionsAndWarnings: [
        'Do not select Form 49AA unless you are a foreign citizen without Indian citizenship.',
        'Make sure you have ₹107 in your UPI/Bank account for online fee payment.'
      ],
      mockup: {
        screenTitle: 'Online PAN Application - Registration Page',
        portalName: 'Protean TIN-NSDL Portal',
        urlBar: 'https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html',
        fields: [
          { name: 'appType', label: 'Application Type', type: 'select', options: ['New PAN - Indian Citizen (Form 49A)', 'New PAN - Foreign Citizen (Form 49AA)', 'Changes or Correction in existing PAN'], helpText: 'Select Form 49A for new Indian application' },
          { name: 'category', label: 'Category', type: 'select', options: ['INDIVIDUAL', 'ASSOCIATION OF PERSONS', 'BODY OF INDIVIDUALS', 'COMPANY'], helpText: 'Select INDIVIDUAL for personal PAN' },
          { name: 'title', label: 'Applicant Title', type: 'select', options: ['Shri', 'Smt', 'Kumari'], helpText: 'Prefix honorific' },
          { name: 'lastName', label: 'Last Name / Surname', type: 'text', placeholder: 'Enter Surname (Mandatory)', helpText: 'If you have only a single name, enter it here' },
          { name: 'firstName', label: 'First Name', type: 'text', placeholder: 'Enter First Name', helpText: 'Leave blank if single name' },
          { name: 'dob', label: 'Date of Birth / Inception', type: 'date', helpText: 'Must match Aadhaar DD/MM/YYYY' },
          { name: 'email', label: 'Email ID', type: 'text', placeholder: 'name@example.com', helpText: 'e-PAN PDF will be emailed here' },
          { name: 'mobile', label: 'Mobile Number', type: 'text', placeholder: '10-digit mobile number', helpText: 'For SMS status updates and OTP' }
        ],
        actionButtonText: 'SUBMIT REGISTRATION',
        hotspots: [
          {
            id: 'h1',
            title: 'Application Type Selection',
            description: 'Always choose Form 49A for Indian citizen applications.',
            actionText: 'Select "New PAN - Indian Citizen (Form 49A)" from the top dropdown',
            xPercent: 45,
            yPercent: 18,
            highlightType: 'select'
          },
          {
            id: 'h2',
            title: 'Category Selection',
            description: 'Crucial: Pick "INDIVIDUAL" unless registering a commercial company.',
            actionText: 'Choose "INDIVIDUAL"',
            xPercent: 78,
            yPercent: 18,
            highlightType: 'select'
          },
          {
            id: 'h3',
            title: 'Submit Initial Token Registration',
            description: 'Click this button to generate a 9-digit Temporary Token Number.',
            actionText: 'Click "SUBMIT"',
            xPercent: 50,
            yPercent: 88,
            highlightType: 'submit'
          }
        ],
        mobileNote: 'On mobile browsers, tap the top hamburger menu to reveal full form width and rotate to landscape for easier field entry.'
      }
    },
    {
      stepNumber: 2,
      phase: 'during',
      title: 'Step 2: Save Token Number & Start Personal Details',
      shortSummary: 'A 9-digit temporary token is created, valid for 30 days.',
      instructions: [
        'Take a screenshot or write down the 9-digit Token Number displayed on screen.',
        'If your session disconnects, you can resume anytime using "Registered User" with this token.',
        'Click "Continue with PAN Application Form".',
        'Choose whether you need a Physical PAN card (Yes / No). Select YES to receive the plastic card.'
      ],
      whatToClick: 'Click "Continue with PAN Application Form" button.',
      whatToEnter: ['Last 4 digits of Aadhaar Number', 'Agree to have Aadhaar photograph printed on PAN'],
      cautionsAndWarnings: [
        'Save the Token Number immediately! Without it, you will have to re-enter all data if connection drops.'
      ],
      mockup: {
        screenTitle: 'Application Submission Mode & Identity Authentication',
        portalName: 'Protean TIN-NSDL Application Form',
        urlBar: 'https://www.onlineservices.nsdl.com/paam/applicantDetails.html',
        fields: [
          { name: 'submissionMode', label: 'How do you want to submit documents?', type: 'radio', options: ['Submit digitally through e-KYC & e-Sign (Paperless)', 'Submit scanned images through e-Sign', 'Forward application documents physically'], helpText: 'e-KYC & e-Sign is 100% paperless via Aadhaar OTP' },
          { name: 'physicalCard', label: 'Whether Physical PAN Card is required?', type: 'radio', options: ['Yes (Fee applicable)', 'No (e-PAN only)'], helpText: 'Select Yes for plastic PVC PAN card' },
          { name: 'aadhaarLast4', label: 'Enter Aadhaar Number (Only last 4 digits)', type: 'text', placeholder: 'XXXX', helpText: 'Last 4 digits of your 12-digit Aadhaar' },
          { name: 'parentName', label: 'Parents Name (Father\'s Name to be printed)', type: 'text', placeholder: 'Father\'s Surname & Given Name', helpText: 'Mother\'s name is optional unless single parent' }
        ],
        actionButtonText: 'NEXT: CONTACT & ADDRESS DETAILS',
        hotspots: [
          {
            id: 'h4',
            title: 'Select Paperless e-KYC Mode',
            description: 'Selecting this mode eliminates any physical photocopies or couriers.',
            actionText: 'Click the radio button for "Submit digitally through e-KYC & e-Sign"',
            xPercent: 30,
            yPercent: 26,
            highlightType: 'click'
          },
          {
            id: 'h5',
            title: 'Aadhaar Last 4 Digits',
            description: 'Enter last 4 digits of Aadhaar. UIDAI will match your biometrics/demographics.',
            actionText: 'Type 4 digits into the box',
            xPercent: 65,
            yPercent: 55,
            highlightType: 'input'
          },
          {
            id: 'h6',
            title: 'Next Step Button',
            description: 'Proceed to enter contact details and AO (Assessing Officer) code.',
            actionText: 'Click "NEXT"',
            xPercent: 70,
            yPercent: 88,
            highlightType: 'submit'
          }
        ],
        mobileNote: 'Ensure popup blocker is disabled on mobile so OTP verification prompts open properly.'
      }
    },
    {
      stepNumber: 3,
      phase: 'during',
      title: 'Step 3: Select AO (Assessing Officer) Code',
      shortSummary: 'Search your city ward or jurisdiction to assign tax jurisdiction.',
      instructions: [
        'Select "Indian Citizens".',
        'Choose your State (e.g., Andhra Pradesh / Maharashtra / Delhi / Karnataka) and your City.',
        'A list of AO Codes with descriptions and wards will appear. Select your ward or range.',
        'The system will automatically auto-fill Area Code, AO Type, Range Code, and AO Number.'
      ],
      whatToClick: 'Click your city in the list and click the radio button beside the relevant ward.',
      cautionsAndWarnings: [
        'If you are a salaried individual or student with income under 50 lakhs, select the Non-Corporate ward/circle.'
      ],
      mockup: {
        screenTitle: 'Assessing Officer (AO) Code Selection',
        portalName: 'Protean TIN-NSDL AO Code Search',
        urlBar: 'https://www.onlineservices.nsdl.com/paam/aoCodeSearch.html',
        fields: [
          { name: 'citizenType', label: 'Search AO Code For:', type: 'radio', options: ['Indian Citizens', 'NRI / Foreign Citizens', 'Defense Personnel', 'Government'], helpText: 'Select Indian Citizens' },
          { name: 'state', label: 'State', type: 'select', options: ['Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 'Telangana', 'Uttar Pradesh'], helpText: 'Select residence state' },
          { name: 'city', label: 'City', type: 'text', placeholder: 'Type city name...', helpText: 'Select your nearest city/district' },
          { name: 'aoTable', label: 'AO Jurisdictions Table', type: 'radio', options: ['Ward 1(1) - Salaried & Non-Corporate (Area: WDD, AO: C, Range: 50, No: 1)', 'Ward 2(3) - Corporate entities (Area: WDD, AO: C, Range: 52, No: 2)'], helpText: 'Click row to populate code fields automatically' }
        ],
        actionButtonText: 'NEXT: DOCUMENT SELECTION & DECLARATION',
        hotspots: [
          {
            id: 'h7',
            title: 'Indian Citizen Filter',
            description: 'Click Indian Citizen to load state list.',
            actionText: 'Select "Indian Citizens"',
            xPercent: 20,
            yPercent: 24,
            highlightType: 'click'
          },
          {
            id: 'h8',
            title: 'Select Ward Row',
            description: 'Clicking the ward row automatically fills in the 4 complex AO code boxes.',
            actionText: 'Click the radio button beside your residential ward',
            xPercent: 35,
            yPercent: 62,
            highlightType: 'select'
          },
          {
            id: 'h9',
            title: 'Proceed Button',
            description: 'Click NEXT to continue to payment and Aadhaar OTP verification.',
            actionText: 'Click "NEXT"',
            xPercent: 80,
            yPercent: 90,
            highlightType: 'submit'
          }
        ]
      }
    },
    {
      stepNumber: 4,
      phase: 'during',
      title: 'Step 4: Online Payment & Aadhaar OTP Authentication',
      shortSummary: 'Pay ₹107 fee via UPI / card and authenticate via Aadhaar OTP.',
      instructions: [
        'Review the entire preview of Form 49A. Check name spelling and date of birth carefully.',
        'Choose Payment Gateway: "BillDesk" or "Paytm/Razorpay" payment gateway.',
        'Pay ₹107.00. Do not refresh or press back during transaction.',
        'After payment, click "Authenticate" to trigger UIDAI OTP sent to your Aadhaar-linked mobile.',
        'Enter the 6-digit OTP and click "Submit".',
        'Click "Continue with e-Sign". Enter full 12-digit Aadhaar on the NSDL e-Sign page and enter the second OTP.'
      ],
      whatToClick: 'Click "Pay Confirm" -> Complete UPI transaction -> Click "Continue with e-Sign".',
      cautionsAndWarnings: [
        'DO NOT close the browser window after payment! Wait for redirect back to NSDL page.',
        'There are TWO OTPs: 1st for authentication, 2nd for legal digital e-signing.'
      ],
      mockup: {
        screenTitle: 'Payment & NSDL Electronic Signature Service (e-Sign)',
        portalName: 'NSDL Electronic Signature Portal (Safe & Verified)',
        urlBar: 'https://esign.egov-nsdl.com/nsdl-esp/esignservice',
        fields: [
          { name: 'declarationCheck', label: 'I hereby authorize NSDL e-Gov to use my Aadhaar details for e-Sign', type: 'checkbox', helpText: 'Mandatory consent checkbox' },
          { name: 'aadhaarVID', label: 'Aadhaar / Virtual ID (VID)', type: 'text', placeholder: 'Enter 12-digit Aadhaar Number', helpText: 'Sent directly to UIDAI encrypted server' },
          { name: 'otpInput', label: 'Enter Aadhaar OTP', type: 'text', placeholder: '6-digit OTP received on mobile', helpText: 'Valid for 10 minutes' }
        ],
        actionButtonText: 'VERIFY OTP & DOWNLOAD ACKNOWLEDGEMENT',
        hotspots: [
          {
            id: 'h10',
            title: 'Consent Checkbox',
            description: 'You must check this box to enable the Aadhaar OTP generation.',
            actionText: 'Tick "I hereby authorize NSDL..." checkbox',
            xPercent: 15,
            yPercent: 30,
            highlightType: 'click'
          },
          {
            id: 'h11',
            title: 'Enter Aadhaar Number',
            description: 'Enter your 12-digit Aadhaar without spaces.',
            actionText: 'Type 12-digit Aadhaar',
            xPercent: 50,
            yPercent: 48,
            highlightType: 'input'
          },
          {
            id: 'h12',
            title: 'Send OTP Button',
            description: 'Click Send OTP to receive message from UIDAI.',
            actionText: 'Click "SEND OTP"',
            xPercent: 82,
            yPercent: 48,
            highlightType: 'click'
          },
          {
            id: 'h13',
            title: 'Verify OTP & Finalize',
            description: 'Once entered, click Verify OTP to conclude the submission.',
            actionText: 'Click "VERIFY OTP"',
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
      title: 'Step 5: Download Acknowledgement Slip & Track Status',
      shortSummary: 'Save the 15-digit Acknowledgement Number and track dispatch.',
      instructions: [
        'An Acknowledgement receipt in PDF format will be generated.',
        'The PDF is password protected: The password is your Date of Birth in DDMMYYYY format (e.g., if born on 05 July 1998, password is "05071998").',
        'Copy your 15-digit Acknowledgement Number (e.g., 881020304050607).',
        'e-PAN PDF will be emailed to your inbox within 24 to 48 hours.',
        'Physical PAN Card will be printed and dispatched by Speed Post within 7-10 working days.'
      ],
      whatToClick: 'Click "Download PDF" button to save your Acknowledgement receipt.',
      whatToEnter: ['Password format: DDMMYYYY to open PDF'],
      cautionsAndWarnings: [
        'Keep the 15-digit Acknowledgement number safe in your Smart Document Assistant Tracker.',
        'No physical documents need to be mailed if you completed Aadhaar e-KYC & e-Sign!'
      ],
      mockup: {
        screenTitle: 'Application Successfully Submitted - Acknowledgement Receipt',
        portalName: 'Protean TIN-NSDL Acknowledgement',
        urlBar: 'https://www.onlineservices.nsdl.com/paam/ackSuccess.html',
        fields: [
          { name: 'ackNum', label: '15-Digit Acknowledgement Number', type: 'text', placeholder: '881093847291048', helpText: 'Use this number to track status on NSDL portal' },
          { name: 'statusSummary', label: 'Application Status', type: 'text', placeholder: 'Payment Received & e-Signed. Under Verification at Income Tax Dept.', helpText: 'Current stage' },
          { name: 'pdfPasswordHint', label: 'PDF Password Format', type: 'text', placeholder: 'Your Date of Birth (DDMMYYYY) with no symbols or slashes', helpText: 'Example: 15081995 for 15 Aug 1995' }
        ],
        actionButtonText: 'DOWNLOAD ACKNOWLEDGEMENT RECEIPT (PDF)',
        hotspots: [
          {
            id: 'h14',
            title: '15-Digit Acknowledgement Number',
            description: 'Copy this number and save it in your Application Tracker.',
            actionText: 'Copy this 15-digit code',
            xPercent: 45,
            yPercent: 32,
            highlightType: 'warning'
          },
          {
            id: 'h15',
            title: 'Download PDF Receipt',
            description: 'Click to download the signed Form 49A copy for your records.',
            actionText: 'Click "DOWNLOAD ACKNOWLEDGEMENT (PDF)"',
            xPercent: 50,
            yPercent: 82,
            highlightType: 'click'
          }
        ]
      }
    }
  ],

  // 07: Fees & Payment Structure
  feesStructure: [
    {
      type: 'Physical PAN Card Delivery in India (Paperless e-KYC/e-Sign)',
      amount: '₹107.00 (inclusive of GST)',
      paymentModes: ['UPI (GPay/PhonePe/Paytm)', 'Credit/Debit Card', 'Net Banking'],
      notes: 'Includes laminated physical card delivered by Speed Post and e-PAN PDF by email'
    },
    {
      type: 'Physical PAN Card Delivery Outside India (Foreign Address)',
      amount: '₹1,017.00 (inclusive of dispatch dispatch)',
      paymentModes: ['International Credit Card', 'Net Banking'],
      notes: 'Dispatched via international registered post'
    },
    {
      type: 'e-PAN Only (No Physical Plastic Card)',
      amount: '₹72.00 (via NSDL) / ₹0.00 (Free via Income Tax e-Filing Portal)',
      paymentModes: ['UPI', 'Debit Card', 'Free on e-Filing'],
      notes: 'e-PAN has identical legal validity under IT Act Section 139A'
    }
  ],

  // 08: Processing Timelines & SLAs
  timelines: [
    { stage: 'Application Submission & Payment', duration: 'Instant (Real-time)' },
    { stage: 'e-PAN Generation & Email Delivery', duration: '24 to 48 Hours' },
    { stage: 'PAN Allocation by Income Tax Department', duration: '3 to 5 Working Days' },
    { stage: 'Printing & India Post Speed Post Dispatch', duration: '5 to 7 Working Days' },
    { stage: 'Doorstep Delivery', duration: '7 to 15 Working Days total' }
  ],

  // 09: How to Track Application
  trackingGuide: {
    identifierName: '15-Digit Acknowledgement Number',
    sampleFormat: '881020304050607 (15 digits)',
    stepsToTrack: [
      'Visit the official NSDL TIN Status Track portal: tin.tin.nsdl.com/pantan/StatusTrack.html',
      'Under "Application Type", select "PAN - New / Change Request".',
      'Enter your 15-digit Acknowledgement Number.',
      'Enter the security captcha code shown on screen and click "Submit".',
      'The screen will display your current status (e.g. Under Verification, PAN Allocated, or Speed Post Tracking Number / Airway Bill No.).'
    ],
    directTrackingUrl: 'https://tin.tin.nsdl.com/pantan/StatusTrack.html',
    smsTrackingFormat: 'Send SMS: NSDLPAN <15-digit Ack No> to 57575 to receive current status via SMS.'
  },

  // 10: After Submission Next Steps
  afterSubmissionActions: [
    {
      title: 'Receive e-PAN PDF in Email',
      description: 'You will receive an official digitally signed PDF from NSDL with your permanent 10-digit PAN.',
      timeline: 'Within 24 to 48 hours',
      isPhysicalVisitRequired: false
    },
    {
      title: 'Physical Card Courier via India Post',
      description: 'India Post postman will deliver the envelope to the address listed on your Aadhaar card.',
      timeline: '7 to 15 days',
      isPhysicalVisitRequired: false
    },
    {
      title: 'Link PAN with Aadhaar (If not done automatically)',
      description: 'Check e-filing portal to verify your PAN is linked with Aadhaar to keep it operative.',
      timeline: 'Immediate upon card receipt',
      isPhysicalVisitRequired: false
    }
  ],

  // 11: Common Mistakes & Rejection Handling
  commonMistakes: [
    {
      mistake: 'Name spelling does not match Aadhaar',
      howToAvoid: 'Check every character including initials. Enter name exactly as listed on UIDAI records.',
      consequence: 'Automatic rejection of paperless e-KYC authentication.'
    },
    {
      mistake: 'Entering Father\'s first name in Last Name field',
      howToAvoid: 'In Indian government forms, "Last Name / Surname" is the mandatory field. If you only have one name, put it in Last Name.',
      consequence: 'PAN card printed with inverted or erroneous surname.'
    },
    {
      mistake: 'Applying for a second PAN card when you already had one',
      howToAvoid: 'Never apply for a new PAN if you forgot your old PAN. Use "Changes/Correction" or "Know Your PAN".',
      consequence: 'Possessing two PAN cards is illegal under Section 272B of IT Act with a ₹10,000 fine.'
    }
  ],
  rejectionTroubleshooting: [
    {
      issue: 'Aadhaar Demographic Mismatch Error during e-KYC',
      resolution: 'Your name, gender, or birthdate entered on NSDL does not match UIDAI database. Update your Aadhaar details first at an Aadhaar Seva Kendra, or apply via scanned document mode.'
    },
    {
      issue: 'Payment deducted but Acknowledgement slip not generated',
      resolution: 'Wait 30 minutes. Go to NSDL portal -> click "Registered User" -> Enter Token Number, Email, and DOB. It will refresh payment status and show your receipt.'
    }
  ],

  // 12: FAQs
  faqs: [
    {
      question: 'Is e-PAN equally valid compared to the physical plastic card?',
      answer: 'Yes, 100%. Under Rule 114 of Income Tax Rules and Information Technology Act 2000, digitally signed e-PAN is at par with physical PAN card for all banking, passport, and official purposes.'
    },
    {
      question: 'Do I need to send physical paper copies to NSDL after online application?',
      answer: 'NO. If you selected "Submit digitally through e-KYC & e-Sign (Paperless)", you do not need to courier any documents. Only applicants who selected physical submission mode need to courier printed forms.'
    },
    {
      question: 'What is the password for the PAN acknowledgement PDF?',
      answer: 'The password is your date of birth without slashes or spaces in DDMMYYYY format. For example, 01011995 for 1st January 1995.'
    },
    {
      question: 'Can a minor (under 18) apply for a PAN card?',
      answer: 'Yes. Minors can get a PAN card. The application must be filed by parents/guardian as Representative Assessee. The card will not carry a photo/signature and must be updated once the minor turns 18.'
    }
  ]
};
