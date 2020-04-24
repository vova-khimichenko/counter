import React from 'react';
import styles from './App.module.css';

class App extends React.Component {

    state = {
        countValue: 40,
    }

    upCount = () => {
        this.setState({countValue: this.state.countValue + 1})
    }

    countReset = () => {
        this.setState({countValue: 40})
    }

    render = () => {

        let classCount, buttonDisabled
        if (this.state.countValue === 45) {
            classCount = styles.counter45
            buttonDisabled = true
            setTimeout(() => {
                alert('Не понимаю почему двойной алерт :(')
            }, 450);
        } else {
            classCount = styles.counter
            buttonDisabled = false
        }

        return (
            <div className={styles.App}>
                <div className={styles.container}>
                    <div className={classCount}>{this.state.countValue}</div>
                    <div className={styles.buttons}>
                        {/*<div className={styles.button}>*/}
                        <button className={styles.button}
                                onClick={this.upCount}
                                disabled={buttonDisabled}>
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
