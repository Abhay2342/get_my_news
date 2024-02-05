import React from "react";
import { Dialog, DialogContent, Typography, Button } from "@mui/material";

const Modal = ({ onClose }) => {
  return (
    <Dialog open={true} onClose={onClose}>
      <DialogContent>
        <Typography variant="body1">
          You are not signed in. Redirecting to the login page...
        </Typography>
        <Button
          onClick={onClose}
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
        >
          Close
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
