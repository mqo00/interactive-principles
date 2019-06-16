import React, { Component } from 'react';
import Card from './Card.js';
import principles from '../principles.json';

export default class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className='cards'>

                <div className={'row'}>

                    {principles.map( card => (
                        <div key={card.id} className={'col-xs-12 col-sm-4 col-md-3 col-xl-2'}>
                            <Card id={card.id} category={card.categoryId} title={card.principle}/>
                        </div>
                    ))}

                </div>

            </div>
        );
    }
}