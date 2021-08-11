import React, { Component } from 'react';
import Card from './card.js';
import principles from '../principles.json';
import Button from './button.js';
import ReactGA from 'react-ga';
export default class App extends Component {

    constructor() {
        super();
        this.state = {
            cards: [],
            userRole: ''
        };

        this.flipCard = this.flipCard.bind(this);
        this.logUserID = this.logUserID.bind(this);
    }

    componentDidMount() {
        this.setState({cards: principles});
    }

    flipCard(cardid) {
        let items = this.state.cards;
        for (let card of items) {
            if (card.id === cardid) {
                card.flipped = !card.flipped;
            }
        }
        this.setState({cards: items});
    }

    initReactGA() {
        ReactGA.initialize('UA-186459299-1'), { 
            debug: true,
            titleCase: false,
            gaOptions: {
                siteSpeedSampleRate: 100
            }
        };
    }

    logUserID() {
        let id = window.prompt('Enter your assigned user id');
        this.setState({userRole: id}); 
        console.log(this.state.userRole);
    }

    render() {
        this.initReactGA();
        return (
            <div className='cards'>
                <Button onClick={this.logUserID} text={'Login'}></Button>

                <div className={'row'}>

                    {this.state.cards.map( card => (
                        <div key={card.id} className={'col-xs-12 col-sm-12 card-container'} onClick={() => this.flipCard(card.id)}>
                            <Card
                                userRole={this.state.userRole}
                                flipped={card.flipped}
                                id={card.id}
                                category={card.categoryId}
                                categoryName={card.category}
                                title={card.principle}
                                questions={card.questions}
                                descr={card.description}
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
