import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flipped: false,
        };
    }

    renderCard() {
        return (
            this.state.flipped ?
                <div className={'card__face card__face--front'}>
                </div>
                :
                <div className={'card__face card__face--back'}>
                    {this.props.title}
                </div>
        );
    }

    flipCard() {
        this.setState({flipped: !this.state.flipped});
    }

    render() {
        return (
            <div className={'card card--' + this.props.category.toString()} onClick={() => this.flipCard()}>
                { this.renderCard() }
            </div>
        );
    }
}

Card.propTypes = {
    id: PropTypes.any,
    category: PropTypes.any,
    title: PropTypes.any
};

export default Card;