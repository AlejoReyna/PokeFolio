import React from 'react';
import PreviewBear from './img/preview-bear.png';
import './styles/projects.css';
import './styles/main.css';
import Bearsito from './img/bearsito.png';
import Scorpion from './img/scorpion.png';
import Tic from './img/tic.webp';
import PDL from './img/pl-logo.png';

const Projects = () => {
    return(
        <body>
        <main>
            <div className="row">
                <div className="container m-0 w-100">
                    <div className="row">
                        <div className="col-1">
                            
                        </div>
                        <div className="col-10">
                            
                            <div className="card">
                                <div className="card-header">
                                La cafetería del oso 
                                </div>
                                
                                <div className="card-body m-0 p-0">
                                <div className="row">    
                                        <div className="col-6">
                                           An app interface, with a register system.

                                           <div className="options">
                                           <button className="button" type="button">  <span class="jump"> Docs </span>  </button>
                                            <button className="button" type="button">  <span class="jump">  Deployment  </span>  </button>
                                           </div>

                                        </div>
                                        <div className="col-6">
                                            <img className="bear img-fluid" src={ Bearsito } alt="Dibujo de 'La cafetería del oso'"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header">
                                Mortal Kombat 1
                                </div>
                                
                                <div className="card-body m-0 p-0">
                                <div className="row">    
                                        <div className="col-6">
                                           Fan-made promotional website of the 'Mortal Kombat 1' videogame

                                           <div className="options">
                                           <button className="button" type="button">  <span class="jump"> Docs </span>  </button>
                                            <button className="button" type="button">  <span class="jump">  Deployment  </span>  </button>
                                           </div>

                                        </div>
                                        <div className="col-6">
                                            <img className="bear img-fluid" src={ Scorpion } alt="Dibujo de 'La cafetería del oso'"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header">
                                Platformer DemonList visual update
                                </div>
                                
                                <div className="card-body m-0 p-0">
                                <div className="row">    
                                        <div className="col-6">
                                           I redesigned almost all the CSS and JS code used on the website 
                                           platformerlist.com

                                           <div className="options">
                                           <button className="button" type="button">  <span class="jump"> Docs </span>  </button>
                                            <button className="button" type="button">  <span class="jump">  Deployment  </span>  </button>
                                           </div>

                                        </div>
                                        <div className="col-6">
                                            <img className="bear img-fluid" src={ PDL } alt="Dibujo de 'La cafetería del oso'"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="card">
                                <div className="card-header">
                                Barbershop system 
                                </div>
                                
                                <div className="card-body m-0 p-0">
                                <div className="row">    
                                        <div className="col-6">
                                            A barbershop system

                                           <div className="options">
                                           <button className="button" type="button">  <span class="jump"> Docs </span>  </button>
                                            <button className="button" type="button">  <span class="jump">  Deployment  </span>  </button>
                                           </div>

                                        </div>
                                        <div className="col-6">
                                            <img className="bear img-fluid" src={ PDL } alt="Dibujo de 'La cafetería del oso'"/>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                   
                </div>
            </div>
            
            {/**  
            <section className="projects">
                <div class="row">
                    <div className="container container-fluid">
                        <div className="row">
                            <div class="col-3">
                                
                            </div> 
                            <div className="col-6 ">
                                        { /** Card for project "La cafetería del oso" 
                                        <div className="card">
                                        
                                        </div>
                                   
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            **/}
        </main>
    </body>
    
    );
};

export default Projects;