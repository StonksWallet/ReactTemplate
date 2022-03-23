import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import './assets/config.css';

import {BrowserRouter, Switch} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import Home from "./Pages/Home";
import Account from "./Pages/Account";
import Login from "./Pages/Login";
import PrivateRoute from "./Components/PrivateRoute";
import Navbar from "./Components/Navbar";
import Theme from "./assets/theme"
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Logout from './Pages/Logout';
import Signin from './Pages/Signin';

const routes = [
    {
        path: "/",
        exact: true,
        component: Home,
    },
    {
        path: "/account",
        exact: true,
        component: Account,
    },
    {
        path: "/login",
        exact: true,
        component: Login,
    },
    {
        path: "/logout",
        exact: true,
        component: Logout
    },
    {
        path: "/signin",
        exact: true,
        component: Signin,
    },
]

ReactDOM.render(
    <ThemeProvider theme={Theme} >
        <BrowserRouter>
            <Navbar route="/"/>
            <div style={{ marginTop: '100px', height: '100%' }}>
                <Switch>
                    {routes.map((route, index) => (
                        <PrivateRoute
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
    </ThemeProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
