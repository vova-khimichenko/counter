import React from 'react';
import styles from './App.module.css';
import Counter from "./Counter";
import CounterSettings from "./CounterSettings";
import {restoreState, saveState} from "./LocStorFunctions";

class App extends React.Component {

    componentDidMount() {
        this.setState(restoreState())
    }

    state = {
        currentCount: 0,
        maxCount: 1,
        startCount: 0,
        isDataEntering: false,
        maxError: false,
        startError: false,
        upCountMax: false,
    }

    maxCountValue = (maxValue) => {
        this.setState({
            maxCount: maxValue,
        }, () => {
            this.countValue(this.state.maxCount, this.state.startCount)
        })
    }
    startCountValue = (startValue) => {
        this.setState({
            startCount: startValue,
        }, () => {
            this.countValue(this.state.maxCount, this.state.startCount)
        })
    }

    countValue = (maxValue, startValue) => {
        if (maxValue < 1 || maxValue <= startValue) {
            this.setState({
                maxError: true,
            })
        } else {
            this.setState({
                maxError: false,
                upCountMax: false,
                isDataEntering: false
            })
        }
        if (startValue < 0 || startValue >= maxValue) {
            this.setState({
                startError: true,
            })
        } else {
            this.setState({
                startError: false,
                upCountMax: false,
                isDataEntering: false
            })
        }
    }

    setCount = () => {
        this.setState({
            currentCount: this.state.startCount,
            isDataEntering: true
            }, () => {
                saveState(this.state)
        })
    }

    upCount = () => {
        this.setState({
            currentCount: this.state.currentCount + 1
        }, () => {
            if (this.state.currentCount === this.state.maxCount) {
                this.setState({
                    upCountMax: true,
                })
            }
        })
    }

    countReset = () => {
        this.setState({
            currentCount: this.state.startCount,
            upCountMax: false
        })
    }

    render = () => {

        return (
            <div className={styles.App}>
                <CounterSettings maxCount={this.state.maxCount}
                                 startCount={this.state.startCount}
                                 maxError={this.state.maxError}
                                 startError={this.state.startError}
                                 isDataEntering={this.state.isDataEntering}
                                 maxCountValue={this.maxCountValue}
                                 startCountValue={this.startCountValue}
                                 countValue={this.countValue}
                                 setCount={this.setCount}/>
                <Counter maxError={this.state.maxError}
                         startError={this.state.startError}
                         upCountMax={this.state.upCountMax}
                         currentCount={this.state.currentCount}
                         isDataEntering={this.state.isDataEntering}
                         upCount={this.upCount}
                         countReset={this.countReset}/>
            </div>
        )
    }
}

export default App
