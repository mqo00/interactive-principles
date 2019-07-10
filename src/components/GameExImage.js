import PropTypes from 'prop-types';
import React from 'react';
// import Lightbox from 'react-image-lightbox';

class GameExImg extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lightboxOpen: false,
            img: ''
        };

        this.setImage = this.setImage.bind(this);

        // this.setImage();
    }

    componentDidMount() {
        this.setImage();
    }

    // componentDidUpdate() {
    //     this.setImage();
    // }

    setImage() {
        this.setState({img: require('../images/game_examples/' + (this.props.id) + '.png')});
    }

    render() {
        return (
            <div style={{backgroundImage: 'url(' + this.state.img + ')'}}
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