import React, { Component } from 'react';
import Principles from './Principles';
import logo from '../images/ixp_logo.svg';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
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
                <Router>
                    <div className={'title-box'}>

                        <Link to={'/'}>
                            <h1 className={'main-title'}>
                                <img src={logo} className={'img img-responsive'}/>
                            </h1>
                        </Link>
                        <h2 className={'main-subtitle'}>
                            a deck of learning science principles for designing educational games
                        </h2>
                    </div>

                    <Route exact path={'/'} component={Principles}/>
                    <Route exact path={'/about'} component={About}/>
                </Router>
                {/*<Principles/>*/}
            </div>
        );
    }
}