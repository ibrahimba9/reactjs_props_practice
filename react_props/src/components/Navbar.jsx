import React from "react";
import Logo from "../images/airbnb-logo.png";

export default function Navbar(){
    return (
        <div className="navbar-container">
            <img className="navbar-logo" src={Logo} />

        </div>
    )
}