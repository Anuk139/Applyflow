import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  X, 
  Mic, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Building2, 
  CreditCard, 
  Clock,
  ChevronRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { searchServices } from '../../data/services';
import { calculateServiceReadiness } from '../../utils/readiness';
import { ServiceDetail } from '../../types/service';

interface LiveSearchBarProps {
  variant?: 'hero' | 'navbar';
  placeholder?: string;
}

export const LiveSearchBar: React.FC<LiveSearchBarProps> = ({ 
  variant = 'hero',
  placeholder = "Search services (e.g., PAN Card, Aadhaar, Voter ID, Passport, DL)..." 
}) => {
  const { 
    searchQuery, 
    setSearchQuery, 
    navigateToService, 
    openVoiceAssistant, 
    userVault,
    setSelectedCategory
  } = useApp();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Search results
  const results = searchQuery.trim() ? searchServices(searchQuery) : [];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(-1);
    if (searchQuery.trim().length > 0) {
      setIsOpen(true);
      // Ensure category doesn't filter out cross-category searches
      setSelectedCategory('all');
    }
  }, [searchQuery, setSelectedCategory]);

  const handleSelectService = (service: ServiceDetail) => {
    setIsOpen(false);
    navigateToService(service.id);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || results.length === 0) {
      if (e.key === 'Enter' && results.length > 0) {
        e.preventDefault();
        handleSelectService(results[0]);
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && selectedIndex < results.length) {
        handleSelectService(results[selectedIndex]);
      } else if (results.length > 0) {
        handleSelectService(results[0]);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleClear = () => {
    setSearchQuery('');
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const isHero = variant === 'hero';

  return (
    <div ref={containerRef} className="relative w-full text-left">
      {/* Search Input Bar */}
      <div 
        className={`relative flex items-center bg-white rounded-2xl shadow-xl shadow-brand-500/5 border transition-all ${
          isHero
            ? 'p-2 border-slate-300/80 focus-within:border-brand-500 focus-within:ring-4 focus-within:ring-brand-200'
            : 'px-2.5 py-1.5 border-slate-200 focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-100 rounded-xl'
        }`}
      >
        <Search className={`text-slate-400 ml-1.5 flex-shrink-0 ${isHero ? 'w-5 h-5' : 'w-4 h-4'}`} />
        
        <input 
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => {
            if (searchQuery.trim().length > 0) {
              setIsOpen(true);
            }
          }}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={`w-full px-2.5 text-slate-900 placeholder:text-slate-400 bg-transparent outline-none ${
            isHero ? 'text-sm sm:text-base py-1.5' : 'text-xs sm:text-sm py-1'
          }`}
        />

        {/* Clear Button */}
        {searchQuery && (
          <button
            type="button"
            onClick={handleClear}
            className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 mr-1 transition-colors"
            title="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        {/* Voice Search Button (in Hero) */}
        {isHero && (
          <button
            type="button"
            onClick={openVoiceAssistant}
            className="p-2 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-700 font-bold text-xs flex items-center gap-1.5 transition-colors flex-shrink-0"
            title="Speak your search request"
          >
            <Mic className="w-4 h-4 text-purple-600" />
            <span className="hidden sm:inline">Voice Search</span>
          </button>
        )}
      </div>

      {/* Autocomplete Dropdown Popover */}
      {isOpen && searchQuery.trim().length > 0 && (
        <div className="absolute left-0 right-0 top-full mt-2 z-50 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
          
          {/* Header indicator */}
          <div className="px-4 py-2 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
            <span>
              {results.length > 0 
                ? `Found ${results.length} matching service${results.length > 1 ? 's' : ''} for "${searchQuery}"`
                : `No exact matches for "${searchQuery}"`}
            </span>
            <span className="text-[11px] text-slate-400 hidden sm:inline">
              Use ↑ ↓ arrows to navigate, Enter to select
            </span>
          </div>

          {/* Results List */}
          {results.length > 0 ? (
            <div className="max-h-96 overflow-y-auto divide-y divide-slate-100">
              {results.map((service, index) => {
                const isSelected = index === selectedIndex;
                const readiness = calculateServiceReadiness(service, userVault);

                return (
                  <div
                    key={service.id}
                    onClick={() => handleSelectService(service)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`p-3.5 sm:p-4 cursor-pointer transition-colors flex items-center justify-between gap-3 ${
                      isSelected ? 'bg-brand-50/80 text-brand-950' : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-brand-100 text-brand-700 border border-brand-200">
                          {service.category}
                        </span>

                        <span className="text-xs text-slate-500 font-medium truncate flex items-center gap-1">
                          <Building2 className="w-3 h-3 text-slate-400" />
                          <span className="truncate">{service.issuingAuthority}</span>
                        </span>
                      </div>

                      <h4 className="font-black text-sm sm:text-base text-slate-900 tracking-tight flex items-center gap-1.5">
                        <span>{service.name}</span>
                      </h4>

                      <p className="text-xs text-slate-500 truncate">
                        {service.tagline}
                      </p>

                      <div className="flex items-center gap-4 text-[11px] text-slate-400 pt-0.5">
                        <span className="flex items-center gap-1">
                          <CreditCard className="w-3 h-3" />
                          {service.standardFee}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {service.estimatedDuration}
                        </span>
                      </div>
                    </div>

                    {/* Right side: Readiness badge & CTA */}
                    <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                        readiness.status === 'ready'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : readiness.status === 'almost_ready'
                          ? 'bg-amber-100 text-amber-800 border border-amber-300'
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {readiness.readinessScore}% Ready
                      </span>

                      <button
                        type="button"
                        className="px-3 py-1.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1 shadow-xs"
                      >
                        <span>Open Guide</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-6 text-center space-y-3">
              <p className="text-sm text-slate-600 font-semibold">
                No matching service found for "{searchQuery}".
              </p>
              <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
                <span className="text-xs text-slate-400 font-medium">Quick Suggestions:</span>
                {['Voter ID', 'PAN Card', 'Aadhaar', 'Passport', 'Driving Licence', 'Bank Account'].map((term, tIdx) => (
                  <button
                    key={tIdx}
                    type="button"
                    onClick={() => {
                      setSearchQuery(term);
                      inputRef.current?.focus();
                    }}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-brand-50 hover:text-brand-700 text-slate-700 text-xs font-semibold transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Footer bar */}
          {results.length > 0 && (
            <div className="p-2.5 bg-slate-50 border-t border-slate-100 text-center">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  const el = document.getElementById('explore-catalog-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs font-bold text-brand-600 hover:text-brand-800 transition-colors"
              >
                View all results in catalog below ↓
              </button>
            </div>
          )}

        </div>
      )}
    </div>
  );
};
