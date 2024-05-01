import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white">
      <Text as="h1" fontSize="xl" fontWeight="bold">
        MyApp
      </Text>
      <Box>
        <Link href="/" px="2">
          Home
        </Link>
        <Link href="/product/1" px="2">
          Product Details
        </Link>
        <Link href="/about" px="2">
          About
        </Link>
      </Box>
    </Flex>
  );
}

export default Navbar;
