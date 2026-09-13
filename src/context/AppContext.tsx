import React, { createContext, useContext, useState, useEffect } from 'react';
import { ApplicationTrackerItem } from '../types/user';
import { 
  loadUserVault, 
  saveUserVault, 
  loadApplicationsTracker, 
  saveApplicationsTracker 
} from '../utils/storage';

interface AppContextType {
  // Navigation & View State
  activeTab: 'home' | 'matcher' | 'vault' | 'tracker' | 'service_detail';
  setActiveTab: (tab: 'home' | 'matcher' | 'vault' | 'tracker' | 'service_detail') => void;
  selectedServiceId: string | null;
  setSelectedServiceId: (id: string | null) => void;
  navigateToService: (serviceId: string) => void;
  
  // Search & Filtering
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;

  // Document Vault State
  userVault: Record<string, boolean>;
  toggleVaultDocument: (docId: string) => void;
  setVaultDocument: (docId: string, hasDoc: boolean) => void;
  resetVault: () => void;
  vaultCount: number;

  // Application Tracker State
  applications: ApplicationTrackerItem[];
  addApplication: (serviceId: string, serviceName: string, category: string) => ApplicationTrackerItem;
  updateApplication: (id: string, updates: Partial<ApplicationTrackerItem>) => void;
  deleteApplication: (id: string) => void;
  getApplicationByServiceId: (serviceId: string) => ApplicationTrackerItem | undefined;

  // Voice Assistant Modal
  isVoiceAssistantOpen: boolean;
  openVoiceAssistant: () => void;
  closeVoiceAssistant: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<'home' | 'matcher' | 'vault' | 'tracker' | 'service_detail'>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isVoiceAssistantOpen, setIsVoiceAssistantOpen] = useState<boolean>(false);

  // Load persistent states
  const [userVault, setUserVault] = useState<Record<string, boolean>>(() => loadUserVault());
  const [applications, setApplications] = useState<ApplicationTrackerItem[]>(() => loadApplicationsTracker());

  // Save changes to localStorage
  useEffect(() => {
    saveUserVault(userVault);
  }, [userVault]);

  useEffect(() => {
    saveApplicationsTracker(applications);
  }, [applications]);

  const toggleVaultDocument = (docId: string) => {
    setUserVault(prev => ({
      ...prev,
      [docId]: !prev[docId]
    }));
  };

  const setVaultDocument = (docId: string, hasDoc: boolean) => {
    setUserVault(prev => ({
      ...prev,
      [docId]: hasDoc
    }));
  };

  const resetVault = () => {
    setUserVault({});
  };

  const vaultCount = Object.values(userVault).filter(Boolean).length;

  const addApplication = (serviceId: string, serviceName: string, category: string): ApplicationTrackerItem => {
    const existing = applications.find(a => a.serviceId === serviceId);
    if (existing) {
      return existing;
    }
    const newItem: ApplicationTrackerItem = {
      id: 'app_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
      serviceId,
      serviceName,
      category,
      status: 'preparing',
      completedChecklistIds: [],
      lastUpdated: new Date().toISOString()
    };
    setApplications(prev => [newItem, ...prev]);
    return newItem;
  };

  const updateApplication = (id: string, updates: Partial<ApplicationTrackerItem>) => {
    setApplications(prev => prev.map(item => {
      if (item.id === id) {
        return {
          ...item,
          ...updates,
          lastUpdated: new Date().toISOString()
        };
      }
      return item;
    }));
  };

  const deleteApplication = (id: string) => {
    setApplications(prev => prev.filter(item => item.id !== id));
  };

  const getApplicationByServiceId = (serviceId: string) => {
    return applications.find(a => a.serviceId === serviceId);
  };

  const navigateToService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setActiveTab('service_detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openVoiceAssistant = () => setIsVoiceAssistantOpen(true);
  const closeVoiceAssistant = () => setIsVoiceAssistantOpen(false);

  return (
    <AppContext.Provider value={{
      activeTab,
      setActiveTab,
      selectedServiceId,
      setSelectedServiceId,
      navigateToService,
      searchQuery,
      setSearchQuery,
      selectedCategory,
      setSelectedCategory,
      userVault,
      toggleVaultDocument,
      setVaultDocument,
      resetVault,
      vaultCount,
      applications,
      addApplication,
      updateApplication,
      deleteApplication,
      getApplicationByServiceId,
      isVoiceAssistantOpen,
      openVoiceAssistant,
      closeVoiceAssistant
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
