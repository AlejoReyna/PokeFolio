import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navbar.css';


const Navbar = () => {
    return (
    <nav className="navbar">
        <div className="container-fluid d-flex justify-content-center">
            {/** 
             <Link to ="/" className="navbar-brand">Alexis Reyna <span class="tag"> | 
                     &lt; </span> <span class="blue"> Software Engineer </span> <span class="tag"> /&gt; </span> 
            </Link>
           */}
           Alexis Alberto Reyna Sánchez | Software Developer
        </div>
    </nav>
    );
};

export default Navbar;