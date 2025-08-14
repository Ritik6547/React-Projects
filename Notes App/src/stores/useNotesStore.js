import { create } from "zustand";
import { getFormattedDate } from "../utils/getFormattedDate";

export const useNotesStore = create((set) => ({
  notes: [],
  addNote: (noteObj) => {
    set((state) => ({
      notes: [
        ...state.notes,
        {
          ...noteObj,
          id: crypto.randomUUID(),
          createdAt: getFormattedDate(),
        },
      ],
    }));
  },
}));
