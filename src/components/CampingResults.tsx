import { Box, Text, Flex, VStack, Image, Spinner } from '@chakra-ui/react';
import { useCampingStore } from '@/store/CampingStore';
import { CampingType } from '@/store/CampingStore';
import { useEffect } from 'react';

const CampingResults: React.FC = () => {
  const { campings, isLoading, fetchCampings } = useCampingStore();
  const fontSizeTitle = { base: 'lg', md: 'xl' };

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

  return (
    <>
      <Text fontSize={fontSizeTitle} fontWeight="bold" mb={2}>
        Lo más visitado
      </Text>
      <VStack spacing={4} align="stretch">
        {campings.map((camping: CampingType) => {
          const randomRating = Math.floor(Math.random() * 5) + 1;

          return (
            <Flex key={camping.id} p={3} borderWidth="1px" borderRadius="md" align="center" gap={3}>
              <Image src="https://via.placeholder.com/100" alt={camping.name} boxSize="100px" objectFit="cover" borderRadius="md" />
              <Box flex="1">
                <Text fontWeight="bold">{camping.name}</Text>
                <Text fontSize="sm" color="gray.500">{camping.location.city}, {camping.location.country}</Text>
                <Text fontSize="sm" fontWeight="bold">${camping.pricing[0]?.pricePerNight ?? 'N/A'}</Text>
                <Text fontSize="sm" color="yellow.500">{'★'.repeat(randomRating)} {randomRating}</Text>
              </Box>
            </Flex>
          );
        })}
      </VStack>
    </>
  );
};

export default CampingResults;