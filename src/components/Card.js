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

    renderCard() {
        return (
            (this.props.flipped) ?
                <div className={'card__face card__face--front'}>
                    <div className={'card__face--front__header'} onClick={this.props.onOpen}>
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
                            <Comparison comparison={this.props.comparison}/>
                        </div>
                        <Img id={this.props.id} classes={'card__face--front__body__image'}/>
                        <div className={'card__face--front__body__example'}>
                            <Comparison comparison={this.props.example}/>
                        </div>

                    </div>
                </div>
                :
                <div className={'card__face card__face--back'}>
                    <div className={'card__face--back__content'}>
                        <div className={'principle-number'}>
                            {this.props.id}
                        </div>
                        <Img id={this.props.id}/>
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
    onOpen: PropTypes.any,
    onFlip: PropTypes.any
};

export default Card;