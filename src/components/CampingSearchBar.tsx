import {
    Box, Flex, Input, Select, Button, IconButton, VStack, HStack, Text, useBreakpointValue, Image,
    InputGroup,
    InputRightElement,
    Icon
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { BiFilter } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import bannerimg from "@/data/imgcamping.json"

interface Props {
    onSearch: (query: string) => void;
    onFilterChange: (filter: string) => void;
}

const CampingSearchBar: React.FC<Props> = ({ onSearch, onFilterChange }) => {
    const [searchText, setSearchText] = useState('');
    const buttonSize = useBreakpointValue({ base: 'sm', md: 'md' });
    const bannerHeight = useBreakpointValue({ base: '150px', md: '450px' });
    const fontSizeTitle = useBreakpointValue({ base: 'lg', md: 'xl' });
    const fontSizeSubtitle = useBreakpointValue({ base: 'sm', md: 'md' });
    const [currentBanner, setCurrentBanner] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
           setCurrentBanner((prev) => (prev + 1) % bannerimg.length); 
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleSearch = () => {
        onSearch(searchText);
    };

    return (
        <Box mb={4}>
            <VStack spacing={3} align="stretch" mb={4}>
                <Flex gap={2} justifyContent={{ base: 'center', md: 'flex-start' }}>
                    <Select placeholder="Mi ubicación" defaultValue="Buenos Aires" size={buttonSize} border="none">
                        <option value="Buenos Aires">Buenos Aires</option>
                        <option value="Córdoba">Córdoba</option>
                        <option value="Mendoza">Mendoza</option>
                    </Select>
                </Flex>
                <Box
                    display="flex"
                    gap="4"
                    justifyContent="center"
                    width="100%" 
                    maxW={{ md: 'lg' }} 
                    mx="auto" 
                >
                    <InputGroup size="md" flex="1" maxW="500px">
                        <Input
                            type="text"
                            placeholder="Buscar camping"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            borderRadius="md"
                            borderColor="gray.300"
                            _hover={{ borderColor: 'gray.400' }}
                            focusBorderColor="primary.main"
                            bg="primary.light"
                        />
                        <InputRightElement>
                            <IconButton
                                aria-label="Buscar"
                                icon={<SearchIcon />}
                                variant="unstyled"
                                color="gray.500"
                                _hover={{ color: 'gray.700' }}
                                onClick={handleSearch}
                            />
                        </InputRightElement>
                    </InputGroup>                    
                    <IconButton
                        aria-label="Filtrar"
                        icon={<Icon as={BiFilter} />}
                        bg="secondary.main"
                        color="white"
                        borderRadius="md"
                        _hover={{ bg: 'secondary.accent' }}
                        _active={{ bg: 'secondary.accent' }}
                    />
                </Box>
            </VStack>

            <HStack
                spacing={2}
                mb={4}
                overflowX="auto"
                justifyContent="center" // Centramos los botones en todas las pantallas
                width="100%" // Aseguramos que ocupe todo el ancho disponible
                mx="auto" // Centramos el contenedor horizontalmente
            >
                {['Mejores reseñas', 'Bosque', 'Río/Lago', 'Montaña'].map((filter) => (
                    <Button
                        key={filter}
                        bg="#b3e0d3"
                        size={buttonSize}
                        variant="outline"
                        colorScheme="teal"
                        onClick={() => onFilterChange(filter)}
                        whiteSpace="nowrap"
                    >
                        {filter}
                    </Button>
                ))}
            </HStack>

            <Text fontSize={fontSizeTitle} fontWeight="bold" mb={2} textAlign={{ base: 'center', md: 'left' }}>
                Encuentra tu próxima aventura
            </Text>
            <Box position="relative" h={bannerHeight} bg="gray.200" borderRadius="md" overflow="hidden">
                <Image
                    src={bannerimg[currentBanner].url}
                    alt={bannerimg[currentBanner].alt}
                    objectFit="cover"
                    w="100%"
                    h="100%"
                />
                <Box position="absolute" top="50%" left="5%" transform="translateY(-50%)" color="white" bg="blackAlpha.600" p={2} borderRadius="md">
                    <Text fontSize={fontSizeSubtitle} fontWeight="bold">15% de descuento en tu primer reserva</Text>
                </Box>
            </Box>
        </Box>
    );
};

export default CampingSearchBar;