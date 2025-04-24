import { Box, Text, Flex, VStack, Image, Spinner } from '@chakra-ui/react';
import { useCampingStore } from '@/store/CampingStore';
import { CampingType } from '@/types/camping';
import { useEffect, useState } from 'react';
import campingData from '@/utils/camping.json'; // Asegúrate de importar los campings simulados
import { Link } from 'react-router-dom'; // Importar Link de react-router-dom

const CampingResults: React.FC = () => {
  const { campings: backendCampings, isLoading, fetchCampings } = useCampingStore();
  const [allCampings, setAllCampings] = useState<CampingType[]>([]); // Estado para almacenar los campings combinados

  const fontSizeTitle = { base: 'lg', md: 'xl' };

  useEffect(() => {
    const fetchAndCombineCampings = async () => {
      if (backendCampings.length === 0) {
        await fetchCampings(); // Solo realiza la llamada si los campings no están cargados
      }
      
      // Combina los campings del backend con los simulados solo cuando los campings del backend estén listos
      const combinedCampings = [...backendCampings, ...campingData];
      setAllCampings(combinedCampings);
    };

    fetchAndCombineCampings();
  }, [backendCampings, fetchCampings]); // Dependencias del useEffect

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
        {allCampings.map((camping: CampingType) => {
          const randomRating = Math.floor(Math.random() * 5) + 1;

          return (
            // Envolvemos el Box dentro de un Link para redirigir a la página del camping
            <Link key={camping.id} to={`/camping/${camping.id}`}>
              <Flex p={3} borderWidth="1px" borderRadius="md" align="center" gap={3}>
                <Image
                  src={camping.media?.[0]?.url || "https://via.placeholder.com/100"}
                  alt={camping.name}
                  boxSize="100px"
                  objectFit="contain"
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
            </Link>
          );
        })}
      </VStack>
    </>
  );
};

export default CampingResults;
