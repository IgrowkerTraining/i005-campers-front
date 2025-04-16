import React, { useState } from 'react';
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Icon,
  Box
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { BiFilter } from 'react-icons/bi';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <Box display="flex" gap="4" width={{ base: '90%', md: 'lg' }} mx="auto" my={4}>
      <InputGroup size="md">
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
  );
};

export default SearchBar;