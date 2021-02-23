import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './../Home/Home'
import Contact from './../Contact/Contact'
import Recipes from './../Recipes/Recipes'
import Restaurant from './../Restaurants/Restaurants'
import Shop from './../Shop/shop'

const NavBar = () => {

    return (
        <Router>

            <nav className="navbar">
                    <div class="hamburger--container">
                        <div class="hamburger--line line--1"></div>
                        <div class="hamburger--line line--2"></div>
                        <div class="hamburger--line line--3"></div>
                    </div>
                    <ul className="ul--navlist">
                        
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/Restaurants'>Restaurants</Link>
                        </li>
                        <li>
                            <Link to='/Recipes'>Recipes</Link>
                        </li>
                        <li>
                            <Link to='/Shop'>Shop</Link>
                        </li>
                        <li>
                            <Link to='/Contact'>Contact Us</Link>
                        </li>
                    </ul>
                </nav>



            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/Restaurants">
                    <Restaurant />
                </Route>
                <Route exact path="/Recipes">
                    <Recipes />
                </Route>
                <Route exact path="/Shop">
                    <Shop />
                </Route>
                <Route exact path="/Contact">
                    <Contact />
                </Route>
            </Switch>
            
        </Router >
    )
    
};

export default NavBar