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
import Shop from './../Shop/Shop'

const NavBar = () => {

    const [hidden, setHidden] = useState(false);

    const toggleButton = () => {
        if (!hidden) {
            setHidden(true);
        } else {
            setHidden(false)
        }
    }

    return (
        <Router>
            <div class="container">

               

                <nav class="navbar">
                    <div class="hamburger--container">
                        <div class="hamburger--line line--1"></div>
                        <div class="hamburger--line line--2"></div>
                        <div class="hamburger--line line--3"></div>
                    </div>

                    <ul class="ul--navlist">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Recipes</a></li>
                        <li><a href="#">Restaurants</a></li>
                        <li><a href="#">Shop</a></li>
                    </ul>
                </nav>

                <div class="hero--wrapper">
                    <h1 class="hero--text">You Are What You Eat ! Bon Appétit !
</h1>
                </div>
            </div>



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