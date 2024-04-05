// Game.tsx
import React, { useState } from "react";
import TileGrid from "./TileGrid";
import { TbReload } from "react-icons/tb";
import { Button } from "@chakra-ui/react";
const Game: React.FC = () => {
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //Horizontal
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //Vertical
    [0, 4, 8],
    [2, 4, 6],
    //Diagonal
  ];
  const initial_board = Array<string | null>(9).fill(null);

  const [winner, setWinner] = useState<string | null>(null);
  const [board, setBoard] = useState(initial_board);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isClickEnabled, setClickEnabled] = useState(true);
  const handleTileClick = (index: number) => {
    if (board[index] === null && isClickEnabled) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      checkWin(newBoard, currentPlayer);
    }
  };

  const checkWin = (currentBoard: (string | null)[], player: string) => {
    for (let currentCondition of winCombinations) {
      const [a, b, c] = currentCondition;
      if (
        currentBoard[a] === player &&
        currentBoard[b] === player &&
        currentBoard[c] === player
      ) {
        setWinner(player);
        setClickEnabled(false);

        return;
      }
    }
    if (!currentBoard.includes(null)) {
      setWinner("Draw");
      setClickEnabled(false);
    }
  };

  return (
    <div
      className="game"
      style={{ flexDirection: "column", textAlign: "center", lineHeight: 5 }}
    >
      <TileGrid
        board={board}
        currentPlayer={currentPlayer}
        onTileClick={handleTileClick}
      />
      {!isClickEnabled && (
        <Button
          minWidth="40vh"
          onClick={() => {
            setBoard(initial_board);
            setClickEnabled(true);
          }}
        >
          Play again
          <TbReload />
        </Button>
      )}
    </div>
  );
};

export default Game;
