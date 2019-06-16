import React, { Component } from 'react';
import Card from './Card.js';
import principles from '../principles.json';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            cards: principles
        };

        this.flipAll = this.flipAll.bind(this);
        this.flipCard = this.flipCard.bind(this);
    }

    flipAll() {
        let items = this.state.cards;
        for (let card of items) {
            card.flipped = !card.flipped;
        }
        this.setState({cards: items});

        console.log(this.state);
    }

    flipCard(cardid) {
        console.log('flip');
        let items = this.state.cards;
        for (let card of items) {
            if (card.id === cardid) {
                card.flipped = !card.flipped;
            }
        }
        this.setState({cards: items});

        console.log(this.state);
    }

    render() {
        return (
            <div className='cards'>

                <div className={'row'}>
                    <div className={'col-12'}>
                        <div className={'toolbar'}>
                            <button onClick={this.flipAll}>
                                Flip All
                            </button>
                        </div>
                    </div>
                </div>

                <div className={'row'}>

                    {this.state.cards.map( card => (
                        <div key={card.id} className={'col-xs-12 col-sm-4 col-md-3 col-xl-2'} onClick={() => this.flipCard(card.id)}>
                            <Card
                                flipped={card.flipped}
                                id={card.id}
                                category={card.categoryId}
                                categoryName={card.category}
                                title={card.principle}
                                comparison={card.subtitle}
                                example={card.examples}
                            />
                        </div>
                    ))}

                </div>

            </div>
        );
    }
}