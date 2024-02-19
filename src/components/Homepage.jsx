import React from 'react';
import './styles/main.css';
import './styles/fonts.css';
import textbox from './img/newpoke.png';
import { Link } from 'react-router-dom';



const Homepage = () => {
    return (
    <body>
    <main>
        
    <div className="container-fluid home-body">

            
                    <div className="textbox-container w-100 ">
                    <div className="row">
                        <div className="col-2">
                            
                        </div>

                        <div className="col-8  d-flex justify-content-center">
                            <div className="container-fluid welcome-msg"> 
                                <p> Welcome to my developer portfolio! </p>
                            </div>
                     
                        </div>

                        <div className="col-2">
                            
                        </div>
                    </div>
                    
                    {/** textbox row  */}
                    <div className="row">  
                        <div className="col-2">

                        </div>
                        <div className="col-8 text-from-box">
                            <img className="textbox img-fluid" src={ textbox } alt="A textbox"></img>
                            <div className="text-container">
                                <p> What'd you like to do next: </p>

                                    <button type="button"> Go to my projects </button>
                                    <button type="button"> Info about me </button>
                            </div>
                        </div>
                        <div className="col-2">
                            
                         </div>
                    </div>
                    {/** End of textbox row  */}

                     
                </div>
            </div>

            
            

            
        </main>
    </body>
    );
};

export default Homepage;