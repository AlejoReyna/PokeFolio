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
                <div className="container-fluid home-body m-0 w-100">
                    <div className="row">
                        <div className="col-1 ">
                        </div>

                        <div className="col-10">
                            {/** Row that works as a container for the cards */}
                            <div className="row">

                                {/** Left side column (on full-screen view) */} 
                                <div className="col-6">
                                    
                                    {/** Card for 'La cafeteria del oso' project */} 
                                        <div className="card">

                                            {/** Header of card */} 
                                            <div className="card-header d-flex justify-content-center bg-black">
                                            <span className="card-title"> La cafetería del oso </span>
                                            </div>
                                            {/** End of card header */} 
                                            
                                            {/** Card body container */}
                                            <div className="card-body m-0 p-0">
                                                {/** Row which contains both columns where cards are displayed while being in full screen view */}
                                                <div className="row">
                                                    {/** Left side column */}    
                                                    <div className="col-6">
                                                        An app interface, with a register system.

                                                        <div className="options">
                                                            <button className="button" type="button">  <span class="jump"> Docs </span>  </button>
                                                            <button className="button" type="button">  <span class="jump">  Deployment  </span>  </button>
                                                        </div>

                                                        <div className="col-6">
                                                            <img className="bear img-fluid" src={ Bearsito } alt="Dibujo de 'La cafetería del oso'"/>
                                                        </div>

                                                    </div>
                                                    {/** End of left side column */}    
                                                </div>
                                                {/** End of row */}
                                            </div>
                                            {/** End of card body */}
                                        </div>
                                    {/** End for 'La cafeteria del oso' card */} 

                                    {/** Card for 'Platformer DemonList' project */} 
                                        <div className="card">
                                            <div className="card-header d-flex justify-content-center bg-black">
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
                                    {/** End for 'Platformer DemonList' card */} 
                                
                                </div>
                                {/** End of left side column (on full-screen view) */} 

                                <div className="col-6">

                                    {/** Card for 'Mortal Kombat 1' project */} 
                                    <div className="card">
                                        <div className="card-header d-flex justify-content-center bg-black">
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
                                <div className="card-header bg-black">
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
                                {/** Card for 'La cafeteria del oso' project */} 

                                </div>
                            </div>
                
                        </div>

                        <div className="col-1">
                        </div>  
                    </div>      
                </div>
        </main>
    </body>
    
    );
};

export default Projects;  