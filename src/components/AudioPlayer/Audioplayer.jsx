import React, { useRef, useState } from 'react';

/**
 How does this code work?
    1. AudioPlayer component is a functional component that takes music prop.
    2. The const 'audioRef' storages the useRef hook, it allows to control it.
    3. The 'isPlaying' const sotrages a viariable initialized to false, and
       'setIsPlaying' is a function to update the 'isPlaying state'

    4. The toggle audio const stores a function that is called when user clicks the play/pause button. 
       
**/
const Audioplayer = ({ music }) => {
    const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    setIsPlaying((prevState) => !prevState);
    if (audioRef.current) {
      isPlaying ? audioRef.current.pause() : audioRef.current.play();
    }
  };

  return (
    <>
      <audio ref={audioRef} src={music} autoPlay={isPlaying} loop />
      <button onClick={toggleAudio}>
        {isPlaying ? 'Pause Audio' : 'Play Audio'}
      </button>
    </>
  );
};
  
  export default Audioplayer;