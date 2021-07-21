import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import HomePage from './components/HomePage';
import Details from './components/Details';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/details">
                    <Details />
                </Route>
            </Switch>
        </Router>
    );
};

export default Routes;
