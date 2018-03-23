import React from 'react';
import Radium from 'radium';
import { PropTypes } from 'prop-types';
import Modal from './Modal';
import Row from './Row';
import Col from './Col';

const styles = {
    topClock: {
        width: '100%',
        backgroundColor: 'blue'
    },
    clock: {
        margin: 'auto',
        width: '50%'
    },
    clockNumber: {
        fontSize: 50,
        color: 'white',
        display: 'inline-block'
    },
    selectors: {
        margin: 'auto',
        width: '40%',
        marginTop: 20,
        marginBottom: 20
    },
    footerButton: {
        border: '1px solid black',
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        textAlign: 'center'
    },
    incArrow: {
        color: 'black',
        cursor: 'pointer',
        width: '100%',
        top: 0,
        textAlign: 'center'
    },
    decrArrow: {
        color: 'black',
        cursor: 'pointer',
        width: '100%',
        bottom: 0,
        textAlign: 'center'
    },
    hourInput: {
        width: '100%',
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 18
    },
    seperator: {
        height: '100%',
        width: '100%',
        textAlign: 'center'
    }
}


// TODO: Laga ok og cancel takka, ok takki er ekki að virka
// TODO: parsea betur þegar ýtt er á ok þannig réttur tími fari í gegn
class TimePicker extends React.Component {
    constructor(props) {
        super(props);
        let timeNow = new Date();
        let hour = timeNow.getHours();
        let minute = timeNow.getMinutes();
        let amPm
        let format;

        if(hour > 12) {
            amPm = 'pm';
        } else {
            amPm = 'am';
        }

        if(this.props.format) {
            format = this.props.format;
        } else {
            format = 24;
        }

        if(format == 12) {
            if (hour > format) {
                hour -= format;
            }
        }

        this.state = {
            isOpen: false,
            hour,
            minute,
            format,
            amPm
        }

        this.openModal = this.openModal.bind(this);
        this.incrHour = this.incrHour.bind(this);
        this.decrHour = this.decrHour.bind(this);
        this.decrMinute = this.decrMinute.bind(this);
        this.incrMinute = this.incrMinute.bind(this);
        this.onHourChange = this.onHourChange.bind(this);
        this.onMinuteChange = this.onMinuteChange.bind(this);
        this.onTimePick = this.onTimePick.bind(this);
        this.parseTime = this.parseTime.bind(this);
        this.switchAmPm = this.switchAmPm.bind(this);

    }

    openModal() {
        this.setState({ isOpen: true });
    }

    incrHour() {
        let hour = this.state.hour;
        if(hour >= this.state.format) {
            hour = 1
        } else {
            hour++;
        }
        this.setState({ hour });
    }

    decrHour() {
        let hour = this.state.hour;
        if(hour <= 1) {
            hour = this.state.format
        } else {
            hour--;
        }
        this.setState({ hour });
    }

    incrMinute() {
        let minute = this.state.minute;
        if(minute >= 60) {
            minute = 0
        } else {
            minute++;
        }
        this.setState({ minute });
    }

    decrMinute() {
        let minute = this.state.minute;
        if(minute <= 0) {
            minute = 60
        } else {
            minute--;
        }
        this.setState({ minute });
    }

    onHourChange(event) {
        let value = event.target.value;
        if(value <= this.state.format && value >= 0) {
            this.setState({ hour: value });
        }
    }

    onMinuteChange(event) {
        let value = event.target.value;
        if(value <= 60 && value >= 0) {
            this.setState({ minute: value });
        }
    }

    onTimePick() {
        this.setState({ isOpen: false });
        this.props.onTimePick(this.parseTime());
    }

    parseTime() {
        let hour = this.state.hour;
        let minute = this.state.minute;

        if (hour < 10) {
            hour = hour.toString();
            hour = '0'+hour;
        } else {
            hour = hour.toString();
        }

        if (minute < 10) {
            minute = minute.toString();
            minute = '0'+minute;
        } else {
            minute = minute.toString();
        }

        let timeValue = hour + ':' + minute;
        return timeValue;
    }

    switchAmPm() {
        let amPm = this.state.amPm;
        if (amPm == 'pm') {
            amPm = 'am';
        } else {
            amPm = 'pm';
        }
        this.setState({ amPm });
    }


    render() {
        let timeValue = this.parseTime();
        let amPmButton;

        if(this.state.format == 12) {
            amPmButton = <button onClick={this.switchAmPm}>{this.state.amPm}</button>;
        }

        return (
            <div>
                <div>
                    <input type="time" onClick={this.openModal} value={timeValue}></input>
                </div>
                <Modal
                    isOpen={this.state.isOpen}
                    onClose={() => this.setState({ isOpen: false })}
                    size='small'
                >
                    <Modal.Body>
                        <div style={styles.topClock}>
                            <div style={styles.clock}>
                                <div id="hourButton" style={styles.clockNumber}>{this.state.hour}</div>
                                <div style={styles.clockNumber}>:</div>
                                <div id="minButton" style={styles.clockNumber}>{this.state.minute}</div>
                            </div>
                        </div>
                        <div style={styles.selectors}>
                            <Row>
                                <Col size={4}>
                                    <div onClick={this.incrHour} style={styles.incArrow}>
                                        <i className="fas fa-angle-up"></i>
                                    </div>
                                    <div>
                                        <input onChange={e => this.onHourChange(e)} placeholder={this.state.hour} style={styles.hourInput}></input>
                                    </div>
                                    <div onClick={this.decrHour} style={styles.decrArrow}>
                                        <i className="fas fa-angle-down"></i>
                                    </div>
                                </Col>
                                <Col size={1}></Col>
                                <Col size={4}>
                                    <div onClick={this.incrMinute} style={styles.incArrow}>
                                        <i className="fas fa-angle-up"></i>
                                    </div>
                                    <div>
                                        <input onChange={e => this.onMinuteChange(e)} placeholder={this.state.minute} style={styles.hourInput}></input>
                                    </div>
                                    <div onClick={this.decrMinute} style={styles.decrArrow}>
                                        <i className="fas fa-angle-down"></i>
                                    </div>
                                </Col>
                            </Row>
                            {amPmButton}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Row>
                            <Col size={6}>
                                <div className="timeFooterButton" style={styles.footerButton}>
                                    Cancel
                                </div>
                            </Col>
                            <Col size={6}>
                                <div onClick={this.onTimePick} className="timeFooterButton" style={styles.footerButton}>
                                    Ok
                                </div>
                            </Col>
                        </Row>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

Modal.propTypes = {
    onTimePick: PropTypes.func,
    format: PropTypes.number
};

export default Radium(TimePicker);
