import React, { Component } from 'react';
import { withRouter, Route, NavLink, Switch } from 'react-router-dom';

import HomePage from './pages/Home.jsx';
import Listing from './pages/Listing.jsx';
import Create from './pages/Create.jsx';


class App extends Component {
    render() {
        return (
            <>
              <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/listing' component={Listing} />
                <Route path='/create' component={Create} />
              </Switch>
            </>
        )
    }
}

export default withRouter(App);
