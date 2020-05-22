import React from 'react';
import styles from './App.module.css';
import Button from "./Button";

class CounterSettings extends React.Component {

    state = {
        maxValue: 1,
        startValue: 0
    }

    maxCountValue = (event) => {
        this.setState({
            maxValue: +event.currentTarget.value,
        }, () => {
            this.props.countValue(this.state.maxValue, this.state.startValue)
        })
    }

    startCountValue = (event) => {
        this.setState({
            startValue: +event.currentTarget.value,
        }, () => {
            this.props.countValue(this.state.maxValue, this.state.startValue)
        })
    }

    render = () => {

        let classMaxError = this.props.maxError
            ? styles.valueError : styles.value

        let classStartError = this.props.startError
            ? styles.valueError : styles.value

        let setDisabled = this.props.isDataEntering
            || this.props.maxError || this.props.startError

        return (
            <div className={styles.App}>
                <div className={styles.container}>
                    <div className={styles.counterSettings}>
                        <div>
                            <span className={styles.maxValue}>max value:</span>
                            <input className={classMaxError}
                                   type={'number'}
                                   onChange={this.maxCountValue}
                                   value={this.state.maxValue}/>
                        </div>
                        <div>
                            <span>start value:</span>
                            <input className={classStartError}
                                   type={'number'}
                                   onChange={this.startCountValue}
                                   value={this.state.startValue}/>
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
