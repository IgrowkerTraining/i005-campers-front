import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  campingName: string;
  pricePerNight: string;
  onConfirm: (startDate: string, endDate: string) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  campingName,
  pricePerNight,
  onConfirm,
}) => {
  const toast = useToast();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = () => {
    if (!startDate || !endDate) {
      toast({
        title: 'Error',
        description: 'Por favor, selecciona las fechas de inicio y fin.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    if (end <= start) {
      toast({
        title: 'Error',
        description: 'La fecha de fin debe ser posterior a la fecha de inicio.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    onConfirm(startDate, endDate);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size={{ base: 'xs', md: 'md' }}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Confirmar Reserva - {campingName}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            <Text>Precio por noche: {pricePerNight}</Text>
            <FormControl isRequired>
              <FormLabel>Fecha de Inicio</FormLabel>
              <Input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Fecha de Fin</FormLabel>
              <Input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </FormControl>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancelar
          </Button>
          <Button colorScheme="teal" onClick={handleSubmit}>
            Confirmar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};