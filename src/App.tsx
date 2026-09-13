import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { SafetyBanner } from './components/layout/SafetyBanner';
import { Footer } from './components/layout/Footer';
import { HomeView } from './components/home/HomeView';
import { ReverseMatcher } from './components/matcher/ReverseMatcher';
import { MyDocumentVault } from './components/vault/MyDocumentVault';
import { ApplicationTrackerView } from './components/planner/ApplicationTrackerView';
import { ServiceDetailView } from './components/service-detail/ServiceDetailView';
import { VoiceAssistantModal } from './components/voice/VoiceAssistantModal';

const MainContent: React.FC = () => {
  const { activeTab, selectedServiceId } = useApp();

  return (
    <main className="flex-1">
      {activeTab === 'home' && <HomeView />}
      {activeTab === 'matcher' && <ReverseMatcher />}
      {activeTab === 'vault' && <MyDocumentVault />}
      {activeTab === 'tracker' && <ApplicationTrackerView />}
      {activeTab === 'service_detail' && selectedServiceId && (
        <ServiceDetailView serviceId={selectedServiceId} />
      )}
    </main>
  );
};

export function App() {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-brand-500 selection:text-white">
        <SafetyBanner />
        <Navbar />
        <MainContent />
        <Footer />
        <VoiceAssistantModal />
      </div>
    </AppProvider>
  );
}

export default App;
