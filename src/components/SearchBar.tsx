// src/components/SearchBar.tsx
import React from 'react';
import { Input, InputGroup, InputRightElement, IconButton } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchBar: React.FC = () => {
  return (
    <InputGroup size="md" width={{ base: '90%', md: 'lg' }} mx="auto" my={4}>
      <Input
        pr="4.5rem" // Espacio para el botón icono
        type="text"
        placeholder="Buscar camping"
        borderRadius="md" // Bordes redondeados
        borderColor="gray.300"
        _hover={{ borderColor: 'gray.400' }}
        focusBorderColor="teal.500" // Color del borde al enfocar
      />
      <InputRightElement width="4.5rem">
        <IconButton
          h="1.75rem"
          size="sm"
          aria-label="Buscar camping"
          icon={<SearchIcon />}
          colorScheme="teal" // Usa un color scheme que coincida con la imagen
          // onClick={() => console.log('Buscar...')} // Aquí iría la lógica de búsqueda
          />
      </InputRightElement>
          </InputGroup>
  );
};

export default SearchBar;