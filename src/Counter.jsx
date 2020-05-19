import React from 'react';
import styles from './App.module.css';
import Button from "./Button";

class Counter extends React.Component {

    render = () => {

        let classCountDisabled = this.props.state.error ? styles.error : ''

        return (
            <div className={styles.App}>
                <div className={styles.container}>
                    <div className={styles.counter}>
                        {/*<Display count={this.props.state.count}*/}
                        {/*         error={this.props.state.error}/>*/}
                        <span className={classCountDisabled}>
                            {this.props.state.countValues.count}
                        </span>
                    </div>
                    <div className={styles.buttons}>
                        <Button error={this.props.state.error}
                                upCount={this.props.upCount}
                                name={this.props.state.buttonNames.inc}/>
                        <Button countReset={this.props.countReset}
                                name={this.props.state.buttonNames.reset}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Counter
