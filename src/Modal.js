import React from 'react';
import Radium from 'radium';
import jquery from 'jquery';
import { PropTypes } from 'prop-types';
import ModalTitle from './Components/ModalComponents/ModalTitle';
import ModalBody from './Components/ModalComponents/ModalBody';
import ModalFooter from './Components/ModalComponents/ModalFooter';

let styles = {
    modal: {
        display: 'none',
        position: 'fixed',
        zIndex: 1,
        paddingTop: 100,
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        overflow: 'auto',
        backgroundColor: 'rgb(0,0,0)',
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    modalContent: {
        backgroundColor: '#fefefe',
        margin: 'auto',
        //padding: 20,
        border: '1px solid #888',
        width: '80%'
    },
    closeButton: {
        color: '#aaaaaa',
        float: 'right',
        fontSize: 28,
        fontWeight: 'bold',
        cursor: 'pointer'
    },
    closeContainer: {
        width: '100%'
    }
}

// TODO: laga small, medium og large stærðir
class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.close = this.close.bind(this);
        this.closeButton = this.closeButton.bind(this);

        if(this.props.override) {
            for(var i in this.props.override) {
                styles[i] = this.props.override.i;
            }
        }

        if(this.props.size) {
            if(this.props.size == 'small') {
                styles.modalContent.width = '365px';
            } else if (this.props.size == 'medium') {
                styles.modalContent.width = '60%';
            } else if (this.props.size == 'large') {
                styles.modalContent.width = '90%';
            }
        }
    }

    close(event) {
        console.log(jquery(event.target).is('#myModal'));
        if (jquery(event.target).is('#myModal')) {
            this.props.onClose();
            styles.modal.display = 'none';
        }
    }

    closeButton() {
        this.props.onClose();
        styles.modal.display = 'none';
    }

    render() {
        if(this.props.isOpen == true) {
            styles.modal.display = 'block';
        }
        return (
            <div onClick={e => this.close(e)} id="myModal" style={styles.modal}>
                <div style={styles.modalContent}>
                    <div style={styles.closeContainer}>
                        <span onClick={this.closeButton} style={styles.closeButton}><i className="fas fa-times"></i></span>
                    </div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    override: PropTypes.object,
    size: PropTypes.string
};

Modal.Title = ModalTitle;
Modal.Footer = ModalFooter;
Modal.Body = ModalBody;

export default Radium(Modal);
