import React, { useEffect, useState } from "react";
import "./style.css";
import Paper from "@mui/material/Paper"
import Button from "@mui/material/Button"
import Navbar from "../../Components/Navbar";
import { navUser } from "../../assets/navLists"
import { userApi } from "../../api/userApi.js";
import { CircularProgress } from "@mui/material";

const removeAccount = () => {

}

const Account = () => {

    const [ user, setUser ] = useState(null)

    const fetchUser = async () => {
        const _user = await userApi.getUser()
        setUser(_user)
    }

    useEffect(() => {
        fetchUser()
    }, [])

    if(!user) {
        return (
            <CircularProgress />
        )        
    }

    return (
        <React.Fragment>
            <Navbar navList={navUser} />
            <div className="account-bg">
                <div className="account-title">
                    Minha Conta
                </div>
                <Paper style={{
                    width: "70%",
                    margin: "auto",
                    borderRadius: 10,
                    padding: 20,
                }}>
                    <div className="account-field">
                        <span className="account-field-title">Nome:</span><br/>
                        <span>{user.name}</span>
                    </div>
                    <div className="account-field">
                        <span className="account-field-title">Email:</span><br/>
                        <span>{user.email}</span>
                    </div>
                    <div className="account-remove">
                        <Button
                            variant="contained"
                            color="error"
                            onClick={removeAccount}
                        >
                            Remover Conta
                        </Button>
                    </div>
                </Paper>
            </div>
        </React.Fragment>
    );
}

export default Account;
