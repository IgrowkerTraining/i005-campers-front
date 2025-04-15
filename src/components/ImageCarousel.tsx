import React, { useState, useEffect } from 'react';
import { Box, Image, Flex } from '@chakra-ui/react';


type ImageCarouselProps = {
  images: string[];
  autoSlideInterval?: number; 
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, autoSlideInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar a la siguiente imagen
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // // Cambiar a la imagen anterior
  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  // };

  // cambio automático de imágenes cada 3 segundos
  useEffect(() => {
    const intervalId = setInterval(nextSlide, autoSlideInterval);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box position="relative" width="100%" height="500px" overflow="hidden">
      {/* Imagen actual */}
      <Box display="flex" width="100%" height="100%">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Camping image ${index + 1}`}
            width="100%"
            height="100%"
            objectFit="cover"
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
              transition: 'transform 0.5s ease-in-out',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
        ))}
      </Box>
      {/* Indicadores circulares debajo del carrusel */}
      <Flex
        position="absolute"
        bottom="20px"
        left="50%"
        transform="translateX(-50%)"
        gap={2}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentIndex(index)}
            w={3}
            h={3}
            borderRadius="50%"
            bg={currentIndex === index ? 'secondary.main' : 'gray.400'}
            cursor="pointer"
            transition="background-color 0.3s"
            _hover={{ bg: 'gray.600' }}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default ImageCarousel;
