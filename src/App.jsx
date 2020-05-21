import React from 'react';
import styles from './App.module.css';
import Counter from "./Counter";
import CounterSettings from "./CounterSettings";

class App extends React.Component {

    state = {
        countValues: {
            incorrect: "incorrect values",
            count: "enter values & press 'set'",
            max: 1,
            start: 0,
            countError: false,
            maxError: false,
            startError: false
        },
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
                        ...this.state.countValues,
                        count: this.state.countValues.count + 1
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
                    ...this.state.countValues,
                    count: this.state.countValues.incorrect
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
                errorStart: false,
                errorMax: false
            },
            error: false
        })
    }

    maxCountValue = (value) => {
        if (value <= 0) {
            this.setState({
                countValues: {
                    ...this.state.countValues,
                    max: value,
                    count: this.state.countValues.incorrect,
                    maxError: true
                }
            })
        } else if (this.state.countValues.startError) {
            this.setState({
                countValues: {
                    ...this.state.countValues,
                    max: value,
                    count: this.state.countValues.incorrect,
                    maxError: false
                }
            })
        } else {
            this.setState({
                countValues: {
                    ...this.state.countValues,
                    max: value,
                    count: "enter values & press 'set'",
                    maxError: false
                }
            })
        }
    }

    startCountValue = (value) => {
        if (value <= -1) {
            this.setState({
                countValues: {
                    ...this.state.countValues,
                    start: value,
                    startError: true,
                    count: this.state.countValues.incorrect,
                }
            })
        } else if (this.state.countValues.maxError) {
            this.setState({
                countValues: {
                    ...this.state.countValues,
                    start: value,
                    startError: false,
                    count: this.state.countValues.incorrect
                }
            })
        } else {
            this.setState({
                countValues: {
                    ...this.state.countValues,
                    start: value,
                    startError: false,
                    count: "enter values & press 'set'",
                }
            })
        }
    }

    setCount = () => {
        this.setState({
            countValues: {
                ...this.state.countValues,
                count: this.state.countValues.start,
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
