import React from 'react';
import styles from './App.module.css';

class Button extends React.Component {

    onClick = () => {
        switch (this.props.name) {
            case 'inc':
                return this.props.upCount()
            case 'reset':
                return this.props.countReset()
            case 'set':
                return this.props.setCount()
            default: alert('give me name function')
        }
    }

    render = () => {

        return (
            <button className={styles.button}
                    onClick={this.onClick}
                    disabled={this.props.disabled}>
                {this.props.name}
            </button>
        )
    }
}

export default Button
