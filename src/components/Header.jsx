import { Box, Flex, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Flex as="header" align="center" justify="center" wrap="wrap" padding="1rem" bg="gray.800" color="white">
      <Text fontSize="lg">Welcome to Our Online Store!</Text>
    </Flex>
  );
}

export default Header;
