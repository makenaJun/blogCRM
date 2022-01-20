import React from 'react';
import styles from './App.module.scss';
import {Header} from './Header/Header';
import {Sidebar} from './Sidebar/Sidebar';
import {ContentContainer} from './ContentContainer/ContentContainer';

function App() {
    return (
        <div className="App">
            <Header/>
            <div className={styles.mainBlock}>
                <Sidebar/>
                <ContentContainer/>
            </div>
        </div>
    );
}

export default App;
