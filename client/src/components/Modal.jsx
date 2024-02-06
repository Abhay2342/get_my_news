import React from "react";
import { Dialog, DialogContent, Typography, Button } from "@mui/material";

const Modal = ({ onClose, modalData, modalButton }) => {
  return (
    <Dialog open={true} onClose={onClose}>
      <DialogContent>
        <Typography variant="body1">{modalData}</Typography>
        <Button
          onClick={onClose}
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
        >
          {modalButton}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
