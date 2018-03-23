import React from 'react';
import Radium from 'radium';
import { PropTypes } from 'prop-types';

let styles = {
    tabContainer: {
        overflow: 'hidden',
        border: '1px solid #ccc',
        backgroundColor: '#f1f1f1'
    },
    tabLink: {
        backgroundColor: 'inherit',
        float: 'left',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        padding: '14px 16px',
        transition: '0.3s',
        fontSize: 17,
        ':hover': { backgroundColor: '#ddd'}
    },
    activeContainer: {
        padding: '6px 12px',
        border: '1px solid #ccc',
        borderTop: 'none'
    }
}

//TODO: Laga vertical alignment
class Tabs extends React.Component {
    constructor(props) {
        super(props);

        if(this.props.theme) {
            if(this.props.theme == 'dark') {
                styles.tabContainer.backgroundColor = '#12100F';
                styles.tabContainer.border = '1px solid #F2EBD8';
                styles.tabLink.color = '#F2EBD8';
                styles.tabLink[':hover'] = { backgroundColor: '#F2EBD8', color: '#12100F'};
            }
        }

        if(this.props.layout) {
            if(this.props.layout == 'vertical') {
                styles.tabContainer.width = 80;
                styles.tabContainer.height = '100%';
                styles.tabContainer.display = 'inline-grid';
                styles.activeContainer.display = 'inline-block';
            }
        }

        let tabs = [];
        this.props.children.forEach( (item) => {
            let tmp = { title: item.props.title, key: item.props.selectionKey };
            tabs.push(tmp);
        });

        this.state = {
            tabs
        }

        this.onSelect = this.onSelect.bind(this);
    }

    onSelect(n, event) {
        this.props.onSelect(n);
        event.target.style.background = '#78748C';
    }

    render() {
        let tabs = this.state.tabs.map((item) => {
            return(
                <button onClick={e => this.onSelect(item.key, e)} style={styles.tabLink} key={item.key}>{item.title}</button>
            );
        });

        let activeTab;

        this.props.children.forEach((item) => {
            if (item.props.selectionKey == this.props.currentSelectedTab) {
                activeTab = item;
            }
        });

        return (
            <div>
                <div style={styles.tabContainer}>
                    {tabs}
                </div>
                <div style={styles.activeContainer}>
                    {activeTab}
                </div>
            </div>
        );
    }
}

Tabs.propTypes = {
    theme: PropTypes.string,
    layout: PropTypes.string,
    onSelect: PropTypes.func,
    currentSelectedTab: PropTypes.number
};

export default Radium(Tabs);
