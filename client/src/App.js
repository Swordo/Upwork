import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Nav from './component/Nav'
import SideBar from "./component/SideBar"
import Route1 from "./component/RightSide"
import Route2 from "./component/Route2"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <div className="container">
            <div className="row">
              <SideBar></SideBar>
              <Route exact path="/" component={Route1} />
              <Route exact path="/route2" component={Route2} />
            </div>
          </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
