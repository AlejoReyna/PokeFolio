import React, { useState } from 'react';
import './styles/main.css';
import './styles/fonts.css';
import textbox from './img/newpoke.png';
import { Link } from 'react-router-dom';
import TypingText from './scripts/typingText';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isTypingFinished: false };
        this.handleTypingFinished = this.handleTypingFinished.bind(this);
    }

    handleTypingFinished() {
        this.setState({ isTypingFinished: true });
    }

    render() {
        return (
            <body>
                <main>
                    <div className="container-fluid home-body">
                        <div className="textbox-container w-100 ">
                            <div className="row main-row">
                                <div className="col-2"></div>
                                <div className="col-8">
                                    <div className="container-fluid">
                                        <TypingText onFinished={this.handleTypingFinished}/>
                                    </div>
                                </div>
                                <div className="col-2"></div>
                            </div>
                           
                                <div className="row bottom-row">
                                   
                                    
                                    <div className="col-12">
                                     <img className="textbox img-fluid" src={ textbox } alt="A textbox"></img>
                                        <div className="text-from-box">
                                                
                                        </div>
                                    </div>

                                    
                                </div>
                                
                           
                        </div>
                    </div>
                </main>
            </body>
        );
    }
}

export default Homepage;
