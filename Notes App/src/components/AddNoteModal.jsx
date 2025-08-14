import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useNotesStore } from "../stores/useNotesStore";

const AddNoteModal = ({ isModalOpen, setIsModalOpen }) => {
  const [noteInput, setNoteInput] = useState({
    title: "",
    category: "",
    desc: "",
  });
  const [errors, setErrors] = useState({});
  const titleInputRef = useRef(null);
  const id = useId();
  const [descCount, setDescCount] = useState(0);
  const addNote = useNotesStore((state) => state.addNote);

  const closeModal = () => {
    setIsModalOpen(false);
  };

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

    addNote(noteInput);
    setNoteInput({
      title: "",
      category: "",
      desc: "",
    });
    setErrors({});
    closeModal();
  };

  const handelCancel = () => {
    setNoteInput({
      title: "",
      category: "",
      desc: "",
    });
    setErrors({});
    closeModal();
  };

  useEffect(() => {
    if (!isModalOpen) return;

    if (isModalOpen && titleInputRef.current) {
      titleInputRef.current.focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return createPortal(
    <div
      onClick={closeModal}
      className={`${isModalOpen ? "flex" : "hidden"} fixed inset-0 items-center justify-center bg-black/40`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex h-[470px] w-[616px] flex-col gap-7 rounded-lg bg-white px-8 py-6 text-gray-900/85 shadow-md"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900/85">Add note</h2>
          <i
            onClick={closeModal}
            className="fa-solid fa-xmark w-10 cursor-pointer text-gray-500"
          ></i>
        </div>

        <div className="flex items-center justify-between gap-6">
          <div className="relative flex flex-1 flex-col gap-1">
            <label
              className="font-semibold tracking-wide"
              htmlFor={`${id}-title`}
            >
              Title
            </label>
            <input
              className="rounded-md border border-black/15 bg-[#EEEEEE] p-3 outline-none placeholder:tracking-wide placeholder:text-gray-900/60 focus:border-blue-400"
              id={`${id}-title`}
              type="text"
              placeholder="Add title"
              ref={titleInputRef}
              value={noteInput.title}
              onChange={(e) =>
                setNoteInput({ ...noteInput, title: e.target.value })
              }
            />
            {errors?.title && (
              <p className="absolute -bottom-5 text-sm text-red-500">
                {errors.title}
              </p>
            )}
          </div>

          <div className="relative flex flex-1 flex-col gap-1">
            <label
              className="font-semibold tracking-wide"
              htmlFor={`${id}-category`}
            >
              Category
            </label>
            <select
              className="rounded-md border border-black/15 bg-[#EEEEEE] p-3 outline-none focus:border-blue-400"
              id={`${id}-category`}
              value={noteInput.category}
              onChange={(e) =>
                setNoteInput({ ...noteInput, category: e.target.value })
              }
            >
              <option hidden value="">
                Select Category
              </option>
              <option value="Personal">Personal</option>
              <option value="Home">Home</option>
              <option value="Business">Business</option>
            </select>
            {errors?.category && (
              <p className="absolute -bottom-5 text-sm text-red-500">
                {errors.category}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <label
              className="font-semibold tracking-wide"
              htmlFor={`${id}-description`}
            >
              Description{" "}
              <span className="text-sm text-gray-900/60">(optional)</span>
            </label>
            <p className="text-sm text-gray-900/60">{descCount}/200</p>
          </div>
          <textarea
            className="h-[150px] rounded-md border border-black/15 bg-[#EEEEEE] p-3 outline-none placeholder:tracking-wide placeholder:text-gray-900/60 focus:border-blue-400"
            id={`${id}-description`}
            placeholder="Add description"
            value={noteInput.desc}
            onChange={(e) => {
              setNoteInput({ ...noteInput, desc: e.target.value });
              setDescCount((prevCount) => prevCount + 1);
            }}
          ></textarea>
        </div>

        <div className="flex justify-end">
          <div className="">
            <button
              onClick={handelCancel}
              className="mr-8 cursor-pointer text-base font-medium tracking-widest text-gray-600"
            >
              Cancel
            </button>
            <button
              onClick={handleAddNote}
              className="cursor-pointer rounded-3xl bg-[#42A5F5] px-6 py-3 font-medium tracking-wider text-white transition delay-150 hover:bg-[#2196F3]"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("add-note-modal"),
  );
};

export default AddNoteModal;
