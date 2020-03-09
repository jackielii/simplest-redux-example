import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './../pages/home';
import About from './../pages/about';
import Contact from './../pages/contact';

const Main = () => (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/contact' component={Contact}/>
        </Switch>
)

export default Main;
