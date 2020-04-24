import React from 'react';
import styles from './App.module.css';

class App extends React.Component {

    state = {
        countValue: 40,
        error: false
    }

    upCount = () => {
        // debugger
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
                        {/*<div className={styles.button}>*/}
                        <button className={styles.button}
                                onClick={this.upCount}
                                disabled={this.state.error}>
                            inc
                        </button>
                        {/*</div>*/}
                        {/*<div className={styles.button}>*/}
                        <button className={styles.button}
                                onClick={this.countReset}>
                            reset
                        </button>
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
