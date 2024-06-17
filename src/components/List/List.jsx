import React from 'react';
import './List.css';
import Return from './Images/back.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import dialogBox from './Images/dialogbox.png';
import Mortal from './Images/Projects/mortal.png';
import UANL from './Images/Projects/uanl.png';

const List = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/'); // Returns to the root URL, which is Homepage.jsx
    };

    return (
        <body>
            <main>
                <div className="container-fluid home-body">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className='back-to-home d-flex align-items-center'>
                                <img src={Return} className="return-icon" alt="Go back to homepage" onClick={handleGoBack} />
                                <p className='pt-4'> Back to homepage </p>
                            </div>
                        </div>

                        {/** Begining of the row container of the projects (half) */}
                        <div className="row list-row">
                            <div className="col-6 col-xs-12">
                                <div className='project-container row'>
                                    <div className='col-6'>
                                    <img src={ Mortal } className='project-preview' alt='Mortal Kombat page project preview'></img>

                                    </div>

                                    <div className='col-6'>
                                        <div className='project-title'>
                                            <h3> Mortal Kombat 1 </h3>
                                            <h6> A fan-made promotional website</h6>
                                            <Link to="https://mortal-kombat-gamma.vercel.app/" target="_blank" rel="noopener noreferrer">
                                                <button type="btn">Visit</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-xs-12">
                                
                                <div className='project-container row'>
                                    <div className='col-6'>
                                    <img src={UANL} className='project-preview' alt='SIASE Reworked project preview'></img>

                                    </div>

                                    <div className='col-6'>
                                        <div className='project-title'>
                                            <h3> SIASE Reworked interface </h3>
                                            <h6> The UANL SIASE reworked because the actual sucks </h6>
                                            <Link to="https://uanl-interface.vercel.app/" target="_blank" rel="noopener noreferrer">
                                                <button type="btn">Visit</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            <div>
                                
                            </div>
                            
                        </div>
                    </div>

                    <hr className='mt-3'></hr>
                    {/** End of half row */}

                        <div className="row list-row">
                            <div className="col-6">
                                <div className='project-container row'>
                                    <div className='col-6'>
                                    </div>

                                    <div className='col-6'>
                                        <div className='project-title'>
                                            <h3> The Bear cafeteria </h3>
                                            <h6> A cute cafeteria website </h6>
                                            <Link to="https://react-cafeta.vercel.app/" target="_blank" rel="noopener noreferrer">
                                                <button type="btn">Visit</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6">
                               
                            </div>
                        </div>
                    </div>

                   
                </div>

            </main>
        </body>
    );
}

export default List;