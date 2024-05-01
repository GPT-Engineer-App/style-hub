import { useParams } from "react-router-dom";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";

const ProductDetails = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Image src={product.image} alt={product.name} borderRadius="md" />
      <Flex align="center" mt={2} justifyContent="space-between">
        <Text fontWeight="bold">{product.name}</Text>
        <Text>{product.price}</Text>
      </Flex>
      <Flex align="center" mt={2} justifyContent="space-between">
        <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="outline" onClick={() => alert("Added to cart!")}>
          Add to Cart
        </Button>
        <Button colorScheme="pink" variant="ghost" onClick={() => alert("Liked!")}>
          <FaHeart />
        </Button>
        <Button colorScheme="blue" variant="ghost" onClick={() => alert("Search coming soon!")}>
          <FaSearch />
        </Button>
      </Flex>
    </Box>
  );
};

export default ProductDetails;
