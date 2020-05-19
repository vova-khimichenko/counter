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

        return (
            <div className={styles.App}>
                <div className={styles.container}>
                    <div className={styles.counter2}>
                        <div className={styles.numbers}>
                            <div className={styles.max}>
                                <span>max value:</span>
                                <input className={styles.maxNumber}
                                       type={'number'}
                                       onChange={this.maxCountValue}/>
                            </div>
                            <div>
                                <span>start value:</span>
                                <input className={styles.startNumber}
                                       type={'number'}
                                       onChange={this.startCountValue}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <Button name={this.props.state.buttonNames.set}
                                setCount={this.props.setCount}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CounterSettings
