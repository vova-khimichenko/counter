import React from 'react';
import styles from './App.module.css';
import CounterControl from "./CounterControl";
import CounterSettings from "./CounterSettings";
import {removeLocalStorage, restoreState, saveState} from "./LocStorFunctions";
import {connect} from "react-redux";
import {enterMaxValue, enterStartValue, resetCount, setCount, upCount} from "./store/counterReducer";

class App extends React.Component {

    state = {
        maxCount: this.props.maxCount,
        startCount: this.props.startCount,
        isDataEntering: true,
        isMaxError: false,
        isStartError: false,
        isUpCountMax: false
    }

    maxCountValue = (maxValue) => {
        this.props.enterMaxValue(maxValue)
        this.setState({
            maxCount: maxValue,
            isUpCountMax: false
        })
        if (maxValue > 0 && maxValue <= 1000
            && maxValue > this.state.startCount) {
            this.setState({
                isMaxError: false,
                isDataEntering: true,
            })
        } else {
            this.setState({
                isMaxError: true
            })
        }
        if (this.state.startCount > -1 && this.state.startCount <= 1000
            && this.state.startCount < maxValue) {
            this.setState({
                isStartError: false,
                isDataEntering: true,
            })
        } else {
            this.setState({
                isStartError: true
            })
        }
    }

    startCountValue = (startValue) => {
        this.props.enterStartValue(startValue)
        this.setState({
            startCount: startValue,
            isUpCountMax: false
        })
        if (startValue > -1 && startValue <= 1000
            && startValue < this.state.maxCount) {
            this.setState({
                isStartError: false,
                isDataEntering: true
            })
        } else {
            this.setState({
                isStartError: true
            })
        }
        if (this.state.maxCount > 0 && this.state.maxCount <= 1000
            && this.state.maxCount > startValue) {
            this.setState({
                isMaxError: false
            })
        } else {
            this.setState({
                isMaxError: true
            })
        }
    }

    setCount = () => {
        this.props.setCount()
        this.setState({
            isDataEntering: false
        }, () => {
            saveState(this.props)
        })
    }

    upCount = () => {
        let currentValue = this.props.currentCount
        currentValue += 1
        this.props.upCount(currentValue)
        currentValue === this.props.maxCount && this.setState({
            isUpCountMax: true
        })
    }

    countReset = () => {
        this.props.resetCount()
        this.setState({
            isUpCountMax: false
        })
    }

    componentDidMount = () => {
        let LocStorState = restoreState()
        if (LocStorState) {
            this.props.enterMaxValue(LocStorState.maxCount)
            this.props.enterStartValue(LocStorState.startCount)
        }
    }

    onRemoveLocalStorage = () => {
        removeLocalStorage()
    }

    render = () => {
        return (
            <div className={styles.App}>
                <CounterSettings
                    reduxState={this.props}
                    localState={this.state}
                    maxCountValue={this.maxCountValue}
                    startCountValue={this.startCountValue}
                    setCount={this.setCount}
                    onRemoveLocalStorage={this.onRemoveLocalStorage}
                />
                <CounterControl
                    reduxState={this.props}
                    localState={this.state}
                    upCount={this.upCount}
                    countReset={this.countReset}
                />
            </div>
        )
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {
    setCount, resetCount, upCount, enterMaxValue, enterStartValue
})(App)
