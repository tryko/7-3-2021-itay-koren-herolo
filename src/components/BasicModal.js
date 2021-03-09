import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const BasicModal = ({ isOpen, onClose, onSubmit, children }) => {
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Item</ModalHeader>
          <ModalCloseButton fontSize="10px" />

          <ModalBody>{children}</ModalBody>

          <ModalFooter justifyContent="space-between">
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default BasicModal;
