import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  useToast,
  HStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface BookingGuestProps {
  campingName: string;
  pricePerNight: number;
}

export const BookingGuest: React.FC<BookingGuestProps> = ({
  campingName,
  pricePerNight,
}) => {
  const navigate = useNavigate();
  const toast = useToast();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  // Calcular el número de noches y el precio total
  const calculateTotalPrice = () => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return nights > 0 ? nights * pricePerNight * numberOfGuests : 0;
  };

  const handleReserve = () => {
    // Validar fechas
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


    // Validar número de personas
    if (numberOfGuests < 1) {
      toast({
        title: 'Error',
        description: 'El número de personas debe ser al menos 1.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }


    // Calcular el precio total
    const totalPrice = calculateTotalPrice();

    // Mostrar mensaje de éxito y simular el proceso de reserva
    toast({
      title: 'Reserva Exitosa',
      description: 'Tu reserva ha sido confirmada. Serás redirigido a la página de búsqueda.',

      status: 'success',
      duration: 3000,
      isClosable: true,
    });

    setTimeout(() => {
      // Redirigir a /search
      navigate('/search');
    }, 3000);
  };

  return (
    <Box
      maxW={{ base: 'xs', md: 'sm' }} 
      w="100%"
      mx="auto"
      mt={{ base: 4, md: 8 }}
      p={{ base: 4, md: 6 }}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
    >
      <Text textAlign="center" fontSize="xl" fontWeight="bold" mb={4}>
        Reserva
      </Text>
      <Text textAlign="center" fontSize="sm" color="gray.600" mb={6}>
        Seleccioná una fecha disponible para tu reserva
      </Text>

      <VStack spacing={4} align="stretch">
        {/* Selector de Fechas */}
        <FormControl isRequired>
          <FormLabel>Fecha de Inicio</FormLabel>
          <Input
            type="date"
            placeholder="dd/mm/yyyy"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            bg="white"
            borderColor="gray.300"
            sx={{ '::placeholder': { color: 'gray.400' } }}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Fecha de Fin</FormLabel>
          <Input
            type="date"
            placeholder="dd/mm/yyyy"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            bg="white"
            borderColor="gray.300"
            sx={{ '::placeholder': { color: 'gray.400' } }}
          />
        </FormControl>

        {/* Selector de Número de Personas */}
        <FormControl isRequired>
          <FormLabel>Personas</FormLabel>
          <NumberInput
            value={numberOfGuests}
            min={1}
            onChange={(valueString) => setNumberOfGuests(parseInt(valueString))}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        {/* Información de Precio */}
        <Box mt={6} p={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Text fontSize="sm" fontWeight="bold" mb={2}>
            Garantizá tu estadía con un pago inicial
          </Text>
          <Text fontSize="sm" color="gray.600" mb={4}>
            Reservá tu lugar ahora con solo ${pricePerNight.toLocaleString()}. Asegurá tu espacio y disfrutá sin preocupaciones.
          </Text>
          <HStack justify="space-between" align="center">
            <HStack>
              <Text fontSize="lg" fontWeight="bold">
                ${calculateTotalPrice().toLocaleString()}
              </Text>
              <Text fontSize="sm" color="gray.500">
                Mercado Pago
              </Text>
            </HStack>
            <Text fontSize="xs" color="gray.500">
              Con dinero disponible
            </Text>
          </HStack>
        </Box>

        {/* Botón de Reserva */}
        <Button colorScheme="teal" onClick={handleReserve} w="full" mt={4}>
          Reservar con Mercado Pago
        </Button>
      </VStack>
    </Box>
  );
};