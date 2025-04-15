import React from 'react';
import {
  Box,
  Heading,
  Text,  
  Image,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import CustomButton from './CustomButton';
import imageUrl from '../assets/welcome.jpg';

const WelcomeSection: React.FC = () => {
  const navigate = useNavigate();

  const handleRegister = () =>{
    navigate('/registro');
  };
  const handleLogin = () =>{
    navigate('/login');
  };
  return (
    <VStack spacing={8} align="stretch" maxWidth="container.lg" mx="auto">
      {/* Sección de Texto y Botones */}
      <Box
        bg="primary.light" // Fondo claro del tema
        p={{ base: 4, md: 8 }}
        borderRadius="lg"
        textAlign="center"
      >
        <VStack spacing={4}>
          <Heading as="h1" size="xl" fontWeight="bold" color="primary.dark">
            Viví la experiencia Campers
          </Heading>
          <Text fontSize="lg" color="primary.dark" maxW="xl" mx="auto">
            Explora opciones, reserva fácil y disfruta de la naturaleza sin
            complicaciones. Viajar y hospedar nunca fue tan simple.
          </Text>
          <HStack spacing={4} justify="center" width="100%" pt={4}>
            <CustomButton variant="dark" onClick={handleRegister}>Registrarse</CustomButton>
            <CustomButton variant="light" onClick={handleLogin}>Iniciar sesión</CustomButton>
          </HStack>
        </VStack>
      </Box>

      {/* Sección de Imagen */}
      <Box>
        <Image
          src={imageUrl}
          alt="Grupo de amigos acampando felizmente"
          borderRadius="lg"
          objectFit="cover"
          width="100%"
          maxH="450px"
          boxShadow="md"
        />
      </Box>
    </VStack>
  );
};

export default WelcomeSection;