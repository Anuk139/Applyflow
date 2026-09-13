import React, { useState, useEffect, useRef } from 'react';
import { 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  X, 
  Send, 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle,
  ChevronRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { 
  isSpeechRecognitionSupported, 
  createSpeechRecognizer, 
  speakText, 
  stopSpeaking 
} from '../../utils/speech';
import { ALL_SERVICES, getServiceById } from '../../data/services';
import { calculateServiceReadiness } from '../../utils/readiness';

export const VoiceAssistantModal: React.FC = () => {
  const { 
    isVoiceAssistantOpen, 
    closeVoiceAssistant, 
    userVault, 
    navigateToService 
  } = useApp();

  const [isListening, setIsListening] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>('');
  const [messages, setMessages] = useState<Array<{
    sender: 'user' | 'assistant';
    text: string;
    serviceMatch?: string;
    missingDocs?: string[];
  }>>([
    {
      sender: 'assistant',
      text: "Hello! I am your Smart Document Assistant. You can speak or type what you want to apply for (e.g. 'I want to apply for PAN Card', 'What documents for Passport?', 'How to register Voter ID?')."
    }
  ]);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  const recognitionRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Clean up speech on close
  useEffect(() => {
    if (!isVoiceAssistantOpen) {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
      stopSpeaking();
      setIsListening(false);
      setIsSpeaking(false);
    }
  }, [isVoiceAssistantOpen]);

  if (!isVoiceAssistantOpen) return null;

  const toggleListening = () => {
    if (isListening) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsListening(false);
    } else {
      stopSpeaking();
      setIsSpeaking(false);

      if (!isSpeechRecognitionSupported()) {
        alert('Voice speech recognition is not supported in this browser. You can type your question in the text box below.');
        return;
      }

      const recognizer = createSpeechRecognizer(
        (transcript) => {
          setInputText(transcript);
          handleUserQuery(transcript);
          setIsListening(false);
        },
        (error) => {
          console.warn('Speech recognition error:', error);
          setIsListening(false);
        },
        () => {
          setIsListening(false);
        }
      );

      if (recognizer) {
        recognitionRef.current = recognizer;
        try {
          recognizer.start();
          setIsListening(true);
        } catch (e) {
          console.error(e);
          setIsListening(false);
        }
      }
    }
  };

  const handleUserQuery = (query: string) => {
    const cleanQuery = query.toLowerCase();
    if (!cleanQuery.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { sender: 'user', text: query }]);
    setInputText('');

    // Match query against services
    let matchedService = ALL_SERVICES.find(s => 
      cleanQuery.includes(s.shortName.toLowerCase()) ||
      cleanQuery.includes(s.id.toLowerCase()) ||
      (s.id === 'pan-card' && (cleanQuery.includes('pan') || cleanQuery.includes('tax'))) ||
      (s.id === 'aadhaar-card' && (cleanQuery.includes('aadhaar') || cleanQuery.includes('aadhar') || cleanQuery.includes('uidai'))) ||
      (s.id === 'voter-id' && (cleanQuery.includes('voter') || cleanQuery.includes('epic') || cleanQuery.includes('election'))) ||
      (s.id === 'passport-seva' && cleanQuery.includes('passport')) ||
      (s.id === 'driving-license' && (cleanQuery.includes('driving') || cleanQuery.includes('licence') || cleanQuery.includes('license') || cleanQuery.includes('dl') || cleanQuery.includes('learner'))) ||
      (s.id === 'bank-savings-account' && (cleanQuery.includes('bank') || cleanQuery.includes('savings') || cleanQuery.includes('account'))) ||
      (s.id === 'national-scholarship-portal' && (cleanQuery.includes('scholarship') || cleanQuery.includes('nsp') || cleanQuery.includes('college grant'))) ||
      (s.id === 'epfo-uan-service' && (cleanQuery.includes('pf') || cleanQuery.includes('epfo') || cleanQuery.includes('uan') || cleanQuery.includes('provident fund')))
    );

    let assistantResponse = '';
    let serviceIdMatch: string | undefined = undefined;
    let missingList: string[] = [];

    if (matchedService) {
      serviceIdMatch = matchedService.id;
      const readiness = calculateServiceReadiness(matchedService, userVault);

      if (readiness.status === 'ready') {
        assistantResponse = `Great news! According to your Document Vault, you already have 100% of the documents required for ${matchedService.name}. You can proceed straight to the visual step-by-step application guide!`;
      } else {
        const missingTitles = readiness.missingRequirements.map(m => m.requirementTitle);
        missingList = missingTitles;
        assistantResponse = `For ${matchedService.name}, you are ${readiness.readinessScore}% prepared. You still need to arrange: ${missingTitles.join(', ')}. Standard government fee is ${matchedService.standardFee} and takes ${matchedService.estimatedDuration}.`;
      }
    } else {
      assistantResponse = "I can guide you through applications for Aadhaar, PAN Card, Voter ID, Indian Passport, Driving Licence, Bank Savings Account, NSP Scholarships, and EPFO PF withdrawal. Which one would you like to explore?";
    }

    setMessages(prev => [
      ...prev,
      {
        sender: 'assistant',
        text: assistantResponse,
        serviceMatch: serviceIdMatch,
        missingDocs: missingList
      }
    ]);

    // Speak aloud response
    speakText(assistantResponse);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleUserQuery(inputText);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Assistant Header */}
        <div className="p-4 bg-gradient-to-r from-purple-700 via-indigo-700 to-brand-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm leading-tight">
                Smart Voice & AI Assistant
              </h3>
              <p className="text-[11px] text-purple-200">
                Voice Input • Text-to-Speech Guidance • Requirement Matching
              </p>
            </div>
          </div>

          <button
            onClick={closeVoiceAssistant}
            className="p-1.5 rounded-full hover:bg-white/20 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Conversation Message Feed */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed shadow-xs ${
                  msg.sender === 'user'
                    ? 'bg-brand-600 text-white rounded-br-none'
                    : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'
                }`}
              >
                <p>{msg.text}</p>

                {/* Missing docs tag if present */}
                {msg.missingDocs && msg.missingDocs.length > 0 && (
                  <div className="mt-2 pt-2 border-t border-slate-100 text-xs">
                    <span className="font-bold text-amber-900 block mb-1">Items to arrange:</span>
                    <ul className="space-y-0.5 text-slate-600">
                      {msg.missingDocs.map((doc, dIdx) => (
                        <li key={dIdx}>• {doc}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Link to service guide */}
                {msg.serviceMatch && (
                  <div className="mt-3 pt-2 border-t border-slate-100">
                    <button
                      onClick={() => {
                        navigateToService(msg.serviceMatch!);
                        closeVoiceAssistant();
                      }}
                      className="w-full py-1.5 px-3 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <span>Open Step-by-Step Visual Guide</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Voice Recording / Input Controls */}
        <div className="p-4 bg-white border-t border-slate-200 space-y-3">
          
          {/* Wave animation while listening */}
          {isListening && (
            <div className="flex items-center justify-center gap-2 py-1 text-xs text-purple-700 font-bold animate-pulse">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping" />
              <span>Listening... Speak your question clearly into the microphone</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            
            {/* Voice Mic Button */}
            <button
              type="button"
              onClick={toggleListening}
              className={`p-3 rounded-xl transition-all ${
                isListening
                  ? 'bg-red-600 text-white shadow-lg shadow-red-500/30 animate-pulse'
                  : 'bg-purple-100 text-purple-700 hover:bg-purple-200 border border-purple-200'
              }`}
              title={isListening ? 'Stop Listening' : 'Speak your query'}
            >
              {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </button>

            {/* Text Input Fallback */}
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={isListening ? "Listening..." : "Type or speak: 'What do I need for PAN?'"}
              className="flex-1 bg-slate-100 border border-transparent rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-brand-500 outline-none transition-all"
            />

            {/* Send Button */}
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 disabled:opacity-40 text-white transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Quick suggested chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px] scrollbar-none">
            <span className="text-slate-400 font-semibold flex-shrink-0">Try asking:</span>
            {['I want to apply for PAN', 'Documents for Passport', 'Voter ID Form 6', 'Video KYC Bank Account'].map((chip, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleUserQuery(chip)}
                className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 whitespace-nowrap transition-colors"
              >
                {chip}
              </button>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
