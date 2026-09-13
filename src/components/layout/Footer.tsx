import React from 'react';
import { FileCheck2, ShieldCheck, Heart, Sparkles, ExternalLink, HelpCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Footer: React.FC = () => {
  const { navigateToService, setActiveTab } = useApp();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand & Purpose */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center text-white font-bold">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                Smart Document Assistant
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Know what you need. Follow every step. Apply with confidence. An intelligent preparation and visual step-by-step guidance platform for citizen and financial services.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/50 border border-emerald-800/60 p-2.5 rounded-lg">
              <ShieldCheck className="w-4 h-4 flex-shrink-0" />
              <span>100% Client-Side Privacy: Your document selections are stored exclusively on your device.</span>
            </div>
          </div>

          {/* Quick Guided Services */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-3.5">
              Government Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => navigateToService('pan-card')}
                  className="hover:text-brand-400 transition-colors text-left"
                >
                  PAN Card (Form 49A & Instant e-PAN)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToService('aadhaar-card')}
                  className="hover:text-brand-400 transition-colors text-left"
                >
                  Aadhaar Enrolment & Biometrics
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToService('voter-id')}
                  className="hover:text-brand-400 transition-colors text-left"
                >
                  Voter ID Registration (Form 6)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToService('passport-seva')}
                  className="hover:text-brand-400 transition-colors text-left"
                >
                  Indian Passport (Normal & Tatkaal)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToService('driving-license')}
                  className="hover:text-brand-400 transition-colors text-left"
                >
                  Driving Licence (LL & Permanent DL)
                </button>
              </li>
            </ul>
          </div>

          {/* Banking & Schemes */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-3.5">
              Banking & Schemes
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => navigateToService('bank-savings-account')}
                  className="hover:text-brand-400 transition-colors text-left"
                >
                  Zero-Balance Savings Acct (Video KYC)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToService('national-scholarship-portal')}
                  className="hover:text-brand-400 transition-colors text-left"
                >
                  National Scholarship Portal (NSP)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToService('epfo-uan-service')}
                  className="hover:text-brand-400 transition-colors text-left"
                >
                  EPFO UAN Activation & PF Withdrawal
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('matcher')}
                  className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors text-left flex items-center gap-1"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Reverse Document Matcher
                </button>
              </li>
            </ul>
          </div>

          {/* Project Team & Disclaimer */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-3.5">
              Project Development Team
            </h4>
            <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700 space-y-1.5 text-xs text-slate-300 mb-3">
              <p className="font-semibold text-white">Smart Document Assistant Core Team:</p>
              <div className="grid grid-cols-2 gap-1 text-slate-300">
                <span>• K. ANU</span>
                <span>• N. VIJAY ANIL</span>
                <span>• K. JASWANTH</span>
                <span>• N. KASHI RAMU</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              <strong>Official Disclaimer:</strong> Smart Document Assistant is an independent educational guidance system. We do not provide government services or collect citizen data. Always apply through verified official portals (<code className="text-slate-300">.gov.in</code>).
            </p>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© {new Date().getFullYear()} Smart Document Assistant. Built with verified official procedures.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" /> for Indian Citizens
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
