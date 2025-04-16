import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Image,
  Badge,
  Button,
  Divider,
  Spinner,
} from '@chakra-ui/react';
import { useCampingStore } from '@/store/CampingStore';
import {CampingType} from '@/store/CampingStore'
import { FaMapMarkerAlt, FaWifi, FaShower, FaParking, FaUtensils } from 'react-icons/fa';

import MainLayout from '@/layouts/MainLayout';
import ImageCarousel from '@/components/ImageCarousel';
import ButtonBooking from '@/components/ButtonBooking';

import image1 from '@/assets/camping/camping1.jpg';
import image2 from '@/assets/camping/camping2.jpg';
import image3 from '@/assets/camping/camping3.jpg';

function Camping() {
  const { id } = useParams<{ id: string }>();
  const { fetchCampings, fetchCampingById } = useCampingStore();
  const [camping, setCamping] = useState<CampingType | null>(null);
  console.log(id);
  const images = [image1, image2, image3]; 

  useEffect(() => {
    fetchCampings(); // Carga los campings al montar el componente
  }, [fetchCampings]);
  
  useEffect(() => {
    const fetchCamping = async () => {
      if (id) {
        const response = await fetchCampingById(Number(id));
        console.log(response);
        setCamping(response);
      }
    };
    fetchCamping();
  }, [id, fetchCampingById]);

  if (!camping) {
    return (
      <Box textAlign="center" py={10}>
        <Spinner size="xl" />
        <Text mt={4}>Cargando camping...</Text>
      </Box>
    );
  }
{/* <ButtonBooking campingName="Prueba de camping" contactNumber="123-456-7890" /> */}
  return (
    <MainLayout>            
      <ImageCarousel images={images} />
      <Box p={4}>
      <VStack align="start" spacing={2}>
          <Heading size="lg">{camping.name}</Heading>
          <HStack>
            <Icon as={FaMapMarkerAlt} color="gray.500" />
            <Text color="gray.500">
              {camping.location.city}, {camping.location.region}
            </Text>
            <Button variant="link" color="blue.500">
              Ver en el mapa
            </Button>
          </HStack>
          <Badge colorScheme="red" fontSize="lg">
            7.5
          </Badge>
        </VStack>

        {/* Descripción */}
        <Text mt={4} color="gray.700">
          {camping.description}
        </Text>

        {/* Comodidades */}
        <HStack spacing={4} mt={4}>
          <HStack>
            <Icon as={FaWifi} color="green.500" />
            <Text>Wifi gratis</Text>
          </HStack>
          <HStack>
            <Icon as={FaShower} color="green.500" />
            <Text>Duchas</Text>
          </HStack>
          <HStack>
            <Icon as={FaParking} color="green.500" />
            <Text>Parking</Text>
          </HStack>
          <HStack>
            <Icon as={FaUtensils} color="green.500" />
            <Text>Parrillas</Text>
          </HStack>
          <Button variant="link" color="blue.500">
            Ver más
          </Button>
        </HStack>

        <Divider my={6} />

        {/* Imágenes adicionales */}
        <Heading size="md" mb={4}>
          Imágenes y videos
        </Heading>
        <HStack spacing={4}>
          <Image
            src="https://via.placeholder.com/150" // Reemplaza con las imágenes adicionales
            alt="Imagen 1"
            borderRadius="md"
          />
          <Image
            src="https://via.placeholder.com/150"
            alt="Imagen 2"
            borderRadius="md"
          />
          <Image
            src="https://via.placeholder.com/150"
            alt="Imagen 3"
            borderRadius="md"
          />
          <Button variant="link" color="blue.500">
            Ver más imágenes
          </Button>
        </HStack>

        <Divider my={6} />

        {/* Reseñas */}
        <Heading size="md" mb={4}>
          Reseñas
        </Heading>
        <VStack align="start" spacing={4}>
          <Box>
            <Text fontWeight="bold">Sofía Hernández</Text>
            <Text fontSize="sm" color="gray.500">
              22/3/2025
            </Text>
            <Text>Muy bueno, se los recomiendo</Text>
            <Badge colorScheme="yellow">Puntuación 4.8</Badge>
          </Box>
          <Box>
            <Text fontWeight="bold">Valentín López</Text>
            <Text fontSize="sm" color="gray.500">
              22/3/2025
            </Text>
            <Text>
              ¡Excelente experiencia! Definitivamente los recomiendo, es un lugar increíble.
            </Text>
            <Badge colorScheme="yellow">Puntuación 4.8</Badge>
          </Box>
          <Button variant="link" color="blue.500">
            Ver más reseñas
          </Button>
        </VStack>

        <Divider my={6} />

        {/* Precio y botón de reservar */}
        <HStack justify="space-between" mt={4}>
          <Text fontSize="2xl" fontWeight="bold">
            $5.000/noche
          </Text>
          <ButtonBooking campingName="Prueba de camping" contactNumber="123-456-7890" />
        </HStack>
      </Box>
      
    </MainLayout>
  );
}

export default Camping;
