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
  const getMode = ()=>{
    return mode;
  };
  const getisGameStarted = ()=>{
    return isGameStarted;
  }

  var modeRef = useRef(mode);
  useEffect(()=>{
    if (modeRef.current) {
      modeRef.current.value = mode; // Set the value only when ref is attached
    }
    console.log('Mode:', mode);
  }, [mode]);
  if (isGameStarted) {
    if (mode == 1) {
      return (
        <GameVsAi/>
      );
    }else if (mode == 2) {
      return (
        <GameVsFriends/>
      );
    }else if (mode == 3) {
      return (
        <GameInfinety/>
      );
    }

  }else{
    return(
      <HomePage setMode={setMode} getMode={getMode} getisGameStarted ={getisGameStarted} setIsGameStarted = {setIsGameStarted} />
    );
  }
}

export default App
