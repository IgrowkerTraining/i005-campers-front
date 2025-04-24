import {
    Box,
    Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    useColorModeValue,
  } from "@chakra-ui/react";
  import MainLayout from "@/layouts/MainLayout";
  
  const questions = [
    {
      pregunta: "¿Cómo puedo buscar campings en Campers?",
      respuesta:
        "Ingresá el nombre de una ciudad o región en el buscador para ver campings disponibles con sus servicios y precios.",
    },
    {
      pregunta: "¿La reserva se hace directamente por la plataforma?",
      respuesta:
        "No. Campers te conecta por WhatsApp directamente con el camping para una reserva rápida y directa.",
    },
    {
      pregunta: "¿Puedo pagar la reserva desde la web?",
      respuesta:
        "Sí. Algunos campings permiten hacer un pago inicial vía Mercado Pago como garantía. Se indica en su perfil.",
    },
    {
      pregunta: "Soy dueño de un camping, ¿cómo lo doy de alta?",
      respuesta:
        "Podés registrar tu camping completando un formulario con servicios, ubicación y contacto para aparecer en la búsqueda.",
    },
  ];
  
  const Questions = () => {
    const borderColor = useColorModeValue("gray.200", "gray.600");
  
    return (
      <MainLayout>
        <Box p={8} maxW="700px" mx="auto" minHeight="80vh" transition="all .3s ease">
          <Heading as="h2" size="xl" color="primary.main" mb={6}>
            Preguntas Frecuentes
          </Heading>
          <Accordion allowToggle>
            {questions.map(({ pregunta, respuesta }, index) => (
              <AccordionItem key={index} border={`1px solid ${borderColor}`} borderRadius="md" mb={4}>
                <AccordionButton _expanded={{ bg: "gray.100" }}>
                  <Box flex="1" textAlign="left">{pregunta}</Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel
                  pb={4}
                  transition="all 0.3s ease"
                  overflow="hidden"
                >
                  {respuesta}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </MainLayout>
    );
  };
  
  export default Questions;
  