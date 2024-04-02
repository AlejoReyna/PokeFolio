import React from 'react';
import './Homepage.css';
import '../Fonts/Fonts.css';
import textbox from './Images/text-box.png';
import click from '../../audio/click.mp3';
import audioImage from './Images/audio-icon.png';
import { Link } from 'react-router-dom';
import TypingText from './Script';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTypingFinished: false,
      playAudio: false,
    };
    this.handleTypingFinished = this.handleTypingFinished.bind(this);
    this.handlePlayAudio = this.handlePlayAudio.bind(this);
  }

  handleTypingFinished() {
    this.setState({ isTypingFinished: true });
  }

  handlePlayAudio() {
    this.setState((prevState) => ({ playAudio: !prevState.playAudio }));
  }

  render() {
    const { playAudio } = this.state;

    return (
      <body>
        <main>
          <div className="container-fluid home-body">
            <div className="row main-row justify-content-center">
              <div className="col-md-2">Notes</div>
              {/* Column that contains the typing text */}
              <div className="col-md-8">
                <TypingText onFinished={this.handleTypingFinished} />
              </div>
              {/* End of column */}
              <div className="col-md-2 audio-container" onClick={this.handlePlayAudio}>
                <img src={audioImage} className="audioIcon" alt="Icon of an audio button" />
                Play audio
              </div>
              {playAudio && <AudioPlayer music={click} />}
            </div>
            {/* Row that contains the text-box with options */}
            <div className="row bottom-row justify-content-center">
              <div className="col-12 d-flex flex-column flex-md-row align-items-center justify-content-center">
                <img className="textbox img-fluid mb-3 mb-md-0 mr-md-3" src={textbox} alt="A textbox" />
              </div>
              <div className="col-6 options-container d-flex justify-content-center align-items-center">
                <p className="d-flex justify-content-center">What'd you like to do next?</p>
                <div className="buttons-container">
                  {/* Project list button */}
                  <button type="button" className="btn" onClick={this.handlePlayAudio}>
                    <Link to="/List">Go to my projects</Link>
                  </button>
                  {/* End of button */}
                  {/* Info about me button */}
                  <button type="button" className="btn" onClick={this.handlePlayAudio}>
                    <Link to="/AboutMe"> Info about me </Link>
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
}

export default Homepage;