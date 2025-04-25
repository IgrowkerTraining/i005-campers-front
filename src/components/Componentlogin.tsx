import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,  
  Alert,
  AlertIcon,
  Text,
  Divider,
  Center,
} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import icon from '@/assets/Icongreen.png';
import iconNa from '@/assets/namegreen.png';
import MainLayout from "@/layouts/MainLayout";
interface LoginComponentProps {
  onLogin: (email: string, password: string) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

const LoginComponent: React.FC<LoginComponentProps> = ({ onLogin, isLoading, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onLogin(email, password);
  };

  return (
    <MainLayout>
    <Box maxW="400px" mx="auto" mt={8} p="6" borderWidth="1px" borderRadius="lg" boxShadow="lg">
       <Center mb="8">
        <Box textAlign="center">
          <img src={icon} alt="Campers Icon" style={{ width: "150px" }} />
          <img src={iconNa} alt="Campers Name" style={{ width: "150px" }} />
        </Box>
      </Center>
      <Text textAlign="center" fontSize="2xl" fontWeight="bold" mb="6">
        Iniciar sesión
      </Text>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired id="email">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu email"
            />
          </FormControl>
          <FormControl isRequired id="password">
            <FormLabel>Contraseña</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
            />
          </FormControl>
          {error && (
            <Alert status="error">
              <AlertIcon />
              {error}
            </Alert>
          )}
          <Button
            type="submit"
            color="white"
            bg="primary.main"
            _hover={{bg: "secondary.accent"}}
            width="full"
            isLoading={isLoading}
            loadingText="Iniciando sesión..."
          >
            Iniciar sesión
          </Button>
        </VStack>
        <Divider my="6" borderWidth="1px" borderColor="gray.400" />

        <Text textAlign="center" fontSize="sm" mt="6" color="gray.600">
          ¿No tienes una cuenta?{" "}
          <Button variant="link" color="blue.500" onClick={() => navigate("/registro")}>
            Regístrate aquí
          </Button>
        </Text>
      </form>
    </Box>
    </MainLayout>
  );
};

export default LoginComponent;
