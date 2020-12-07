import React from 'react';
import Header from './Header';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from '../routes/Home';
import Movie from '../routes/Movie/';
import TV from '../routes/TV/';
import Bookmark from '../routes/Bookmark';
import Detail from '../routes/Detail/';
import {Contents} from '../components/Container';



const Routers = () => (
    <Router>
        <Header />
        <Contents>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/movie" exact component={Movie} />
                <Route path="/tv" exact component={TV} />
                <Route path="/bookmark" component={Bookmark} />
                <Route path="/movie/:id" component={Detail} />
                <Route path="/tv/:id" component={Detail} />
                <Redirect form="*" to="/" />
            </Switch>
        </Contents>
    </Router>
);
export default Routers;