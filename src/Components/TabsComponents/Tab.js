import React from 'react';
import Radium from 'radium';
import { PropTypes } from 'prop-types';

class Tab extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>{this.props.title}</p>
                {this.props.children}
            </div>
        );
    }
}

Tab.propTypes = {
    selectionKey: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
};

export default Radium(Tab);
