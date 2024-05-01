import { Box, Flex, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex as="footer" align="center" justify="center" wrap="wrap" padding="2rem" bg="gray.800" color="white">
      <Text fontSize="sm">© 2024 MyApp. All rights reserved.</Text>
      <Text fontSize="sm" mt={2}>
        About Us: We are a leading fashion retailer offering the best clothes.
      </Text>
    </Flex>
  );
}

export default Footer;
