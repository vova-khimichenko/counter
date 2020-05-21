import React from 'react';
import styles from './App.module.css';
import Button from "./Button";

class Counter extends React.Component {

    render = () => {

        let classCount = this.props.state.upError
            ? styles.upError
            : this.props.state.countIncorrect
                ? styles.countIncorrect
                : typeof (this.props.state.count) === "string"
                    ? styles.countString
                    : ''

        let incDisabled = this.props.state.upError
            || this.props.state.disabledSetReset

        return (
            <div className={styles.App}>
                <div className={styles.container}>
                    <div className={styles.counter}>
                        <span className={classCount}>
                            {this.props.state.count}
                        </span>
                    </div>
                    <div className={styles.buttons}>
                        <Button disabled={incDisabled}
                                upCount={this.props.upCount}
                                name={this.props.state.buttonNames.inc}/>
                        <Button disabled={this.props.state.disabledSetReset}
                                countReset={this.props.countReset}
                                name={this.props.state.buttonNames.reset}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Counter
