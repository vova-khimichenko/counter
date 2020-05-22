import React from 'react';
import styles from './App.module.css';

class Button extends React.Component {

    onClick = () => {
        this.props.onClick()
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
