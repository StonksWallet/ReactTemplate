import React, { useState } from "react";
import "./style.css";
import { verifyLogin, logout } from "../../services/authentication"
import { CircularProgress } from "@mui/material";
import { Redirect } from "react-router-dom";

const Logout = () => {

    const [loggingOut, setLoggingOut] = useState(true)

    const _logout = async () => {
        setLoggingOut(true);
        await logout();
        setLoggingOut(false)
    }

    useState(() => {
        if(verifyLogin()) {
            _logout();
        }
    }, [])

    return (
        <React.Fragment>
            {loggingOut ? 
                <CircularProgress /> :
                <Redirect to="/" />
            }
        </React.Fragment>
    )
}

export default Logout