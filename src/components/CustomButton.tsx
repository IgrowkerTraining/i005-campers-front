import React from 'react';
import { Button } from '@chakra-ui/react';

interface CustomButtonProps {
  variant: 'light' | 'dark';
  children: React.ReactNode;
  onClick?: () => void;
  size?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  variant,
  children,
  onClick,
  size = 'lg',
}) => {
  const isDark = variant === 'dark';

  return (
    <Button
      bg={isDark ? 'primary.main' : 'primary.light'}
      color={isDark ? 'white' : 'primary.main'}
      border={isDark ? 'none' : '1px solid'}
      borderColor={isDark ? 'none' : 'primary.main'}
      size={size}
      _hover={{
        bg: isDark ? 'primary.dark' : 'primary.light',
        color: isDark ? 'white' : 'primary.dark',
        borderColor: isDark ? 'none' : 'primary.dark',
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;