import React from 'react';
import Header from './Header';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from '../routes/Home';
import Movie from '../routes/Movie/';
import TV from '../routes/TV/';
import Bookmark from '../routes/Bookmark';



const Routers = () => (
    <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movie" component={Movie} />
            <Route path="/tv" component={TV} />
            <Route path="/bookmark" component={Bookmark} />
            <Redirect form="*" to="/" />
        </Switch>
    </Router>
);
export default Routers;