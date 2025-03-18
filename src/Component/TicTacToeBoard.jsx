import { useState, useEffect, useRef } from 'react'
import '../Style/HomePage.css'
import { Cpu, Network, Infinity } from 'lucide-react';
import { Tooltip } from "react-tooltip";

const TicTacToeBoard = ({getMode, aiNextMove}) => {
    const [boardMapping, setBoardMapping] = useState(["", "", "", "", "", "", "", "", ""]);
    const [score, setScore] = useState([0, 0, 0]);
    const [currentPlayer, setCurrentPlayer] = useState(-1);
    const [boardFirstMoves, setBoardFirstMoves] = useState([]);
    const resetColors = ()=>{
        for (let index = 0; index < 9; index++) {
            document.getElementById(""+index).style.backgroundColor = "white";
            document.getElementById("" + index).style.color = "black";
        }
    };
    useEffect(()=>{
        if (getMode()==3) {
            if(checkWin().length===0){
                if(boardFirstMoves.length>4){
                document.getElementById(""+boardFirstMoves[0]).style.backgroundColor = "#ff7272";
            }
            if (boardFirstMoves.length>5) {
                const newboard = [...boardMapping];
                newboard[boardFirstMoves[0]] = "";
                setBoardMapping(newboard);
                //deleting the first element from the list
                document.getElementById(""+boardFirstMoves[0]).style.backgroundColor = "white";
                const newBoardFirstMoves = [...boardFirstMoves];
                newBoardFirstMoves.shift();
                setBoardFirstMoves(newBoardFirstMoves);
            }
            }
            
        }
    }, [boardFirstMoves]);

    useEffect(()=>{
        console.log("the current player is : "+currentPlayer);
        if (getMode()===1) {
            if (currentPlayer===1) {
                if (checkWin().length===0) {
                    const newboard = [...boardMapping];
                    let aiBestMove = aiNextMove(boardMapping);
                    console.log("Ai Best Move is : "+aiBestMove);
                    console.log(newboard);
                    newboard[ parseInt(aiBestMove)] = "X";
                    console.log("ai move with board mapping : ");
                    setBoardMapping(newboard);
                    console.log(boardMapping);
                    setCurrentPlayer(currentPlayer*-1);
                }
                
            }
        }
        
    }, [currentPlayer]);
    useEffect(() => {
        const winner = checkWin();
        const newScore = [...score];
        if (winner.length === 1){
            setTimeout(() => {
                newScore[1]+=1;
                setScore(newScore);
                setBoardMapping(["", "", "", "", "", "", "", "", ""]);
                resetColors();
              }, 1500);
            
        }else if (winner.length > 0) {
            winner.forEach(index => {
                document.getElementById("" + index).style.color = "#00c951";
            });
            setTimeout(() => {
                if (currentPlayer==1) {
                    newScore[0]++;
                    setScore(newScore);
                }else{
                    newScore[2]++;
                    setScore(newScore);
                }
                resetColors();
                setBoardFirstMoves([]);
                setBoardMapping(["", "", "", "", "", "", "", "", ""]);
                resetColors();
              }, 1500);
            
        }
        
    }, [boardMapping]);

    const updateBoardMap = (id)=>{
        const newboard = [...boardMapping];
        if(checkWin().length===0){
            if (boardMapping[id]==="") {
                if (currentPlayer==1) {
                    if(getMode()!==1){
                        newboard[id] = "X";
                        setBoardMapping(newboard);
                    }
                    
                }else if (currentPlayer==-1) {
                    newboard[id] = "O";
                    setBoardMapping(newboard);
                }
                const newBoardFirstMoves = [...boardFirstMoves];
                newBoardFirstMoves.push(id);
                setBoardFirstMoves(newBoardFirstMoves);
                setCurrentPlayer(currentPlayer * -1);
                
            }else{
                console.log("it filled");
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
                setCurrentPlayer(-1);

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
            setCurrentPlayer(-1);
            return [0];
        }
        return [];  // No win
    };
    

  return (
    <div className='flex flex-col justify-center items-center w-full h-dvh overflow-hidden'>
        <h1 className='text-4xl my-10'>Player {(getMode()!==1)?((currentPlayer==-1)?"1":"2"):"1"}</h1>
        <div className='sm:size-100 mx-10dvw h-[80vw] w-[80vw] grid grid-cols-3 grid-rows-3 font-thin'>
            <div onClick={()=>{updateBoardMap(0);}} className='bg-white flex flex-row justify-center items-center text-[17vw] sm:text-8xl border-black border-r-4 border-b-4' id="0">
                {boardMapping[0]}
            </div>
            <div onClick={()=>{updateBoardMap(1);}} className='bg-white flex flex-row justify-center items-center text-[17vw] sm:text-8xl border-black border-x-4 border-b-4' id="1">
                {boardMapping[1]}        
            </div>
            <div onClick={()=>{updateBoardMap(2);}} className='bg-white flex flex-row justify-center items-center text-[17vw] sm:text-8xl border-black border-l-4 border-b-4' id="2">
                {boardMapping[2]} 
            </div>
            <div onClick={()=>{updateBoardMap(3);}} className='bg-white flex flex-row justify-center items-center text-[17vw] sm:text-8xl border-black border-y-4 border-r-4' id="3">
                {boardMapping[3]} 
            </div>
            <div onClick={()=>{updateBoardMap(4);}} className='bg-white flex flex-row justify-center items-center text-[17vw] sm:text-8xl border-black border-4' id="4">
                {boardMapping[4]} 
            </div>
            <div onClick={()=>{updateBoardMap(5);}} className='bg-white flex flex-row justify-center items-center text-[17vw] sm:text-8xl border-black border-y-4 border-l-4' id="5">
                {boardMapping[5]} 
            </div>
            <div onClick={()=>{updateBoardMap(6);}} className='bg-white flex flex-row justify-center items-center text-[17vw] sm:text-8xl border-black border-t-4 border-r-4' id="6">
                {boardMapping[6]} 
            </div>
            <div onClick={()=>{updateBoardMap(7);}} className='bg-white flex flex-row justify-center items-center text-[17vw] sm:text-8xl border-black border-t-4 border-x-4' id="7">
                {boardMapping[7]} 
            </div>
            <div onClick={()=>{updateBoardMap(8);}} className='bg-white flex flex-row justify-center items-center text-[17vw] sm:text-8xl border-black border-t-4 border-l-4' id="8">
                {boardMapping[8]} 
            </div>
        </div>
        <div className='text-6xl mt-10'>
            {score[0]+" - "+score[1]+" - "+score[2]}
        </div>
    </div>
    

  );
};

export default TicTacToeBoard;