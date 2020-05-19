import React from 'react';
import styles from './App.module.css';
import Button from "./Button";
import Display from "./Display";

class Counter2 extends React.Component {

    render = () => {

        return (
            <div className={styles.App}>
                <div className={styles.container}>
                    <div className={styles.counter2}>
                        <div className={styles.numbers}>
                            <div className={styles.max}>
                                <span>max value:</span>
                                <input className={styles.maxNumber}
                                       type={'number'}/>
                            </div>
                            <div>
                                <span>start value:</span>
                                <input className={styles.startNumber}
                                       type={'number'}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <Button name={this.props.state.buttonNames.reset}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Counter2
