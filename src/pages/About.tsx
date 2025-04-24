import { Box, Heading, Text } from "@chakra-ui/react";
import MainLayout from "@/layouts/MainLayout";
const About = () => {
  return (
    <MainLayout>
    <Box p={8} maxW="700px" mx="auto">
      <Heading as="h2" size="xl" color="primary.main" mb={4}>Sobre Nosotros</Heading>
      <Text mb={4}>
        Campers es una iniciativa de <strong>Igrowker</strong> que conecta a turistas con campings en Argentina de forma simple y segura.
      </Text>
      <Text mb={4}>
        Sabemos que encontrar un camping confiable puede ser un desafío. Por eso creamos una plataforma intuitiva que permite buscar, comparar y reservar fácilmente.
      </Text>
      <Text mb={4}>
        También ayudamos a los dueños de campings a digitalizar su negocio, dando visibilidad y atrayendo reservas todo el año.
      </Text>
      <Text fontWeight="bold">
        Nuestro objetivo: transformar la forma en que se reserva un camping en Argentina.
      </Text>
    </Box>
    </MainLayout>
  );
};

export default About;
