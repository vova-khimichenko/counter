import React from 'react';
import styles from './App.module.css';

class Button extends React.Component {

    onClick = (props) => {
        switch (this.props.name) {
            case 'inc':
                return this.props.upCount()
            case 'reset':
                return this.props.countReset()
            default: alert('give me name function')
        }
    }

    render = () => {

        return (
            <button className={styles.button}
                    onClick={this.onClick}
                    disabled={this.props.error}>
                {this.props.name}
            </button>
        )
    }
}

export default Button
