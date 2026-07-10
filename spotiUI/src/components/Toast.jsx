import { useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import ToastContext from "../context/ToastContext";
const Toast = ({ children }) => {
  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const showToaster = (message, severity = "success") => {
    setToast({
      open: true,
      message,
      severity,
    });
  };


  const handleClose = (event, reason) => {
    setToast((prev) => ({
      ...prev,
      open: false,
    }));
  };
  return (
    <ToastContext.Provider value={{ showToaster }}>
      {children}
      <Snackbar
        open={toast.open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert onClose={handleClose} severity={toast.severity} >
          {toast.message}
        </Alert>
      </Snackbar>
    </ToastContext.Provider>
  );
};





export default Toast;
