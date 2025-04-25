import React, { useState, useEffect } from 'react';
import { Box, Button, FormControl, Center, FormLabel, Input, Text, VStack, useToast, Textarea, } from '@chakra-ui/react';
import { CampingType, Location, Pricing, NearbyAttraction, Amenity } from '@/types/camping.ts';
import icon from "@/assets/Icongreen.png";
import name from "@/assets/namegreen.png";
import { useNavigate } from 'react-router-dom';
import { FaCloudUploadAlt } from "react-icons/fa";
import { useDisclosure } from '@chakra-ui/react';
import { BookingModal } from '@/components/BookingModal/BookingModal';
import { BookingSuccess } from '@/components/BookingSuccess/BookingSuccess.tsx';
import MainLayout from '@/layouts/MainLayout';

const CampingForm: React.FC = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [bookingDetails, setBookingDetails] = useState<{
    campingName: string;
    startDate: string;
    endDate: string;
  } | null>(null);
  const [submittedCamping, setSubmittedCamping] = useState<Partial<CampingType> | null>(null);

    const availableAmenities: Amenity[] = [
        { id: 1, name: "Duchas", available: true, icon: "🚿" },
        { id: 2, name: "Wi-Fi", available: true, icon: "📶" },
        { id: 3, name: "Baños", available: true, icon: "🚽" },
        { id: 4, name: "Parrillas", available: true, icon: "🔥" },
        { id: 5, name: "Alquiler de carpas", available: true, icon: "⛺" },
        { id: 6, name: "Cancha de fútbol", available: true, icon: "⚽" },
        { id: 7, name: "Yoga", available: true, icon: "🧘" },
        { id: 8, name: "Proveeduría", available: true, icon: "🛒" },
        { id: 9, name: "Estacionamiento", available: true, icon: "🅿️" },
        { id: 10, name: "Excursiones", available: true, icon: "🥾" },
        { id: 11, name: "Pileta", available: true, icon: "🏊" },
    ];

    const [formData, setFormData] = useState<Partial<CampingType>>({
        name: '',
        description: '',
        contactPhone: '',
        location: {
            id: 0,
            campingAddress: '',
            mapLink: '',
            city: '',
            country: '',
        },
        pricing: [
            { id: 0, tarifa: 'Noche en carpa', pricePerNight: 0, campingId: 0 },
            { id: 1, tarifa: 'Noche en vehículo', pricePerNight: 0, campingId: 0 },
            { id: 3, tarifa: 'Pase diario', pricePerNight: 0, campingId: 0 },
        ],
    });

    const [previewImages, setPreviewImages] = useState<string[]>([]);

    const [imageFiles, setImageFiles] = useState<File[]>([]);

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const selected = Array.from(files).filter(file => file.type.startsWith("image/"));
            const previews = selected.map(file => URL.createObjectURL(file));
            setPreviewImages(previews);
            setImageFiles(selected); // Guardamos los archivos
        }
    };

    const handleChange = (field: keyof CampingType, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleLocationChange = (field: keyof Location, value: string) => {
        setFormData(prev => ({
            ...prev,
            location: {
                ...(prev.location || {
                    id: 0,
                    campingAddress: '',
                    mapLink: '',
                    city: '',
                    country: '',
                }),
                [field]: value,
            },
        }));
    };

    const handlePricingChange = (index: number, field: keyof Pricing, value: string | number) => {
        setFormData(prev => {
            const updatedPricing = [...(prev.pricing || [])];
            updatedPricing[index] = {
                ...(updatedPricing[index] || { id: 0, tarifa: '', pricePerNight: 0, campingId: 0 }),
                [field]: value,
            };
            return {
                ...prev,
                pricing: updatedPricing,
            };
        });
    };

    const toggleAmenity = (amenity: Amenity) => {
        setFormData(prev => {
            const currentAmenities = prev.amenities || [];
            const exists = currentAmenities.some(a => a.id === amenity.id);
            const updated = exists
                ? currentAmenities.filter(a => a.id !== amenity.id)
                : [...currentAmenities, amenity];

            return { ...prev, amenities: updated };
        });
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enviando camping:', formData);

    // Guardar los datos del camping para mostrarlos en el modal
    setSubmittedCamping(formData);

    // Abrir el modal para confirmar la publicación
    onOpen();
  };

  const handleConfirmBooking = () => {
    // Aquí agregar la llamada al POST a la API para guardar el camping
    console.log('Publicando camping:', submittedCamping);

    toast({
      title: 'Camping publicado',
      description: 'Tu camping ha sido publicado correctamente.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });

    // Mostrar mensaje de éxito
    setBookingDetails({
      campingName: submittedCamping?.name || 'Camping Sin Nombre',
      startDate: 'N/A', // No aplica para dueños
      endDate: 'N/A',  // No aplica para dueños
    });

    // Cerrar el modal
    onClose();
  };

  const handleCloseSuccess = () => {
    setBookingDetails(null);
    setSubmittedCamping(null);
    navigate('/');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      {bookingDetails ? (
        <BookingSuccess
          campingName={bookingDetails.campingName}
          startDate={bookingDetails.startDate}
          endDate={bookingDetails.endDate}
          onClose={handleCloseSuccess}
        />
      ) : (
        <Box
          maxW="400px"
          mx="auto"
          mt="8"
          p="6"
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="lg"
          bg="primary.light"
        >
          <Center mb="8">
            <Box textAlign="center">
              <img src={icon} alt="Campers Icon" style={{ width: "150px" }} />
              <img src={name} alt="Campers Name" style={{ width: "150px" }} />
            </Box>
          </Center>
          <Text textAlign="center" fontSize="2xl" fontWeight="bold" mb="6">
            Registrá tu camping
          </Text>
          <Box maxW="lg" mx="auto" p={6}>
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="stretch">
                <FormControl isRequired>
                  <FormLabel>Nombre</FormLabel>
                  <Input
                    value={formData.name}
                    placeholder='Escribí el nombre del camping'
                    onChange={(e) => handleChange('name', e.target.value)}
                    sx={{ '::placeholder': { fontSize: 'xs' } }}
                    bg='white'
                  />
                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Ubicación</FormLabel>
                                    <Input
                                        value={formData.location?.campingAddress || ''}
                                        placeholder='Escribí la dirección del camping'
                                        onChange={(e) => handleLocationChange('campingAddress', e.target.value)}
                                        sx={{ '::placeholder': { fontSize: 'xs' } }}
                                        bg='white'
                                    />
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Mapa</FormLabel>
                                    <Input
                                        value={formData.location?.mapLink || ''}
                                        placeholder='Pegá acá el link de google maps del camping'
                                        onChange={(e) => handleLocationChange('mapLink', e.target.value)}
                                        sx={{ '::placeholder': { fontSize: 'xs' } }}
                                        bg='white'
                                    />
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Teléfono de contacto</FormLabel>
                                    <Input
                                        value={formData.contactPhone}
                                        placeholder='+549'
                                        sx={{ '::placeholder': { fontSize: 'xs' } }}
                                        onChange={(e) => handleChange('contactPhone', e.target.value)}
                                        bg='white'
                                    />
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Descripción</FormLabel>
                                    <Textarea
                                        value={formData.description}
                                        placeholder='Contá un poco sobre el camping. Los viajeros podrán ver esta descripción'
                                        sx={{ '::placeholder': { fontSize: 'xs' } }}
                                        onChange={(e) => handleChange('description', e.target.value)}
                                        bg='white'
                                    />
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Galería</FormLabel>
                                    <Button
                                        as="label"
                                        bg="white"
                                        color="gray.500"
                                        fontSize="sm"
                                        border="1px dashed black"
                                        borderRadius="md"
                                        _hover={{ bg: "gray.100" }}
                                        cursor="pointer"
                                        w="100%"
                                        h="150px"
                                        py={6}
                                        textAlign="center"
                                        display="flex"
                                        flexDirection="column"
                                        alignItems="center"
                                        gap={2}
                                    >
                                        <Box position="relative">
                                            <FaCloudUploadAlt size="50px" color="#38A169" />
                                            <Box
                                                position="absolute"
                                                left="50%"
                                                bottom="4px"
                                                transform="translateX(-50%)"
                                                w="8px"
                                                h="8px"
                                                borderBottom="2px solid white"
                                                borderRight="2px solid white"
                                                transformOrigin="center"
                                            />
                                        </Box>
                                        <Text fontSize="xs" color="gray.500">
                                            Tocá para subir imágenes y videos
                                        </Text>
                                        <Input
                                            type="file"
                                            accept="image/*"
                                            multiple
                                            display="none"
                                            onChange={handleFileInput}
                                        />
                                    </Button>
                                </FormControl>

                                {previewImages.length > 0 && (
                                    <Box mt={4} display="flex" flexWrap="wrap" gap={3}>
                                        {previewImages.map((src, index) => (
                                            <Box key={index} border="1px solid #ccc" p={1} borderRadius="md">
                                                <img
                                                    src={src}
                                                    alt={`preview-${index}`}
                                                    style={{ width: '150px', height: 'auto', objectFit: 'cover', borderRadius: '8px' }}
                                                />
                                            </Box>
                                        ))}
                                    </Box>
                                )}

                                <FormControl>
                                    <FormLabel fontSize="sm">Enclaves aledaños (Río, lago, montaña...)</FormLabel>
                                    <Input
                                        placeholder="Nombrá acá los enclaves cercanos al camping"
                                        bg="white"
                                        fontSize="xs"
                                        value={formData.nearbyAttractions?.[0]?.name || ''}
                                        onChange={(e) => {
                                            const newAttraction: NearbyAttraction = {
                                                id: 0,
                                                name: e.target.value,
                                                type: formData.nearbyAttractions?.[0]?.type || '',
                                                distance: formData.nearbyAttractions?.[0]?.distance || 0,
                                                campingId: 0,
                                            };
                                            setFormData((prev) => ({ ...prev, nearbyAttractions: [newAttraction] }));
                                        }}
                                    />
                                </FormControl>

                                <FormControl>
                                    <Text fontSize="xl" fontWeight="bold" mt={6} mb={2}>
                                        Servicios
                                    </Text>
                                    <FormLabel fontSize="sm">
                                        Seleccioná los servicios disponibles en el camping
                                    </FormLabel>
                                    <Box display="flex" flexWrap="wrap" gap={3}>
                                        {availableAmenities.map((amenity) => {
                                            const isSelected = formData.amenities?.some((a) => a.id === amenity.id);
                                            return (
                                                <Button
                                                    key={amenity.id}
                                                    onClick={() => toggleAmenity(amenity)}
                                                    variant={isSelected ? "solid" : "outline"}
                                                    colorScheme={isSelected ? "teal" : "gray"}
                                                    size="sm"
                                                    flexGrow={1}
                                                    whiteSpace="normal"
                                                    textAlign="center"
                                                >
                                                    {amenity.icon} {amenity.name}
                                                </Button>
                                            );
                                        })}
                                    </Box>
                                </FormControl>

                                <Text fontSize="xl" fontWeight="bold" mt={4} mb={2}>
                                    Tarifas
                                </Text>

                                <FormControl isRequired>
                                    <FormLabel>Noche en carpa</FormLabel>
                                    <Input
                                        type="number"
                                        placeholder='Ingresá un monto en $ARS'
                                        value={formData.pricing?.[0]?.pricePerNight || ''}
                                        onChange={(e) => {
                                            const value = parseFloat(e.target.value);
                                            handlePricingChange(0, 'pricePerNight', isNaN(value) ? 0 : value);
                                        }}
                                        mb={2}
                                        bg='white'
                                        sx={{ '::placeholder': { fontSize: 'xs' } }}
                                    />
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Noche en vehículo</FormLabel>
                                    <Input
                                        type="number"
                                        placeholder='Ingresá un monto en $ARS'
                                        value={formData.pricing?.[1]?.pricePerNight || ''}
                                        onChange={(e) => {
                                            const value = parseFloat(e.target.value);
                                            handlePricingChange(1, 'pricePerNight', isNaN(value) ? 0 : value);
                                        }}
                                        mb={2}
                                        bg='white'
                                        sx={{ '::placeholder': { fontSize: 'xs' } }}
                                    />
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Pase diario</FormLabel>
                                    <Input
                                        type="number"
                                        placeholder='Ingresá un monto en $ARS'
                                        value={formData.pricing?.[2]?.pricePerNight || ''}
                                        onChange={(e) => {
                                            const value = parseFloat(e.target.value);
                                            handlePricingChange(2, 'pricePerNight', isNaN(value) ? 0 : value);
                                        }}
                                        mb={2}
                                        bg='white'
                                        sx={{ '::placeholder': { fontSize: 'xs' } }}
                                    />
                                </FormControl>

                                <Button type="submit" colorScheme="teal" mt={4}>
                                    Publicar
                                </Button>

                                <Button
                                    variant="outline"
                                    color="gray.600"
                                    borderColor="black"
                                    bg="white"
                                    _hover={{ bg: "gray.100" }}
                                    onClick={() => navigate('/')}
                                    mt={2}
                                >
                                    Cancelar
                                </Button>
                            </VStack>
                        </form>
                    </Box>
                </Box>
            )}

      {submittedCamping && (
        <BookingModal
          isOpen={isOpen}
          onClose={onClose}
          onConfirm={handleConfirmBooking}
          campingData={submittedCamping}
        />
      )}
    </MainLayout>
  );
};

export default CampingForm;