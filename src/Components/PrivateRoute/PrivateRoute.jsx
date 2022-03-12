import React from "react";
import {Route, Redirect} from "react-router-dom";

function PrivateRoute({component: Component, path, ...rest}) {
    const isLoggedIn = true;

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
