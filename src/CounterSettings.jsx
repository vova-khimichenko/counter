import React from 'react';
import styles from './App.module.css';
import Button from "./Button";

class CounterSettings extends React.Component {

    maxCountValue = (event) => {
        this.props.maxCountValue(+event.currentTarget.value)
    }

    startCountValue = (event) => {
        this.props.startCountValue(+event.currentTarget.value)
    }

    render = () => {

        let classMaxError = this.props.isMaxError
            ? styles.valueError
            : styles.value

        let classStartError = this.props.isStartError
            ? styles.valueError
            : styles.value

        let setDisabled = this.props.isMaxError
            || this.props.isStartError
            || this.props.isDataEntering

        return (
            <div className={styles.App}>
                <div className={styles.container}>
                    <div className={styles.counterSettings}>
                        <div>
                            <span className={styles.maxValue}>max value:</span>
                            <input className={classMaxError}
                                   type={'number'}
                                   onChange={this.maxCountValue}
                                   value={this.props.maxCount}/>
                        </div>
                        <div>
                            <span>start value:</span>
                            <input className={classStartError}
                                   type={'number'}
                                   onChange={this.startCountValue}
                                   value={this.props.startCount}/>
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <Button disabled={setDisabled}
                                name={"set"}
                                onClick={this.props.setCount}/>
                        <Button name={"RLS"}
                                onClick={this.props.removeLocalStorage}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CounterSettings
