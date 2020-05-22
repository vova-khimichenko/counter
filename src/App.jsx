import React from 'react';
import styles from './App.module.css';
import Counter from "./Counter";
import CounterSettings from "./CounterSettings";
import {restoreState, saveState} from "./LocStorFunctions";

class App extends React.Component {

    state = {
        count: "enter values & press 'set'",
        max: 1,
        start: 0,
        countIncorrect: false,
        maxError: false,
        startError: false,
        upError: false,
        disabledSetReset: true,
        buttonNames: {
            inc: 'inc',
            reset: 'reset',
            set: 'set'
        }
    }

    upCount = () => {
        if (typeof (this.state.count) === "number") {
            this.setState({
                count: this.state.count + 1
            }, () => {
                if (this.state.count === this.state.max) {
                    this.setState({
                        upError: true
                    })
                }
            })
        }
    }

    countReset = () => {
        this.setState({
            count: this.state.start,
            upError: false
        })
    }

    maxCountValue = (value) => {
        if (value < 1 || value < this.state.start) {
            this.setState({
                max: value,
                maxError: true,
                count: "incorrect values",
                countIncorrect: true,
            })
        } else if (value === this.state.start) {
            this.setState({
                max: value,
                maxError: true,
                startError: true,
                count: "incorrect values",
                countIncorrect: true,
            })
        } else if (this.state.start < 0) {
            this.setState({
                max: value,
                maxError: false,
                count: "incorrect values",
                countIncorrect: true,
            })
        } else {
            this.setState({
                max: value,
                maxError: false,
                startError: false,
                count: "enter values & press 'set'",
                countIncorrect: false,
            })
        }
        this.setState({
            disabledSetReset: true,
            upError: false,
        })
    }

    startCountValue = (value) => {
        if (value <= -1 || value > this.state.max) {
            this.setState({
                start: value,
                startError: true,
                count: "incorrect values",
                countIncorrect: true,
            })
        } else if (value === this.state.max) {
            this.setState({
                maxError: true,
                start: value,
                startError: true,
                count: "incorrect values",
                countIncorrect: true,
            })
        } else if (this.state.max < 0) {
            this.setState({
                start: value,
                startError: false,
                count: "enter values & press 'set'",
                countIncorrect: false,
            })
        } else {
            this.setState({
                maxError: false,
                start: value,
                startError: false,
                count: "enter values & press 'set'",
                countIncorrect: false,
            })
        }
        this.setState({
            disabledSetReset: true,
            upError: false,
        })
    }

    setCount = () => {
        this.setState({
            count: this.state.start,
            disabledSetReset: false,
        }, () => {
            saveState(this.state)
        })
    }

    componentDidMount() {
        this.setState(restoreState())
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
