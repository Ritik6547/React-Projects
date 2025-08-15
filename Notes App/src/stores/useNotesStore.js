import { create } from "zustand";
import { getFormattedDate } from "../utils/getFormattedDate";
import { createJSONStorage, persist } from "zustand/middleware";

export const useNotesStore = create(
  persist(
    (set) => ({
      notes: [],
      addNote: (noteObj) => {
        set((state) => ({
          notes: [
            ...state.notes,
            {
              ...noteObj,
              id: crypto.randomUUID(),
              createdAt: getFormattedDate(),
              completed: false,
            },
          ],
        }));
      },
      deleteNote: (id) => {
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== id),
        }));
      },
      toggleNote: (id) => {
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id ? { ...note, completed: !note.completed } : note,
          ),
        }));
      },
      editNote: (noteObj, id) => {
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id ? { ...note, ...noteObj } : note,
          ),
        }));
      },
    }),
    {
      name: "allNotes",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
