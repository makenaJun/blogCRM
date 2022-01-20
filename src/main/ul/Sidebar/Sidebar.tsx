import React from 'react';
import styles from './Sidebar.module.scss';
import {PATH} from '../../bll/routes/routes';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
    return (
        <div className={styles.wrapper}>
            <NavLink to={PATH.HOME} className={styles.link}>Home</NavLink>
            <NavLink to={PATH.CREATE_POST} className={styles.link}> Create Post</NavLink>
            <NavLink to={PATH.CREATE_POST} className={styles.link}> Update Progress</NavLink>
        </div>
    );
};