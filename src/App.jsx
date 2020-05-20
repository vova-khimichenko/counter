import React from 'react';
import styles from './App.module.css';
import Counter from "./Counter";
import CounterSettings from "./CounterSettings";

class App extends React.Component {

    state = {
        countValues: {
            incorrect: "incorrect values",
            correct: "enter values & press 'set'",
            count: "enter values & press 'set'",
            max: 1,
            start: 0,
            error: false
        },
        error: false,
        buttonNames: {
            inc: 'inc',
            reset: 'reset',
            set: 'set'
        }
    }

    upCount = () => {
        if (this.state.countValues.max > this.state.countValues.start) {
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
        } else {
            this.setState({
                countValues: {
                    ...this.state.countValues, count: this.state.countValues.incorrect
                },
            })
        }
    }

    countReset = () => {
        this.setState({
            countValues: {
                ...this.state.countValues,
                max: 1,
                start: 0,
                count: "enter values & press 'set'",
                error: false
            },
            error: false
        })
    }

    maxCountValue = (value) => {
        value > this.state.countValues.start && value > 0
            ? this.setState({
                countValues: {
                    ...this.state.countValues, max: value,
                    count: "enter values & press 'set'"
                },
                error: false
            })
            : this.setState({
                countValues: {
                    ...this.state.countValues,
                    max: this.state.countValues.start + 1,
                    count: "enter values & press 'set'"
                },
                error: false
            })
    }

    startCountValue = (value) => {
        value > -1
            ? this.setState({
                countValues: {
                    ...this.state.countValues,
                    start: value,
                    // max: value + 1,
                    count: "enter values & press 'set'",
                    error: false
                },
            })
            : this.setState({
                countValues: {
                    ...this.state.countValues,
                    count: this.state.countValues.incorrect,
                    error: true
                },
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
