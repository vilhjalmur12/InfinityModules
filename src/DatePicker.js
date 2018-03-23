import React from 'react';
import Radium from 'radium';
import { PropTypes } from 'prop-types';
import Modal from './Modal';

const styles = {
    viewerContainer: {
        height: 100,
        backgroundColor: 'yellow'
    },
    weekdayContainer: {
        width: '100%',
        margin: 'auto'
    },
    weekday: {
        width: 35,
        height: 35,
        display: 'inline-block',
        margin: 5,
        backgroundColor: 'green'
    }
}

class DatePicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }

        this.showDateModal = this.showDateModal.bind(this);
    }

    showDateModal() {
        this.setState({ isOpen: true });
    }

    render() {
        return (
            <div>
                <button onClick={this.showDateModal}>Open date</button>
                <Modal size={'small'} isOpen={this.state.isOpen} onClose={() => this.setState({ isOpen: false })}>

                    <Modal.Body>
                        <div style={styles.viewerContainer}>

                        </div>
                        <div style={styles.weekdayContainer}>
                            <div style={styles.weekday}>a</div>
                            <div style={styles.weekday}>a</div>
                            <div style={styles.weekday}>a</div>
                            <div style={styles.weekday}>a</div>
                            <div style={styles.weekday}>a</div>
                            <div style={styles.weekday}>a</div>
                            <div style={styles.weekday}>a</div>
                        </div>
                        <div style={styles.weekdayContainer}>
                            <div style={styles.weekday}>a</div>
                            <div style={styles.weekday}>a</div>
                            <div style={styles.weekday}>a</div>
                            <div style={styles.weekday}>a</div>
                            <div style={styles.weekday}>a</div>
                            <div style={styles.weekday}>a</div>
                            <div style={styles.weekday}>a</div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>

        );
    }
}

DatePicker.propTypes = {
    onDatePick: PropTypes.func,
    locale: PropTypes.string
};

export default Radium(DatePicker);
