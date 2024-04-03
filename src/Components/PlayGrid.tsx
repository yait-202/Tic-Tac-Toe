import { SimpleGrid } from "@chakra-ui/react";
import { Tile } from "./Tile";
import TileProps from "../interfaces/TileProps";
import { useState } from "react";

const PlayGrid = () => {

  const [tiles, setTiles] = useState<TileProps>()

  const numRows = 3;
  const numCols = 3;
  const gridBoxes = [];
  
  for (let rows = 0; rows < numRows; rows++) {
    for (let cols = 0; cols < numCols; cols++) {
      gridBoxes.push(<Tile></Tile>)
    }
    
  }



  return (
    <SimpleGrid columns={3} justifyContent='center' alignItems='center' gap='3px'>
      {gridBoxes}
    </SimpleGrid>
  );
};

export default PlayGrid;
