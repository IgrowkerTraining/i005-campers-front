import { Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import LoginComponent from '@/components/Componentlogin';
import { useUserStore } from '@/store/userStore';


function Login() {
  const { login, isLoading, error } = useUserStore();
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    try {
      await login({ email, password });
      navigate('/search'); 
    } catch (error) {
      console.error('Error en el login:', error);
    }
  };

  return (
    <Box p={4}>
      <LoginComponent 
        onLogin={handleLogin}
        isLoading={isLoading}
        error={error}
      />
    </Box>
  );
}

export default Login;