import React, { useState } from "react";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Divider,
    Stack,
    Text,
    IconButton,
    Center,
    RadioGroup,
    Radio,
    VStack,
    Flex,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";// Icono del ojo simple
import icon from "@/assets/Icongreen.png";
import iconNa from "@/assets/namegreen.png";
import { userService } from '@/services/userService';
import MainLayout from "@/layouts/MainLayout";

const RegisterComponent: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [role, setRole] = useState<string>("discover"); // Estado para selección de rol
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (email === "" || password === "" || name === "") {
            setError("Por favor, completa todos los campos.");
            return;
        }

        try {
            setIsLoading(true);
            setError("");
            
            const registerData = {
                email,
                name,
                password,
                owner: role === 'host'
            };

            const response = await userService.register(registerData);
            console.log('Usuario registrado:', response);
            
            // Redirigir al login después del registro exitoso
            navigate('/exito');
        } catch (error: any) {
            setError(error.message || 'Error al registrar usuario');
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleLogin = () => {
        const googleAuthURL = "https://accounts.google.com/o/oauth2/auth";
        window.open(googleAuthURL, "_blank", "width=500,height=600");
    };

    const handleFacebookLogin = () => {
        const facebookAuthURL = "https://www.facebook.com/v11.0/dialog/oauth";
        window.open(facebookAuthURL, "_blank", "width=500,height=600");
    };

    return (
        <MainLayout>
        <Box
            maxW="400px"
            mx="auto"
            mt="8"
            p="6"
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="lg"
        >
            <Center mb="8">
                <Box textAlign="center">
                    <img src={icon} alt="Campers Icon" style={{ width: "150px" }} />
                    <img src={iconNa} alt="Campers Name" style={{ width: "150px" }} />
                </Box>
            </Center>
            <Text textAlign="center" fontSize="2xl" fontWeight="bold" mb="6">
                Registro
            </Text>
            <form onSubmit={handleSubmit}>
                <Stack spacing="4">
                    <FormControl id="name">
                        <FormLabel>Nombre</FormLabel>
                        <Input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Ingresa tu nombre"
                        />
                    </FormControl>
                    <FormControl id="email">
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Ingresa tu email"
                        />
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Contraseña</FormLabel>
                        <InputGroup>
                            <Input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Ingresa tu contraseña"
                            />
                            <InputRightElement>
                                <IconButton
                                    aria-label="Mostrar u ocultar contraseña"
                                   icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                                    onClick={() => setShowPassword(!showPassword)}
                                    size="sm"
                                    variant="ghost"
                                />
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <FormControl id="role">
                        <VStack align="start" spacing="4">
                            <RadioGroup
                                onChange={setRole}
                                colorScheme="green"
                                value={role}
                                defaultValue="discover"
                            >
                                <Radio value="discover" p="2">
                                    Quiero descubrir y reservar campings
                                </Radio>
                                <Radio value="host" p="2">
                                    Quiero recibir viajeros en mi camping
                                </Radio>
                            </RadioGroup>
                        </VStack>
                    </FormControl>
                    {error && <Text color="red.500">{error}</Text>}
                    <Button
                        type="submit"
                        color="white"
                        bg="primary.main"
                        _hover={{ bg: "secondary.accent" }}
                        width="full"
                        isLoading={isLoading}
                        loadingText="Registrando..."
                    >
                        Regístrate ahora
                    </Button>
                </Stack>
                <Flex align="center" my="6">
                    <Divider flex="1" borderWidth="1px" borderColor="gray.400" />
                    <Text mx="10" color="gray.600" fontWeight="bold">
                        o
                    </Text>
                    <Divider flex="1" borderWidth="1px" borderColor="gray.400" />
                </Flex>
                <Text textAlign="center" fontSize="md" color="gray.600" mb="4">
                    Ingresa con:
                </Text>
                <Stack direction="row" spacing="4" justify="center">
                    <IconButton
                        aria-label="Registrarse con Google"
                        icon={<FcGoogle />}
                        size="lg"
                        bg="white"
                        boxShadow="0 4px 6px rgba(0, 0, 0, 0.2)"
                        _hover={{ boxShadow: "0 6px 8px rgba(0, 0, 0, 0.3)" }}
                        borderWidth="1px"
                        borderColor="gray.200"
                        borderRadius="full"
                        onClick={handleGoogleLogin}
                    />
                    <IconButton
                        aria-label="Registrarse con Facebook"
                        icon={<FaFacebook color="#4267B2" />}
                        size="lg"
                        bg="white"
                        boxShadow="0 4px 6px rgba(0, 0, 0, 0.2)"
                        _hover={{ boxShadow: "0 6px 8px rgba(0, 0, 0, 0.3)" }}
                        borderWidth="1px"
                        borderColor="gray.200"
                        borderRadius="full"
                        onClick={handleFacebookLogin}
                    />
                </Stack>
                <Text textAlign="center" fontSize="sm" mt="6" color="gray.600">
                    ¿Ya tienes una cuenta?{" "}
                    <Button
                        variant="link"
                        color="blue.500"
                        onClick={() => navigate("/login")}
                    >
                        Ingresa ahora
                    </Button>
                </Text>
            </form>
        </Box>
        </MainLayout>
    );
};

export default RegisterComponent;
