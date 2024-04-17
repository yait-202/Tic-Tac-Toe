// Game.tsx
import React, { useCallback, useMemo, useState } from "react";
import TileGrid from "./Components/TileGrid/TileGrid";
import { TbReload } from "react-icons/tb";
import { Button } from "@chakra-ui/react";
import { winCombinations } from "./const";

const X_KEY = "X";
const O_KEY = "O";

const Game: React.FC = () => {
  const [winner, setWinner] = useState<string | null>(null);
  const initial_board = useMemo(
    () => Array<string | null>(9).fill(null),
    [winner]
  );

  const [board, setBoard] = useState(initial_board);
  const [currentPlayer, setCurrentPlayer] = useState(X_KEY);
  const [isClickEnabled, setClickEnabled] = useState(true);

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
  }; // useCallback

  const handleTileClick = useCallback(
    (index: number) => {
      if (board[index] === null && isClickEnabled) {
        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);
        setCurrentPlayer(currentPlayer === X_KEY ? O_KEY : X_KEY);
        checkWin(newBoard, currentPlayer);
      }
    },
    [board, setBoard, currentPlayer, setCurrentPlayer]
  );

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
      {winner != null && (
        <Button
          minWidth="40vh"
          onClick={() => {
            setBoard(initial_board);
            setClickEnabled(true);
            setWinner(null);
            setCurrentPlayer(X_KEY);
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
