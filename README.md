# Smart Document Assistant

> **Know what you need. Follow every step. Apply with confidence.**
> An intelligent preparation and visual step-by-step guidance platform for citizen, government, banking, education, and employment applications.

---

## 👥 Project Development Team
- **K. ANU**
- **N. VIJAY ANIL**
- **K. JASWANTH**
- **N. KASHI RAMU**

---

## 🚀 Key Features

### 1. Reverse Document Matcher ("What do I have?" → "What can I apply for?")
- Master checklist of identity, address, educational, and financial documents.
- Real-time scoring and categorization:
  - 🟢 **100% Ready to Apply**
  - 🟡 **Almost Ready** (shows exact missing requirements & acceptable alternatives)
  - 🔴 **Action Needed** (missing foundational prerequisites)
- Celebratory confetti on achieving 100% readiness.

### 2. Standardized 12-Section "Before → During → After" Service Guides
Comprehensive guides covering:
1. **Overview & Key Facts**
2. **Who Can Apply (Eligibility Criteria)**
3. **Acceptable Documents Matrix** (with approved alternatives per requirement)
4. **Before You Apply (Interactive Checklist & Photo/Scan Specs)**
5. **Verified Official Portals Directory** (with anti-phishing domain security warnings)
6. **Visual Step-by-Step Walkthrough with Screen Mockups & Hotspots**
7. **Official Fees & Payment Methods**
8. **Processing Timelines & SLAs**
9. **How to Track Application Status** (with ARN/URN formats and SMS commands)
10. **What Happens After Submission** (Biometrics, police verification, etc.)
11. **Common Application Mistakes & Troubleshooting**
12. **Frequently Asked Questions (FAQs)**

### 3. Visual Screenshot Mockups & "Show Me Where to Click"
- Simulated interactive official portal interfaces for Desktop and Mobile views.
- **"Show me where to click"** button: activates glowing red pointers, hotspot boundaries, and numbered step instructions on the actual form fields and buttons.

### 4. Smart Voice Assistant & Accessibility
- Voice input powered by the **Web Speech Recognition API** with text fallback.
- Text-to-Speech audio narration (`SpeechSynthesis`) to read instructions aloud for non-technical users or users who have difficulty reading complex government guidelines.

### 5. Private Document Vault & Application Planner
- **My Document Vault**: Client-side storage of documents you hold; export/import JSON backup.
- **My Applications Planner**: Track ARN/URN numbers, appointment dates, locations, and stage progression.
- **Print Preparation Sheet**: Print or save a clean checklist to carry to government centers or cyber cafés.

---

## 🏛️ Seeded Services Catalog
1. **Aadhaar Card** (New Enrolment & Biometrics Update at ASK)
2. **PAN Card** (Form 49A Paperless e-KYC & Instant e-PAN)
3. **Voter ID Card** (Form 6 New Elector Registration on ECI Portal)
4. **Indian Passport** (Fresh Normal & Tatkaal Application via Passport Seva)
5. **Driving Licence** (Contactless Online Learner's Licence & Permanent DL on Sarathi)
6. **Digital Savings Bank Account** (Zero-Balance Account via Live Video KYC)
7. **National Scholarship Portal (NSP)** (Central Sector, AICTE & Post-Matric Schemes via OTR)
8. **EPFO UAN & Online PF Withdrawal** (UAN Activation & Forms 31/19/10C Online Claim)

---

## 🛠️ Tech Stack
- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS + Custom Animations
- **Icons**: Lucide React
- **Celebration**: Canvas Confetti
- **Voice**: Web Speech Recognition API & Web Speech Synthesis API
- **Storage**: Browser LocalStorage (Zero server tracking, 100% private)

---

## 💻 Quickstart

### 1. Install dependencies
```bash
npm install
```

### 2. Run local development server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for production
```bash
npm run build
```
The production bundle will be generated in `dist/`.
