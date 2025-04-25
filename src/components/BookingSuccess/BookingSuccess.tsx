// src/components/BookingSuccess/BookingSuccess.tsx
import React from 'react';
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Text,
} from '@chakra-ui/react';

interface BookingSuccessProps {
  campingName: string;
  startDate: string;
  endDate: string;
  onClose: () => void;
}

export const BookingSuccess: React.FC<BookingSuccessProps> = ({
  campingName,
  startDate,
  endDate,
  onClose,
}) => {
  const isOwner = startDate === 'N/A' && endDate === 'N/A'; // Detectamos si es un dueño

  return (
    <Modal isOpen={true} onClose={onClose} isCentered size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {isOwner ? '¡Camping Publicado!' : '¡Reserva Confirmada!'}
        </ModalHeader>
        <ModalBody>
          <Box textAlign="center">
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              {campingName}
            </Text>
            {isOwner ? (
              <Text>Tu camping ha sido publicado correctamente.</Text>
            ) : (
              <>
                <Text>Fecha de Inicio: {startDate}</Text>
                <Text>Fecha de Fin: {endDate}</Text>
                <Text mt={2}>¡Gracias por tu reserva!</Text>
              </>
            )}
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" onClick={onClose}>
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};