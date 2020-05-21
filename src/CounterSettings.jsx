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

        let classValueMaxDisabled = this.props.state.countValues.maxError
            ? styles.valueError : styles.value

        let classValueStartDisabled = this.props.state.countValues.startError
            ? styles.valueError : styles.value

        let buttonDisabled = this.props.state.countValues.startError
            || this.props.state.countValues.maxError
            || this.props.state.countValues.countError

        return (
            <div className={styles.App}>
                <div className={styles.container}>
                    <div className={styles.counterSettings}>
                        <div className={styles.numbers}>
                            <div>
                                <span>max value:</span>
                                <input className={classValueMaxDisabled}
                                       type={'number'}
                                       onChange={this.maxCountValue}
                                       value={this.props.state.countValues.max}/>
                            </div>
                            <div>
                                <span>start value:</span>
                                <input className={classValueStartDisabled}
                                       type={'number'}
                                       onChange={this.startCountValue}
                                       value={this.props.state.countValues.start}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <Button disabled={buttonDisabled}
                                name={this.props.state.buttonNames.set}
                                setCount={this.props.setCount}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CounterSettings
