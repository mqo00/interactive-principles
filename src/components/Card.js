import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import ReactGA from 'react-ga';

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.image = require('../images/' + (this.props.id) + '.svg');

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            showModal: false,
            seconds: 0
        };

        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.incrTime = this.incrTime.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    incrTime() {
        const seconds = this.state.seconds + 1;
        this.setState({ seconds: seconds });
    }
    //componentDidMount() {};

    startTimer() {
        if (this.timer == 0 && this.state.seconds == 0) {
            this.timer = setInterval(this.incrTime, 1000);
        }
        //console.log(this.state.seconds, 'seconds passed for timer', this.timer);
    }

    resetTimer() {
        console.log(this.state.seconds, 'seconds passed for timer', this.timer);
        clearInterval(this.timer);
        this.setState({ seconds: 0 });
    }

    handleClose() {
        this.setState({ show: false });
        ReactGA.event({
            category: this.props.title,
            action: 'Close',
            value: this.state.seconds,
            label: this.props.userRole,
            nonInteraction: true
        });
        this.resetTimer();
    }

    handleShow() {
        this.setState({ show: true });
        this.startTimer();
        ReactGA.event({
            category: this.props.title,
            action: 'View',
            label: this.props.userRole,
            nonInteraction: true
        });
    }

    renderCard() {
        return (
            <div className={'card__face card__face--front'}>
                <div className={'card__face--front__header'} onClick={this.handleShow}>
                    <button className={'btn btn-link card__face--front__header__open-link'}>
                        <i className="fas fa-external-link-alt"></i>
                    </button>
                    <div className={'principle-number'}>
                        {this.props.id}
                    </div>
                    <div className={'principle-title'}>
                        {this.props.title}
                    </div>
                </div>
                <div className={'card__face--front__category'}>
                    <div className={'card__face--front__category__text'}> </div>
                </div>
                <div className={'card__face--front__body'}>
                    <div className={'card__face--front__body__comparison'}>
                        {this.props.comparison}
                    </div>
                    <div style={{backgroundImage: 'url(' + this.image + ')'}} className={'card__face--front__body__image'}></div>

                </div>
            </div>
        );
    }

    renderDescription() {
        if (this.props.descr) {
            return (
                <div>
                    <h3>Description</h3>
                    <p>{this.props.descr}</p>
                </div>            
            );
        }
    }

    renderQuestions() {
        if (this.props.questions) {
            return (
                <div className={'card-modal__details__lines'}>
                    <h3>Questions</h3>
                    <p>{this.props.questions}</p>
                </div>        
            );
        }
    }
    
    renderExamples() {
        if (this.props.example) {
            return (
                <div className={'card-modal__details__lines'}>
                    <h3>Examples</h3>
                    <p>{this.props.example}</p>
                </div>        
            );
        }
    }

    render() {
        return (
            <div className={'card category--' + this.props.category.toString()}>
                { this.renderCard() }

                <Modal show={this.state.show} onHide={this.handleClose} centered dialogClassName={'card-modal category--' + this.props.category.toString()}>
                    <Modal.Header className={'card-modal__header'} closeButton>
                        <div className={'card-modal__header__id principle-number'}>{this.props.id}</div>
                        <h2 className={'card-modal__header__title'}>{this.props.title}</h2>
                        {/* <h2 className={'card-modal__header__category'}>{this.props.categoryName}</h2> */}
                    </Modal.Header>
                    <Modal.Body className='card-modal__body-container'>
                        <div className="row">
                            <div className={'card-modal__details'}>
                                <div>
                                    <h3>Principle</h3>
                                    <p>{this.props.comparison}</p>
                                </div>
                                {this.renderDescription()}
                                {this.renderQuestions()}
                                {this.renderExamples()}
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

Card.propTypes = {
    userRole: PropTypes.any,
    flipped: PropTypes.any,
    id: PropTypes.any,
    category: PropTypes.any,
    categoryName: PropTypes.any,
    title: PropTypes.any,
    questions: PropTypes.any,
    descr: PropTypes.any,
    comparison: PropTypes.any,
    example: PropTypes.any,
    gameEx: PropTypes.any,
    gameExURL: PropTypes.any,
    gameExDesc: PropTypes.any,
    related: PropTypes.any,
    citation: PropTypes.any,
};

export default Card;