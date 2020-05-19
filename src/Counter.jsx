import React from 'react';
import styles from './App.module.css';
import Button from "./Button";
import Display from "./Display";

class Counter extends React.Component {

    render = () => {

        return (
            <div className={styles.App}>
                <div className={styles.container}>
                    <div className={styles.counter}>
                        <Display value={this.props.state.countValues.count}
                                 error={this.props.state.error}/>
                    </div>
                    <div className={styles.buttons}>
                        <Button error={this.props.state.error}
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
