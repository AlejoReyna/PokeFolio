import React from 'react';
import './styles/main.css';
import './styles/fonts.css';
import textbox from './img/newpoke.png';
import JsMug from './img/js-mug.png';
import { Link } from 'react-router-dom';
import Projects from './Projects';



const Homepage = () => {
    return (
    <body>
    <main>
            <div className="row">
                <div className="container m-0 w-100">
                    <div className="row textbox-container ">
                        <div className="col-lg-3">
                        </div>

                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <img className="textbox img-fluid" src={ textbox } alt="A textbox from the Pokemon Videogame"/>                
                            <div className="overlay-text">
                               WELCOME TO MY PORTFOLIO!
                                <div className="options">
                                                                        
                                    <button className="button" type="button"> <Link to="/Projects"> <span class="jump"> Projects </span> </Link> </button>
                                    <button className="button" type="button"> <Link to="/About"> <span class="jump">  About me  </span> </Link> </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                
                        </div>
                    </div>
                </div>
            </div>

            
        </main>
    </body>
    );
};

export default Homepage;