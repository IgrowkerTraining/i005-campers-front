import {
  Box,
  Flex,
  Link,
  IconButton,
  Image,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../assets/fotter-logo.png";
import name from "../assets/footer-name.png";

export const Footer = () => {
  return (
    <Box as="footer" bg="secondary.main" color="white" py={6}>
      {/* Primera Sección: Logo y Nombre */}
      <Flex direction="column" align="flex-start" px={6}>
        <HStack spacing={4} mb={4}>
          <Image src={logo} alt="Campers Logo" boxSize="50px" />
          <Image src={name} alt="Campers Name" w="200px" />
        </HStack>
      </Flex>

      <Box borderTop="2px solid" borderColor="whiteAlpha.700" my={4} />

      {/* Segunda Sección: Links y Redes Sociales */}
      <Flex justify="space-between" align="flex-start" wrap="wrap" px={6}>
        {/* Links en Vertical */}
        <VStack align="flex-start" spacing={4}>
          <Link
            href="/preguntas-frecuentes"
            _hover={{ color: "whiteAlpha.800", textDecoration: "underline" }}
          >
            Preguntas frecuentes
          </Link>
          <Link
            href="/sobre-nosotros"
            _hover={{ color: "whiteAlpha.800", textDecoration: "underline" }}
          >
            Sobre Nosotros
          </Link>
          <Link
            href="/contacto"
            _hover={{ color: "whiteAlpha.800", textDecoration: "underline" }}
          >
            Contacto
          </Link>
        </VStack>

        {/* Redes Sociales */}
        <VStack align="flex-start" spacing={4}>
          <Text>Síguenos:</Text>
          <HStack spacing={6}>
            <IconButton
              as="a"
              href="#"
              icon={<FaYoutube />}
              variant="ghost"
              _hover={{ bg: "whiteAlpha.300" }}
              color="white"
              aria-label="YouTube"
            />
            <IconButton
              as="a"
              href="#"
              icon={<FaTwitter />}
              variant="ghost"
              _hover={{ bg: "whiteAlpha.300" }}
              color="white"
              aria-label="Twitter"
            />
            <IconButton
              as="a"
              href="#"
              icon={<FaInstagram />}
              variant="ghost"
              _hover={{ bg: "whiteAlpha.300" }}
              color="white"
              aria-label="Instagram"
            />
          </HStack>
        </VStack>
      </Flex>

      {/* Separador */}
      <Box borderTop="2px solid" borderColor="whiteAlpha.700" my={4} />
      {/* Copyright */}
      <Flex justify="center" mt={4}>
        <Text fontSize="sm">
          &copy; Campers 2025. Todos los derechos reservados.
        </Text>
      </Flex>
    </Box>
  );
};


