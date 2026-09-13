import { UserDocumentItem, ApplicationTrackerItem } from '../types/user';

const VAULT_STORAGE_KEY = 'smart_doc_assistant_vault_v1';
const TRACKER_STORAGE_KEY = 'smart_doc_assistant_tracker_v1';
const CHECKLIST_STORAGE_PREFIX = 'smart_doc_checklist_';

export function loadUserVault(): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(VAULT_STORAGE_KEY);
    if (!raw) {
      // Default common starter pack
      return {
        'aadhaar_card': true,
        'mobile_linked_aadhaar': true,
        'passport_photo': true
      };
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load user vault from localStorage', e);
    return {};
  }
}

export function saveUserVault(vault: Record<string, boolean>): void {
  try {
    localStorage.setItem(VAULT_STORAGE_KEY, JSON.stringify(vault));
  } catch (e) {
    console.error('Failed to save user vault to localStorage', e);
  }
}

export function loadApplicationsTracker(): ApplicationTrackerItem[] {
  try {
    const raw = localStorage.getItem(TRACKER_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load application tracker from localStorage', e);
    return [];
  }
}

export function saveApplicationsTracker(items: ApplicationTrackerItem[]): void {
  try {
    localStorage.setItem(TRACKER_STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
    console.error('Failed to save application tracker to localStorage', e);
  }
}

export function loadServiceChecklist(serviceId: string): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(CHECKLIST_STORAGE_PREFIX + serviceId);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch (e) {
    return {};
  }
}

export function saveServiceChecklist(serviceId: string, checklist: Record<string, boolean>): void {
  try {
    localStorage.setItem(CHECKLIST_STORAGE_PREFIX + serviceId, JSON.stringify(checklist));
  } catch (e) {
    console.error('Failed to save checklist to localStorage', e);
  }
}
