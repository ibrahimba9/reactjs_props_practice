import React from "react";
import PhotoGrid from "../images/photo-grid.png";

export default function Hero(){
    return (
        <div className="hero-container">
            <img src={PhotoGrid} />
            <h1>Online Experiences</h1>
            <div className="hero-text">
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}