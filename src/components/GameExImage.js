import PropTypes from 'prop-types';
import React from 'react';
// import Lightbox from 'react-image-lightbox';

var image = '';

class GameExImg extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lightboxOpen: false
        };
        image = require('../images/game_examples/' + (props.id) + '.png');
    }

    render() {
        return (
            <div style={{backgroundImage: 'url(' + image + ')'}}
                className={'img img-responsive ' + this.props.classes}
                onClick={() => this.setState({ lightboxOpen: true })}
            >
            </div>
        );
    }
}

GameExImg.propTypes = {
    id: PropTypes.any,
    classes: PropTypes.any
};

export default GameExImg;