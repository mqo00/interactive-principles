import React from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Img from './Img';
import Comparison from './Comparison';
import MultipleComparisons from './MultipleComparisons';

class CardModal extends React.Component {
    constructor(props) {
        super(props);

        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(event) {
        if(event.key === 'ArrowLeft'){
            this.props.onPrev();
        }
        if(event.key === 'ArrowRight'){
            this.props.onNext();
        }
    }

    componentDidMount(){
        document.addEventListener('keydown', this.handleKeyPress, false);
    }
    componentWillUnmount(){
        document.removeEventListener('keydown', this.handleKeyPress, false);
    }

    render() {
        return(
            <Modal
                show={this.props.show}
                onHide={this.props.onClose}
                centered
                dialogClassName={'card-modal category--' + this.props.categoryId.toString()}
            >
                <Modal.Header className={'card-modal__header'} closeButton>
                    <div className={'card-modal__header__id principle-number'}>{this.props.id}</div>
                    <h2 className={'card-modal__header__title'}>{this.props.principle}</h2>
                    <div className={'card-modal__header__cat'}>
                        {this.props.categoryName}
                    </div>
                </Modal.Header>
                <Modal.Body className={'card-modal__body row'}>
                    <div className={'card-modal__body__side-panel col-xs-12 col-sm-4 col-md-3'}>

                        <Img id={this.props.id} classes={'card-modal__body__side-panel__img'}/>
                        <div className={'card-modal__body__side-panel__title'}>
                            <h3>Definition</h3>
                        </div>
                        <div className={'card-modal__body__side-panel__comparison'}>
                            <Comparison comparison={this.props.comparison}/>
                        </div>
                        <div className={'card-modal__body__side-panel__title'}>
                            <h3>Related Principles</h3>
                        </div>
                        <div className={'card-modal__body__side-panel__related'}>
                            <p>{this.props.related}</p>
                        </div>

                    </div>
                    <div className={'card-modal__body__details col-xs-12 col-sm-8 col-md-9'}>
                        <div className={'card-modal__body__details__section'}>
                            <h3>How can you use it?</h3>
                            <p>{this.props.description}</p>
                        </div>
                        <div className={'card-modal__body__details__section'}>
                            <h3>What does it look like?</h3>
                            <MultipleComparisons comparisons={this.props.example}/>
                        </div>
                        <div className={'card-modal__body__details__section'}>
                            <h3>What does it look like in a game?</h3>
                            <h4>{this.props.gameEx}</h4>
                            <p>{this.props.gameExURL}</p>
                            <p>{this.props.gameExDesc}</p>
                        </div>
                        <div className={'card-modal__body__details__section'}>
                            <div className={'card-modal__body__details__section__questions'}>
                                <h3>Ask Yourself</h3>
                                <p>{this.props.questions}</p>
                            </div>
                        </div>
                        <div className={'card-modal__body__details__section'}>
                            <h3>Cited</h3>
                            <p>{this.props.citation}</p>
                        </div>
                    </div>

                    <button onClick={this.props.onNext} className='previous-next-button previous-next-button--next fas fa-arrow-circle-right'></button>
                    <button onClick={this.props.onPrev} className='previous-next-button previous-next-button--prev fas fa-arrow-circle-left'></button>

                </Modal.Body>
            </Modal>
        );
    }
}

CardModal.propTypes = {
    show: PropTypes.any,
    onClose: PropTypes.any,
    onNext: PropTypes.any,
    onPrev: PropTypes.any,
    id: PropTypes.any,
    categoryId: PropTypes.any,
    categoryName: PropTypes.any,
    principle: PropTypes.any,
    comparison: PropTypes.any,
    questions: PropTypes.any,
    description: PropTypes.any,
    example: PropTypes.any,
    gameEx: PropTypes.any,
    gameExURL: PropTypes.any,
    gameExDesc: PropTypes.any,
    related: PropTypes.any,
    citation: PropTypes.any
};

export default CardModal;