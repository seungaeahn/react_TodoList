import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from "./About";
import '../css/App.css';

function Home() {
    return (
        <div>
            <About />
        </div>
    )
}

export default Home;