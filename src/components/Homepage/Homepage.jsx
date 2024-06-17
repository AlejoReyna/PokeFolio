import React, { useState } from 'react';
import './Homepage.css';
import '../Fonts/Fonts.css';
import textbox from './Images/text-box.png';
import click from '../../audio/click.mp3';
import audioImage from './Images/audio-icon.png';
import { Link } from 'react-router-dom';
import TypingText from './Script';


const Homepage = ({ music, audioRef, setUserInteracted }) => {
  const [isTypingFinished, setIsTypingFinished] = useState(false);
  const [playAudio, setPlayAudio] = useState(false);

  const handleTypingFinished = () => {
    setIsTypingFinished(true);
  }

  const handlePlayAudio = () => {
    setUserInteracted(true);
  };
  
    return (
      <body>
        <main>
          <div className="container-fluid home-body">
            <div className="row main-row justify-content-center">
              <div className='col-md-2'></div>
       
              {/* Column that contains the typing text */}
              <div className="col-md-8 typing-text">
                <TypingText onFinished={handleTypingFinished} />
              </div>
              {/* End of column */}

              <div className='col-md-2 audio-btn'>
                <img src={ audioImage } className='audioIcon' />
                <button className='btn' onClick={handlePlayAudio}> Play audio </button>
              </div>
              
            </div>


            {/* Row that contains the text-box with options */}
            <div className="row bottom-row justify-content-center">
              <div className="col-12 d-flex flex-column flex-md-row align-items-center justify-content-center">
                <img className="textbox img-fluid mb-3 mb-md-0 mr-md-3" src={textbox} alt="A textbox" />

                
                {/** End of side containers code */}

              </div>
              <div className="col-6 options-container d-flex justify-content-center align-items-center">
                <p className="header-textbox d-flex justify-content-center m-0">What'd you like to do next?</p>
                <div className="buttons-container">
                  {/* Project list button */}
                  <button type="button" className="btn " onClick={handlePlayAudio}>
                    <Link to="/List" className='text-decoration-none'>Go to my projects</Link>
                  </button>
                  {/* End of button */}

                  {/* Info about me button */}
                  <button type="button" className="btn" onClick={handlePlayAudio}>
                    <Link to="/AboutMe" className='text-decoration-none'> Info about me </Link>
                  </button>
                  {/* End of button */}
                </div>
              </div>
              {/* End of row */}
            </div>
            </div>
    
        </main>
      </body>
    );
  }



export default Homepage;