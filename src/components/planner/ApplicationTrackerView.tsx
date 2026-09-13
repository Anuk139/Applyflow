import React, { useState } from 'react';
import { 
  BookmarkCheck, 
  Plus, 
  ExternalLink, 
  Trash2, 
  Edit3, 
  Check, 
  Clock, 
  Calendar, 
  Building, 
  ChevronRight,
  AlertCircle
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { getServiceById, ALL_SERVICES } from '../../data/services';

export const ApplicationTrackerView: React.FC = () => {
  const { 
    applications, 
    updateApplication, 
    deleteApplication, 
    navigateToService, 
    setActiveTab, 
    addApplication 
  } = useApp();

  const [editingAppId, setEditingAppId] = useState<string | null>(null);
  const [refNumInput, setRefNumInput] = useState<string>('');
  const [statusInput, setStatusInput] = useState<any>('preparing');
  const [notesInput, setNotesInput] = useState<string>('');
  const [appointmentDateInput, setAppointmentDateInput] = useState<string>('');

  const handleStartEdit = (app: any) => {
    setEditingAppId(app.id);
    setRefNumInput(app.referenceNumber || '');
    setStatusInput(app.status);
    setNotesInput(app.notes || '');
    setAppointmentDateInput(app.appointmentDate || '');
  };

  const handleSaveEdit = (appId: string) => {
    updateApplication(appId, {
      referenceNumber: refNumInput,
      status: statusInput,
      notes: notesInput,
      appointmentDate: appointmentDateInput
    });
    setEditingAppId(null);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'preparing':
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700">1. Preparing Docs</span>;
      case 'submitted':
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800">2. Form Submitted Online</span>;
      case 'appointment_booked':
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800">3. Appointment Booked</span>;
      case 'in_verification':
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">4. Under Verification</span>;
      case 'approved_downloaded':
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">5. Approved / Downloaded</span>;
      case 'rejected':
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-800">Rejected / Action Needed</span>;
      default:
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700">{status}</span>;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-amber-950 via-slate-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-amber-900/30">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
            <BookmarkCheck className="w-3.5 h-3.5 text-amber-400" />
            Application Lifecycle & Milestone Tracker
          </div>

          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            My Applications Planner
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Keep track of your active government, banking, and scholarship applications in one unified private dashboard. Save acknowledgement codes (ARN/URN/EID), appointment schedules, and track progress without losing your reference receipts.
          </p>
        </div>
      </div>

      {/* Applications List */}
      {applications.length === 0 ? (
        <div className="bg-white rounded-3xl border border-dashed border-slate-300 p-12 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
            <BookmarkCheck className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="font-extrabold text-lg text-slate-900">
              No Applications in Your Tracker Yet
            </h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              Start by choosing a service from our catalog (such as PAN Card, Aadhaar, Voter ID, or Passport) and click "Add to My Application Planner".
            </p>
          </div>
          <button
            onClick={() => setActiveTab('home')}
            className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold transition-colors inline-flex items-center gap-2"
          >
            <span>Explore Services Catalog</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {applications.map((app) => {
            const service = getServiceById(app.serviceId);
            const isEditing = editingAppId === app.id;

            return (
              <div 
                key={app.id} 
                className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4 transition-all"
              >
                {/* Top Row: Title, Status, and Controls */}
                <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 pb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                        {app.category}
                      </span>
                      <span className="text-xs text-slate-300">•</span>
                      <span className="text-xs text-slate-400">
                        Last updated: {new Date(app.lastUpdated).toLocaleDateString('en-IN')}
                      </span>
                    </div>
                    <h3 className="font-black text-xl text-slate-900 mt-1">
                      {app.serviceName}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    {!isEditing && getStatusBadge(app.status)}
                    
                    {!isEditing ? (
                      <button
                        onClick={() => handleStartEdit(app)}
                        className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
                        title="Edit Application Details"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleSaveEdit(app.id)}
                        className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1 shadow-sm"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>Save</span>
                      </button>
                    )}

                    <button
                      onClick={() => deleteApplication(app.id)}
                      className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                      title="Remove from Tracker"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Body Details: Reference No & Notes */}
                {isEditing ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Application Status
                      </label>
                      <select
                        value={statusInput}
                        onChange={(e) => setStatusInput(e.target.value)}
                        className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2 font-medium"
                      >
                        <option value="preparing">1. Preparing Docs</option>
                        <option value="submitted">2. Form Submitted Online</option>
                        <option value="appointment_booked">3. Appointment Booked</option>
                        <option value="in_verification">4. Under Verification</option>
                        <option value="approved_downloaded">5. Approved / Downloaded</option>
                        <option value="rejected">Rejected / Action Needed</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Acknowledgement / ARN / URN
                      </label>
                      <input
                        type="text"
                        value={refNumInput}
                        onChange={(e) => setRefNumInput(e.target.value)}
                        placeholder="e.g. 881029384729104"
                        className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2 font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Appointment Date
                      </label>
                      <input
                        type="date"
                        value={appointmentDateInput}
                        onChange={(e) => setAppointmentDateInput(e.target.value)}
                        className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Personal Notes
                      </label>
                      <input
                        type="text"
                        value={notesInput}
                        onChange={(e) => setNotesInput(e.target.value)}
                        placeholder="e.g. Carry 2 passport photos"
                        className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-400 block font-semibold mb-0.5">
                        Acknowledgement / Ref Number:
                      </span>
                      <span className="font-mono font-bold text-sm text-slate-900">
                        {app.referenceNumber || 'Not entered yet'}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-400 block font-semibold mb-0.5">
                        Appointment Schedule:
                      </span>
                      <span className="font-bold text-slate-900 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {app.appointmentDate || 'No appointment scheduled'}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-400 block font-semibold mb-0.5">
                        Personal Notes:
                      </span>
                      <span className="text-slate-700 italic">
                        {app.notes || 'No notes added'}
                      </span>
                    </div>
                  </div>
                )}

                {/* Bottom Action Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <button
                    onClick={() => navigateToService(app.serviceId)}
                    className="text-xs font-bold text-brand-600 hover:text-brand-800 transition-colors flex items-center gap-1"
                  >
                    <span>View Preparation & Visual Steps</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  {service?.trackingGuide?.directTrackingUrl && (
                    <a
                      href={service.trackingGuide.directTrackingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors flex items-center gap-1.5"
                    >
                      <span>Check Status on Official Portal</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
