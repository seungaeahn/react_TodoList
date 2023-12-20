import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TodoList from "./js/TodoList";
import Home from "./js/Home";
import Header from "./js/Header";
import Footer from "./js/Footer";
import './css/App.css';

function App() {
    return (
        <Router>
            <div>
                <Header/>
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/todo">할일 목록</Link>
                        </li>
                    </ul>
                </nav>
                <hr/>
                <Routes>
                    <Route path="/home" element={<Home/>} />
                    <Route path="/todo" element={<TodoList/>} />
                </Routes>
                <Footer/>
            </div>
        </Router>
    )
}

export default App;