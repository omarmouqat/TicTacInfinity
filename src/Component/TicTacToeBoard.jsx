import { useState, useEffect, useRef } from 'react'
import '../Style/HomePage.css'
import { Cpu, Network, Infinity } from 'lucide-react';
import { Tooltip } from "react-tooltip";

const TicTacToeBoard = ({getMode, getCurrentPlayer, aiNextMove}) => {
    const [boardMapping, setBoardMapping] = useState(["", "", "", "", "", "", "", "", ""]);
    const [score, setScore] = useState([0, 0, 0]);
    const [currentPlayer, setCurrentPlayer] = useState(-1);
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
    useEffect(()=>{
        console.log(score);
    }, [score]);
    useEffect(() => {
        
        const winner = checkWin();
        const newScore = [...score];
        if (winner.length === 1){
            newScore[1]+=1;
            setScore(newScore);
            sleep(3000);
            setBoardMapping(["", "", "", "", "", "", "", "", ""]);
        }else if (winner.length > 0) {
            winner.forEach(index => {
                document.getElementById("" + index).style.color = "#00c951";
            });
            if (currentPlayer==-1) {
                newScore[0]++;
                setScore(newScore);
            }else{
                newScore[2]++;
                setScore(newScore);
            }
            sleep(3000);
            setBoardMapping(["", "", "", "", "", "", "", "", ""]);
            
        }
        setCurrentPlayer(currentPlayer * -1);
    }, [boardMapping]);

    const updateBoardMap = (id)=>{
        const newboard = [...boardMapping];
        if (boardMapping[id]==="") {
            if (currentPlayer==1) {
                newboard[id] = "X";
                setBoardMapping(newboard);
            }else if (currentPlayer==-1) {
                newboard[id] = "O";
                setBoardMapping(newboard);
            }
            
        }
        
    };
    const checkWin = () => {
        const winningPositions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];
    
        for (let line of winningPositions) {
            const [a, b, c] = line;
            if (boardMapping[a] && boardMapping[a] === boardMapping[b] && boardMapping[a] === boardMapping[c]) {
                console.log("it's a win!", line);

                return line;  // Return winning indices
            }
        }
        let isFull = true;
        for(let element of boardMapping){
            if (element === "") {
                isFull = false;
                break;
            }
        }
        if (isFull) {
            return [0];
        }
        return [];  // No win
    };
    

  return (
    <>
    <div className='size-100 grid grid-cols-3 grid-rows-3 gap-1 font-thin bg-black'>
        <div onClick={()=>{updateBoardMap(0);}} className='bg-white flex flex-row justify-center items-center text-8xl' id="0">
            {boardMapping[0]}
        </div>
        <div onClick={()=>{updateBoardMap(1);}} className='bg-white flex flex-row justify-center items-center text-8xl' id="1">
            {boardMapping[1]}        
        </div>
        <div onClick={()=>{updateBoardMap(2);}} className='bg-white flex flex-row justify-center items-center text-8xl' id="2">
            {boardMapping[2]} 
        </div>
        <div onClick={()=>{updateBoardMap(3);}} className='bg-white flex flex-row justify-center items-center text-8xl' id="3">
            {boardMapping[3]} 
        </div>
        <div onClick={()=>{updateBoardMap(4);}} className='bg-white flex flex-row justify-center items-center text-8xl' id="4">
            {boardMapping[4]} 
        </div>
        <div onClick={()=>{updateBoardMap(5);}} className='bg-white flex flex-row justify-center items-center text-8xl' id="5">
            {boardMapping[5]} 
        </div>
        <div onClick={()=>{updateBoardMap(6);}} className='bg-white flex flex-row justify-center items-center text-8xl' id="6">
            {boardMapping[6]} 
        </div>
        <div onClick={()=>{updateBoardMap(7);}} className='bg-white flex flex-row justify-center items-center text-8xl' id="7">
            {boardMapping[7]} 
        </div>
        <div onClick={()=>{updateBoardMap(8);}} className='bg-white flex flex-row justify-center items-center text-8xl' id="8">
            {boardMapping[8]} 
        </div>
    </div>
    <div className='text-6xl'>
        {score[0]+" - "+score[1]+" - "+score[2]}
    </div>
    </>
    

  );
};

export default TicTacToeBoard;