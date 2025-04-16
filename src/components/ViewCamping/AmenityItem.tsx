import React from "react";
import { WrapItem, Icon, Text } from "@chakra-ui/react";
import * as Icons from "react-icons/fa"; // Importa todos los íconos de FontAwesome

type AmenityItemProps = {
  id: number;
  name: string;
  icon: string; // Nombre del ícono como string
};

const AmenityItem: React.FC<AmenityItemProps> = ({ id, name, icon }) => {
  // Obtiene el ícono dinámicamente desde react-icons
  const IconComponent = (Icons as any)[icon];

  return (
    <WrapItem key={id} alignItems="center">
      {IconComponent ? (
        <Icon as={IconComponent} color="green.500" mr={2} />
      ) : (
        <Text color="red.500" mr={2}>Icono no encontrado</Text> // Muestra un mensaje si el ícono no existe
      )}
      <Text>{name}</Text>
    </WrapItem>
  );
};

export default AmenityItem;