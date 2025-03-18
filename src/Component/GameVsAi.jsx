import React from 'react';
import { CircleArrowLeft } from 'lucide-react';
import TicTacToeBoard from './TicTacToeBoard';
const TicTacToeAI = ({setPage}) => {
  const getBestMove = (board, player) => {
    const checkWinner = (b, p) => {
      const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ];
      return winPatterns.some(pattern => pattern.every(i => b[i] === p));
    };

    const minimax = (newBoard, currentPlayer) => {
      const emptyIndices = newBoard.map((cell, idx) => cell === "" ? idx : null).filter(idx => idx !== null);
      if (checkWinner(newBoard, 'X')) return { score: -10 };
      if (checkWinner(newBoard, 'O')) return { score: 10 };
      if (emptyIndices.length === 0) return { score: 0 };

      let bestMove = currentPlayer === 'O' ? -Infinity : Infinity;
      let move = -1;

      emptyIndices.forEach(index => {
        newBoard[index] = currentPlayer;
        const nextPlayer = currentPlayer === 'O' ? 'X' : 'O';
        const result = minimax([...newBoard], nextPlayer);
        newBoard[index] = "";

        if ((currentPlayer === 'O' && result.score > bestMove) ||
            (currentPlayer === 'X' && result.score < bestMove)) {
          bestMove = result.score;
          move = index;
        }
      });

      return { score: bestMove, index: move };
    };

    const bestMove = minimax([...board], player);
    const emptyIndices = board.map((cell, idx) => cell === "" ? idx : null).filter(idx => idx !== null);
    return bestMove.index !== -1 ? bestMove.index : emptyIndices[0];
  };
  const getMode = ()=>{
    return 1;
  };
  return (
    <>
      <button className='absolute top-2 left-2 size-10/100 stroke-[0.1]'  onClick={()=>{setPage(0)}}><CircleArrowLeft className='size-1/1 stroke-[1] min-w-13' /></button>
      <TicTacToeBoard getMode={getMode} aiNextMove={getBestMove}/>
      
    </>
  ); // No UI needed, just logic
};

export default TicTacToeAI;
