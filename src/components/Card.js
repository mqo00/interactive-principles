import React from 'react';
import PropTypes from 'prop-types';
import Img from './Img';
import Comparison from './Comparison';

class Card extends React.Component {
    constructor(props) {
        super(props);

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

    renderComparison(comparison) {
        if (comparison) {
            return(
                <Comparison comparison={comparison}/>
            );
        }

    }

    renderCard() {
        return (
            (this.props.flipped) ?
                <div className={'card__face card__face--front animated'}>
                    <div className={'card__face--front__header'} onClick={this.props.onOpen}>
                        <button className={'btn btn-link card__face--front__header__open-link'}>
                            <i className="fas fa-external-link-alt"></i>
                        </button>
                        <div className={'principle-number'}>
                            {this.props.id}
                        </div>
                        <div className={'principle-title'}>
                            {this.props.principle}
                        </div>
                    </div>
                    <div className={'card__face--front__category'}>
                        <div className={'card__face--front__category__text'}>{this.props.categoryName}</div>
                    </div>
                    <div className={'card__face--front__body'}>
                        <div className={'card__face--front__body__comparison'}>
                            {this.renderComparison(this.props.subtitle)}
                        </div>
                        <Img id={this.props.id} classes={'card__face--front__body__image'}/>
                        <div className={'card__face--front__body__example'}>
                            {this.renderComparison(this.props.examples)}
                        </div>

                    </div>
                </div>
                :
                <div className={'card__face card__face--back animated'}>
                    <div className={'card__face--back__content'}>
                        <div className={'principle-number'}>
                            {this.props.id}
                        </div>
                        <Img id={this.props.id}/>
                        <div className={'principle-title'}>
                            {this.props.principle}
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
            <div className={'card category--' + this.props.categoryId.toString()}>
                { this.renderCard() }
            </div>
        );
    }
}

Card.propTypes = {
    flipped: PropTypes.any,
    id: PropTypes.any,
    categoryId: PropTypes.any,
    categoryName: PropTypes.any,
    principle: PropTypes.any,
    questions: PropTypes.any,
    description: PropTypes.any,
    subtitle: PropTypes.any,
    examples: PropTypes.any,
    exampleGame: PropTypes.any,
    gameExURL: PropTypes.any,
    gameExDesc: PropTypes.any,
    related: PropTypes.any,
    onOpen: PropTypes.any,
    onFlip: PropTypes.any
};

export default Card;