import PropTypes from 'prop-types';
import React from 'react';

function GameExImg(props) {
    var image = require('../images/game_examples/' + (props.id) + '.png');
    return (
        <div style={{backgroundImage: 'url(' + image + ')'}} className={'img img-responsive ' + props.classes}></div>
    );
}

GameExImg.propTypes = {
    id: PropTypes.any,
    classes: PropTypes.any
};

export default GameExImg;