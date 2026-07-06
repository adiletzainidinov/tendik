"use client";

import { create } from "zustand";
import type { RegistrationForm } from "@/types/registration";

const EMPTY_FORM: RegistrationForm = {
  parentName: "",
  address: "",
};

type RegistrationState = {
  isOpen: boolean;
  draft: RegistrationForm;
  open: () => void;
  close: () => void;
  updateDraft: (patch: Partial<RegistrationForm>) => void;
  resetDraft: () => void;
};

export const useRegistrationStore = create<RegistrationState>((set) => ({
  isOpen: false,
  draft: EMPTY_FORM,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  updateDraft: (patch) =>
    set((state) => ({ draft: { ...state.draft, ...patch } })),
  resetDraft: () => set({ draft: EMPTY_FORM }),
}));
