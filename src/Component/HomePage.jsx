import { useState, useEffect, useRef } from 'react'
import '../Style/HomePage.css'
import { Cpu, Network, Infinity } from 'lucide-react';
import { Tooltip } from "react-tooltip";

const HomePage = ({setPage, setMode, getMode, getisGameStarted, setIsGameStarted}) => {

  return (
    <div className="w-full h-dvh overflow-hidden">
        
      <div className="w-full h-30/100 flex flex-row text-center justify-center items-center text-5xl text-black gap-1/8">
        <h1 className='mx-10'>Welcome To Tic Tac Toe</h1>
      </div>
      <div className="mx-auto w-8/10 h-40/100 flex-4 flex flex-row justify-evenly items-center gap-[3dvw]">
        <button data-tooltip-id='tooltip' data-tooltip-content="Ai Mode" onClick={()=>{setMode(1);}} className={`transition-colors duration-300 flex-1 h-1/2 w-1/2 stroke-[0.4] ${(getMode()===1)?"text-green-500":"text-black"}`}><Cpu className="flex-1 h-full w-full stroke-[0.4]"/></button>
        <button data-tooltip-id='tooltip' data-tooltip-content="Friends Mode" onClick={()=>{setMode(2);}} className={`transition-colors duration-300 flex-1 h-1/2 w-1/2 stroke-[0.4] ${(getMode()===2)?"text-green-500":"text-black"}`}><Network className="flex-1 h-full w-full stroke-[0.4]"/></button>
        <button data-tooltip-id='tooltip' data-tooltip-content="Infinit Mode" onClick={()=>{setMode(3);}} className={`transition-colors duration-300 flex-1 h-1/2 w-1/2 stroke-[0.4] ${(getMode()===3)?"text-green-500":"text-black"}`}><Infinity className="flex-1 h-full w-full stroke-[0.4]"/></button>
      </div>
      <div className="w-full h-20/100 flex-2 flex flex-col items-center" >
          <h2 className="text-xl">{(getMode()==1)?"Play With Computer.":(getMode()==2)?"Play With Friends.":(getMode()==3)?"Play infinitely with friends.":"Choose A Mode To Start."}</h2>
          <br/>
          <button onClick={()=>{(getMode()!==0)?setPage(getMode()):alert("please choose a mode before starting the game");}} className={`transition-all duration-300 w-1/2 h-1/2 rounded-xl max-w-60 text-4xl ${(getMode()==0)?"cursor-not-allowed disabled bg-black text-white":"bg-green-500 text-white"}`}>Play</button>
      </div>
      <div className="w-1 h-10/100 flex-1">

      </div>
      <Tooltip id='tooltip' effect='solid' place='bottom' type='dark' />
      
    </div>


  );
};

export default HomePage