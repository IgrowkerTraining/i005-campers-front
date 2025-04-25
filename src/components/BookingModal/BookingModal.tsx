import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  VStack,
  HStack,
  Box,
  Divider,
} from '@chakra-ui/react';
import { CampingType, Amenity } from '@/types/camping';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void; 
  campingData: Partial<CampingType>; 
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  campingData,
}) => {
  const renderAmenities = (amenities: Amenity[] | undefined) => {
    if (!amenities || amenities.length === 0) {
      return <Text color="gray.500">No se seleccionaron servicios.</Text>;
    }
    return (
      <HStack spacing={2} wrap="wrap">
        {amenities.map((amenity) => (
          <Box
            key={amenity.id}
            bg="teal.100"
            px={2}
            py={1}
            borderRadius="md"
            fontSize="sm"
          >
            {amenity.icon} {amenity.name}
          </Box>
        ))}
      </HStack>
    );
  };

  const renderPricing = (pricing: CampingType['pricing'] | undefined) => {
    if (!pricing || pricing.length === 0) {
      return <Text color="gray.500">No se especificaron tarifas.</Text>;
    }
    return (
      <VStack align="start" spacing={1}>
        {pricing.map((price, index) => (
          <Text key={index} fontSize="sm">
            {price.tarifa}: ${price.pricePerNight} / noche
          </Text>
        ))}
      </VStack>
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size={{ base: 'xs', md: 'md' }}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Resumen del Camping - {campingData.name || 'Sin Nombre'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4} align="start">
            {/* Nombre del Camping */}
            <Box>
              <Text fontWeight="bold">Nombre:</Text>
              <Text>{campingData.name || 'No especificado'}</Text>
            </Box>

            {/* Ubicación */}
            <Box>
              <Text fontWeight="bold">Ubicación:</Text>
              <Text>
                {campingData.location?.campingAddress || 'No especificada'},{' '}
                {campingData.location?.city || 'Ciudad no especificada'},{' '}
                {campingData.location?.country || 'País no especificado'}
              </Text>
              <Text>
                <Text as="span" fontWeight="bold">Enlace al mapa:</Text>{' '}
                {campingData.location?.mapLink ? (
                  <a href={campingData.location.mapLink} target="_blank" rel="noopener noreferrer">
                    Ver en Google Maps
                  </a>
                ) : (
                  'No especificado'
                )}
              </Text>
            </Box>

            {/* Teléfono de Contacto */}
            <Box>
              <Text fontWeight="bold">Teléfono de Contacto:</Text>
              <Text>{campingData.contactPhone || 'No especificado'}</Text>
            </Box>

            {/* Descripción */}
            <Box>
              <Text fontWeight="bold">Descripción:</Text>
              <Text>{campingData.description || 'No especificada'}</Text>
            </Box>

            {/* Servicios */}
            <Box>
              <Text fontWeight="bold">Servicios:</Text>
              {renderAmenities(campingData.amenities)}
            </Box>

            {/* Tarifas */}
            <Box>
              <Text fontWeight="bold">Tarifas:</Text>
              {renderPricing(campingData.pricing)}
            </Box>

            {/* Enclaves Aledaños */}
            <Box>
              <Text fontWeight="bold">Enclaves Aledaños:</Text>
              <Text>
                {campingData.nearbyAttractions?.[0]?.name || 'No especificados'}
              </Text>
            </Box>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Editar
          </Button>
          <Button colorScheme="teal" onClick={onConfirm}>
            Publicar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};