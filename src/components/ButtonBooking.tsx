import React from 'react';
import { Button } from '@chakra-ui/react';

interface ButtonBookingProps {
  campingName: "dsad";
  contactNumber: "adsad"; 
}

const ButtonBooking: React.FC<ButtonBookingProps> = ({ campingName, contactNumber }) => {
 
  const mensajePredefinido = `Hola, me gustaría reservar en ${campingName}. ¿Podrían darme más información?`;

  const enlaceWhatsApp = `https://wa.me/${contactNumber}?text=${encodeURIComponent(mensajePredefinido)}`;

  return (
    <Button
      bg="secondary.main"
      color="white"
      _hover="secondary.accent"
      size="lg"
      onClick={() => window.open(enlaceWhatsApp, '_blank')}
    >
      Reservar
    </Button>
  );
};

export default ButtonBooking;
