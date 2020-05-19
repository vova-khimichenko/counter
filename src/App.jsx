import React from 'react';
import styles from './App.module.css';
import Button from "./Button";

class App extends React.Component {

    state = {
        countValue: 40,
        error: false,
        buttonNames: {
            inc: 'inc',
            reset: 'reset'
        }
    }

    upCount = () => {
        this.setState({countValue: this.state.countValue + 1},
            () => {
                if (this.state.countValue === 42) {
                    this.setState({
                        error: true
                    })
                }
            }
        )
    }

    countReset = () => {
        this.setState({countValue: 40, error: false})
    }

    render = () => {

        let classCountDisabled = this.state.error ? styles.error : ''

        return (
            <div className={styles.App}>
                <div className={styles.container}>
                    <div className={styles.counter}>
                        <span className={classCountDisabled}>
                            {this.state.countValue}
                        </span>
                    </div>
                    <div className={styles.buttons}>
                        <Button error={this.state.error}
                                upCount={this.upCount}
                                name={this.state.buttonNames.inc}/>
                        <Button countReset={this.countReset}
                                name={this.state.buttonNames.reset}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App