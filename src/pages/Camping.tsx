import React from 'react';
import { Box } from '@chakra-ui/react';
import MainLayout from '@/layouts/MainLayout';
import ImageCarousel from '@/components/ImageCarousel';
import ButtonBooking from '@/components/ButtonBooking';
// Importamos las imágenes locales desde src/assets/camping
import campingImage1 from '@/assets/camping/camping1.jpg';
import campingImage2 from '@/assets/camping/camping2.jpg';
import campingImage3 from '@/assets/camping/camping3.jpg';

// Creamos un array con las imágenes locales
const campingImages = [campingImage1, campingImage2, campingImage3];

const Camping: React.FC = () => {
  return (
    <MainLayout>
      <Box p={4}>
        {/* Carrusel de imágenes */}
        <ImageCarousel images={campingImages} />
      </Box>
      <ButtonBooking/>
      </MainLayout>
  );
};

export default Camping;
