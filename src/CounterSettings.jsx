import React from 'react';
import styles from './App.module.css';
import {Button} from "./Button";

const CounterSettings = (props) => {

    const onSetCount = () => props.setCount()
    const changeMaxCountValue = (e) => props.maxCountValue(+e.currentTarget.value)
    const clearMaxCountValue = (e) => +e.currentTarget.value === 0
        && props.maxCountValue('')
    const backspacePressMax = (e) => e.key === 'Backspace'
        && props.localState.maxCount.toString().length === 1
        && props.maxCountValue('')
    const defaultValueMax = () => props.localState.maxCount === ''
        && props.maxCountValue(1)

    const changeStartCountValue = (e) => props.startCountValue(+e.currentTarget.value)
    const clearStartCountValue = (e) => +e.currentTarget.value === 0
        && props.startCountValue('')
    const backspacePressStart = (e) => e.key === 'Backspace'
        && props.localState.startCount.toString().length === 1
        && props.startCountValue('')
    const defaultValueStart = () => props.localState.startCount === ''
        && props.startCountValue(0)

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
            <div className={styles.counter}>
                <span>max value:<input className={classMaxError}
                                       type={'number'}
                                       onChange={changeMaxCountValue}
                                       value={props.reduxState.maxCount}
                                       onKeyDown={backspacePressMax}
                                       onBlur={defaultValueMax}
                                       onFocus={clearMaxCountValue}
                />
                </span>
                <span>start value:<input className={classStartError}
                                         type={'number'}
                                         onChange={changeStartCountValue}
                                         value={props.reduxState.startCount}
                                         onKeyDown={backspacePressStart}
                                         onBlur={defaultValueStart}
                                         onFocus={clearStartCountValue}
                />
                </span>
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
