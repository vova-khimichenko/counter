import React from 'react';
import styles from './App.module.css';
import Button from "./Button";

class Counter extends React.Component {

    render = () => {

        let classCount = this.props.upError
            ? styles.upError
            : this.props.startError || this.props.maxError
                ? styles.countIncorrect
                : ''

        let incDisabled = this.props.upError
        || !this.props.isDataEntering


        let counterView = this.props.isDataEntering
            ? this.props.startCount
            : this.props.startError || this.props.maxError
                ? "incorrect values"
                : "enter values & press"

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
                        <Button disabled={!this.props.isDataEntering}
                                onClick={this.props.countReset}
                                name={'reset'}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Counter
