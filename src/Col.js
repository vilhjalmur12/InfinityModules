import React from 'react';
import Radium from 'radium';
import { PropTypes } from 'prop-types';

let styles = {
    ColContainer: {
        height: '100%',
        display: 'inline-block'
    }
}

// TODO: gera betri margin og padding pælingar
class Col extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            singleCol: 100/12
        }
    }

    render() {
        let size;
        if(this.props.size) {
            size = this.props.size * this.state.singleCol;
            size = size.toString();
        } else {
            size = this.state.singleCol;
            size = size.toString();
        }

        styles.ColContainer.width = size + '%';

        return (
            <div style={styles.ColContainer}>
                {this.props.children}
            </div>
        );
    }
}

Col.propTypes = {
    size: PropTypes.number
};

export default Radium(Col);
