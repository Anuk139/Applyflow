import React from 'react';
import { 
  FileCheck2, 
  Sparkles, 
  Layers, 
  FolderCheck, 
  BookmarkCheck, 
  Mic, 
  Search, 
  ShieldCheck,
  Menu,
  X
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { LiveSearchBar } from '../search/LiveSearchBar';

export const Navbar: React.FC = () => {
  const { 
    activeTab, 
    setActiveTab, 
    vaultCount, 
    applications, 
    openVoiceAssistant,
    searchQuery,
    setSearchQuery,
    setSelectedServiceId
  } = useApp();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 240);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeAppsCount = applications.length;

  const handleNav = (tab: 'home' | 'matcher' | 'vault' | 'tracker') => {
    setActiveTab(tab);
    if (tab !== 'home') {
      setSelectedServiceId(null);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2 sm:gap-4">
          
          {/* Logo */}
          <div 
            onClick={() => handleNav('home')}
            className="flex items-center gap-2.5 cursor-pointer select-none group flex-shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <div>
              <div className="font-extrabold text-lg text-slate-900 leading-tight tracking-tight flex items-center gap-1.5">
                <span>Smart Document Assistant</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200 hidden sm:inline-block">
                  Verified
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium hidden md:block">
                Before • During • After Application Guidance
              </p>
            </div>
          </div>

          {/* Live Search bar in nav with instant dropdown - visible on non-home tabs or when scrolled past hero */}
          {(activeTab !== 'home' || isScrolled) && (
            <div className="hidden lg:flex items-center flex-1 max-w-sm mx-4 animate-in fade-in duration-200">
              <LiveSearchBar variant="navbar" placeholder="Search PAN, Voter, Aadhaar..." />
            </div>
          )}

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={() => handleNav('home')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                activeTab === 'home' 
                  ? 'bg-brand-50 text-brand-700' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Explore Services</span>
            </button>

            <button
              onClick={() => handleNav('matcher')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 relative ${
                activeTab === 'matcher' 
                  ? 'bg-emerald-50 text-emerald-700' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Document Matcher</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </button>

            <button
              onClick={() => handleNav('vault')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                activeTab === 'vault' 
                  ? 'bg-indigo-50 text-indigo-700' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <FolderCheck className="w-4 h-4" />
              <span>My Vault</span>
              {vaultCount > 0 && (
                <span className="ml-1 px-1.5 py-0.5 text-xs rounded-full bg-indigo-100 text-indigo-700 font-bold">
                  {vaultCount}
                </span>
              )}
            </button>

            <button
              onClick={() => handleNav('tracker')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                activeTab === 'tracker' 
                  ? 'bg-amber-50 text-amber-800' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <BookmarkCheck className="w-4 h-4" />
              <span>Applications</span>
              {activeAppsCount > 0 && (
                <span className="ml-1 px-1.5 py-0.5 text-xs rounded-full bg-amber-100 text-amber-800 font-bold">
                  {activeAppsCount}
                </span>
              )}
            </button>
          </nav>

          {/* Action Buttons: Voice Assistant & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={openVoiceAssistant}
              className="flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow-md hover:from-purple-700 hover:to-indigo-700 active:scale-95 transition-all"
              title="Speak your requirement or ask questions"
            >
              <Mic className="w-4 h-4 animate-pulse" />
              <span className="hidden sm:inline">Voice Assistant</span>
              <span className="sm:hidden">Voice</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-xl">
          <div className="mb-3">
            <LiveSearchBar variant="navbar" placeholder="Search services..." />
          </div>

          <button
            onClick={() => handleNav('home')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold flex items-center justify-between ${
              activeTab === 'home' ? 'bg-brand-50 text-brand-700' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Layers className="w-5 h-5" />
              <span>Explore Services</span>
            </div>
          </button>

          <button
            onClick={() => handleNav('matcher')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold flex items-center justify-between ${
              activeTab === 'matcher' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              <span>Document Matcher ("What do I have?")</span>
            </div>
            <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
              Smart
            </span>
          </button>

          <button
            onClick={() => handleNav('vault')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold flex items-center justify-between ${
              activeTab === 'vault' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <FolderCheck className="w-5 h-5 text-indigo-600" />
              <span>My Document Vault</span>
            </div>
            {vaultCount > 0 && (
              <span className="text-xs bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded-full">
                {vaultCount} saved
              </span>
            )}
          </button>

          <button
            onClick={() => handleNav('tracker')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold flex items-center justify-between ${
              activeTab === 'tracker' ? 'bg-amber-50 text-amber-800' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <BookmarkCheck className="w-5 h-5 text-amber-600" />
              <span>My Applications Tracker</span>
            </div>
            {activeAppsCount > 0 && (
              <span className="text-xs bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">
                {activeAppsCount} active
              </span>
            )}
          </button>
        </div>
      )}
    </header>
  );
};
