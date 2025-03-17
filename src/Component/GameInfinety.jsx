import { useState, useEffect, useRef } from 'react'
import '../Style/HomePage.css'
import { Cpu, Network, Infinity } from 'lucide-react';
import { Tooltip } from "react-tooltip";
import TicTacToeBoard from './TicTacToeBoard';
const GameInfinety = ({setPage}) => {
  const getMode = ()=>{
    return 3;
  };
  return (
    <>
      <h1>Game Infinity</h1>
      <TicTacToeBoard getMode={getMode}/>
      <button onClick={()=>{setPage(0)}}>return</button>
    </>
    
  );
};

export default GameInfinety