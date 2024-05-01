import { Box, Flex, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex as="footer" align="center" justify="center" wrap="wrap" padding="1rem" bg="gray.800" color="white">
      <Text fontSize="sm">© 2024 MyApp. All rights reserved.</Text>
    </Flex>
  );
}

export default Footer;
