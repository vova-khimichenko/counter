import React from 'react';
import styles from './App.module.css';
import Button from "./Button";

class Counter extends React.Component {

    render = () => {

        let classCount = this.props.startError || this.props.maxError
            ? styles.countIncorrect
            : this.props.upCountMax
                ? styles.upCountMax
                : this.props.isDataEntering
                    ? styles.isDataEntering
                    : ''

        let counterView = this.props.startError || this.props.maxError
            ? "incorrect values"
            : this.props.upCountMax || this.props.isDataEntering
                ? this.props.currentCount
                : "enter values & press сет"

        let incDisabled = this.props.maxError || this.props.startError
            || !this.props.isDataEntering || this.props.upCountMax

        let resetDisabled = this.props.maxError || this.props.startError
            || !this.props.isDataEntering


        return (
            <div className={styles.App}>
                <div className={styles.container}>
                    <div className={styles.counter}>
                        <span className={classCount}>
                            {counterView}
                        </span>
                    </div>
                    <div className={styles.buttons}>
                        <Button disabled={incDisabled}
                                onClick={this.props.upCount}
                                name={'inc'}/>
                        <Button disabled={resetDisabled}
                                onClick={this.props.countReset}
                                name={'reset'}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Counter
