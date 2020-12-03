import React from 'react';
import styles from './App.module.css';
import {Button} from "./Button";
import {saveState} from "./LocStorFunctions";

class CounterSettings extends React.Component {

    // state = {
    //     isMaxError: false,
    //     isStartError: false,
    // }

    onMaxCountValue = (e) => this.props.maxCountValue(+e.currentTarget.value)
    onStartCountValue = (e) => this.props.startCountValue(+e.currentTarget.value)
    onSetCount = () => this.props.setCount()

    render = () => {
        // console.log(this.props)
        let classMaxError = this.props.isState.isMaxError
            ? styles.valueError
            : styles.value

        let classStartError = this.props.isState.isStartError
            ? styles.valueError
            : styles.value

        let setDisabled = this.props.isState.isMaxError
            || this.props.isState.isStartError
            || this.props.isState.isDataEntering

        return (
            <div className={styles.App}>
                <div className={styles.container}>
                    <div className={styles.counterSettings}>
                        <div>
                            <span className={styles.maxValue}>max value:</span>
                            <input className={classMaxError}
                                   type={'number'}
                                   onChange={this.onMaxCountValue}
                                   value={this.props.reduxState.maxCount}/>
                        </div>
                        <div>
                            <span>start value:</span>
                            <input className={classStartError}
                                   type={'number'}
                                   onChange={this.onStartCountValue}
                                   value={this.props.reduxState.startCount}/>
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <Button disabled={setDisabled}
                                name={"set"}
                                onClick={this.onSetCount}/>
                        <Button name={"RLS"}
                                onClick={this.props.removeLocalStorage}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CounterSettings
