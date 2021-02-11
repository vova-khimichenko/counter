import React from 'react';
import styles from './App.module.css';
import {Button} from "./Button";

const CounterControl = (props) => {

    const onUpCount = () => props.upCount()
    const onCountReset = () => props.countReset()

    let classCount = props.localState.isUpCountMax
        ? styles.upCountMax
        : props.localState.isStartError || props.localState.isMaxError
            ? styles.countIncorrect
            : !props.localState.isDataEntering
                ? styles.isDataEntering
                : ''

    let counterView = props.localState.isStartError || props.localState.isMaxError
        ? "incorrect values"
        : props.localState.isUpCountMax || !props.localState.isDataEntering
            ? props.reduxState.currentCount
            : "enter values & press сет"

    let incDisabled = props.localState.isDataEntering || props.localState.isUpCountMax

    return (
        <div className={styles.container}>
            <div className={styles.counter}>
                        <span className={classCount}>
                            {counterView}
                        </span>
            </div>
            <div className={styles.buttons}>
                <Button disabled={incDisabled}
                        onClick={onUpCount}
                        name={'inc'}/>
                <Button disabled={props.localState.isDataEntering}
                        onClick={onCountReset}
                        name={'reset'}/>
            </div>
        </div>
    )
}

export default CounterControl
