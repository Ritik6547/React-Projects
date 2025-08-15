import { useId, useRef, useState } from "react";
import { useNotesStore } from "../stores/useNotesStore";
import { useModalStore } from "../stores/useModalStore";
import { useNoteFormStore } from "../stores/useNoteFormStore";

export const useNoteForm = () => {
  const [errors, setErrors] = useState({});
  const titleInputRef = useRef(null);
  const id = useId();
  const [descCount, setDescCount] = useState(0);
  const addNote = useNotesStore((state) => state.addNote);
  const editNote = useNotesStore((state) => state.editNote);
  const closeModal = useModalStore((state) => state.closeModal);
  const noteInput = useNoteFormStore((state) => state.noteInput);
  const resetNoteInput = useNoteFormStore((state) => state.resetNoteInput);
  const editingId = useNoteFormStore((state) => state.editingId);
  const setEditingId = useNoteFormStore((state) => state.setEditingId);

  const validationConfig = {
    title: [
      { required: true, message: "Please enter a tilte" },
      { minLength: 2, message: "Title should be at least 2 characters long" },
    ],
    category: [{ required: true, message: "Please select a category" }],
    desc: [{ required: false, message: "" }],
  };

  const validate = (formData) => {
    const errorsData = {};

    Object.entries(formData).forEach(([label, value]) => {
      validationConfig[label].some((rule) => {
        if (rule.required && !value) {
          errorsData[label] = rule.message;
          return true;
        }

        if (rule.minLength && value.length < rule.minLength) {
          errorsData[label] = rule.message;
          return true;
        }
      });
    });

    setErrors(errorsData);
    return errorsData;
  };

  const handleAddNote = () => {
    const validateResult = validate(noteInput);
    if (Object.keys(validateResult).length) {
      return;
    }

    if (editingId) {
      editNote(noteInput, editingId);
      resetForm();
      return;
    }

    addNote(noteInput);
    resetForm();
  };

  const resetFields = () => {
    resetNoteInput();
    setErrors({});
  };

  const resetForm = () => {
    resetFields();
    setEditingId("");
    closeModal();
  };

  return {
    id,
    titleInputRef,
    errors,
    descCount,
    setDescCount,
    handleAddNote,
    resetFields,
    resetForm,
  };
};
