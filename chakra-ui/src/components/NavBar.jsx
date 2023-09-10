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

const NavBar = () => {
  return (
    <Flex p="1rem" as="nav" alignItems="center">
      <Heading>Chakra Ui</Heading>
      <Spacer />
      <HStack spacing="3rem">
        <Box>Halo</Box>
        <Text>Pyae Dev</Text>
        <Button colorScheme="teal">Log out</Button>
      </HStack>
    </Flex>
  );
};

export default NavBar;
