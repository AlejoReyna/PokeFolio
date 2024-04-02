import React from 'react';
import './List.css';
import Return from './Images/back.png';
import { useNavigate } from 'react-router-dom';
import dialogBox from './Images/dialogbox.png';
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
                                        |
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="right-container d-flex justify-content-center">
                                    <img src={dialogBox} className="project-container" alt="Here goes a project"/>
                                </div>
                            </div>
                        </div>

                        <div className="row list-row">
                            <div className="col-6">
                                <div className="left-container d-flex justify-content-center">
                                    <img src={dialogBox} className="project-container" alt="Here goes a project"/>
                                        |
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="right-container d-flex justify-content-center">
                                    <img src={dialogBox} className="project-container" alt="Here goes a project"/>
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