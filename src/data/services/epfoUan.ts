import { ServiceDetail } from '../../types/service';

export const EPFO_UAN_SERVICE: ServiceDetail = {
  id: 'epfo-uan-service',
  slug: 'epfo-uan',
  name: 'EPFO UAN Activation & Online PF Withdrawal (Forms 19, 10C, 31)',
  shortName: 'EPFO UAN & PF Claim',
  tagline: 'Manage Provident Fund, check passbook balance, and file online PF withdrawal claims.',
  category: 'employment',
  issuingAuthority: 'Employees\' Provident Fund Organisation (EPFO), Ministry of Labour and Employment',
  mode: 'online_only',
  trustRating: 5,
  lastVerifiedDate: '13 September 2026',
  officialPortalUrl: 'https://unifiedportal-mem.epfindia.gov.in/memberinterface/',
  estimatedDuration: 'UAN Activation: Instant | PF Claim Settlement: 3 to 10 working days',
  standardFee: '₹0.00 (100% Free)',
  digiLockerAvailable: true,
  description: 'The Universal Account Number (UAN) links multiple Member Identification Numbers allotted to an employee by different employers. Once activated on the EPFO Member Portal, members can view electronic passbooks, transfer PF between jobs, and withdraw advance or full retirement funds online without employer sign-off.',

  overviewFacts: [
    { key: 'Issuing Body', value: 'Employees\' Provident Fund Organisation (EPFO)' },
    { key: 'Official Portal', value: 'unifiedportal-mem.epfindia.gov.in' },
    { key: 'UAN Length', value: '12-Digit Permanent Unique Number' },
    { key: 'Employer Approval Needed?', value: 'NO employer signature required for online Aadhaar-linked claims' },
    { key: 'Advance Withdrawal (Form 31)', value: 'Permitted for medical, housing, wedding, or illness' },
    { key: 'Full Settlement (Form 19 & 10C)', value: 'Permitted 2 months after leaving employment' }
  ],

  eligibilityCriteria: [
    {
      title: 'Employed / Formally Employed Individuals',
      description: 'Salaried employees working in an establishment with 20 or more workers where EPF is deducted.',
      isEligible: true
    },
    {
      title: 'UAN Allotted by Employer',
      description: 'Applicant must have a 12-digit UAN printed on their monthly salary slip.',
      isEligible: true
    },
    {
      title: 'Aadhaar, PAN & Bank Account Seeded',
      description: 'Aadhaar, PAN, and Bank Account must be digitally approved and KYC-linked with UAN.',
      isEligible: true
    }
  ],

  documentRequirements: [
    {
      id: 'epfo_uan_no',
      title: '12-Digit Universal Account Number (UAN)',
      purpose: 'Account login identifier',
      description: 'Printed on monthly salary payslip or obtained from HR department:',
      isMandatory: true,
      options: [
        { id: 'epfo_uan_id', name: '12-digit UAN Number', category: 'identity', isOriginalRequired: false }
      ]
    },
    {
      id: 'epfo_aadhaar',
      title: 'Aadhaar Card Linked to Active Mobile',
      purpose: 'Online OTP authentication for e-KYC and digital signing',
      description: 'UIDAI OTP will be sent to the phone registered in Aadhaar:',
      isMandatory: true,
      options: [
        { id: 'aadhaar_card', name: 'Aadhaar Card with active mobile number', category: 'identity' }
      ]
    },
    {
      id: 'epfo_bank_cheque',
      title: 'Cancelled Cheque / Bank Passbook Copy Showing Name & Account',
      purpose: 'Verify bank account before funds credit',
      description: 'Clear photo/scan of cheque leaf containing applicant\'s printed name, account number, and IFSC code (max 500 KB JPEG/PDF):',
      isMandatory: true,
      options: [
        { id: 'bank_passbook_statement', name: 'Cancelled Cheque Leaf / Bank Passbook Photo with Applicant Name', category: 'income_financial', isOriginalRequired: true }
      ]
    },
    {
      id: 'epfo_pan',
      title: 'PAN Card (For TDS Exemption on Withdrawals < 5 Years Service)',
      purpose: 'Prevent high TDS deduction of 34.6%',
      description: 'Mandatory if total service is less than 5 years and withdrawal amount exceeds ₹50,000:',
      isMandatory: false,
      options: [
        { id: 'pan_card', name: 'PAN Card / e-PAN', category: 'identity' }
      ]
    }
  ],

  beforeApplyingChecklist: [
    {
      id: 'chk_epfo_kyc_approved',
      label: 'Aadhaar & Bank Account KYC marked "Verified" on EPFO portal',
      detail: 'Go to Manage -> KYC. Check that Bank and Aadhaar show green "Verified by UIDAI / Bank".',
      category: 'technical',
      isCrucial: true
    },
    {
      id: 'chk_epfo_cheque_name',
      label: 'Applicant name is printed on cancelled cheque leaf',
      detail: 'If name is not printed on cheque leaf, upload front page of bank passbook stamped by branch manager.',
      category: 'document',
      isCrucial: true
    },
    {
      id: 'chk_epfo_exit_date',
      label: 'Date of Exit updated by employer (Only for final PF withdrawal Form 19)',
      detail: 'Not required for PF Advance (Form 31) while continuing in service.',
      category: 'verification',
      isCrucial: false
    }
  ],

  officialPortals: [
    {
      label: 'EPFO Unified Member Portal (Active Login)',
      url: 'https://unifiedportal-mem.epfindia.gov.in/memberinterface/',
      purpose: 'application',
      isGovtVerified: true,
      badgeText: 'Official Member Portal (epfindia.gov.in)',
      domainAlert: 'Always verify domain ends with .epfindia.gov.in'
    },
    {
      label: 'EPFO Electronic Passbook & Balance Portal',
      url: 'https://passbook.epfindia.gov.in/MemberPassBook/Login',
      purpose: 'information',
      isGovtVerified: true,
      badgeText: 'Check PF Balance'
    },
    {
      label: 'Track Online PF Claim Status',
      url: 'https://passbook.epfindia.gov.in/MemClaimStatusUAN/',
      purpose: 'tracking',
      isGovtVerified: true,
      badgeText: 'Status Tracker'
    },
    {
      label: 'EPFiGMS (EPFO Grievance Management System)',
      url: 'https://epfigms.gov.in',
      purpose: 'grievance',
      isGovtVerified: true,
      badgeText: 'Lodge Grievance'
    }
  ],

  steps: [
    {
      stepNumber: 1,
      phase: 'before',
      title: 'Step 1: Activate UAN (First Time Setup)',
      shortSummary: 'Activate your 12-digit UAN on the portal and generate a login password.',
      instructions: [
        'Visit unifiedportal-mem.epfindia.gov.in/memberinterface/.',
        'In the bottom right "Important Links" box, click "Activate UAN".',
        'Enter your 12-digit UAN, Member ID or Aadhaar, Name, Date of Birth, and Mobile Number.',
        'Click "Get Authorization PIN". An OTP will arrive on your Aadhaar-linked mobile.',
        'Enter OTP and click "Validate OTP and Activate UAN". A password will be sent via SMS.'
      ],
      whatToClick: 'Click "Activate UAN" -> Enter details -> Click "Get Authorization PIN".',
      cautionsAndWarnings: [
        'Ensure name and birthdate entered match your Aadhaar card exactly.'
      ],
      mockup: {
        screenTitle: 'EPFO Member Portal - Activate UAN Module',
        portalName: 'Employees\' Provident Fund Organisation',
        urlBar: 'https://unifiedportal-mem.epfindia.gov.in/memberinterface/activateUAN',
        fields: [
          { name: 'uan', label: 'Universal Account Number (UAN)', type: 'text', placeholder: '100918273645', helpText: '12-digit number from payslip' },
          { name: 'aadhaar', label: 'Aadhaar Number', type: 'text', placeholder: '12-digit Aadhaar', helpText: 'UIDAI linked' },
          { name: 'name', label: 'Name as per Aadhaar', type: 'text', placeholder: 'Enter Name in Capitals', helpText: 'Must match Aadhaar spelling' }
        ],
        actionButtonText: 'GET AUTHORIZATION PIN & ACTIVATE',
        hotspots: [
          {
            id: 'hep1',
            title: 'Enter UAN',
            description: 'Enter your 12-digit UAN.',
            actionText: 'Type 12-digit UAN',
            xPercent: 50,
            yPercent: 32,
            highlightType: 'input'
          },
          {
            id: 'hep2',
            title: 'Authorization PIN Button',
            description: 'Triggers mobile OTP to activate profile.',
            actionText: 'Click "Get Authorization PIN"',
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
      title: 'Step 2: Login & File Online Claim (Form 31 / 19 / 10C)',
      shortSummary: 'Log into Member Portal and navigate to Online Services -> Claim.',
      instructions: [
        'Login using your UAN and Password.',
        'Click top menu tab: "Online Services" -> "Claim (Form-31, 19, 10C & 10D)".',
        'The member details screen opens. Enter the last 4 digits of your verified Bank Account Number and click "Verify".',
        'Click "Yes" on the certificate of undertaking.',
        'Click "Proceed for Online Claim".'
      ],
      whatToClick: 'Click "Online Services" -> "Claim" -> Enter Bank Account -> Click "Verify".',
      cautionsAndWarnings: [
        'Bank account number entered MUST match the one previously approved under Manage -> KYC.'
      ],
      mockup: {
        screenTitle: 'Online Services - Claim Filing Portal',
        portalName: 'EPFO Member Interface - Online Claim Form',
        urlBar: 'https://unifiedportal-mem.epfindia.gov.in/memberinterface/claimForm',
        fields: [
          { name: 'bankVerify', label: 'Enter Bank Account Number (As seeded in KYC)', type: 'text', placeholder: 'Enter Complete Bank Account No.', helpText: 'Must match verified KYC bank' },
          { name: 'claimType', label: 'I Want to Apply For', type: 'select', options: ['PF ADVANCE (FORM-31)', 'ONLY PF WITHDRAWAL (FORM-19)', 'ONLY PENSION WITHDRAWAL (FORM-10C)'], helpText: 'Select Form 31 for advance while working' },
          { name: 'purpose', label: 'Purpose for which advance is required', type: 'select', options: ['Illness / Medical Treatment', 'Purchase of Site/House/Flat', 'Education of Children', 'Marriage of Self/Daughter/Son'], helpText: 'Illness is fastest with no supporting docs needed' }
        ],
        actionButtonText: 'PROCEED TO UPLOAD CANCELLED CHEQUE',
        hotspots: [
          {
            id: 'hep3',
            title: 'Verify Bank Account',
            description: 'Enter your bank account number and click Verify.',
            actionText: 'Enter account number and click Verify',
            xPercent: 50,
            yPercent: 32,
            highlightType: 'input'
          },
          {
            id: 'hep4',
            title: 'Select Claim Type',
            description: 'Choose Form-31 for Advance or Form-19 for final settlement.',
            actionText: 'Select Claim Form',
            xPercent: 50,
            yPercent: 52,
            highlightType: 'select'
          },
          {
            id: 'hep5',
            title: 'Proceed Button',
            description: 'Proceed to upload scanned bank cheque.',
            actionText: 'Click "Proceed for Online Claim"',
            xPercent: 50,
            yPercent: 88,
            highlightType: 'submit'
          }
        ]
      }
    },
    {
      stepNumber: 3,
      phase: 'during',
      title: 'Step 3: Upload Cancelled Cheque & Authenticate with Aadhaar OTP',
      shortSummary: 'Upload cheque leaf image (<500 KB) and verify with Aadhaar OTP.',
      instructions: [
        'Enter the amount of advance required (in Rupees).',
        'Enter your current residential address.',
        'Upload scanned copy of your Cancelled Cheque or Passbook front page (JPEG/PDF, between 100 KB and 500 KB).',
        'Ensure applicant name, account number, and IFSC are crystal clear.',
        'Check the consent box: "I have verified the bank details and accept terms...".',
        'Click "Get Aadhaar OTP". Enter the 6-digit OTP received from UIDAI and click "Validate OTP and Submit Claim Form".'
      ],
      whatToClick: 'Upload Cheque image -> Tick consent box -> Click "Get Aadhaar OTP" -> Submit.',
      cautionsAndWarnings: [
        'Blurry or unreadable cheque images cause over 70% of all EPFO claim rejections!'
      ],
      mockup: {
        screenTitle: 'Cheque Leaf Upload & Aadhaar OTP Signature',
        portalName: 'EPFO Digital Claim Settlement Module',
        urlBar: 'https://unifiedportal-mem.epfindia.gov.in/memberinterface/submitClaim',
        fields: [
          { name: 'advanceAmount', label: 'Amount of Advance Required (Rs)', type: 'text', placeholder: '50000', helpText: 'Up to employee share balance' },
          { name: 'uploadCheque', label: 'Upload Scanned Copy of Cheque / Passbook', type: 'file', helpText: '100 KB to 500 KB (JPEG/PDF)' },
          { name: 'aadhaarOtp', label: 'Enter 6-digit Aadhaar OTP', type: 'text', placeholder: 'XXXXXX', helpText: 'Received from UIDAI' }
        ],
        actionButtonText: 'VALIDATE OTP & SUBMIT CLAIM FORM',
        hotspots: [
          {
            id: 'hep6',
            title: 'Upload Cheque File',
            description: 'Attach clear image of cancelled cheque.',
            actionText: 'Click "Choose File"',
            xPercent: 30,
            yPercent: 48,
            highlightType: 'click'
          },
          {
            id: 'hep7',
            title: 'Validate & Submit Claim',
            description: 'Submits digitally signed claim into EPFO central server.',
            actionText: 'Click "VALIDATE OTP & SUBMIT"',
            xPercent: 50,
            yPercent: 86,
            highlightType: 'submit'
          }
        ]
      }
    },
    {
      stepNumber: 4,
      phase: 'after',
      title: 'Step 4: Track Claim Status & Receive Money in Bank',
      shortSummary: 'Track claim under Online Services -> Track Claim Status; funds credited within 3-10 days.',
      instructions: [
        'A PDF claim receipt will be generated. Download it for your records.',
        'To track: Go to "Online Services" -> "Track Claim Status".',
        'Stages: "Under Process" -> "Approved / Settled" -> "Dispatched via NEFT".',
        'Funds are credited directly to your bank account via RBI NEFT transfer within 3 to 10 working days.',
        'You receive an SMS from EPFO: "Claim ID XXX settled for Rs. XXX and sent to bank".'
      ],
      whatToClick: 'Click "Track Claim Status" -> Check settlement status.',
      cautionsAndWarnings: [
        'If claim is rejected, the exact reason is mentioned in the tracking remarks.'
      ],
      mockup: {
        screenTitle: 'Track Claim Status Dashboard',
        portalName: 'EPFO Claim Status Tracker',
        urlBar: 'https://unifiedportal-mem.epfindia.gov.in/memberinterface/trackClaimStatus',
        fields: [
          { name: 'trackingId', label: 'Claim Tracking ID', type: 'text', placeholder: 'EPF/TEL/HYD/2026/0918273', helpText: 'Field office tracking code' },
          { name: 'currentStatus', label: 'Current Status', type: 'text', placeholder: 'Payment Settled: Amount ₹50,000 sent via NEFT on 18/09/2026', helpText: 'Approved' }
        ],
        actionButtonText: 'DOWNLOAD SETTLED CLAIM VOUCHER',
        hotspots: [
          {
            id: 'hep8',
            title: 'Settled Status',
            description: 'Check NEFT dispatch date and amount.',
            actionText: 'Inspect Settlement Details',
            xPercent: 50,
            yPercent: 48,
            highlightType: 'warning'
          }
        ]
      }
    }
  ],

  feesStructure: [
    {
      type: 'EPFO UAN Activation & Online Claims',
      amount: '₹0.00 (Completely Free)',
      paymentModes: ['Free'],
      notes: 'No government charge for PF withdrawal, balance check, or passbook downloads'
    }
  ],

  timelines: [
    { stage: 'UAN Activation & Login', duration: 'Instant' },
    { stage: 'Online Claim Submission', duration: '5 to 10 Minutes' },
    { stage: 'Automated Processing (Illness Claims)', duration: '3 to 5 Working Days' },
    { stage: 'Standard Claim Processing & NEFT Credit', duration: '7 to 10 Working Days' }
  ],

  trackingGuide: {
    identifierName: 'Claim ID / UAN',
    sampleFormat: 'EPF/RO/HYD/2026/0019482 (Alphanumeric)',
    stepsToTrack: [
      'Visit unifiedportal-mem.epfindia.gov.in/memberinterface/',
      'Login with UAN and password.',
      'Click "Online Services" tab -> Select "Track Claim Status".',
      'The status of all past and current claims is displayed with Tracking ID, Claim Type, and Status Remarks.'
    ],
    directTrackingUrl: 'https://unifiedportal-mem.epfindia.gov.in/memberinterface/',
    smsTrackingFormat: 'Updates sent via SMS from sender "EPFOHO".'
  },

  afterSubmissionActions: [
    {
      title: 'Monitor Bank Account for NEFT Credit',
      description: 'Funds are credited directly to your KYC-verified bank account.',
      timeline: '3 to 10 working days',
      isPhysicalVisitRequired: false
    },
    {
      title: 'Download Updated Passbook',
      description: 'Check updated reduced balance on the EPFO Passbook portal.',
      timeline: 'After claim settlement',
      isPhysicalVisitRequired: false
    }
  ],

  commonMistakes: [
    {
      mistake: 'Uploading a cheque leaf without applicant name printed on it',
      howToAvoid: 'Banks often issue personalized cheques with name printed. If you have non-personalized cheque, upload your bank passbook front page with branch stamp instead.',
      consequence: 'Claim rejected with remark: "Name not printed on cheque leaf".'
    },
    {
      mistake: 'Applying for final settlement (Form 19) before 2 months of job exit',
      howToAvoid: 'Form 19 requires at least 2 months of unemployment after leaving service.',
      consequence: 'Claim rejected with remark: "Date of exit not completed 60 days".'
    }
  ],

  rejectionTroubleshooting: [
    {
      issue: 'Claim rejected due to "Bank KYC details unreadable"',
      resolution: 'Take a high-resolution photo in daylight of your bank passbook front page. Ensure your Name, Account Number, and IFSC are razor sharp. File a fresh Form 31/19.'
    },
    {
      issue: 'Date of Exit not updated by previous employer',
      resolution: 'You can now update your own Date of Exit! Go to "Manage" -> "Mark Exit" -> Select date of last working day. No employer approval required.'
    }
  ],

  faqs: [
    {
      question: 'Do I need my employer\'s signature to withdraw PF online?',
      answer: 'NO. If your UAN is seeded with Aadhaar and verified with your bank account, you can submit online claims directly on the EPFO portal without any employer signature or physical visit.'
    },
    {
      question: 'Can I withdraw PF money while still working at my company?',
      answer: 'Yes. You can apply for "PF Advance (Form 31)" under clauses such as Illness, Purchase of Flat/House, Marriage, or Post-Matric Education while still actively employed. Advance money does not need to be refunded.'
    }
  ]
};
