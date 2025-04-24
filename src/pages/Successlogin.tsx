import { Box, Button, Center, Image, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import successImage from "@/assets/sucess.png";

const Successlogin = () => {
  const navigate = useNavigate();

  return (
    <Center minH="100vh" bg="gray.50">
      <Box
        p={8}
        maxW="500px"
        w="full"
        textAlign="center"
        boxShadow="lg"
        borderRadius="lg"
        bg="white"
      >
        <Image
          src={successImage}
          alt="Registro exitoso"
          mb={6}
          mx="auto"
          maxW="250px"
        />
        <Stack spacing={4}>
          <Text fontSize="2xl" fontWeight="bold" color="green.500">
            ¡Te has registrado exitosamente!
          </Text>
          <Text fontSize="lg" color="gray.600">
            Todo listo para tu próxima aventura 🏕️
          </Text>
          <Button
            color="white"
            bg="primary.main"
            _hover={{ bg: "secondary.accent" }}
            onClick={() => navigate("/login")}
          >
            Iniciar sesión
          </Button>
        </Stack>
      </Box>
    </Center>
  );
};

export default Successlogin;
