import React from 'react';
import styles from './App.module.css';
import Button from "./Button";

class CounterSettings extends React.Component {

    maxCountValue = (event) => {
        let value = +event.currentTarget.value
        if (-5 < value && value < 20) {
            this.props.maxCountValue(value)
        } else {
            alert('limit values from -4 to 19')
        }
    }

    startCountValue = (event) => {
        let value = +event.currentTarget.value
        if (-5 < value && value < 20) {
            this.props.startCountValue(value)
        } else {
            alert('limit values from -4 to 19')
        }
    }

    render = () => {

        let classValueMaxDisabled = this.props.state.maxError
            ? styles.valueError : styles.value

        let classValueStartDisabled = this.props.state.startError
            ? styles.valueError : styles.value

        let setDisabled = this.props.state.countIncorrect
            || !this.props.state.disabledSetReset

        return (
            <div className={styles.App}>
                <div className={styles.container}>
                    <div className={styles.counterSettings}>
                        <div>
                            <span className={styles.maxValue}>max value:</span>
                            <input className={classValueMaxDisabled}
                                   type={'number'}
                                   onChange={this.maxCountValue}
                                   value={this.props.state.max}/>
                        </div>
                        <div>
                            <span>start value:</span>
                            <input className={classValueStartDisabled}
                                   type={'number'}
                                   onChange={this.startCountValue}
                                   value={this.props.state.start}/>
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <Button disabled={setDisabled}
                                name={this.props.state.buttonNames.set}
                                setCount={this.props.setCount}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CounterSettings
