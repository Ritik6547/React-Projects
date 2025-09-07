import { toast } from "react-toastify";

export const showToast = (id, type, message) => {
  if (!toast.isActive(id)) {
    toast[type](message, {
      toastId: id,
      autoClose: 3000,
    });
  } else {
    toast.update(id, { autoClose: 3000 });
  }
};
