import logo from '../assets/navbar-icon.png';

import { Box, Image, Flex, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { FiMenu } from "react-icons/fi";

export const Navbar = () => {
    return (
        <Box bg={'white'} p={6}>
            <Flex justifyContent={'space-between'}>
                {/* Imagen del logo */}
                <Image src={logo} alt="campers logo" w="200px" />

                 {/* Menú desplegable */}
                <Menu>
                    {/* Botón del menú que activa el menú desplegable */}
                    <MenuButton
                        as={IconButton}
                        icon={<FiMenu />}
                        variant="outline"
                        size="md"
                        display="flex"
                        alignItems="center" 
                        border="none"
                    />
                    {/* Lista de elementos del menú */}
                    <MenuList>
                        <MenuItem>Inicio</MenuItem>
                        <MenuItem>Regístrate/Inicia sesión</MenuItem>
                        <MenuItem>Buscar Campings</MenuItem>
                        <MenuItem>Registro de Camping</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </Box>
    )
}