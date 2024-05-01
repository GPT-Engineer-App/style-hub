import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';

const ProductDetails = ({ products }) => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <Box>No product found!</Box>;
  }

  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold">{product.name}</Text>
      <Text mt={2}>{product.description}</Text>
      <Text mt={2} fontWeight="semibold">Price: ${product.price}</Text>
    </Box>
  );
};

export default ProductDetails;