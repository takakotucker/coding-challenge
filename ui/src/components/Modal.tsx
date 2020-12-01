import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import { ClientDocumentSummary } from "../../types";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  document: ClientDocumentSummary
};

const Modal: React.FC<ModalProps> = ({ open, onClose, document }: ModalProps) => (
  <Dialog onClose={onClose} open={open}>
    <DialogTitle>
      {document.title}
    </DialogTitle>
  </Dialog>
);

export default Modal;
