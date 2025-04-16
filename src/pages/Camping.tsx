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
  Button,
  Divider,
  Spinner,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import { useCampingStore } from '@/store/CampingStore';
import {CampingType} from '@/store/CampingStore'
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';

import MainLayout from '@/layouts/MainLayout';
import ImageCarousel from '@/components/ImageCarousel';
import ButtonBooking from '@/components/ButtonBooking';
import ReviewCard from '@/components/ViewCamping/ReviewCard';
import AmenityItem from '@/components/ViewCamping/AmenityItem';

import image1 from '@/assets/camping/camping1.jpg';
import image2 from '@/assets/camping/camping2.jpg';
import image3 from '@/assets/camping/camping3.jpg';
import reviews from '@/data/reviews.json';

function Camping() {
  const { id } = useParams<{ id: string }>();
  const { fetchCampings, fetchCampingById } = useCampingStore();
  const [camping, setCamping] = useState<CampingType | null>(null);
  console.log(id);
  const images = [image1, image2, image3]; 
  const imageProfileUrl = '/images/profiles';
 

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

  return (
    <MainLayout>      
      <Box fontFamily="body">
      <ImageCarousel images={images} />
      <Box p={4}>
      <VStack align="start" spacing={2}>
            <HStack width="100%" justify="space-between">
            <Heading size="lg"  fontWeight="semibold" fontSize="20px">
              {camping.name}
            </Heading>
            <HStack>
              <Icon as={FaStar} color="orange.400" />
              <Text fontSize="lg">
                7.5
              </Text>
            </HStack>
          </HStack>
          <HStack width="100%" justify="space-between">
            <HStack>
              <Icon as={FaMapMarkerAlt}  />
              <Text >
                {camping.location.city}, {camping.location.region}
              </Text>
            </HStack>
            <Button variant="link" color="green.500">
              Ver en el mapa
            </Button>
          </HStack>
          
        </VStack>

        {/* Descripción */}
        <Text mt={4} color="gray.700">
          {camping.description}
        </Text>

        {/* Comodidades */}
        <Wrap spacing={4} mt={4}>
        {camping.amenities.map((amenity) => (
          <AmenityItem
            key={amenity.id}
            id={amenity.id}
            name={amenity.name}
            icon={amenity.icon} 
          />
        ))}
          <WrapItem alignItems="center">
            <Button variant="link" color="green.500" mr={2}>
              Ver más
            </Button>
          </WrapItem>
        </Wrap>

        <Divider my={6} />

        {/* Imágenes adicionales */}
        <HStack mb={4}>
            <VStack align="center" spacing={2}  >
            <Heading size="md" fontWeight="semibold" fontSize="20px">
              Imágenes y videos
            </Heading>
            </VStack>
          <Button variant="link" color="green.500">
            Ver más imágenes
          </Button>
        </HStack>
        <HStack spacing={2}>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Imagen ${index + 1}`}
              borderRadius="10px"
              boxSize="90px"
              objectFit="cover"
            />
          ))}
        </HStack>

        <Divider my={6} />

        {/* Reseñas */}
        <HStack mb={4} justify="space-between">
          <Heading size="md" >
            Reseñas
          </Heading>
          <Button variant="link" color="green.500">
            Ver más reseñas
          </Button>
        </HStack>
        <VStack align="start" spacing={4}>
            {reviews
              .filter((review) => review.campingId === Number(id)) // Filtrar por campingId
              .map((review, index) => (
              <ReviewCard
                key={index}
                profilePic={review.profilePic}
                name={review.name}
                date={review.date}
                rating={review.rating}
                comment={review.comment}
                imageProfileUrl={imageProfileUrl} 
              />
              ))}          
        </VStack>
        <Divider my={6} />
        {/* Precio y botón de reservar */}
        <HStack justify="space-between" mt={4}>
            <Text fontSize="2xl" fontWeight="bold">            
              €{camping.pricing[0].pricePerNight} / noche
            </Text>
          <ButtonBooking campingName="Prueba de camping" contactNumber="123-456-7890" />
        </HStack>
      </Box>
      </Box>      
    </MainLayout>
  );
}

export default Camping;
