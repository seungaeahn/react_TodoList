import React from "react";
import banner from '../img/pochaco.png';
import '../css/App.css';

function Header() {
    return (
        <header>
            <img src={banner} alt="Banner" style={{ width: '130px', height: 'auto'}} />
 


            <h1>My Website</h1>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;