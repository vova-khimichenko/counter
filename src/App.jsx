import React from 'react';
import styles from './App.module.css';
import Counter from "./Counter";
import CounterSettings from "./CounterSettings";

class App extends React.Component {

    state = {
        countValues: {
            // countDefault: "enter values & press 'set'",
            count: "enter values & press 'set'",
            max: null,
            start: null,
        },
        error: false,
        buttonNames: {
            inc: 'inc',
            reset: 'reset',
            set: 'set'
        }
    }

    upCount = () => {
        // if (this.state.countValues.count !== isNaN) {
            this.setState({
                    countValues: {
                        ...this.state.countValues, count: this.state.countValues.count + 1
                    }
                }, () => {
                    if (this.state.countValues.count === this.state.countValues.max) {
                        this.setState({
                            error: true
                        })
                    }
                }
            )
        }
    // }

    countReset = () => {
        // if (this.state.countValues.count !== "enter values & press 'set'") {
            this.setState({
                countValues: {
                    ...this.state.countValues, count: this.state.countValues.start,
                },
                error: false
            })
        }
    // }

    maxCountValue = (value) => {
        this.setState({
            countValues: {
                ...this.state.countValues, max: value
            }
        })
    }

    startCountValue = (value) => {
        this.setState({
            countValues: {
                ...this.state.countValues, start: value
            }
        })
    }

    setCount = () => {
        this.setState({
            countValues: {
                ...this.state.countValues, count: this.state.countValues.start,
            },
            error: false
        })
    }

    render = () => {

        return (
            <div className={styles.App}>
                <CounterSettings state={this.state}
                                 maxCountValue={this.maxCountValue}
                                 startCountValue={this.startCountValue}
                                 setCount={this.setCount}/>
                <Counter state={this.state}
                         upCount={this.upCount}
                         countReset={this.countReset}/>
            </div>
        )
    }
}

export default App
