import React from "react";
import "./style.css";
import Paper from "@mui/material/Paper"
import Button from "@mui/material/Button"
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';

const styles = {
    mainPaper: {
        width: "700px",
        margin: "auto",
        borderRadius: 10,
        padding: 20,
        marginTop: 60,
        backgroundColor: '#222222',
    },
    input: {
        borderRadius: 8,
        width: '100%',
        marginTop: '20px',
        backgroundColor: '#ffffff',
    }
}

class Login extends React.Component {

    render() {
        return (
            <div className="image-bg">
                <Paper style={styles.mainPaper}>
                    <div style={{ paddingBottom: '20px' }}>
                        <span className="login-title">Entrar no Stonks Wallet</span>
                        <br />
                        <span className="login-body">
                            Novo usuário?
                            <Link href="/signin" underline="none" color="#5e38ba">
                                {' Crie uma conta'}
                            </Link>
                        </span>
                    </div>
                    <TextField style={styles.input} color="purple" id="e-mail" label="E-mail" variant="filled" />
                    <br />
                    <TextField style={styles.input} color="purple" id="senha" label="Senha" variant="filled" />
                    
                    <div style={{
                        padding: '10px',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <div style={{width: '100px', paddingTop: '15px'}}>
                            <Button
                                variant="contained"
                                color="purple"
                                onClick={() => {console.log("login")}}
                                width="50px"
                            >
                                <span style={{color: 'white'}}>Entrar</span>
                            </Button>
                        </div>
                    </div>
                </Paper>
            </div>
        )
    }
}

export default Login;
