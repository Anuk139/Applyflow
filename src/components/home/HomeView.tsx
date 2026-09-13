import React from 'react';
import { 
  Sparkles, 
  Search, 
  Mic, 
  ShieldCheck, 
  FileCheck2, 
  ArrowRight, 
  Layers, 
  Compass, 
  BookmarkPlus,
  MousePointer2,
  FolderCheck,
  CheckCircle2
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ALL_SERVICES, searchServices } from '../../data/services';
import { CategoryFilter } from '../explore/CategoryFilter';
import { ServiceCard } from '../explore/ServiceCard';
import { LiveSearchBar } from '../search/LiveSearchBar';

export const HomeView: React.FC = () => {
  const { 
    searchQuery, 
    setSearchQuery, 
    selectedCategory, 
    setActiveTab, 
    openVoiceAssistant,
    vaultCount
  } = useApp();

  // Filter services by search query. When searching, search across all categories so nothing is hidden.
  let displayedServices = searchServices(searchQuery);
  if (selectedCategory !== 'all' && !searchQuery.trim()) {
    displayedServices = displayedServices.filter(s => s.category === selectedCategory);
  }

  return (
    <div className="space-y-12 pb-16">
      
      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-slate-50 to-slate-50 pt-10 pb-12 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-black uppercase tracking-wider border border-brand-200/80 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>Before • During • After Application Platform</span>
          </div>

          {/* Heading */}
          <div className="max-w-4xl mx-auto space-y-3">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-950 leading-[1.1]">
              Know what you need. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">
                Follow every step.
              </span> Apply with confidence.
            </h1>

            <p className="text-base sm:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              Don't get stuck at offices or make mistakes on government websites. Prepare your documents, inspect screen-by-screen visual instructions, and track submissions effortlessly.
            </p>
          </div>

          {/* Central Hero Search Bar with Instant Autocomplete */}
          <div className="max-w-2xl mx-auto pt-2">
            <LiveSearchBar variant="hero" />
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => setActiveTab('matcher')}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-sm shadow-md shadow-emerald-500/20 transition-all flex items-center gap-2 group active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-emerald-200 group-hover:rotate-12 transition-transform" />
              <span>Document Matcher ("What do I have?")</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveTab('vault')}
              className="px-5 py-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-extrabold text-sm shadow-sm transition-colors flex items-center gap-2"
            >
              <FolderCheck className="w-4 h-4 text-brand-600" />
              <span>My Document Vault ({vaultCount} saved)</span>
            </button>
          </div>

          {/* Value Props Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 text-left">
            <div className="p-3 bg-white/70 backdrop-blur rounded-xl border border-slate-200/80">
              <span className="font-extrabold text-xs text-slate-900 block">🟢 100% Prepared</span>
              <span className="text-[11px] text-slate-500">Know exact docs & specs before visiting centres</span>
            </div>
            <div className="p-3 bg-white/70 backdrop-blur rounded-xl border border-slate-200/80">
              <span className="font-extrabold text-xs text-slate-900 block">📸 Visual Screenshots</span>
              <span className="text-[11px] text-slate-500">"Show me where to click" simulated portals</span>
            </div>
            <div className="p-3 bg-white/70 backdrop-blur rounded-xl border border-slate-200/80">
              <span className="font-extrabold text-xs text-slate-900 block">🛡️ Verified Sources</span>
              <span className="text-[11px] text-slate-500">Direct links to official .gov.in websites only</span>
            </div>
            <div className="p-3 bg-white/70 backdrop-blur rounded-xl border border-slate-200/80">
              <span className="font-extrabold text-xs text-slate-900 block">🔒 Total Privacy</span>
              <span className="text-[11px] text-slate-500">Zero data saved on servers; stays on your device</span>
            </div>
          </div>

        </div>
      </section>

      {/* Reverse Matcher Promotional Callout Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Signature Assistant Feature
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Not sure what you are ready to apply for?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Check off the documents in your hand (Aadhaar, 10th marksheet, electricity bill, etc.), and our system calculates your real-time readiness score across all government & banking services.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('matcher')}
            className="px-6 py-3.5 rounded-2xl bg-white hover:bg-emerald-50 text-emerald-950 font-black text-xs sm:text-sm transition-all shadow-lg whitespace-nowrap flex items-center gap-2 flex-shrink-0"
          >
            <span>Launch Document Matcher</span>
            <ArrowRight className="w-4 h-4 text-emerald-800" />
          </button>
        </div>
      </section>

      {/* Explore Services Catalog */}
      <section id="explore-catalog-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Active Search Banner */}
        {searchQuery.trim() && (
          <div className="bg-brand-50 border border-brand-200 rounded-2xl p-4 flex items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center">
                <Search className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-extrabold text-sm text-slate-900">
                  Search results for "{searchQuery}"
                </h3>
                <p className="text-xs text-slate-500">
                  Found {displayedServices.length} matching service{displayedServices.length !== 1 ? 's' : ''} across all categories
                </p>
              </div>
            </div>

            <button
              onClick={() => setSearchQuery('')}
              className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200 transition-colors"
            >
              Clear Search (Show All)
            </button>
          </div>
        )}

        {/* Category Filter Pills & Results Count */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              Explore Application Guides
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Showing {displayedServices.length} verified step-by-step service guides
            </p>
          </div>

          <CategoryFilter />
        </div>

        {/* Services Grid */}
        {displayedServices.length === 0 ? (
          <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center text-slate-500 text-sm space-y-2">
            <p className="font-bold text-slate-700">No services matched "{searchQuery}"</p>
            <p className="text-xs">Try searching for PAN, Aadhaar, Voter, Passport, or Bank Account.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}

      </section>

      {/* The 3-Phase Methodology Explanation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="bg-slate-100/70 rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              How Smart Document Assistant Works
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Every single service guide is structured around the 3 critical phases of citizen applications:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 font-black text-lg flex items-center justify-center">
                1
              </div>
              <h4 className="font-black text-base text-slate-900">
                🟢 Before Applying (Prepare)
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Check eligibility criteria, prepare accepted document alternatives, verify phone/OTP readiness, crop photos to exact pixel specs, and ensure you have payment ready before visiting any portal.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 font-black text-lg flex items-center justify-center">
                2
              </div>
              <h4 className="font-black text-base text-slate-900">
                🔵 During Application (Execute)
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Follow step-by-step simulated portal mockups. Use our signature <strong>"Show me where to click"</strong> tool to illuminate exact buttons, fields, dropdowns, and cautions on Desktop and Mobile.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 font-black text-lg flex items-center justify-center">
                3
              </div>
              <h4 className="font-black text-base text-slate-900">
                🟠 After Applying (Follow-Through)
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Save your acknowledgement number (ARN/URN/EID) into your Planner, track live processing status, prepare for biometric/police verification appointments, and download official digital certificates.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
