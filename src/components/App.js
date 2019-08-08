import React, { Component } from 'react';
import Principles from './Principles';
import logo from '../images/ixp_logo.svg';
import { HashRouter as Router, Route } from 'react-router-dom';
import About from './About';

export default class App extends Component {

    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return(
            <div>
                <div className={'title-box'}>

                    <h1 className={'main-title'}>
                        <img src={logo} className={'img img-responsive'}/>
                    </h1>
                    <h2 className={'main-subtitle'}>
                        a deck of learning science principles for designing educational games
                    </h2>
                </div>

                <Router>
                    <Route exact path={'/'} component={Principles}/>
                    <Route exact path={'/about'} component={About}/>
                </Router>
                {/*<Principles/>*/}
            </div>
        );
    }
}