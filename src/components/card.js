import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import ReactGA from 'react-ga';

function sendData(data) {
    var request = new XMLHttpRequest();
    request.open('POST', 'https://eharpste.pythonanywhere.com/principle_logs/log');
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.send(JSON.stringify(data));
    console.log(data);
}
class Card extends React.Component {
    constructor(props) {
        super(props);

        this.image = require('../images/' + (this.props.id) + '.svg');

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.incrTime = this.incrTime.bind(this);
        this.resetTimer = this.resetTimer.bind(this);

        this.state = {
            showModal: false,
            seconds: 0
        };
    }

    incrTime() {
        const seconds = this.state.seconds + 1;
        this.setState({ seconds: seconds });
    }

    startTimer() {
        if (this.timer == 0 && this.state.seconds == 0) {
            this.timer = setInterval(this.incrTime, 1000);
        }
    }

    resetTimer() {
        console.log(this.state.seconds, 'seconds passed for timer', this.timer);
        clearInterval(this.timer);
        this.setState({ seconds: 0 });
    }

    handleClose() {
        this.setState({ show: false });
        var data = {category: this.props.title,
            action: 'Close',
            value: this.state.seconds,
            time: new Date().toISOString(),
            label: this.props.userRole
        };
        ReactGA.event(data);
        sendData(data);

        this.resetTimer();
    }

    handleShow() {
        this.setState({ show: true });
        this.startTimer();
        var data = {category: this.props.title,
            action: 'Open',
            value: 0,
            time:  new Date().toISOString(), 
            label: this.props.userRole
        };
        ReactGA.event(data);
        sendData(data);
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
                <div className={'card__face--front__body'} onClick={this.handleShow}>
                    <div className={'card__face--front__body__comparison'}>
                        {this.props.shortdescr}
                    </div>
                    <div style={{backgroundImage: 'url(' + this.image + ')'}} className={'card__face--front__body__image'}></div>

                </div>
            </div>
        );
    }

    renderPrinciple() {
        if (this.props.prescr) {
            return (
                <div>
                    <h3>Principle</h3>
                    <p>{this.props.prescr}</p>
                </div>
            );
        }
    }

    renderDescription() {
        return (
            <div className={'card-modal__details__lines'}>
                <h3>Description</h3>
                <p>{this.props.shortdescr}</p>
                {/* <p>{this.props.longdescr}</p> */}
            </div>            
        );
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
        if (this.props.examples) {
            return (
                <div className={'card-modal__details__lines'}>
                    <h3>Examples</h3>
                    <p>{this.props.examples}</p>
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
                    </Modal.Header>
                    <Modal.Body className='card-modal__body-container'>
                        <div className="row">
                            <div className={'card-modal__details'}>
                                {/* {this.renderPrinciple()} */}
                                {this.renderDescription()}
                                {/* {this.renderQuestions()} */}
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
    shortdescr: PropTypes.any,
    longdescr: PropTypes.any,
    prescr: PropTypes.any,
    questions: PropTypes.any,
    examples: PropTypes.any,
};

export default Card;
