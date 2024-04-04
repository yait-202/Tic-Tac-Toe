import { SimpleGrid } from "@chakra-ui/react";
import { Tile } from "./Tile";
import { useState } from "react";

interface TileGridProps {
  board: (string | null)[];
  currentPlayer: string;
  onTileClick: (index: number) => void;
}

const TileGrid: React.FC<TileGridProps> = ({
  board,
  currentPlayer,
  onTileClick,
}) => {
  return (
    <SimpleGrid
      columns={3}
      justifyContent="center"
      alignItems="center"
      gap="3px"
    >
      {board.map((value, index) => (
        <Tile
          key={index}
          value={value}
          handleTileClick={() => onTileClick(index)}
        />
      ))}
    </SimpleGrid>
  );
};

export default TileGrid;
