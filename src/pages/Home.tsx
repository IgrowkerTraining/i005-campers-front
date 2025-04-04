import MainLayout from '@/layouts/MainLayout';
import { Box, Heading } from '@chakra-ui/react';

const boxStyles = {
  p: 4,
  bg: 'primary.dark',
  color: 'primary.light',
  w: '100%',
  borderRadius: 'md', 
  _hover: {
    transform: 'scale(1.01)' 
  }
};

function Home() {
  return (
    <MainLayout>
      <Box sx={boxStyles}>
        <Heading>Prueba de Home</Heading>
      </Box>
    </MainLayout>
  );
}

export default Home;