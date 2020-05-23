import React from 'react';
import styles from './App.module.css';
import Counter from "./Counter";
import CounterSettings from "./CounterSettings";
import {removeLocalStorage, restoreState, saveState} from "./LocStorFunctions";

class App extends React.Component {

    componentDidMount = (state) => {
        this.setState(restoreState(state))
    }

    state = {
        currentCount: 0,
        maxCount: 1,
        startCount: 0,
        isDataEntering: false,
        isMaxError: false,
        isStartError: false,
        isUpCountMax: false,
    }

    maxCountValue = (maxValue) => {
        if (maxValue > -1 && maxValue < 1000) {
            this.setState({
                maxCount: maxValue,
            }, () => {
                this.countValue(this.state.maxCount, this.state.startCount)
            })
        } else {
            alert('limit values from 0 to 999')
        }
    }
    startCountValue = (startValue) => {
        if (startValue > -2 && startValue < 1000) {
            this.setState({
                startCount: startValue,
            }, () => {
                this.countValue(this.state.maxCount, this.state.startCount)
            })
        } else {
            alert('limit values from -1 to 999')
        }
    }

    countValue = (maxValue, startValue) => {
        if (maxValue < 1 || maxValue <= startValue) {
            this.setState({
                isMaxError: true,
            })
        } else {
            this.setState({
                isMaxError: false,
                isUpCountMax: false,
                isDataEntering: false
            })
        }
        if (startValue < 0 || startValue >= maxValue) {
            this.setState({
                isStartError: true,
            })
        } else {
            this.setState({
                isStartError: false,
                isUpCountMax: false,
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
                    isUpCountMax: true,
                })
            }
        })
    }

    countReset = () => {
        this.setState({
            currentCount: this.state.startCount,
            isUpCountMax: false
        })
    }

    removeLocalStorage = () => {
        removeLocalStorage()
        let state = {
            currentCount: 0,
            maxCount: 1,
            startCount: 0,
            isDataEntering: false,
            isMaxError: false,
            isStartError: false,
            isUpCountMax: false,
        }
        this.componentDidMount(state)
    }

    render = () => {

        return (
            <div className={styles.App}>
                <CounterSettings
                    maxCount={this.state.maxCount}
                    startCount={this.state.startCount}
                    isMaxError={this.state.isMaxError}
                    isStartError={this.state.isStartError}
                    isDataEntering={this.state.isDataEntering}
                    maxCountValue={this.maxCountValue}
                    startCountValue={this.startCountValue}
                    countValue={this.countValue}
                    removeLocalStorage={this.removeLocalStorage}
                    setCount={this.setCount}
                />
                <Counter
                    isMaxError={this.state.isMaxError}
                    isStartError={this.state.isStartError}
                    isUpCountMax={this.state.isUpCountMax}
                    currentCount={this.state.currentCount}
                    isDataEntering={this.state.isDataEntering}
                    upCount={this.upCount}
                    countReset={this.countReset
                    }/>
            </div>
        )
    }
}

export default App
