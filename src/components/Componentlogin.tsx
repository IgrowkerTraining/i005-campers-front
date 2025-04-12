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
    Flex,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import icon from "@/assets/Icongreen.png";
import name from "@/assets/namegreen.png";

interface LoginComponentProps {
    onLogin: (email: string, password: string) => void;
}

const LoginComponent: React.FC<LoginComponentProps> = ({ onLogin }) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email === "" || password === "") {
            setError("Por favor, completa todos los campos.");
        } else {
            setError("");
            onLogin(email, password);
        }
    };

    const handleGoogleLogin = () => {
        // para iniciar sesión con Google (sustituir por la real y ponerlo en variables .env necesita keys/id)
        const googleAuthURL = "https://accounts.google.com/o/oauth2/auth";
        window.open(googleAuthURL, "_blank", "width=500,height=600");
    };

    const handleFacebookLogin = () => {
        // para iniciar sesión con Facebook (sustituir por la real y ponerlo en variables .env)
        const facebookAuthURL = "https://www.facebook.com/v11.0/dialog/oauth";
        window.open(facebookAuthURL, "_blank", "width=500,height=600");
    };

    return (
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
                    <img src={name} alt="Campers Name" style={{ width: "150px" }} />
                </Box>
            </Center>
            <Text textAlign="center" fontSize="2xl" fontWeight="bold" mb="6">
                Inicia sesión
            </Text>
            <form onSubmit={handleSubmit}>
                <Stack spacing="4">
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
                    {error && <Text color="red.500">{error}</Text>}
                    <Button type="submit" color="white" bg="primary.main" _hover={{ bg: "secondary.accent" }} width="full">
                        Iniciar sesión
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
                        aria-label="Iniciar sesión con Google"
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
                        aria-label="Iniciar sesión con Facebook"
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
            </form>
        </Box>
    );
};

export default LoginComponent;
