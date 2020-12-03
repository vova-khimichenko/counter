import React from 'react';
import styles from './App.module.css';
import {Button} from "./Button";

class CounterControl extends React.Component {

    // state = {
    //     isUpCountMax: false,
    // }

    onUpCount = () => this.props.upCount()
    onCountReset = () => this.props.countReset()

    render = () => {
        // console.log(this.props)
        let classCount = this.props.isState.isUpCountMax
            ? styles.upCountMax
            : this.props.isState.isStartError || this.props.isState.isMaxError
                ? styles.countIncorrect
                : this.props.isState.isDataEntering
                    ? styles.isDataEntering
                    : ''

        let counterView = this.props.isState.isStartError || this.props.isState.isMaxError
            ? "incorrect values"
            : this.props.isState.isUpCountMax || this.props.isState.isDataEntering
                ? this.props.reduxState.currentCount
                : "enter values & press сет"

        let incDisabled = !this.props.isState.isDataEntering || this.props.isState.isUpCountMax

        // let resetDisabled =
        //     // this.props.isMaxError||
        // // this.props.isStartError
        // //     ||
        // !this.props.isDataEntering

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
                                onClick={this.onUpCount}
                                name={'inc'}/>
                        <Button disabled={!this.props.isState.isDataEntering}
                                onClick={this.onCountReset}
                                name={'reset'}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CounterControl
