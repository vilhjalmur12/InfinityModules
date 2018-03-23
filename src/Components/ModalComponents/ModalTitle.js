import React from 'react';
import Radium from 'radium';

const styles = {
    container: {
        borderBottom: '1px solid black',
        fontSize: 30
    }
}

class ModalTitle extends React.Component {
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

export default Radium(ModalTitle);
