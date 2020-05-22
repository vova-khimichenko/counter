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
        maxCount: 1,
        startCount: 0,
        isDataEntering: false,
        maxError: false,
        startError: false,
        upError: false,
    }

    upCount = () => {
        this.setState({
            startCount: this.state.startCount + 1
        }, () => {
            if (this.state.startCount === this.state.maxCount) {
                this.setState({
                    upError: true
                })
            }
        })
    }

    countReset = () => {
        this.setState({
            startCount: this.state.startCount,
            upError: false
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
                maxCount: maxValue
            })
        }
        if (startValue < 0 || startValue >= maxValue) {
            this.setState({
                startError: true,
            })
        } else {
            this.setState({
                startError: false,
                startCount: startValue
            })
        }
    }

    setCount = () => {
        this.setState({
            isDataEntering: true
            // }, () => {
            //     saveState(this.state)
        })
    }


    render = () => {

        return (
            <div className={styles.App}>
                <CounterSettings maxError={this.state.maxError}
                                 startError={this.state.startError}
                                 isDataEntering={this.state.isDataEntering}
                                 countValue={this.countValue}
                                 setCount={this.setCount}/>
                <Counter maxError={this.state.maxError}
                         startError={this.state.startError}
                         upError={this.state.upError}
                         startCount={this.state.startCount}
                         isDataEntering={this.state.isDataEntering}
                         upCount={this.upCount}
                         countReset={this.countReset}/>
            </div>
        )
    }
}

export default App
