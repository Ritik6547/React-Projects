import { create } from "zustand";

export const useNoteFormStore = create((set) => ({
  noteInput: { title: "", category: "", desc: "" },
  editingId: "",
  setNoteInput: (input) => set((state) => ({ ...state, noteInput: input })),
  resetNoteInput: () =>
    set((state) => ({
      ...state,
      noteInput: { title: "", category: "", desc: "" },
    })),
  setEditingId: (id) => set((state) => ({ ...state, editingId: id })),
}));
