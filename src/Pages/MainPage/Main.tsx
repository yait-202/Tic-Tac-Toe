import { Center, Text } from "@chakra-ui/react";
import React from "react";
import Game from "./Components/Game/Game";

const Main = () => {
  return (
    <Center bg="gray" height="100vh" flexDirection="column">
      <Text fontSize="6xl">Tic-Tac-Toe</Text>
      <Game />
    </Center>
  );
};

export default Main;
