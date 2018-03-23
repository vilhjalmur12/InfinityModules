import React from 'react';
import Radium from 'radium';

const styles = {
    container: {
        height: 50,
        bottom: 0,
        borderTop: '1px solid black'
    }
}

class ModalFooter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={styles.container}>
                {this.props.children}
            </div>
        );
    }
}

export default Radium(ModalFooter);
