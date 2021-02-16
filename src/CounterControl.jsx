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
                ? styles.countNumber
                : ''

    let counterView = props.localState.isStartError || props.localState.isMaxError
        ? "incorrect values"
        : props.localState.isUpCountMax || !props.localState.isDataEntering
            ? props.reduxState.currentCount
            : "enter values & press сет"

    let incDisabled = props.localState.isDataEntering
        || props.localState.isUpCountMax
        || props.localState.isMaxError
        || props.localState.isStartError
    let resetDisabled = props.localState.isDataEntering
        || props.localState.isMaxError
        || props.localState.isStartError

    return (
        <div className={styles.container}>
            <div className={styles.counter} style={{alignItems: 'center'}}>
                <span className={classCount}>{counterView}</span>
            </div>
            <div className={styles.buttons}>
                <Button disabled={incDisabled}
                        onClick={onUpCount}
                        name={'inc'}/>
                <Button disabled={resetDisabled}
                        onClick={onCountReset}
                        name={'reset'}/>
            </div>
        </div>
    )
}

export default CounterControl
