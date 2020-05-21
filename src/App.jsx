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
            startError: false,
            error: false,
        },
        buttonNames: {
            inc: 'inc',
            reset: 'reset',
            set: 'set'
        }
    }

    upCount = () => {
        if (typeof (this.state.countValues.count) === "number") {
            this.setState({
                countValues: {
                    ...this.state.countValues,
                    count: this.state.countValues.count + 1
                }
            }, () => {
                if (this.state.countValues.count === this.state.countValues.max) {
                    this.setState({
                        countValues: {
                            ...this.state.countValues,
                            error: true
                        }
                    })
                }
            })
        }
    }

    countReset = () => {
        this.setState({
            countValues: {
                ...this.state.countValues,
                max: 1,
                maxError: false,
                start: 0,
                startError: false,
                count: "enter values & press 'set'",
                countError: false,
                error: false
            }
        })
    }

    maxCountValue = (value) => {
        if (value < 1) {
            this.setState({
                countValues: {
                    ...this.state.countValues,
                    max: value,
                    maxError: true,
                    count: this.state.countValues.incorrect,
                    countError: true
                }
            })
        } else if (value >= 1 && value <= this.state.countValues.start) {
            this.setState({
                countValues: {
                    ...this.state.countValues,
                    max: value,
                    maxError: true,
                    startError: true,
                    count: this.state.countValues.incorrect,
                    countError: true
                }
            })
        } else if (this.state.countValues.start < 0) {
            this.setState({
                countValues: {
                    ...this.state.countValues,
                    max: value,
                    maxError: false,
                    startError: true,
                    count: this.state.countValues.incorrect,
                    countError: true
                }
            })
        } else {
            this.setState({
                countValues: {
                    ...this.state.countValues,
                    max: value,
                    maxError: false,
                    startError: false,
                    count: "enter values & press 'set'",
                    countError: false,
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
                    countError: true
                }
            })
        } else if (value > -1 && value < this.state.countValues.max) {
            this.setState({
                countValues: {
                    ...this.state.countValues,
                    maxError: false,
                    start: value,
                    startError: false,
                    count: "enter values & press 'set'",
                    countError: false
                }
            })
        } else if (value > -1 && value > this.state.countValues.max) {
            this.setState({
                countValues: {
                    ...this.state.countValues,
                    maxError:true,
                    start: value,
                    startError: true,
                    count: this.state.countValues.incorrect,
                    countError: true
                }
            })
        } else {
            this.setState({
                countValues: {
                    ...this.state.countValues,
                    maxError: true,
                    start: value,
                    startError: true,
                    count: this.state.countValues.incorrect,
                    countError: true
                }
            })
        }
    }

    setCount = () => {
        if (this.state.countValues.max <= this.state.countValues.start) {
            this.setState({
                countValues: {
                    ...this.state.countValues,
                    count: this.state.countValues.incorrect,
                    countError: true
                }
            })
        } else {
            this.setState({
                countValues: {
                    ...this.state.countValues,
                    count: this.state.countValues.start,
                    countError: false
                }
            })
        }
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
