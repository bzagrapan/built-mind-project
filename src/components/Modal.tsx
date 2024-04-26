import React, { useState } from "react";
import Modal from "react-modal";

export interface IModal {
  content: React.ReactNode;
  isOpen: boolean;
  handleCLose: Function;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "1px solid #a52a2a",
    maxWidth: "350px",
    padding: "25px",
    overflow: "auto",
    maxHeight: "600px",
  },
};

const ModalComponent: React.FC<IModal> = ({ content, isOpen, handleCLose }) => {
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={() => handleCLose()}
      shouldCloseOnOverlayClick
      ariaHideApp={false}
    >
      <div
        className="text-red-500 font-bold cursor-pointer absolute top-1 right-2"
        onClick={() => handleCLose()}
      >
        X
      </div>
      {content}
    </Modal>
  );
};

export default ModalComponent;
