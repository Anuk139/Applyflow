import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  X, 
  Mic, 
  Building2, 
  CreditCard, 
  Clock,
  ChevronRight,
  Sparkles
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
  placeholder = "Search services (e.g., Voter ID, PAN Card, Aadhaar, Passport, DL)..." 
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
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const blurTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Search results
  const results = searchQuery.trim() ? searchServices(searchQuery) : [];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (blurTimeoutRef.current) clearTimeout(blurTimeoutRef.current);
    };
  }, []);

  // Open dropdown ONLY when this specific input is actively focused and has text
  useEffect(() => {
    setSelectedIndex(-1);
    if (isFocused && searchQuery.trim().length > 0) {
      setIsOpen(true);
      setSelectedCategory('all');
    } else if (!searchQuery.trim()) {
      setIsOpen(false);
    }
  }, [searchQuery, isFocused, setSelectedCategory]);

  const handleSelectService = (service: ServiceDetail) => {
    setIsOpen(false);
    setIsFocused(false);
    inputRef.current?.blur();
    navigateToService(service.id);
  };

  const handleFocus = () => {
    if (blurTimeoutRef.current) {
      clearTimeout(blurTimeoutRef.current);
    }
    setIsFocused(true);
    if (searchQuery.trim().length > 0) {
      setIsOpen(true);
    }
  };

  const handleBlur = (e: React.FocusEvent) => {
    if (containerRef.current?.contains(e.relatedTarget as Node)) {
      return;
    }
    blurTimeoutRef.current = setTimeout(() => {
      setIsFocused(false);
      setIsOpen(false);
    }, 200);
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
      setIsFocused(false);
      inputRef.current?.blur();
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSearchQuery('');
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const isHero = variant === 'hero';

  return (
    <div ref={containerRef} className="relative w-full text-left">
      {/* Search Input Bar */}
      <div 
        className={`relative flex items-center bg-white transition-all ${
          isHero
            ? 'p-2.5 rounded-2xl shadow-xl shadow-brand-500/10 border-2 border-slate-200 focus-within:border-brand-500 focus-within:ring-4 focus-within:ring-brand-100'
            : 'px-3 py-1.5 rounded-xl border border-slate-200 focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-100 shadow-xs'
        }`}
      >
        <Search className={`text-slate-400 ml-1 flex-shrink-0 ${isHero ? 'w-5 h-5 text-brand-500' : 'w-4 h-4'}`} />
        
        <input 
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={`w-full px-3 text-slate-900 placeholder:text-slate-400 bg-transparent outline-none font-medium ${
            isHero ? 'text-base sm:text-lg py-1' : 'text-xs sm:text-sm py-0.5'
          }`}
        />

        {/* Clear Button */}
        {searchQuery && (
          <button
            type="button"
            onClick={handleClear}
            className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 mr-1 transition-colors flex-shrink-0"
            title="Clear search query"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        {/* Voice Search Button (in Hero) */}
        {isHero && (
          <button
            type="button"
            onClick={openVoiceAssistant}
            className="px-3 py-2 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-700 font-bold text-xs flex items-center gap-1.5 transition-all flex-shrink-0 shadow-xs active:scale-95"
            title="Speak your search request with Voice AI"
          >
            <Mic className="w-4 h-4 text-purple-600" />
            <span className="hidden sm:inline">Voice Search</span>
          </button>
        )}
      </div>

      {/* Autocomplete Dropdown Popover - Only opens when this search bar is focused */}
      {isOpen && isFocused && searchQuery.trim().length > 0 && (
        <div 
          className={`absolute top-full mt-2.5 z-50 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150 ring-1 ring-slate-900/5 ${
            isHero 
              ? 'left-0 right-0 w-full' 
              : 'right-0 w-[360px] sm:w-[420px] max-w-[90vw]'
          }`}
        >
          {/* Header indicator */}
          <div className="px-4 py-2.5 bg-slate-50/90 border-b border-slate-100 flex items-center justify-between text-xs text-slate-600 font-semibold">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              {results.length > 0 
                ? `Found ${results.length} matching service${results.length > 1 ? 's' : ''} for "${searchQuery}"`
                : `No services found for "${searchQuery}"`}
            </span>
            <span className="text-[11px] text-slate-400 hidden sm:inline font-normal">
              Press ↑ ↓ to move, Enter to open
            </span>
          </div>

          {/* Results List */}
          {results.length > 0 ? (
            <div className="max-h-[380px] overflow-y-auto divide-y divide-slate-100">
              {results.map((service, index) => {
                const isSelected = index === selectedIndex;
                const readiness = calculateServiceReadiness(service, userVault);

                return (
                  <div
                    key={service.id}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      handleSelectService(service);
                    }}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`p-3.5 sm:p-4 cursor-pointer transition-colors flex items-center justify-between gap-3 ${
                      isSelected 
                        ? 'bg-brand-50/90 text-brand-950 ring-1 ring-inset ring-brand-200' 
                        : 'hover:bg-slate-50/80'
                    }`}
                  >
                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-brand-100 text-brand-700 border border-brand-200">
                          {service.category}
                        </span>

                        <span className="text-xs text-slate-500 font-medium truncate flex items-center gap-1">
                          <Building2 className="w-3 h-3 text-slate-400 flex-shrink-0" />
                          <span className="truncate">{service.issuingAuthority}</span>
                        </span>
                      </div>

                      <h4 className="font-black text-sm sm:text-base text-slate-900 tracking-tight flex items-center gap-1.5">
                        <span className="truncate">{service.name}</span>
                      </h4>

                      <p className="text-xs text-slate-500 truncate leading-normal">
                        {service.tagline}
                      </p>

                      <div className="flex items-center gap-4 text-[11px] text-slate-400 pt-0.5">
                        <span className="flex items-center gap-1">
                          <CreditCard className="w-3 h-3 text-slate-400" />
                          <span>{service.standardFee}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>{service.estimatedDuration}</span>
                        </span>
                      </div>
                    </div>

                    {/* Right side: Readiness badge & CTA */}
                    <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                      <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full ${
                        readiness.status === 'ready'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : readiness.status === 'almost_ready'
                          ? 'bg-amber-100 text-amber-800 border border-amber-300'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
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
              <p className="text-sm text-slate-700 font-bold">
                No matching service found for "{searchQuery}".
              </p>
              <p className="text-xs text-slate-500">
                Try searching for any of our available application guides:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
                {['Voter ID', 'PAN Card', 'Aadhaar', 'Passport', 'Driving Licence', 'Bank Account', 'Scholarship', 'EPFO'].map((term) => (
                  <button
                    key={term}
                    type="button"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setSearchQuery(term);
                    }}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-brand-50 hover:text-brand-700 text-slate-700 text-xs font-semibold transition-colors border border-slate-200/60"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Footer bar */}
          {results.length > 0 && isHero && (
            <div className="p-2.5 bg-slate-50 border-t border-slate-100 text-center">
              <button
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  setIsFocused(false);
                  const el = document.getElementById('explore-catalog-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs font-bold text-brand-600 hover:text-brand-800 transition-colors"
              >
                View all results in catalog grid below ↓
              </button>
            </div>
          )}

        </div>
      )}
    </div>
  );
};
