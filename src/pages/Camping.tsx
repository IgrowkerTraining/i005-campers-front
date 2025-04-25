import { useEffect, useState } from 'react';
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
import { useCampingStore } from '../store/CampingStore';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { CampingType } from '@/types/camping';

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
  const { fetchCampings, campings, isLoading, error } = useCampingStore();
  const [currentCamping, setCurrentCamping] = useState<CampingType | null>(null);
  const images = [image1, image2, image3];
  const imageProfileUrl = '/images/profiles';

  useEffect(() => {
    const loadCampings = async () => {
      console.log('🚀 Starting to load campings...');
      try {
        await fetchCampings();
        console.log('📦 Raw campings response:', campings);
      } catch (error) {
        console.error('❌ Error loading campings:', error);
      }
    };

    if (!campings || campings.length === 0) {
      loadCampings();
    }
  }, [fetchCampings, campings]);

  useEffect(() => {
    console.log('🔍 Current ID:', id);
    console.log('📋 Current campings state:', campings);
    
    if (campings?.length > 0 && id) {
      const camping = campings.find(camp => {
        console.log('Comparing:', { campId: camp.id, searchId: Number(id) });
        return Number(camp.id) === Number(id);
      });
      console.log('🎯 Found camping:', camping);
      setCurrentCamping(camping || null);
    }
  }, [campings, id]);

  console.log('⚡ Render state:', {
    isLoading,
    error,
    campingsLength: campings?.length,
    currentCampingId: currentCamping?.id,
    urlId: id
  });

  if (isLoading) {
    return (
      <Box textAlign="center" py={10}>
        <Spinner size="xl" />
        <Text mt={4}>Cargando camping...</Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" py={10}>
        <Text color="red.500">{error}</Text>
      </Box>
    );
  }

  if (!currentCamping) {
    return (
      <Box textAlign="center" py={10}>
        <Text>No se encontró el camping con ID: {id}</Text>
      </Box>
    );
  }

  return (
    <MainLayout>      
      <Box fontFamily="body">
        {currentCamping?.media && currentCamping.media.length > 0 ? (
          <ImageCarousel images={currentCamping.media.map(m => m.url)} />
        ) : (
          <ImageCarousel images={images} />
        )}
        <Box p={4}>
          <VStack align="start" spacing={2}>
            <HStack width="100%" justify="space-between">
              <Heading size="lg" fontWeight="semibold" fontSize="20px">
                {currentCamping?.name}
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
                <Icon as={FaMapMarkerAlt} />
                <Text>
                  {currentCamping?.location.campingAddress}
                </Text>
              </HStack>
              <Button 
                as="a" 
                href={currentCamping?.location.mapLink} 
                target="_blank"
                variant="link" 
                color="green.500"
              >
                Ver en el mapa
              </Button>
            </HStack>
          </VStack>

          <Text mt={4} color="gray.700">
            {currentCamping.description}
          </Text>

          <Wrap spacing={4} mt={4}>
            {currentCamping.amenities.map((amenity) => (
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

          <HStack mb={4}>
            <VStack align="center" spacing={2}>
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

          <HStack mb={4} justify="space-between">
            <Heading size="md">
              Reseñas
            </Heading>
            <Button variant="link" color="green.500">
              Ver más reseñas
            </Button>
          </HStack>
          <VStack align="start" spacing={4}>
            {reviews
              .filter((review) => review.campingId === Number(id))
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
          <HStack justify="space-between" mt={4}>
            <Text fontSize="2xl" fontWeight="bold">            
              €{currentCamping.pricing[0].pricePerNight} / noche
            </Text>
            <ButtonBooking
              campingId={currentCamping.id}
              campingName={currentCamping.name}
            />
          </HStack>
        </Box>
      </Box>      
    </MainLayout>
  );
}

export default Camping;