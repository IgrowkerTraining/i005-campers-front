import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    VStack,
    Heading,
    Text,
    Link,
} from "@chakra-ui/react";
import MainLayout from "@/layouts/MainLayout";
const Contacto = () => {
    return (
        <MainLayout>
            <Box p={8} maxW="600px" mx="auto">
                <Heading as="h2" size="xl" color="primary.main" mb={4}>
                    Contacto
                </Heading>
                <Text mb={6}>
                    ¿Tenés dudas o sugerencias? Completá el formulario o escribinos por
                    WhatsApp.
                </Text>
                <VStack spacing={4} as="form" method="post">
                    <FormControl isRequired>
                        <FormLabel>Nombre</FormLabel>
                        <Input type="text" name="nombre" />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" name="email" />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Mensaje</FormLabel>
                        <Textarea name="mensaje" rows={5} />
                    </FormControl>
                    <Button
                        type="submit"
                        bg="primary.main"
                        color="white"
                        _hover={{ bg: "secondary.accent" }}
                    >
                        Enviar
                    </Button>
                </VStack>

                <Box mt={8}>
                    <Text>O escribinos por WhatsApp:</Text>
                    <Link color="teal.500" href="https://wa.me/34679225934" isExternal>
                        Contactar
                    </Link>
                </Box>
            </Box>
        </MainLayout>
    );
};

export default Contacto;
