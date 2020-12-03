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
        //     currentCount: 0,
        //     maxCount: 1,
        //     startCount: 0,
        isDataEntering: false,
        isMaxError: false,
        isStartError: false,
        isUpCountMax: false
    }

    maxCountValue = (maxValue) => {
        if (maxValue > -1 && maxValue < 1000) {
            this.props.enterMaxValue(maxValue)
            this.setState({
                isMaxError: false,
                isDataEntering: false,
                isUpCountMax: false
            })
        } else {
            // alert('limit values from 0 to 999')
            this.setState({
                isMaxError: true
            })
        }
    }

    startCountValue = (startValue) => {
        if (startValue > -2 && startValue < 1000) {
            this.props.enterStartValue(startValue)
            this.setState({
                isStartError: false,
                isDataEntering: false,
                isUpCountMax: false
            })
        } else {
            // alert('limit values from -1 to 999')
            this.setState({
                isStartError: true
            })
        }
    }

    setCount = () => {
        this.setState({
            isDataEntering: true
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
            //         currentCount: this.state.startCount,
            isUpCountMax: false
        })
    }

    // countValue = (maxValue, startValue) => {
    //     if (maxValue < 1 || maxValue <= startValue) {
    //         this.setState({
    //             isMaxError: true,
    //         })
    //     } else {
    //         this.setState({
    //             isMaxError: false,
    //             isUpCountMax: false,
    //             isDataEntering: false
    //         })
    //     }
    //     if (startValue < 0 || startValue >= maxValue) {
    //         this.setState({
    //             isStartError: true,
    //         })
    //     } else {
    //         this.setState({
    //             isStartError: false,
    //             isUpCountMax: false,
    //             isDataEntering: false
    //         })
    //     }
    // }


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
                    // maxCount={this.state.maxCount}
                    // startCount={this.state.startCount}
                    // isMaxError={this.state.isMaxError}
                    // isStartError={this.state.isStartError}
                    // isDataEntering={this.state.isDataEntering}
                    maxCountValue={this.maxCountValue}
                    startCountValue={this.startCountValue}
                    // countValue={this.countValue}
                    // removeLocalStorage={this.removeLocalStorage}
                    setCount={this.setCount}
                />
                <CounterControl
                    reduxState={this.props}
                    isState={this.state}
                    // isMaxError={this.state.isMaxError}
                    // isStartError={this.state.isStartError}
                    // isUpCountMax={this.state.isUpCountMax}
                    // currentCount={this.state.currentCount}
                    // isDataEntering={this.state.isDataEntering}
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
