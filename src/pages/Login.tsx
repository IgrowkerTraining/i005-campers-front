import { Box } from '@chakra-ui/react';
import LoginComponent from '@/components/Componentlogin';

interface LoginCredentials {
  email: string;
  password: string;
}

const handleLogin = (email: LoginCredentials['email'], password: LoginCredentials['password']): void => {
  console.log('Login attempted with:', email, password);
}
function Login() {
  return (
      <Box p={4} >
        <LoginComponent onLogin={handleLogin} />
      </Box>
  );
}

export default Login;