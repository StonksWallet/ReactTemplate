import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import './assets/config.css';

import { BrowserRouter, Switch } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import * as serviceWorker from './serviceWorker';
import PrivateRoute from "./Components/PrivateRoute";
import Theme from "./assets/theme"
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import {Route} from "react-router-dom";

import Home from "./Pages/Home";
import Account from "./Pages/Account";
import Login from "./Pages/Login";
import Logout from './Pages/Logout';
import Signin from './Pages/Signin';
import Assets from "./Pages/Assets";
import Insights from './Pages/Insights';

require('dotenv').config();


const privateRoutes = [
    {
        path: "/account",
        exact: true,
        component: Account,
    },
    {
        path: "/logout",
        exact: true,
        component: Logout
    },
    {
        path: "/assets",
        exact: true,
        component: Assets
    },
    {
        path: "/insights",
        exact: true,
        component: Insights
    },
]

const publicRoutes = [
    {
        path: "/",
        exact: true,
        component: Home,
    },
    {
        path: "/login",
        exact: true,
        component: Login,
    },
    {
        path: "/signin",
        exact: true,
        component: Signin,
    },
]

ReactDOM.render(
    <ThemeProvider theme={Theme} >
        <SnackbarProvider maxSnack={3}>
            <BrowserRouter>
                <div style={{ marginTop: '100px', height: '100%' }}>
                    <Switch>
                        {privateRoutes.map((route, index) => (
                            <PrivateRoute
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}
                            />
                        ))}
                        {publicRoutes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}
                            />
                        ))}
                        {/* 404? */}
                    </Switch>
                </div>
            </BrowserRouter>
        </SnackbarProvider>
    </ThemeProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
