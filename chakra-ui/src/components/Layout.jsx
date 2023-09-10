import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <Flex>
      <SideBar />
      <Box w="100%">
        <NavBar />
        <Box p="1rem">{children}</Box>
      </Box>
    </Flex>
  );
};

export default Layout;
