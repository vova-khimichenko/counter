import React from 'react';
import styles from './App.module.css';
import CounterControl from "./CounterControl";
import CounterSettings from "./CounterSettings";
import {removeLocalStorage, restoreState, saveState} from "./LocStorFunctions";
import {connect} from "react-redux";
import {enterMaxValue, enterStartValue, setCount, upCount} from "./store/counterReducer";

class App extends React.Component {

    // componentDidMount = (state) => {
    //     console.log(state)
    //     // this.setState(restoreState(state))
    // }

    state = {
        maxCount: this.props.maxCount,
        startCount: this.props.startCount,
        isDataEntering: false,
        isMaxError: false,
        isStartError: false,
        isUpCountMax: false
    }

    maxCountValue = (maxValue) => {
        this.props.enterMaxValue(maxValue)
        this.setState({maxCount: maxValue})
        if (maxValue > -1 && maxValue <= 1000
            && maxValue > this.state.startCount) {
            this.setState({
                isMaxError: false
            })
        } else {
            this.setState({
                isMaxError: true
            })
        }
        if (this.state.startCount > -1 && this.state.startCount <= 1000
            && this.state.startCount < maxValue) {
            this.setState({
                isStartError: false
            })
        } else {
            this.setState({
                isStartError: true
            })
        }
    }

    startCountValue = (startValue) => {
        this.props.enterStartValue(startValue)
        this.setState({startCount: startValue})
        if (startValue > -1 && startValue <= 1000
            && startValue < this.state.maxCount) {
            this.setState({
                isStartError: false
            })
        } else {
            this.setState({
                isStartError: true
            })
        }
        if (this.state.maxCount > -1 && this.state.maxCount <= 1000
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
        this.setState({
            isDataEntering: true,
            // }, () => {
            //     saveState(this.state)
        })
        this.props.setCount()
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
        this.setCount()
        this.setState({
            isUpCountMax: false
        })
    }

// removeLocalStorage = () => {
//     removeLocalStorage()
//     let state = {
//         currentCount: 0,
//         maxCount: 1,
//         startCount: 0,
//         isDataEntering: false,
//         isMaxError: false,
//         isStartError: false,
//         isUpCountMax: false,
//     }
//     this.componentDidMount(state)
// }

    render = () => {
        // console.log(this.props)
        return (
            <div className={styles.App}>
                <CounterSettings
                    reduxState={this.props}
                    isState={this.state}
                    maxCountValue={this.maxCountValue}
                    startCountValue={this.startCountValue}
                    setCount={this.setCount}
                />
                <CounterControl
                    reduxState={this.props}
                    isState={this.state}
                    upCount={this.upCount}
                    countReset={this.countReset}
                />
            </div>
        )
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {
    setCount, upCount, enterMaxValue, enterStartValue
})(App)
