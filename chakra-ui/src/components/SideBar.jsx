import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { Box, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import React from "react";

const SideBar = () => {
  return (
    <Box w="15rem" bg="teal" h="100vh">
      <List w="fit-content" mx="auto" color="white" spacing="1.5rem" pt="2rem">
        <ListItem>
          <ListIcon as={CalendarIcon} />
          <Text display="inline-block" ml="1rem">
            Dashboard
          </Text>
        </ListItem>
        <ListItem>
          <ListIcon as={EditIcon} />
          <Text display="inline-block" ml="1rem">
            New Task
          </Text>
        </ListItem>
        <ListItem>
          <ListIcon as={AtSignIcon} />
          <Text display="inline-block" ml="1rem">
            Account
          </Text>
        </ListItem>
      </List>
    </Box>
  );
};

export default SideBar;
