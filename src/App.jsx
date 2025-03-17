import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Component/HomePage'
import GameVsAi from './Component/GameVsAi'
import GameVsFriends from './Component/GameVsFriends'
import GameInfinety from './Component/GameInfinety'

function App() {
  const [mode ,setMode] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [page, setPage] = useState(0);

  const getMode = ()=>{
    return mode;
  };
  const getisGameStarted = ()=>{
    return isGameStarted;
  }
  const getPage = ()=>{
    return isGameStarted;
  }

  var modeRef = useRef(mode);
  useEffect(()=>{
    if (modeRef.current) {
      modeRef.current.value = mode; // Set the value only when ref is attached
    }
    //setMode(0);
  }, [page]);

  if (page == 1) {
    return (
      <GameVsAi setPage = {setPage}/>
    );
  }else if (page == 2) {
    return (
      <GameVsFriends setPage = {setPage}/>
    );
  }else if (page == 3) {
    return (
      <GameInfinety setPage = {setPage}/>
    );
  }else{
    return(
      <HomePage setMode={setMode} setPage = {setPage} getMode={getMode} getisGameStarted ={getisGameStarted} setIsGameStarted = {setIsGameStarted} />
    );
  }
}

export default App
