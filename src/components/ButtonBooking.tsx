import React from 'react';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface ButtonBookingProps {
  campingId: number; // Añadimos el ID del camping
  campingName: string; // Mantenemos el nombre para usarlo en el formulario de reserva
}

const ButtonBooking: React.FC<ButtonBookingProps> = ({ campingId, campingName }) => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate(`/booking/${campingId}`);
  };

  return (
    <Button
      bg="secondary.main"
      color="white"
      _hover={{ bg: "primary.main", color: "white" }}
      size="lg"
      onClick={handleBooking}
    >
      Reservar
    </Button>
  );
};

export default ButtonBooking;