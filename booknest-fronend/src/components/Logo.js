import React from 'react'
import logo from "../Images/BookNestLogo.svg"

// functional component for the site logo that renders the logo as an img tag.
let Logo = () => {
    return (
        <div>
            <img src={logo} alt="LogoImage" className = "logo-image"/>
        </div>
    );
};

export default Logo;