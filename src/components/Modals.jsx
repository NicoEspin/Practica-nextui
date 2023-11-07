import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

const Modals = ({ proyecto, isOpen, onClose }) => {
  const modalSize = proyecto.images.length <= 2 ? "2xl" : "full";
  return (
    <Modal
      className="bg-black "
      variant="dark"
      scrollBehavior="inside"
      backdrop="blur"
      size={modalSize}
      isOpen={isOpen}
      onOpenChange={onClose}
      isDismissable={true} // Puedes cerrar el modal con el botón "Close"
    >
      <ModalContent>
        <ModalHeader className="text-2xl font-playfair text-red">
          {proyecto.title}
        </ModalHeader>
        <ModalBody className="text-lg">
          <p className="font-opensans">{proyecto.description}</p>
          <div className="flex flex-wrap gap-4 mt-4">
            {proyecto.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={proyecto.title}
                className="rounded-lg"
              />
            ))}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onClick={onClose}>
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Modals;
