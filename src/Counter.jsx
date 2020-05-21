import React from 'react';
import styles from './App.module.css';
import Button from "./Button";

class Counter extends React.Component {

    render = () => {

        let classCount = this.props.state.countValues.errorCount
            ? styles.errorCount
            : this.props.state.countValues.startError
            || this.props.state.countValues.maxError
                ? styles.errorMaxStart
                : typeof (this.props.state.countValues.count) === "string"
                    ? styles.countString
                    : ''

        return (
            <div className={styles.App}>
                <div className={styles.container}>
                    <div className={styles.counter}>
                        {/*<Display count={this.props.state.count}*/}
                        {/*         error={this.props.state.error}/>*/}
                        <span className={classCount}>
                            {this.props.state.countValues.count}
                        </span>
                    </div>
                    <div className={styles.buttons}>
                        <Button disabled={this.props.state.error}
                                upCount={this.props.upCount}
                                name={this.props.state.buttonNames.inc}/>
                        <Button countReset={this.props.countReset}
                                name={this.props.state.buttonNames.reset}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Counter
