import React from 'react';
import Radium from 'radium';


class ModalBody extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Radium(ModalBody);
