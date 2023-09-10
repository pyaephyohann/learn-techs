import { Box, Flex } from "@chakra-ui/react";
import "./App.css";

function App() {
  const boxStyle = {
    w: "20rem",
    h: "10rem",
    border: "2px solid grey",
  };
  return (
    <Flex mt="0.5rem" wrap="wrap" gap="3rem" justify="center">
      <Box sx={boxStyle}></Box>
      <Box sx={boxStyle}></Box>
      <Box sx={boxStyle}></Box>
      <Box sx={boxStyle}></Box>
      <Box sx={boxStyle}></Box>
      <Box sx={boxStyle}></Box>
      <Box sx={boxStyle}></Box>
      <Box sx={boxStyle}></Box>
      <Box sx={boxStyle}></Box>
      <Box sx={boxStyle}></Box>
      <Box sx={boxStyle}></Box>
      <Box sx={boxStyle}></Box>
      <Box sx={boxStyle}></Box>
      <Box sx={boxStyle}></Box>
      <Box sx={boxStyle}></Box>
      <Box sx={boxStyle}></Box>
      <Box sx={boxStyle}></Box>
    </Flex>
  );
}

export default App;
