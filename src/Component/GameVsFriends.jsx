import { useState, useEffect, useRef } from 'react'
import '../Style/HomePage.css'
import { Cpu, Network, Infinity } from 'lucide-react';
import { Tooltip } from "react-tooltip";
import TicTacToeBoard from './TicTacToeBoard';
import { CircleArrowLeft } from 'lucide-react';



const GameVsFriends = ({setPage}) => {
  const getMode = ()=>{
    return 2;
  };
  return (
    <>
    <button className='absolute top-2 left-2 size-10/100 stroke-[0.1]'  onClick={()=>{setPage(0)}}><CircleArrowLeft className='size-1/1 stroke-[1] min-w-13' /></button>
    <TicTacToeBoard getMode={getMode}/>      

    </>

  );
};

export default GameVsFriends