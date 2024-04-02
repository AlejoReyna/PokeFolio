import React, { useState, useNavigate } from 'react';
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
                    {/** Row that contains the textbox with information */}
                    <div className="row justify-content-center">
                    <img src={Return} className="return-icon" alt="Go back to homepage" onClick={handleGoBack} />
  
                      {/** Column that contains the dialog box */}
                      <div className="col-12 d-flex align-items-center justify-content-center">
                        <img className="dialogbox" src={dialogbox} alt="A textbox" />
                      </div>
                      {/** End of column */}
                      
                      {/** Container of the text */}
                      
                            <div className="row justify-content-center">
                            
                                
                                <div className="col-6 left-side d-flex justify-content-center">
                               
                               <img src={mugImage} className="its-me" alt="Cartoon of me"/> 
                                </div>

                                <div className="col-6 right-side ">
                                    <div className="info">
                                        <h4> Personal info </h4>
                                        <hr>
                                        </hr>
                                        <h6> Nacionality: Mexican </h6>
                                        <h6> Age: 22 years old </h6>
                                        <h6> Idioms: Spanish - Native, English - Profesional </h6>
                                        <h6> Coding languages: JavaScript </h6>
                                        <h6> Hobbies: Playing guitar, playing videogames and excercising!</h6>
                                    </div>
                                    
                                    <br>
                                    </br>
                                    <br>
                                    </br>
                                    <br>
                                    </br>
                                    <br>
                                    </br>
                                    <br>
                                    </br><br>
                                    </br>
                                    
                                    <div className="changeImage">
                                        <button onClick={handleImageChange}> {changeImageText} </button>
                                    </div>
                                </div>
                          
                      </div>
                    </div>
                    {/** End of row */}
                </div>
            </main>
        </body>
        );
    }

export default AboutMe; 