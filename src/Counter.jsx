import React from 'react';
import styles from './App.module.css';
import Button from "./Button";

class Counter extends React.Component {

    render = () => {

        let classCount = this.props.isStartError || this.props.isMaxError
            ? styles.countIncorrect
            : this.props.isUpCountMax
                ? styles.upCountMax
                : this.props.isDataEntering
                    ? styles.isDataEntering
                    : ''

        let counterView = this.props.isStartError || this.props.isMaxError
            ? "incorrect values"
            : this.props.isUpCountMax || this.props.isDataEntering
                ? this.props.currentCount
                : "enter values & press сет"

        let incDisabled = this.props.isMaxError
            || this.props.isStartError
            || !this.props.isDataEntering
            || this.props.isUpCountMax

        let resetDisabled = this.props.isMaxError
            || this.props.isStartError
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
