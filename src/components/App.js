import React, { Component } from 'react';
import Card from './Card.js';
import principles from '../principles.json';
import Button from './Button.js';
import ReactGA from 'react-ga';

        
function compareStrings(a, b) {
    return (a < b) ? -1 : (a > b) ? 1 : 0;
}
export default class App extends Component {

    constructor() {
        super();
        this.state = {
            cards: [],
            allFlipped: true,
            userRole: ''
        };

        this.flipAll = this.flipAll.bind(this);
        this.flipCard = this.flipCard.bind(this);
        this.sortAZ = this.sortAZ.bind(this);
        this.sortNumerical = this.sortNumerical.bind(this);
        this.resetCards = this.resetCards.bind(this);
        this.shuffleCards = this.shuffleCards.bind(this);
        this.isTeacher = this.isTeacher.bind(this);
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

    flipCard(cardid) {
        // console.log('flip');
        let items = this.state.cards;
        for (let card of items) {
            if (card.id === cardid) {
                card.flipped = !card.flipped;
            }
        }
        this.setState({cards: items});
        // console.log(this.state);
    }

    shuffleCards() {
        let shuffled = this.shuffle(principles);
        this.setState({cards: shuffled});
    }

    initReactGA() {
        ReactGA.initialize('UA-186459299-1'), { //G-YJEZFDTWH3; new: G-PKCB14SVPQ
            debug: true,
            titleCase: false,
            gaOptions: {
                siteSpeedSampleRate: 100
            }
        };
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    isTeacher() {
        if (window.confirm('Click OK if you are a teacher, or click Cancel if you are a designer')) {
            this.setState({userRole: 'teacher'}); //, () => {console.log('ok:', this.state.userRole);});
        } else {
            this.setState({userRole: 'designer'}); //, () => {console.log('cancel:', this.state.userRole);});
        }
    }

    render() {
        this.initReactGA();
        return (
            <div className='cards'>
                <Button onClick={this.isTeacher} text={'Login'}></Button>

                <div className={'row'}>

                    {this.state.cards.map( card => (
                        <div key={card.id} className={'col-xs-12 col-sm-12 card-container'} onClick={() => this.flipCard(card.id)}>
                            <Card
                                userRole={this.state.userRole}
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
                            />
                        </div>
                    ))}

                </div>

            </div>
        );
    }
}