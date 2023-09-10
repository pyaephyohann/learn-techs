import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavBar = () => {
  return (
    <Flex p="1rem" as="nav" alignItems="center">
      <HStack spacing="1.5rem">
        <Box display={{ sm: "block", md: "none" }}>
          <HamburgerIcon fontSize="1.5rem" />
        </Box>
        <Heading>Chakra Ui</Heading>
      </HStack>
      <Spacer />
      <HStack spacing="3rem">
        <Box display={{ sm: "none", md: "block" }}>Halo</Box>
        <Text display={{ sm: "none", md: "block" }}>Pyae Dev</Text>
        <Button colorScheme="teal">Log out</Button>
      </HStack>
    </Flex>
  );
};

export default NavBar;
