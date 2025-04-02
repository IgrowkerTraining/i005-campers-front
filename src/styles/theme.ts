import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      500: '#2a69ac',
    },
    primary: {
      main: '#40b291',    
      dark: '#00120d',    
      light: '#f6fffc',   
    },
    secondary: {
      main: '#0097b1',    
      accent: '#7ed958',  
    },
  },
});

export default theme;