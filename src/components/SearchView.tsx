import React from 'react';
import {
  Box,
  Flex,
  Text,
  Input,
  Select,
  Button,
  Image,
  VStack,
  HStack,
  IconButton,
  useBreakpointValue
} from '@chakra-ui/react';
import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons';

interface Camping {
  name: string;
  location: string;
  price: string;
  rating: number;
}

interface CampingSearchProps {
  campings: Camping[];
  onSearch: (query: string) => void;
  onFilterChange: (filter: string) => void;
}

const CampingSearch: React.FC<CampingSearchProps> = ({
  campings,
  onSearch,
  onFilterChange,
}) => {
  const bannerHeight = useBreakpointValue({ base: '150px', md: '200px' });
  const fontSizeTitle = useBreakpointValue({ base: 'lg', md: 'xl' });
  const fontSizeSubtitle = useBreakpointValue({ base: 'sm', md: 'md' });
  const buttonSize = useBreakpointValue({ base: 'sm', md: 'md' });

  return (
    <Box p={4} maxW="container.xl" mx="auto">
      <VStack spacing={3} align="stretch" mb={4}>
        <Flex align="center" gap={2}>
          <Select
            placeholder="Mi ubicación"
            defaultValue="Buenos Aires"
            size={buttonSize}
            flex="1"
          >
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Córdoba">Córdoba</option>
            <option value="Mendoza">Mendoza</option>
          </Select>
          <IconButton
            aria-label="Filtros"
            icon={<HamburgerIcon />}
            size={buttonSize}
            variant="outline"
            colorScheme="teal"
          />
        </Flex>

        <Flex align="center" gap={2}>
          <Input
            placeholder="Buscar Camping"
            size={buttonSize}
            onChange={(e) => onSearch(e.target.value)}
          />
          <IconButton
            aria-label="Buscar"
            icon={<SearchIcon />}
            size={buttonSize}
            colorScheme="teal"
          />
        </Flex>
      </VStack>

      <HStack spacing={2} mb={4} overflowX="auto">
        {['Mejores reseñas', 'Bosque', 'Río/Lago', 'Montaña'].map((filter) => (
          <Button
            key={filter}
            size={buttonSize}
            variant="outline"
            colorScheme="teal"
            bg="#b3e0d3"
            onClick={() => onFilterChange(filter)}
            whiteSpace="nowrap"
          >
            {filter}
          </Button>
        ))}
      </HStack>
      
      <Box mb={4}>
        <Text fontSize={fontSizeTitle} fontWeight="bold" mb={2}>
          Encuentra tu próxima aventura
        </Text>
        <Box
          position="relative"
          h={bannerHeight}
          bg="gray.200"
          borderRadius="md"
          overflow="hidden"
        >
          <Image
            src="https://via.placeholder.com/800x200" 
            alt="Camping Banner"
            objectFit="cover"
            w="100%"
            h="100%"
          />
          <Box
            position="absolute"
            top="50%"
            left="5%"
            transform="translateY(-50%)"
            color="white"
            bg="blackAlpha.600"
            p={2}
            borderRadius="md"
          >
            <Text fontSize={fontSizeSubtitle} fontWeight="bold">
              15% de descuento en tu primer reserva
            </Text>
          </Box>
        </Box>
      </Box>

      <Text fontSize={fontSizeTitle} fontWeight="bold" mb={2}>
        Lo más visitado
      </Text>
      <VStack spacing={4} align="stretch">
        {campings.map((camping, index) => (
          <Flex
            key={index}
            p={3}
            borderWidth="1px"
            borderRadius="md"
            align="center"
            gap={3}
          >
            <Image
              src="https://via.placeholder.com/100" 
              alt={camping.name}
              boxSize="100px"
              objectFit="cover"
              borderRadius="md"
            />
            <Box flex="1">
              <Text fontWeight="bold">{camping.name}</Text>
              <Text fontSize="sm" color="gray.500">
                {camping.location}
              </Text>
              <Text fontSize="sm" fontWeight="bold">
                {camping.price}
              </Text>
              <Text fontSize="sm" color="yellow.500">
                {'★'.repeat(Math.round(camping.rating))} {camping.rating}
              </Text>
            </Box>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

const SearchView: React.FC = () => {
  const campings: Camping[] = [
    {
      name: 'Camping El Refugio Verde',
      location: 'Bariloche, Río Negro',
      price: '$5.000 /noche',
      rating: 4.8,
    },
    {
      name: 'Camping El Yeti',
      location: 'Villa La Angostura, Neuquén',
      price: '$7.000 /noche',
      rating: 4.5,
    },
    {
      name: 'Camping Selva Negra',
      location: 'El Chaltén, Santa Cruz',
      price: '$8.500 /noche',
      rating: 4.3,
    },
  ];

  const handleSearch = (query: string) => {
    console.log('Buscando:', query);
  };

  const handleFilterChange = (filter: string) => {
    console.log('Filtro seleccionado:', filter);
  };

  return (
    <CampingSearch
      campings={campings}
      onSearch={handleSearch}
      onFilterChange={handleFilterChange}
    />
  );
};

export default SearchView;