import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.image = require('../images/' + (this.props.id) + '.svg');

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            showModal: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    renderCard() {
        return (
            (this.props.flipped) ?
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
                        <div className={'card__face--front__category__text'}>{this.props.categoryName}</div>
                    </div>
                    <div className={'card__face--front__body'}>
                        <div className={'card__face--front__body__comparison'}>
                            {this.props.comparison}
                        </div>
                        <div style={{backgroundImage: 'url(' + this.image + ')'}} className={'card__face--front__body__image'}></div>
                        <div className={'card__face--front__body__example'}>
                            {this.props.example}
                        </div>

                    </div>
                </div>
                :
                <div className={'card__face card__face--back'}>
                    <div className={'card__face--back__content'}>
                        <div className={'principle-number'}>
                            {this.props.id}
                        </div>
                        <div className={'principle-image'} style={{backgroundImage: 'url(' + this.image + ')'}}></div>
                        <div className={'principle-title'}>
                            {this.props.title}
                        </div>
                    </div>
                    <div className={'card__face--back__category'}>
                        {this.props.categoryName}
                    </div>

                </div>
        );
    }

    render() {
        return (
            <div className={'card category--' + this.props.category.toString()}>
                { this.renderCard() }

                <Modal show={this.state.show} onHide={this.handleClose} centered dialogClassName={'card-modal category--' + this.props.category.toString()}>
                    <Modal.Header className={'card-modal__header'} closeButton>
                        <div className={'card-modal__header__id principle-number'}>{this.props.id}</div>
                        <h2 className={'card-modal__header__title'}>{this.props.title}</h2>
                        <h2 className={'card-modal__header__category'}>{this.props.categoryName}</h2>
                    </Modal.Header>
                    <Modal.Body className='card-modal__body-container'>
                        <div className="row">
                            <div className={'card-modal__summary'}>
                                <h2>Summary view</h2>
                            </div>
                            <div className={'card-modal__details'}>
                                <div>
                                    <h3>this is the extra info</h3>
                                </div>
                                <div>
                                    <h3>Questions</h3>
                                    <p>{this.props.questions}</p>
                                </div>
                                <div>
                                    <h3>Summary</h3>
                                    <p>{this.props.descr}</p>
                                </div>
                                <div>
                                    <h3>Game Example</h3>
                                    <h4>{this.props.gameEx}</h4>
                                    <p>{this.props.gameExURL}</p>
                                    <p>{this.props.gameExDesc}</p>
                                </div>
                                <div>
                                    <h3>Related</h3>
                                    <p>{this.props.related}</p>
                                </div>
                                <div>
                                    <h3>Cited</h3>
                                    <p>{this.props.citation}</p>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

Card.propTypes = {
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