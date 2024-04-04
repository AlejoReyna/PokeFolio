import React, { useRef, useEffect, useState } from 'react'; // useRef and useEffect are hooks needed to autoplay music
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./components/Homepage/Homepage.tsx";
import List from "./components/List/List";
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import music from './audio/pokemon.mp3';
import AboutMe from "./components/AboutMe/AboutMe";

function App() {

  // Function to reproduce the background music
  const audioRef = useRef(null);
  // Next line adds a state variable to track user interaction
  const [userInteracted, setUserInteracted] = useState(false);

  //Plays audio only when user has interacted
  useEffect(() => {
    if (userInteracted) {
      audioRef.current.play()
    }
  }, [userInteracted]);
  // End of function

  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={ 
      <>
            <Homepage music={music} audioRef={audioRef} />
            <audio ref={audioRef} src={music} autoPlay loop />
            
      </>
        } />
      <Route path="/List" element={
      <>
            <List  music={music} audioRef={audioRef}/> 
            <audio ref={audioRef} src={music} autoPlay loop />
           
            
      </>
        } />
      <Route path="/AboutMe" element={
      <>
          <AboutMe  music={music} audioRef={audioRef}/> 
          <audio ref={audioRef} src={music} autoPlay loop />
      </>
      } />
      
    </Routes>
    </Router>
  );
}

export default App;
