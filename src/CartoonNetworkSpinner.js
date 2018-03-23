import React from 'react';
import Radium from 'radium';
import { PropTypes } from 'prop-types';

import avatar2 from '../images/avatars/2.png';
import avatar3 from '../images/avatars/3.png';
import avatar4 from '../images/avatars/4.png';

const imageArray = [avatar2, avatar3, avatar4];

let styles = {
    loader: {
        '-webkit-animation': 'spin 3s linear infinite',
        animation: 'spin 3s linear infinite',
    },
    loaderImage: {
        width: 100,
        marginTop: 25,
        marginLeft: 25
    }
}

class CartoonNetworkSpinner extends React.Component {
    constructor(props) {
        super(props);

        if(this.props.interval) {
            let inter = this.props.interval.toString();
            let animation = `spin ${inter}s linear infinite`;
            styles.loader.animation = animation;
            styles.loader['-webkit-animation'] = animation;
        }

        this.state = {
            imageCounter: 0,
            image: avatar2
        }

        this.nextImage = this.nextImage.bind(this);
    }

    nextImage() {
        let imageCounter = this.state.imageCounter;

        if(imageCounter >= imageArray.length - 1) {
            imageCounter = 0;
        } else {
            imageCounter++;
        }

        let image = imageArray[imageCounter];
        this.setState({ imageCounter, image });
    }

    render() {
        let timer = this.props.interval*1000;
        setInterval(this.nextImage, timer);

        return (
            <div>
                <div className="loader" style={styles.loader}></div>
                <img style={styles.loaderImage} src={this.state.image}></img>
            </div>


        );
    }
}

CartoonNetworkSpinner.propTypes = {
    interval: PropTypes.number
};

export default Radium(CartoonNetworkSpinner);
