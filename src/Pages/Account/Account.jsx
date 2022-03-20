import React from "react";
import "./style.css";
import Paper from "@mui/material/Paper"
import Button from "@mui/material/Button"

const Account = ({ removeAccount }) => {
    const user = {
        email: 'meuemail@mail.com',
        name: 'Meu Nome'
    }
    return (
        <React.Fragment>
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
