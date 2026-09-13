import React, { useState } from 'react';
import { 
  FolderCheck, 
  CheckSquare, 
  Square, 
  Search, 
  Sparkles, 
  Download, 
  Upload, 
  RotateCcw, 
  ShieldCheck,
  ChevronRight,
  Info
} from 'lucide-react';
import { MASTER_DOCUMENTS, MasterDocument } from '../../data/masterDocuments';
import { useApp } from '../../context/AppContext';
import { ALL_SERVICES } from '../../data/services';
import { calculateServiceReadiness } from '../../utils/readiness';

export const MyDocumentVault: React.FC = () => {
  const { 
    userVault, 
    toggleVaultDocument, 
    setVaultDocument, 
    resetVault, 
    vaultCount, 
    navigateToService 
  } = useApp();

  const [searchDoc, setSearchDoc] = useState<string>('');
  const [selectedCat, setSelectedCat] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Documents' },
    { id: 'identity', label: 'Identity Proofs' },
    { id: 'address', label: 'Address Proofs' },
    { id: 'date_of_birth', label: 'Date of Birth' },
    { id: 'educational', label: 'Educational' },
    { id: 'income_financial', label: 'Financial / Banking' },
    { id: 'photo_biometric', label: 'Photos & Biometrics' },
  ];

  const filteredDocs = MASTER_DOCUMENTS.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchDoc.toLowerCase()) ||
      doc.shortName.toLowerCase().includes(searchDoc.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchDoc.toLowerCase());

    const matchesCat = selectedCat === 'all' || doc.category === selectedCat;

    return matchesSearch && matchesCat;
  });

  // Calculate ready services
  const readyServices = ALL_SERVICES.filter(service => {
    const res = calculateServiceReadiness(service, userVault);
    return res.status === 'ready';
  });

  // Export JSON
  const handleExportData = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(userVault, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `smart_document_vault_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Import JSON
  const handleImportData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result as string);
          if (typeof parsed === 'object') {
            Object.keys(parsed).forEach(key => {
              setVaultDocument(key, !!parsed[key]);
            });
          }
        } catch (err) {
          alert('Invalid backup JSON file.');
        }
      };
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-indigo-950 relative overflow-hidden">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-bold uppercase tracking-wider">
            <FolderCheck className="w-3.5 h-3.5 text-indigo-400" />
            Client-Side Private Document Vault
          </div>

          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            My Documents Vault
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Maintain your personal inventory of verified documents. Ticking documents here automatically powers the <strong>Reverse Matcher</strong> and tracks your application readiness across all services.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
            <div className="px-3 py-1.5 rounded-xl bg-white/10 text-emerald-300 border border-white/15 flex items-center gap-1.5 font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Private (Saved locally on this device only)</span>
            </div>

            <button
              onClick={handleExportData}
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors flex items-center gap-1.5 font-semibold"
              title="Download backup file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Backup</span>
            </button>

            <label className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors flex items-center gap-1.5 font-semibold cursor-pointer">
              <Upload className="w-3.5 h-3.5" />
              <span>Import Backup</span>
              <input type="file" accept=".json" onChange={handleImportData} className="hidden" />
            </label>

            <button
              onClick={resetVault}
              className="px-3 py-1.5 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/30 transition-colors flex items-center gap-1 font-semibold"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear Vault</span>
            </button>
          </div>
        </div>
      </div>

      {/* Readiness Overview Callout */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black text-xl shadow-md">
            {vaultCount}
          </div>
          <div>
            <h3 className="font-black text-emerald-950 text-base">
              You Have {vaultCount} Documents Saved in Your Vault
            </h3>
            <p className="text-xs text-emerald-800">
              {readyServices.length > 0
                ? `You have all documents ready to apply for ${readyServices.length} services immediately!`
                : 'Add Aadhaar, PAN, and address proof to unlock immediate applications.'}
            </p>
          </div>
        </div>

        {readyServices.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {readyServices.slice(0, 3).map(s => (
              <button
                key={s.id}
                onClick={() => navigateToService(s.id)}
                className="px-3 py-1 bg-white hover:bg-emerald-100 text-emerald-900 border border-emerald-300 rounded-lg text-xs font-bold transition-colors flex items-center gap-1"
              >
                <span>{s.shortName}</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Search & Category Filter Controls */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text"
              value={searchDoc}
              onChange={(e) => setSearchDoc(e.target.value)}
              placeholder="Search documents (e.g. 10th, Passport, Bill)..."
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCat === cat.id
                    ? 'bg-brand-600 text-white font-bold'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Master Document Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDocs.map((doc) => {
            const isOwned = !!userVault[doc.id];

            return (
              <div
                key={doc.id}
                onClick={() => toggleVaultDocument(doc.id)}
                className={`rounded-2xl border p-5 transition-all cursor-pointer select-none flex flex-col justify-between ${
                  isOwned
                    ? 'bg-emerald-50/40 border-emerald-400/80 shadow-xs'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2 text-brand-600">
                      {isOwned ? (
                        <CheckSquare className="w-5 h-5 text-emerald-600 fill-emerald-600/20" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-300" />
                      )}
                      <span className={`text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isOwned ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {isOwned ? 'I Have This' : 'Not In Vault'}
                      </span>
                    </div>

                    {doc.isDigiLockerCompatible && (
                      <span className="text-[10px] font-bold text-sky-700 bg-sky-50 border border-sky-200 px-1.5 py-0.5 rounded">
                        DigiLocker
                      </span>
                    )}
                  </div>

                  <h3 className={`font-extrabold text-sm ${isOwned ? 'text-slate-900' : 'text-slate-700'}`}>
                    {doc.name}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {doc.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Validity: {doc.typicalValidity}</span>
                  <span className="font-semibold text-slate-500 capitalize">{doc.category.replace('_', ' ')}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
