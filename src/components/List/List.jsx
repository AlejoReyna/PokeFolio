import React from 'react';
import './List.css';
import Return from './Images/back.png';
import { useNavigate } from 'react-router-dom';
import dialogBox from './Images/dialogbox.png';

// Pictures of the logos
import demonLogo from './Images/Projects/demon-logo.png';
import tresLogo from './Images/Projects/treslobos-logo.png';
import mortalLogo from './Images/Projects/mortal-logo.png';
import bearLogo from './Images/Projects/bearsito.png';


const List = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/'); // Returns to the root URL, which is Homepage.jsx
    };

    return (
        <body>
            <main>
                <div className="container-fluid home-body">
                    <div className="row main-row justify-content-center">
                        <div className="col-md-12 typing-text">
                            <img src={Return} className="return-icon" alt="Go back to homepage" onClick={handleGoBack} />
                            Code created with blood, sweat and tears!
                        </div>

                        <div className="row list-row">
                            <div className="col-6">
                                <div className="left-container d-flex justify-content-center">
                                    <img src={dialogBox} className="project-container" alt="Here goes a project"/>
                                    {/** Project title */}
                                    <div className="projectTitle">
                                            <h4> Platformer DemonList visual update</h4>
                                    </div>

                                    {/** Preview image */}
                                    <div className="imageContainer">
                                        <img src={demonLogo} className="img-fluid" alt="Platformer DemonList logo"/>
                                        {/** Project description */}
                                        <div className="projectDescription">
                                            <p> A visual update I made for the owner of demonlist.com</p>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="right-container d-flex justify-content-center">
                                    <img src={dialogBox} className="project-container" alt="Here goes a project"/>
                                    {/** Project title */}
                                    <div className="projectTitle">
                                            <h4> Barbershop system </h4>
                                    </div>

                                     {/** Preview image */}
                                     <div className="imageContainer">
                                        <img src={tresLogo} className="img-fluid" alt="Platformer DemonList logo"/>
                                        {/** Project description */}
                                        <div className="projectDescription">
                                            <p>  A system able to generate tickets of appointments in a fictional barbershop. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row list-row">
                            <div className="col-6">
                                <div className="left-container d-flex justify-content-center">
                                    <img src={dialogBox} className="project-container" alt="Here goes a project"/>
                                        {/** Project title */}
                                        <div className="projectTitle">
                                            <h4> Mortal Kombat 1</h4>
                                        </div>

                                        {/** Preview image */}
                                        <div className="imageContainer">
                                            <img src={mortalLogo} className="img-fluid" alt="Platformer DemonList logo"/>
                                             {/** Project description */}
                                            <div className="projectDescription">
                                                <p> A project made for my Web Development class, made in React. The purpose of the project was to show the understanding of CSS grid system, JavaScript interactions and HTML DOM structuration.  </p>
                                            </div>
                                        </div>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="right-container d-flex justify-content-center">
                                    <img src={dialogBox} className="project-container" alt="Here goes a project"/>
                                        {/** Project title */}
                                        <div className="projectTitle">
                                                <h4>La cafetería del oso</h4>
                                        </div>

                                        {/** Preview image */}
                                        <div className="imageContainer">
                                            <img src={bearLogo} className="img-fluid" alt="Platformer DemonList logo"/>
                                            {/** Project description */}
                                            <div className="projectDescription">
                                                <p> A simple mobile interface of a food selling app. </p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                </div>

            </main>
        </body>
    );
}

export default List;