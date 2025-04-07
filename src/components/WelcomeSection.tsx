
import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,  
  Image,
  VStack, // Para apilar verticalmente texto y botones
  HStack, // Para alinear botones horizontalmente
} from '@chakra-ui/react';


import imageUrl from '../assets/welcome.jpg'; 

const WelcomeSection: React.FC = () => {
  return (
    <VStack spacing={8} align="stretch" maxWidth="container.lg" mx="auto">
      {/* Sección de Texto y Botones */}
      <Box
        bg="teal.50" 
        p={{ base: 4, md: 8 }} 
        borderRadius="lg" 
        textAlign="center"
      >
        <VStack spacing={4}>
          <Heading as="h1" size="xl" fontWeight="bold" color="gray.800">
            Viví la experiencia Campers
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="xl" mx="auto">
            Explora opciones, reserva fácil y disfruta de la naturaleza sin
            complicaciones. Viajar y hospedar nunca fue tan simple.
          </Text>
          <HStack spacing={4} justify="center" width="100%" pt={4}>
            <Button
              colorScheme="teal" // Botón principal con color sólido
              size="lg"
              // onClick={() => console.log('Registrarse')}
            >
              Registrarse
            </Button>
            <Button
              variant="outline" // Botón secundario con borde
              colorScheme="teal" 
              size="lg"
              // onClick={() => console.log('Iniciar Sesión')}
            >
              Iniciar sesión
            </Button>
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