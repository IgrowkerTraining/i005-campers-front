
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

// Reemplaza esta URL con la URL real de tu imagen o impórtala si está localmente
import imageUrl from '../assets/welcome.jpg'; // URL de ejemplo

const WelcomeSection: React.FC = () => {
  return (
    <VStack spacing={8} align="stretch" maxWidth="container.lg" mx="auto">
      {/* Sección de Texto y Botones */}
      <Box
        bg="teal.50" // Un fondo muy claro, ajusta según veas necesario
        p={{ base: 4, md: 8 }} // Padding responsivo
        borderRadius="lg" // Bordes redondeados
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
              colorScheme="teal" // Mantiene el color del borde y texto
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
          src={imageUrl} // Usa la variable con la URL de la imagen
          alt="Grupo de amigos acampando felizmente"
          borderRadius="lg" // Bordes redondeados para la imagen
          objectFit="cover" // Asegura que la imagen cubra el contenedor
          width="100%"
          maxH="450px" // Limita la altura máxima si es necesario
          boxShadow="md" // Sombra sutil
        />
      </Box>
    </VStack>
  );
};

export default WelcomeSection;