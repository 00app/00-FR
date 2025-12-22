'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface SettingsState {
  drivingSafe: boolean;
  narratorVoice: string;
  dialogueVoice: string;
  miniMode: boolean;
  isParked: boolean;
  setDrivingSafe: (value: boolean) => void;
  setNarratorVoice: (voice: string) => void;
  setDialogueVoice: (voice: string) => void;
  setMiniMode: (value: boolean) => void;
  setIsParked: (value: boolean) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      drivingSafe: true,
      narratorVoice: 'camille',
      dialogueVoice: 'camille',
      miniMode: false,
      isParked: false,
      setDrivingSafe: (value) => set({ drivingSafe: value }),
      setNarratorVoice: (voice) => set({ narratorVoice: voice }),
      setDialogueVoice: (voice) => set({ dialogueVoice: voice }),
      setMiniMode: (value) => set({ miniMode: value }),
      setIsParked: (value) => set({ isParked: value }),
    }),
    {
      name: '00fr-settings',
      storage: createJSONStorage(() => {
        if (typeof window !== 'undefined') {
          return localStorage;
        }
        return undefined as any;
      }),
    }
  )
);

