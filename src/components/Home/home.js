import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import About from '../About/about';
import img2 from '../images/star.jpg'
import './home.css';

function home() {
    return ( <div className = "home" >
        <h1> Welcome To Star wars movies platform </h1>  
         <img src = { img2 }alt = ""className = "img2"/>
        {/* <Router> */}
        {/* <Link to = "/about"> <button > Get started </button></Link >
        <Route path = "/about"
        component = { About}/>   */}
        {/* </Router>   */}
        </div>
    )
}
export default home