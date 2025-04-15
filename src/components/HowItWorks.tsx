import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

import { BsSearch, BsCheck, BsBackpack } from "react-icons/bs"; 

const HowItWorks: React.FC = () => {
  const bgColor = useColorModeValue("green.50", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.300");

  return (
    <Box as="section" bg={bgColor} py={8} px={4} maxW="sm" mx="auto" borderRadius="md">
      <Heading as="h2" size="lg" mb={6} textAlign="center" color={textColor}>
        ¿Cómo funciona?
      </Heading>

      <VStack spacing={8} align="center">
        {/* Paso 1 */}
        <VStack spacing={4}>
          <Icon as={BsSearch} w={8} h={8} color="blackAlpha.700" />
          <Text textAlign="center" color={textColor}>
            Tu próxima escapada a un clic de distancia. Filtrá por ubicación, precio 
            y servicios para encontrar el lugar perfecto.
          </Text>
        </VStack>

        {/* Paso 2 */}
        <VStack spacing={4}>
          <Icon as={BsCheck} w={8} h={8} color="blackAlpha.700" />
          <Text textAlign="center" color={textColor}>
            Reservá directo con el dueño. Enviá un mensaje por WhatsApp 
            y aboná con Mercado Pago.
          </Text>
        </VStack>

        {/* Paso 3 */}
        <VStack spacing={4}>
          <Icon as={BsBackpack} w={8} h={8} color="blackAlpha.700" />
          <Text textAlign="center" color={textColor}>
            Una vez confirmada tu reserva ¡solo queda armar la mochila!
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
};

export default HowItWorks;