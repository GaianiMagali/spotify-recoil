import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Home } from '../views/Home/index';

export default function Routes() {
    return (
        <Router>
            <Route path="/" exact component={Home} />
        </Router>
    )
}