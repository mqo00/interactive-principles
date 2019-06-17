import React, { Component } from 'react';
import Card from './Card.js';
import principles from '../principles.json';
import Button from './Button.js';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            cards: [],
            allFlipped: true
        };

        this.flipAll = this.flipAll.bind(this);
        this.flipCard = this.flipCard.bind(this);
        this.resetCards = this.resetCards.bind(this);
        this.shuffleCards = this.shuffleCards.bind(this);
    }

    componentDidMount() {
        this.setState({cards: principles});
    }

    flipAll() {
        let items = this.state.cards;
        for (let card of items) {
            card.flipped = !this.state.allFlipped;
        }
        this.setState({cards: items});
        this.setState({allFlipped: !this.state.allFlipped});

        console.log(this.state);
    }

    resetCards() {
        let items = principles;
        items.sort(function(a, b){return (a.id - b.id);});
        for (let card of items) {
            card.flipped = false;
        }
        this.setState({cards: items});
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

    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    shuffleCards() {
        let shuffled = this.shuffle(principles);
        this.setState({cards: shuffled});
    }

    render() {
        return (
            <div className='cards'>

                <div className={'row'}>
                    <div className={'col-12'}>
                        <div className={'toolbar'}>
                            <Button onClick={this.resetCards} text={'Reset'} icon={'undo-alt'}></Button>
                            <Button onClick={this.flipAll} text={'Flip All'} icon={'exchange-alt'}></Button>
                            <Button onClick={this.shuffleCards} text={'Shuffle'} icon={'random'}></Button>
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