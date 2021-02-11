import React from 'react';
import styles from './App.module.css';
import {Button} from "./Button";

const CounterSettings = (props) => {

    const onMaxCountValue = (e) => props.maxCountValue(+e.currentTarget.value)
    const onStartCountValue = (e) => props.startCountValue(+e.currentTarget.value)
    const onSetCount = () => props.setCount()

    let classMaxError = props.localState.isMaxError
        ? styles.valueError
        : styles.value

    let classStartError = props.localState.isStartError
        ? styles.valueError
        : styles.value

    let setDisabled = props.localState.isMaxError
        || props.localState.isStartError
        || !props.localState.isDataEntering

    return (
        <div className={styles.container}>
            <div className={styles.counterSettings}>
                <div>
                    <span className={styles.maxValue}>max value:</span>
                    <input className={classMaxError}
                           type={'number'}
                           onChange={onMaxCountValue}
                           value={props.reduxState.maxCount}/>
                </div>
                <div>
                    <span>start value:</span>
                    <input className={classStartError}
                           type={'number'}
                           onChange={onStartCountValue}
                           value={props.reduxState.startCount}/>
                </div>
            </div>
            <div className={styles.buttons}>
                <Button disabled={setDisabled}
                        name={"set"}
                        onClick={onSetCount}/>
                <Button name={"RLS"}
                        onClick={props.onRemoveLocalStorage}/>
            </div>
        </div>
    )
}

export default CounterSettings
