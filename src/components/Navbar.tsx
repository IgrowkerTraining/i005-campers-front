import logo from '../assets/navbar-icon.png';
import { Box, Image, Flex, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { FiMenu } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import { useUserStore } from '@/store/userStore';

export const Navbar = () => {    
    const user = JSON.parse(localStorage.getItem('Campers-user') || '{}');
    const isOwner = localStorage.getItem('Campers-owner') === 'true';
    const { logout } = useUserStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    // Determinar la ruta del logo según el estado de autenticación
    const logoRedirectPath = user.id ? '/search' : '/';

    return (
        <Box bg={'white'} p={6}>
            <Flex justifyContent={'space-between'}>
                <Link to={logoRedirectPath}>
                    <Image src={logo} alt="campers logo" w="200px" />
                </Link>

                <Menu>
                    <MenuButton
                        as={IconButton}
                        icon={<FiMenu />}
                        variant="outline"
                        size="md"
                        display="flex"
                        alignItems="center" 
                        border="none"
                    />
                    <MenuList>
                        {!user.id ? (
                            <>
                                <MenuItem as={Link} to="/">Inicio</MenuItem>
                                <MenuItem as={Link} to="/sobre-nosotros">Sobre nosotros</MenuItem>
                                <MenuItem as={Link} to="/contacto">Contacto</MenuItem>
                            </>
                        ) : (
                            <>
                                <MenuItem as={Link} to="/search">Buscar Campings</MenuItem>
                                {isOwner && (
                                    <MenuItem as={Link} to="/registro-camping">Registro de Camping</MenuItem>
                                )}
                                <MenuItem _hover={{bg:"red", color:"white"}} onClick={handleLogout}>Cerrar sesión</MenuItem>
                            </>
                        )}
                    </MenuList>
                </Menu>
            </Flex>
        </Box>
    );
};