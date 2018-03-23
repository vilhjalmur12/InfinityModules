import React from 'react';
import Radium from 'radium';
import { PropTypes } from 'prop-types';

const SUCCESS = '#4CAF50';
const INFO = '#1937FF';
const WARNING = '#FF963B';
const DANGER = '#FF2816';

let styles = {
    progressBar: {
        width: '1%',
        backgroundColor: '#4CAF50',
        height: 30,
        boxShadow: '0 1px 0 rgba(255, 255, 255, .5) inset',
        borderRadius: 2
    },
    progress: {
        width: '100%',
        border: '1px solid black',
        backgroundColor: '#ddd',
        padding: 2
    }
}


// TODO: á eftir animation og laga hardcode color
class ProgressBar extends React.Component {
    constructor(props) {
        super(props);

        this.addColor = this.addColor.bind(this);
    }

    addStripes() {
        styles.progressBar.backgroundSize = '30px 30px';
        styles.progressBar.backgroundImage = 'linear-gradient(135deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent)';
        styles.progressBar.animation = 'animate-stripes 3s linear infinite';
    }

    addColor() {
        if(this.props.state) {
            if(this.props.state == 'success') {
                styles.progressBar.backgroundColor = SUCCESS;
            } else if (this.props.state == 'warning') {
                styles.progressBar.backgroundColor = WARNING;
            } else if (this.props.state == 'danger') {
                styles.progressBar.backgroundColor = DANGER;
            } else {
                styles.progressBar.backgroundColor = INFO;
            }
        } else {
            styles.progressBar.backgroundColor = INFO;
        }
    }

    render() {
        styles.progressBar.width = this.props.progress + '%';

        if(this.props.striped) {
            this.addStripes();
        }

        this.addColor();
        return (
            <div id="progress" style={styles.progress}>
                <div id="progressBar" style={styles.progressBar}>

                </div>
            </div>
        );
    }
}

ProgressBar.propTypes = {
    progress: PropTypes.number,
    striped: PropTypes.bool,
    animated: PropTypes.bool,
    state: PropTypes.object
};

export default Radium(ProgressBar);
