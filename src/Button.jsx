import React from 'react';
import styles from './App.module.css';

export const Button = (props) => {

   const onClick = () => props.onClick()

    return (
        <button className={styles.button}
                onClick={onClick}
                disabled={props.disabled}>
            {props.name}
        </button>
    )
}
