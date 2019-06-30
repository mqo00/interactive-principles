import React, { Component } from 'react';
import Card from './Card.js';
import principles from '../principles.json';
import Button from './Button.js';
import { Modal } from 'react-bootstrap';

function compareStrings(a, b) {
    return (a < b) ? -1 : (a > b) ? 1 : 0;
}

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            cards: [],
            allFlipped: false,
            showModal: false,
            cardInModal: principles[0]
        };

        this.flipAll = this.flipAll.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.sortAZ = this.sortAZ.bind(this);
        this.sortNumerical = this.sortNumerical.bind(this);
        this.resetCards = this.resetCards.bind(this);
        this.shuffleCards = this.shuffleCards.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.renderModal = this.renderModal.bind(this);
        this.flipCard = this.flipCard.bind(this);
        this.modalNavToNext = this.modalNavToNext.bind(this);
    }

    handleClose() {
        this.setState({ showModal: false });
        this.flipCard(this.state.cardInModal);
    }

    handleShow() {
        this.setState({ showModal: true });
    }

    componentDidMount() {
        this.setState({cards: principles});
    }

    //utility
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

    //card actions
    flipAll() {
        let items = this.state.cards;
        for (let card of items) {
            card.flipped = !this.state.allFlipped;
        }
        this.setState({cards: items});
        this.setState({allFlipped: !this.state.allFlipped});

        console.log(this.state);
    }

    sortNumerical() {
        let items = principles;
        items.sort(function(a, b){return (a.id - b.id);});
        this.setState({cards: items});
    }

    sortAZ() {
        let items = principles;
        items.sort(function(a, b) {
            return compareStrings(a.principle, b.principle);
        });
        this.setState({cards: items});
    }

    resetCards() {
        let items = principles;
        items.sort(function(a, b){return (a.id - b.id);});
        for (let card of items) {
            card.flipped = false;
        }
        this.setState({cards: items});
    }

    handleClick(clickedCard) {
        this.setState({cardInModal: clickedCard});
        if(!this.state.showModal) {
            this.flipCard(clickedCard);
        }
    }

    flipCard(flipcard) {
        let items = this.state.cards;
        for (let card of items) {
            if (card.id === flipcard.id) {
                card.flipped = !card.flipped;
            }
        }
        this.setState({cards: items});
    }

    shuffleCards() {
        let shuffled = this.shuffle(principles);
        this.setState({cards: shuffled});
    }

    renderModal() {
        this.setState({showModal: true});
    }

    modalNavToNext() {
        let currentCardIndex = this.state.cards.indexOf(this.state.cards.find(card => card.id === (this.state.cardInModal.id)));
        let nextCardIndex = ((currentCardIndex + 1) < this.state.cards.length) ? (currentCardIndex + 1) : 0;
        let nextCard = this.state.cards[nextCardIndex];

        this.setState({cardInModal: (nextCard)});
    }

    render() {
        return (
            <div className='cards'>

                <div className={'row'}>
                    <div className={'col-12'}>
                        <div className={'toolbar'}>
                            <Button onClick={this.resetCards} text={'Reset'} icon={'undo-alt'}></Button>
                            <Button onClick={this.flipAll} text={'Flip All'} icon={'exchange-alt'}></Button>
                            <Button onClick={this.sortAZ} text={'Sort A-Z'} icon={'sort-alpha-down'}></Button>
                            <Button onClick={this.sortNumerical} text={'Sort Numeric'} icon={'sort-numeric-down'}></Button>
                            <Button onClick={this.shuffleCards} text={'Shuffle'} icon={'random'}></Button>
                        </div>
                    </div>
                </div>

                <div className={'row'}>

                    {this.state.cards.map( card => (
                        <div key={card.id} className={'col-xs-12 col-sm-12 card-container'} onClick={() => this.handleClick(card)}>
                            <Card
                                flipped={card.flipped}
                                id={card.id}
                                image={card.id}
                                category={card.categoryId}
                                categoryName={card.category}
                                title={card.principle}
                                questions={card.questions}
                                descr={card.description}
                                comparison={card.subtitle}
                                example={card.examples}
                                gameEx={card.exampleGame}
                                gameExURL={card.exampleGameUrl}
                                gameExDesc={card.exampleGameDesc}
                                related={card.related}
                                citation={card.cited}
                                onOpen={this.renderModal}
                            />
                        </div>
                    ))}

                </div>

                <Modal show={this.state.showModal} onHide={this.handleClose} centered dialogClassName={'card-modal category--' + this.state.cardInModal.categoryId.toString()}>
                    <Modal.Header className={'card-modal__header'}>
                        <div className={'card-modal__header__id principle-number'}>{this.state.cardInModal.id}</div>
                        <h2 className={'card-modal__header__title'}>{this.state.cardInModal.principle}</h2>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <h3>Questions</h3>
                            <p>{this.state.cardInModal.questions}</p>
                        </div>
                        <div>
                            <h3>Summary</h3>
                            <p>{this.state.cardInModal.descr}</p>
                        </div>
                        <div>
                            <h3>Game Example</h3>
                            <h4>{this.state.cardInModal.gameEx}</h4>
                            <p>{this.state.cardInModal.gameExURL}</p>
                            <p>{this.state.cardInModal.gameExDesc}</p>
                        </div>
                        <div>
                            <h3>Related</h3>
                            <p>{this.state.cardInModal.related}</p>
                        </div>
                        <div>
                            <h3>Cited</h3>
                            <p>{this.state.cardInModal.citation}</p>
                        </div>

                        <button onClick={this.modalNavToNext} className='previous-next-button fas fa-arrow-circle-right'></button>

                    </Modal.Body>
                </Modal>

            </div>
        );
    }
}