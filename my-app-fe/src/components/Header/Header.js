S

import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <>
        
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="about-us">About Us</Link></li>
                <li>Contact Us</li>
                <li>Portfolio</li>
                <li>Sample</li>
            </ul> 
        </>
    );
}

export default Header;