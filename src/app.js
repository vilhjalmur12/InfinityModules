import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/custom';
//import Modal from './Modal';
//import ProgressBar from './ProgressBar';
//import NameCard from './NameCard';
//import Carousel from './Carousel';
//import Row from './Row';
//import Col from './Components/RowComponents/Col';
//import TimePicker from './TimePicker';
//import DatePicker from './DatePicker';
//import Tabs from './Tabs';
//import Tab from './Components/TabsComponents/Tab';
//import CartoonNetworkSpinner from './CartoonNetworkSpinner';


//import carImage from '../images/242.png';
//import logo from '../images/logo_loading.png';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tab: 1
        }
    }

    render() {
        return (
            <CartoonNetworkSpinner interval={5} />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
