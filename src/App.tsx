import { Center, Text } from "@chakra-ui/react";
import "./App.css";
import Game from "./Components/Game";

function App() {
  return (
    <Center bg="gray" height="100vh" flexDirection="column">
      <Text fontSize="6xl">Tic-Tac-Toe</Text>
      <Game></Game>
    </Center>
  );
}

export default App;
