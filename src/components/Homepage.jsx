import React from 'react';
import './styles/main.css';
import './styles/fonts.css';
import textbox from './img/newpoke.png';
import { Link } from 'react-router-dom';



const Homepage = () => {
    return (
    <body>
    <main>
        
    <div className="container p-0">

            
                    <div className="textbox-container w-100 ">
                    <div className="row">
                        <div className="col-2">
                            
                        </div>

                        <div className="col-8">
                            <div className="welcome-msg"> 
                                    Welcome to my developer portfolio!
                            </div>
                     
                        </div>

                        <div className="col-2">
                            
                        </div>
                    </div>

                    <div className="row">
                            <img className="textbox img-fluid" src={ textbox } alt="A textbox"></img>
                        <div className="text-from-box">
                        <p> What'd you like to do next: </p>

                            <button type="button"> Go to my projects </button>
                            <button type="button"> Info about me c: </button>
                        </div>
                    </div>
                </div>
            </div>

            
            

            
        </main>
    </body>
    );
};

export default Homepage;