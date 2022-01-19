import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Companies from "./components/Pages/Companies";
import SignUp from "./components/Pages/SignUp";

const Routes = () => {
    return(
        <div>
            <BrowserRouter>
                <Navbar/>
                <div>
                    <Route path="/" exact component={Home} />
                    <Route path="/About" component={About}/>
                    <Route path="/Companies" component={Companies}/>
                    <Route path="/SignUp" component={SignUp}/>
                </div>
            </BrowserRouter>
        </div>
    )
};

export default Routes;
