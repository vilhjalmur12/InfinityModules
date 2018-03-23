import React from 'react';
import Radium from 'radium';
import { PropTypes } from 'prop-types';

const styles = {
    container: {
        maxWidth: 1000,
        position: 'relative',
        margin: 'auto',
        height: 300
    },
    images: {
        margin: 'auto',
        height: '100%'
    }
}

// TODO: Þarf að laga örina að miðju og setja myndir í miðjuna, small, medium, large
class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageShown: 0,
        }

        this.prevSlide = this.prevSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.showSlide = this.showSlide.bind(this);

        this.testClick = this.testClick.bind(this);
    }

    prevSlide() {
        let imageShown = this.state.imageShown;
        if(imageShown == 0) {
            imageShown = this.props.images.length - 1;
            this.setState({ imageShown });
        } else {
            imageShown--;
            this.setState({ imageShown });
        }
    }

    nextSlide() {
        let imageShown = this.state.imageShown;
        if(imageShown == this.props.images.length - 1) {
            imageShown = 0;
            this.setState({ imageShown });
        } else {
            imageShown++;
            this.setState({ imageShown });
        }
    }

    showSlide(key) {
        let elem = document.getElementsByClassName('mySlides')[key];
        elem.style.display = 'block';
        console.log('testClick', elem);
    }

    testClick() {
        console.log('testClick', this.state.imageShown);
    }

    render() {
        let imgKey = 0;
        const imgItems = this.props.images.map((img) => {
            let tmp = imgKey;
            imgKey++;

            if(this.state.imageShown == tmp) {
                return (
                    <div key={tmp} className="mySlides fade">
                        <img src={img} style={styles.images}></img>
                    </div>
                );
            }
            return (
                <div key={tmp} className="mySlides fade hidden">
                    <img src={img} style={styles.images}></img>
                </div>
            );
        });
        console.log(imgItems[1]);
        //this.showSlide(this.state.imageShown);
        return (
            <div style={ styles.container }>
                {imgItems}
                <div className='prev' onClick={this.prevSlide}>
                    <a className='prevInner'><i className="fas fa-angle-left"></i></a>
                </div>
                <div className='next' onClick={this.nextSlide}>
                    <a className='nextInner'><i className="fas fa-angle-right"></i></a>
                </div>
            </div>
        );
    }
}

Carousel.propTypes = {
    images: PropTypes.array,
    size: PropTypes.string
};

export default Radium(Carousel);
