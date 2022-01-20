import React from 'react';
import styles from './ContentContainer.module.scss';
import {Redirect, Route, Switch} from 'react-router-dom';
import {PATH} from '../../bll/routes/routes';
import {CreatePost} from '../../../features/CreatePost/CreatePost';

export const ContentContainer = () => {
    return (
        <div className={styles.wrapper}>
            <Switch>
                <Route exact path={'/'} render={() => <div>HOME PAGE</div>}/>
                <Route path={PATH.CREATE_POST} render={() => <CreatePost/>}/>

                <Route path={PATH.ERROR_NOT_FOUND} render={() => <h1>NOT FOUND</h1>}/>
                <Route path={'*'} render={() => <Redirect to={PATH.ERROR_NOT_FOUND}/>}/>
            </Switch>
        </div>
    );
};