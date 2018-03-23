import React from 'react';
import Radium from 'radium';

const styles = {
    rowContainer: {
        width: '100%',
        height: '100%'
    }
}

// TODO: Gera betri margin og padding pælingar
class Row extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={styles.rowContainer}>
                {this.props.children}
            </div>
        );
    }
}

export default Radium(Row);
