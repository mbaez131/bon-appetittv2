import React from "react";
// import Recipes from '../Recipes/Recipes';
// import Restaurants from '../Restaurants/Restaurants'
// import Shop from '../Shop/Shop'

import {
  BrowserRouter as Router, Route} from "react-router-dom";

class Routes extends React.Component {
  render() {
    return (
      <Router>
      <div>
        {/* <Route exact path='/' component={Recipes} />
        <Route exact path='/Restaurants' component={Restaurants} />
        <Route exact path='/Shop' component={Shop} /> */}
      </div>
      </Router>
    );
  }
}

export default Routes;