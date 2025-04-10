import { Box, Heading } from '@chakra-ui/react';
import MainLayout from '@/layouts/MainLayout';
import ImageCarousel from '@/components/ImageCarousel';
import ButtonBooking from '@/components/ButtonBooking';

// Importar las imágenes de la carpeta assets
import image1 from '@/assets/camping/camping1.jpg';
import image2 from '@/assets/camping/camping2.jpg';
import image3 from '@/assets/camping/camping3.jpg';

function Camping() {
  const images = [image1, image2, image3]; // Array con las imágenes importadas

  return (
    <MainLayout>
      {/* Pasar las imágenes como prop al carrusel */}
      <ImageCarousel images={images} />
      <Box p={4}>
        <Heading>Prueba de About</Heading>
      </Box>
      <ButtonBooking />
    </MainLayout>
  );
}

export default Camping;
