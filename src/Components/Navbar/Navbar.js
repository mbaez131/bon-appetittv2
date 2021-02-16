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

    const toggleButton = () =>{
        if(!hidden){
            setHidden(true);
        } else{
            setHidden(false)
        }
    }

    return(
        <Router>
            <div>
                <nav>
                <a id="logoAnchor"><div id="pcLogo"><Link to="/"><p>PC</p></Link></div></a>
                <label className="burger" htmlFor="toggle">&#9776;</label>
                <input type="checkbox" id="toggle" name="toggle" onClick={toggleButton} />
                    <ul className={hidden ? 'navbar' : 'links'}>
                        
                        <li className="navLink">
                            <Link to='/'>Home</Link>
                        </li>
                        <li className="navLink">
                            <Link to='/Restaurants'>Restaurants</Link>
                        </li>
                        <li className="navLink">
                            <Link to='/Recipes'>Recipes</Link>
                        </li>
                        <li className="navLink">
                            <Link to='/Shop'>Shop</Link>
                        </li>
                        <li className="navLink">
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
            </div>
        </Router>
    )
};

export default NavBar