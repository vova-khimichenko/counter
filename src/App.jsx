import React from 'react';
import styles from './App.module.css';
import Counter from "./Counter";
import Counter2 from "./Counter2";

class App extends React.Component {

    state = {
        countValues: {
            count: 40,
            max: null,
            start: null
        },
        error: false,
        buttonNames: {
            inc: 'inc',
            reset: 'reset',
            set: 'set'
        }
    }

    upCount = () => {
        this.setState({countValues: {count: this.state.countValues.count + 1}},
            () => {
                if (this.state.countValues.count === 42) {
                    this.setState({
                        error: true
                    })
                }
            }
        )
    }

    countReset = () => {
        this.setState({countValues: {count: 40}, error: false})
    }

    render = () => {

        return (
            <div className={styles.App}>
                <Counter2 state={this.state}/>
                <Counter state={this.state}
                         upCount={this.upCount}
                         countReset={this.countReset}/>
            </div>
        )
    }
}

export default App
