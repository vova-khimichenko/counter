import React from 'react';
import styles from './App.module.css';

const App = () => {
    return (
        <div className={styles.App}>
            <div className={styles.container}>
                <div className={styles.counter}>40</div>
                <div className={styles.buttons}>
                    {/*<div className={styles.button}>*/}
                    <button className={styles.button}>
                        inc
                    </button>
                    {/*</div>*/}
                    {/*<div className={styles.button}>*/}
                    <button className={styles.button}>
                        reset
                    </button>
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
}

export default App;
