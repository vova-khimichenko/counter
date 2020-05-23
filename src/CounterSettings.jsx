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

        let classMaxError = this.props.maxError
            ? styles.valueError : styles.value

        let classStartError = this.props.startError
            ? styles.valueError : styles.value

        let setDisabled = this.props.maxError || this.props.startError
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
                    </div>
                </div>
            </div>
        )
    }
}

export default CounterSettings
