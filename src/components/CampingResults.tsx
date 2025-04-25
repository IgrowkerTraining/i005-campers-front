import { Box, Text, Flex, VStack, Image, Spinner } from '@chakra-ui/react';
import { useCampingStore } from '@/store/CampingStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const CampingResults: React.FC = () => {
  const { campings, isLoading, fetchCampings } = useCampingStore();
  const navigate = useNavigate();
  const fontSizeTitle = { base: 'lg', md: 'xl' };

  useEffect(() => {
    fetchCampings();
  }, [fetchCampings]);

  const handleCampingClick = (id: number) => {
    navigate(`/camping/${id}`);
  };

  if (isLoading) {
    return (
      <Box textAlign="center" py={10}>
        <Spinner size="xl" />
        <Text mt={4}>Cargando campings...</Text>
      </Box>
    );
  }

  const duplicatedCampings = [
    ...campings.map((camping, index) => ({ ...camping, uniqueKey: `${camping.id}-original-${index}` })),
    ...campings.map((camping, index) => ({ ...camping, uniqueKey: `${camping.id}-duplicate1-${index}` })),
  ];

  return (
    <VStack spacing={8} align="stretch">
      <Box>
        <Text fontSize={fontSizeTitle} fontWeight="bold" mb={2}>
          Lo más visitado
        </Text>
        <VStack spacing={4} align="stretch">
          {duplicatedCampings.map((camping) => {
            const randomRating = Math.floor(Math.random() * 5) + 1;

            return (
              <Flex
                key={camping.uniqueKey} 
                p={3}
                borderWidth="1px"
                borderRadius="md"
                align="center"
                gap={3}
                onClick={() => handleCampingClick(camping.id)}
                cursor="pointer"
                _hover={{ bg: 'gray.50', transform: 'scale(1.02)', transition: 'all 0.2s' }}
              >
                <Image
                  src={camping.media?.[0]?.url || "https://via.placeholder.com/100"}
                  alt={camping.name}
                  boxSize="100px"
                  objectFit="cover"
                  borderRadius="md"
                />
                <Box flex="1">
                  <Text fontWeight="bold">{camping.name}</Text>
                  <Text fontSize="sm" color="gray.500">
                    {camping.location.city}, {camping.location.country}
                  </Text>
                  <Text fontSize="sm" fontWeight="bold">
                    ${camping.pricing[0]?.pricePerNight ?? 'N/A'}
                  </Text>
                  <Text fontSize="sm" color="yellow.500">
                    {'★'.repeat(randomRating)} {randomRating}
                  </Text>
                </Box>
              </Flex>
            );
          })}
        </VStack>
      </Box>
    </VStack>
  );
};

export default CampingResults;