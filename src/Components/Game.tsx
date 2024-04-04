// Game.tsx
import React, { useState } from "react";
import TileGrid from "./TileGrid";

const Game: React.FC = () => {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const handleTileClick = (index: number) => {
    if (board[index] === null) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <TileGrid
        board={board}
        currentPlayer={currentPlayer}
        onTileClick={handleTileClick}
      />
    </div>
  );
};

export default Game;
