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

        // let classCountDisabled = this.props.state.countValues.error ? styles.error : ''

        return (
            <div className={styles.App}>
                <div className={styles.container}>
                    <div className={styles.counter2}>
                        <div className={styles.numbers}>
                            <div className={styles.max}>
                                <span>max value:</span>
                                <input className={styles.maxNumber}
                                       type={'number'}
                                       onChange={this.maxCountValue}
                                       value={this.props.state.countValues.max}/>
                            </div>
                            <div>
                                <span>start value:</span>
                                <input className={styles.startNumber}
                                       type={'number'}
                                       onChange={this.startCountValue}
                                       value={this.props.state.countValues.start}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <Button error={this.props.state.countValues.error}
                                name={this.props.state.buttonNames.set}
                                setCount={this.props.setCount}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CounterSettings
