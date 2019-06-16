import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    renderCard() {
        return (
            (this.props.flipped) ?
                <div className={'card__face card__face--front'}>
                    <div className={'card__face--front__header'}>
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
                        <div className={'card__face--front__body__image'}></div>
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
                        <div className={'principle-image'}>

                        </div>
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
    //
    // flipCard() {
    //     this.setState({flipped: !this.state.flipped});
    //
    //     this.setState(
    //         this.state.flipped ? {flipAnimation: 'animated flipInY'} : {flipAnimation: ''}
    //     );
    // }

    render() {
        return (
            <div className={'card card--' + this.props.category.toString()}>
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
    comparison: PropTypes.any,
    example: PropTypes.any,
};

export default Card;