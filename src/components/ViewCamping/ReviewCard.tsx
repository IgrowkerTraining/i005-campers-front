import React from "react";
import {
  Box,
  HStack,
  VStack,
  Image,
  Text,
  Icon,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

type ReviewCardProps = {
  profilePic: string;
  name: string;
  date: string;
  rating: number;
  comment: string;
  imageProfileUrl?: string; // Ruta base opcional para las imágenes de perfil
};

const ReviewCard: React.FC<ReviewCardProps> = ({
  profilePic,
  name,
  date,
  rating,
  comment,
  imageProfileUrl = "",
}) => {
  return (
    <Box w="100%" p={4} borderWidth="1px" borderRadius="md">
      <HStack align="start" spacing={4}>
        <Image
          src={`${imageProfileUrl}/${profilePic}`}
          alt={name}
          borderRadius="full"
          boxSize="50px"
          objectFit="cover"
        />
        <VStack align="start" spacing={0}>
          <Text fontWeight="bold">{name}</Text>
          <Text fontSize="sm" color="gray.500">
            {date}
          </Text>
        </VStack>
        <VStack align="end" spacing={0} flex="1">
          <Text fontWeight="bold">Puntuación {rating.toFixed(1)}</Text>
          <HStack>
            {Array.from({ length: 5 }, (_, i) => (
              <Icon
                key={i}
                as={FaStar}
                color={i < Math.round(rating) ? "yellow.400" : "gray.300"}
              />
            ))}
          </HStack>
        </VStack>
      </HStack>
      {/* Comentario */}
      <Text mt={4}>{comment}</Text>
    </Box>
  );
};

export default ReviewCard;