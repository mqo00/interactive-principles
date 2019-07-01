import React from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Img from './Img';
import Comparison from './Comparison';

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
                </Modal.Header>
                <Modal.Body className={'card-modal__body row'}>
                    <div className={'card-modal__body__side-panel col-xs-12 col-sm-4 col-md-3'}>

                        <Img id={this.props.id} classes={'card-modal__body__side-panel__img'}/>
                        <div className={'card-modal__body__side-panel__cat'}>
                            <h3>Category</h3>
                            {this.props.categoryName}
                        </div>
                        <div className={'card-modal__body__side-panel__comparison'}>
                            <Comparison comparison={this.props.example}/>
                        </div>

                    </div>
                    <div className={'card-modal__body__details col-xs-12 col-sm-8 col-md-9'}>
                        <div className={'card-modal__body__details__section'}>
                            <h3>Summary</h3>
                            <p>{this.props.description}</p>
                        </div>
                        <div className={'card-modal__body__details__section'}>
                            <h3>Questions</h3>
                            <p>{this.props.questions}</p>
                        </div>
                        <div className={'card-modal__body__details__section'}>
                            <h3>Game Example</h3>
                            <h4>{this.props.gameEx}</h4>
                            <p>{this.props.gameExURL}</p>
                            <p>{this.props.gameExDesc}</p>
                        </div>
                        <div className={'card-modal__body__details__section'}>
                            <h3>Related</h3>
                            <p>{this.props.related}</p>
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