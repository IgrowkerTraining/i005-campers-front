import React from "react";
import {
  Box,
  Heading,
  VStack,
  UnorderedList,
  ListItem,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

interface PromoteCampingProps {
  // Agrega aquí cualquier prop que necesites
}

const PromoteCamping: React.FC<PromoteCampingProps> = () => {
  const headingColor = useColorModeValue("gray.700", "gray.100");
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box
      as="section"
      py={8}
      px={4}
      maxW="md"
      mx="auto"
      textAlign="center"
    >
      <Heading
        as="h2"
        size="lg"
        mb={4}
        color={headingColor}
      >
        Si tenés un camping, hacelo crecer con Campers
      </Heading>

      <VStack
        spacing={3}
        align="start"
        mb={6}
      >
        <UnorderedList spacing={2} color={textColor}>
          <ListItem>Publicá tu camping en minutos</ListItem>
          <ListItem>Recibí reservas sin complicaciones</ListItem>
          <ListItem>Confirmá y gestioná todo desde la app</ListItem>
        </UnorderedList>
      </VStack>

      <Button
        colorScheme="teal"
        size="md"
      >
        Registrarse
      </Button>
    </Box>
  );
};

export default PromoteCamping;