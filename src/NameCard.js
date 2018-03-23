import React from 'react';
import Radium from 'radium';
import { PropTypes } from 'prop-types';

const styles = {
    container: {
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        width: '40%'
    },
    image: {
        width: '100%'
    },
    innerBox: {
        padding: '2px 16px'
    }
}

// TODO: stíla aðeins betur
class NameCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={styles.container}>
                <img src={this.props.imageUrl} style={styles.image}></img>
                <div style={styles.innerBox}>
                    <h4><b>{this.props.name}</b></h4>
                    <p>this.props.email</p>
                    <p>this.props.telephone</p>
                </div>
                {this.props.children}
            </div>
        );
    }
}

// TODO: setja inn imageUrl
NameCard.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    telephone: PropTypes.string,
};

export default Radium(NameCard);
