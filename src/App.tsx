import { Center, ChakraProvider, Text } from "@chakra-ui/react";
import "./App.css";
import Game from "./Pages/MainPage/Components/Game/Game";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Center bg="gray" height="100vh" flexDirection="column">
          <Text fontSize="6xl">Tic-Tac-Toe</Text>
          <Game />
        </Center>

        {/* <Router/> */}
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
