import React from 'react';
import { Button } from '@chakra-ui/react';

interface ButtonBookingProps {
  campingName: string;
  contactNumber: string; 
}

const ButtonBooking: React.FC<ButtonBookingProps> = ({ campingName, contactNumber }) => {
 
  const mensajePredefinido = `Hola, me gustaría reservar en ${campingName}. ¿Podrían darme más información?`;

  const enlaceWhatsApp = `https://wa.me/${contactNumber}?text=${encodeURIComponent(mensajePredefinido)}`;

  return (
    <Button
      bg="secondary.main"
      color="white" 
      _hover={{ bg: "primary.main", color: "white" }}
      size="lg"
      onClick={() => window.open(enlaceWhatsApp, '_blank')}
    >
      Reservar
    </Button>
  );
};

export default ButtonBooking;
