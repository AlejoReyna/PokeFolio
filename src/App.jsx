import React, { useRef, useEffect, useState } from 'react'; // useRef and useEffect are hooks needed to autoplay music
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./components/Homepage/Homepage";
import List from "./components/List/List";
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import music from './audio/pokemon.mp3';
import click from './audio/click.mp3';
import AboutMe from "./components/AboutMe/AboutMe";


function App() {
  const audioRef = useRef(null);
  const [userInteracted, setUserInteracted] = useState(false);
  useEffect(() => {
    if (userInteracted) {
      const audio = new Audio(music);
      audio.play();

      audioRef.current = audio;
    }
  }, [userInteracted, music]);

  const handleUserInteraction = () => {
    const clickSound = new Audio(click);
    clickSound.play();

    setUserInteracted(true);
  };

  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={ 
        <>
              <Homepage music={music} clickSound={click} audioRef={audioRef} setUserInteracted={setUserInteracted}  />
             
              
        </>
          } />
        <Route path="/List" element={
        <>
              <List  music={music} audioRef={audioRef}/> 
              
            
              
        </>
          } />
        <Route path="/AboutMe" element={
        <>
            <AboutMe  music={music} audioRef={audioRef}/> 
            
        </>
        } />

       
        
      </Routes>
    </Router>
  );
}

export default App;
