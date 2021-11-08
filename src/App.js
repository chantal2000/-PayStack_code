import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home/home';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import FetchApi from './components/API/FetchApi';
function App() {
    return ( <div className = "App">
        <Router>
        <nav>
        {/* <span className = "home"> <Link to = ""> Home </Link></span> */}
        <span> <Link to = "/FetchApi" > Movies </Link></span > 
         </nav>  
         <Route path = ""exact component = { Home }/>
           <Route path = "/FetchApi"exact component = { FetchApi }/> 
         </Router>
          </div>
    );
}
export default App;