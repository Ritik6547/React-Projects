import { useEffect } from "react";

export function useEscapeClose(isOpen, onClose, titleInputRef) {
  useEffect(() => {
    if (!isOpen) return;
    if (titleInputRef.current) {
      titleInputRef.current.focus();
    }
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);
}
