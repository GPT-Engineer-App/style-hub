import { Box, Flex, Text, Image, Button, SimpleGrid, Heading, Container } from "@chakra-ui/react";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Classic Tee",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1629956356549-63b8a150c8ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwdGVlfGVufDB8fHx8MTcxNDU5Mjk0NHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Casual Jacket",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1603394151492-5e9b974b090b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBqYWNrZXR8ZW58MHx8fHwxNzE0NTkyOTQ1fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Denim Jeans",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1560243563-062bfc001d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZW5pbSUyMGplYW5zfGVufDB8fHx8MTcxNDU5Mjk0NXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    name: "Sneakers",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbmVha2Vyc3xlbnwwfHx8fDE3MTQ1OTI5NDh8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 5,
    name: "Baseball Cap",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1596455607563-ad6193f76b17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYXNlYmFsbCUyMGNhcHxlbnwwfHx8fDE3MTQ1OTI5NDh8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 6,
    name: "Sunglasses",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdW5nbGFzc2VzfGVufDB8fHx8MTcxNDU5Mjk0OHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 7,
    name: "Leather Wallet",
    price: "$34.99",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 8,
    name: "Elegant Watch",
    price: "$78.99",
    image: "https://images.unsplash.com/photo-1576675784201-0e142b423952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 9,
    name: "Stylish Hat",
    price: "$25.99",
    image: "https://images.unsplash.com/photo-1523480717984-b1e3f5a0c5a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Heading as="h1" size="xl" textAlign="center" my={10}>
        Welcome to Our Clothing Store
      </Heading>
      <Heading as="h2" size="lg" textAlign="center" my={5}>
        Popular Products
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {products.map((product) => (
          <Box key={product.id} p={5} shadow="md" borderWidth="1px">
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
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;
