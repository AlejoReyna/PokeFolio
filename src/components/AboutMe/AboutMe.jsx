import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Return from './Images/back.png';
import dialogbox from './Images/dialogbox.png';
import jsMug from './Images/js-mug.PNG';
import normalMug from './Images/normal-mug.PNG';
import './AboutMe.css';

const AboutMe = () => {

    const [mugImage, setMugImage] = useState(jsMug);
    const [changeImageText, setChangeImageText] = useState('Not a big JavaScript fan? Click in here!');

    const handleImageChange = () => {
    if (mugImage === jsMug) {
      setMugImage(normalMug);
      setChangeImageText('Do you regret of what you just did? Click in here!');
    } else {
        setMugImage(jsMug);
        setChangeImageText('Not a big JavaScript fan? Click in here!')
    }
    };

    // Code for going back to homepage
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/'); // Returns to the root URL, which is Homepage.jsx
    };

    return (
        <body>
            <main>
                    <div className="container-fluid home-body">
                        {/** Row that contains the textbox */}
                        {/** Going back to homepage */}
                        <img src={Return} className="return-icon" alt="Go back to homepage" onClick={handleGoBack} />
                        Back to home
                      
                        {/** Row that contains the information */}
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-12 d-flex align-items-center justify-content-center">
                                <img className="dialogbox" src={dialogbox} alt="A textbox" />
                            </div>
                                
                            {/** Left side column: On this side goes the cartoonized version of me */}
                            <div className="col-6 col-md-5 left-side">
                                <img src={mugImage} className="its-me" alt="Cartoon of me"/> 
                            </div>

                            {/** Right side column: On this side goes the information about myself */}
                            <div className="col-6 col-md-4 right-side d-flex justify-content-center">
                                <div className="info ">
                                    <h4> Personal info </h4>
                                    <hr/>
                                    <h6> Nacionality: Mexican </h6>
                                    <h6> Age: 22 years old </h6>
                                    <h6> Idioms: 
                                    <br>
                                    </br> Spanish - Native 
                                    <br></br> English - Profesional </h6>
                                    <h6> Coding languages: JavaScript </h6>
                                    <h6> Hobbies: Playing guitar, playing videogames and excercising!</h6>

                                    
                                    <div className="changeImage d-flex justify-content-center">
                                        <button onClick={handleImageChange}> {changeImageText} </button>
                                    </div>
                                </div>
                            </div>
                            {/** End of right-side column */}
                        </div>

                    </div>
                    {/** End of row */}
            </main>
        </body>
        );
    }

export default AboutMe; 