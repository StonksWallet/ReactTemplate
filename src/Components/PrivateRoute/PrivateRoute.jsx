import React, { useEffect, useState } from "react";
import {Route, Redirect} from "react-router-dom";
import { verifyLogin } from "../../services/authentication"

function PrivateRoute({component: Component, path, ...rest}) {
    const isLoggedIn = verifyLogin()

    return (
        <Route
            {...rest}
            path={path}
            render={props => {
                return isLoggedIn ? (
                    <Component {...props}/>
                ) : (
                    <Redirect to={{
                        pathname: '/login',
                        state: {
                            from: props.location
                        }
                    }}/>
                )
            }}
        />
    );
}

export default PrivateRoute;
