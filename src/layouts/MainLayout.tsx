import { Box, VStack } from '@chakra-ui/react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <VStack 
        minH="100vh" 
        spacing={0} 
        align="stretch" 
    >
    <div ><strong>header</strong> <Link to="/">Home</Link> <Link to="/about">About</Link></div>
    <Box 
        as="main"
        flex={1}
        w="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        py={8}
    >
        <Box w="100%" maxW="1200px" px={4}>
            {children}
        </Box>
    </Box>
  <div>footer - Este es el footer</div>
</VStack>
  );
};

export default MainLayout;