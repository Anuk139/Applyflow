// Web Speech API wrapper for speech recognition and synthesis

// Augment window for webkitSpeechRecognition
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export function isSpeechRecognitionSupported(): boolean {
  if (typeof window === 'undefined') return false;
  return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
}

export function isSpeechSynthesisSupported(): boolean {
  if (typeof window === 'undefined') return false;
  return 'speechSynthesis' in window;
}

export function createSpeechRecognizer(
  onResult: (text: string) => void,
  onError: (error: string) => void,
  onEnd: () => void
): any {
  if (!isSpeechRecognitionSupported()) {
    onError('Speech recognition is not supported in this browser. Please use Chrome/Edge or type your question.');
    return null;
  }

  const SpeechRecognitionClass = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognitionClass();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-IN'; // English (India) with fallback to system

  recognition.onresult = (event: any) => {
    if (event.results && event.results[0] && event.results[0][0]) {
      const transcript = event.results[0][0].transcript;
      onResult(transcript);
    }
  };

  recognition.onerror = (event: any) => {
    onError(event.error || 'Speech recognition encountered an issue');
  };

  recognition.onend = () => {
    onEnd();
  };

  return recognition;
}

export function speakText(text: string, onEnd?: () => void): void {
  if (!isSpeechSynthesisSupported()) return;

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  // Strip excessive markdown / asterisks for clean voice output
  const cleanText = text
    .replace(/[#*`_~]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.rate = 0.95;
  utterance.pitch = 1.0;
  utterance.lang = 'en-IN';

  if (onEnd) {
    utterance.onend = onEnd;
    utterance.onerror = onEnd;
  }

  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking(): void {
  if (isSpeechSynthesisSupported()) {
    window.speechSynthesis.cancel();
  }
}
