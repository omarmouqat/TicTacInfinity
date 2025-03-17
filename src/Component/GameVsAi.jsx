import { useState, useEffect, useRef } from 'react'
import '../Style/HomePage.css'
import { Cpu, Network, Infinity } from 'lucide-react';
import { Tooltip } from "react-tooltip";
import TicTacToeBoard from './TicTacToeBoard';

const GameVsAi = () => {
  return (
    <TicTacToeBoard/>
  );
};

export default GameVsAi