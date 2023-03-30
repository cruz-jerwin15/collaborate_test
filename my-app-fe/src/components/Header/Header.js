

import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <>
        
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="about-us">About Us</Link></li>
                
                <li><Link to="contact-us">Contact Us</Link></li>
                <li><Link to ="portfolio">Portfolio</Link></li>
                <li><Link to ="sample">Sample</Link></li>

            </ul> 
        </>
    );
}

export default Header;