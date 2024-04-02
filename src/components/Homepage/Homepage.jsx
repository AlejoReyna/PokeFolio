import React from 'react';
import './Homepage.css';
import '../Fonts/Fonts.css';
import textbox from './Images/text-box.png';
import click from '../../audio/click.mp3';

import { Link } from 'react-router-dom';
import TypingText from './Script';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isTypingFinished: false };
        this.handleTypingFinished = this.handleTypingFinished.bind(this);
        this.audioRef = React.createRef();
    }

    handleTypingFinished() {
        this.setState({ isTypingFinished: true });
    }
    
    playAudio = () => {
      const audio = this.audioRef.current;
      if (audio) {
        audio.currentTime = 0;
        audio.play();
      }
    };
    
    render() {
        return (
            <body>
              <main>
                <div className="container-fluid home-body">
                    <div className="row main-row justify-content-center">
                      {/** Column that contains the typing text */}
                      <div className="col-md-8">
                          <TypingText onFinished={this.handleTypingFinished} />
                      </div>
                      {/** End of column */}
                    </div>

                    {/** Row that contains the text-box with options */}
                    <div className="row bottom-row justify-content-center">
                      
                      <div className="col-12 d-flex flex-column flex-md-row align-items-center justify-content-center">
                        <img className="textbox img-fluid mb-3 mb-md-0 mr-md-3" src={textbox} alt="A textbox" />
                      </div>

                      <div className="col-6 options-container d-flex flex-column flex-md-row align-items-center">
                        <p className="mb-3 mb-md-0 mr-md-3">What'd you like to do next?</p>
                        
                          {/** Project list button */}
                          <button type="button" className="btn mr-md-3 mb-3 mb-md-0" onClick={this.playAudio}>
                            <Link to="/List">Go to my projects</Link>
                          </button>
                          {/** End of button */}

                          {/** Info about me button */}
                          <button type="button" className="btn" onClick={this.playAudio}>
                            <Link to="/AboutMe"> Info about me </Link>
                          </button>
                          {/** End of button */}
                          <audio ref={this.audioRef} src={click} preload="auto"/>  
                          
                    </div>
                    {/** End of row */}
                           
                      
                  </div>
                </div>
              </main>
            </body>
          );
    }
}

export default Homepage;
