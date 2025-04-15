import { useEffect } from 'react';
import { Box, Heading, Spinner, Text, VStack, Image } from '@chakra-ui/react';
import MainLayout from '@/layouts/MainLayout';
import { useCampingStore } from '@/store/campingStore';
import campingImage from '@/assets/camping/camping1.jpg';
import { CampingType } from '@/store/campingStore';

function About() {
  const { campings, isLoading, error, fetchCampings  } = useCampingStore();

  useEffect(() => {
    fetchCampings();
  }, [fetchCampings]);

  if (isLoading) {
    return (
      <Box textAlign="center" py={10}>
        <Spinner size="xl" />
        <Text mt={4}>Cargando campings...</Text>
      </Box>
    );
  }
  if (error) {
    return (
      <Box textAlign="center" py={10}>
        <Text color="red.500">Error: {error}</Text>
      </Box>
    );
  }
  //console.log(campings);
  return (
    <MainLayout>
      <Box p={4}>
        <Heading>Prueba de About</Heading>
        <VStack spacing={8} align="stretch" maxWidth="container.lg" mx="auto" py={8}>
        {campings.map((camping: CampingType) => (
          <Box
            key={camping.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
          >
            <Image src={campingImage} alt={camping.name} objectFit="cover" boxSize="100%" />
            <Box p={4}>
              <Heading as="h3" size="md" mb={2}>
                {camping.name}
              </Heading>
              <Text fontSize="sm" color="gray.600">
                {camping.location.city}
              </Text>
              <Text mt={2}>{camping.description}</Text>
            </Box>
          </Box>
        ))}
      </VStack>
      </Box>
    </MainLayout>
  );
}

export default About;