import React from 'react';
import './List.css';
import Return from './Images/back.png';
import { useNavigate } from 'react-router-dom';
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
                    </div>

                    <div className="row list-row">
                        <div className="col-6">
                            <div className="left-container">
                                hola
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="right-container">
                                hola
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </body>
    );
}

export default List;