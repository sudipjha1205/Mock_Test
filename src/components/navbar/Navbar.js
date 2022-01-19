import React from "react";
import { Link } from "react-router-dom";
import logo from "../../template/logo.jpg"

import "./navbar.css";

const Navbar = () => {
    return(
        <div>
            <div className = "navbar-active" >
                <div className = "logo">
                    <Link to = "/" className = "each_items">
                        The Trial
                    </Link>
                </div>
                <div className = "menu_items">
                    <Link to = "/" className = "each_items">Home</Link>
                    <Link to = "/About" className = "each_items">About</Link>
                    <Link to = "/Companies" className = "each_items">Companies</Link>
                    <Link to = "/SignUp" className = "each_items">SignUp</Link>
                    <button className = "each_items">Sign In</button>
                </div>
            </div>
        </div>
    )
};

export default Navbar;
