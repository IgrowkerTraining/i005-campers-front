import { Box, VStack } from '@chakra-ui/react';
import { Navbar } from '@/components/Navbar.tsx';
import { Footer } from '@/components/Footer';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
import SearchBar from '@/components/SearchBar';
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
    <Navbar />
   <SearchBar />
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
    <Footer />
</VStack>
  );
};

export default MainLayout;