import React from "react";
import "./style.css";
import Paper from "@mui/material/Paper"
import Button from "@mui/material/Button"
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { login, verifyLogin } from "../../services/authentication"
import { Redirect } from "react-router-dom";
import Navbar from "../../Components/Navbar";

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

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            logged: false,
        }
    }

    _login = async () => {
        try {
            await login(this.state.email, this.state.password)
            this.setState((state) => ({
                ...state,
                logged: verifyLogin()
            }))
        } catch(e) {
            console.log(e)
        }
    }

    handleInput = (e) => {
        const { name, value } = e.target
        this.setState((state) => ({
            ...state,
            [name]: value
        }))
    }

    componentDidMount() {
        this.setState((state) => ({
            ...state,
            logged: verifyLogin()
        }))
    }

    render() {
        return (
            <React.Fragment>
                {this.state.logged &&
                    <Redirect to="/" />
                }
                <Navbar route="/"/>
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
                        <TextField 
                            value={this.state.email}
                            onChange={this.handleInput}
                            style={styles.input}
                            color="purple"
                            id="e-mail"
                            label="E-mail"
                            name="email"
                            variant="filled"
                        />
                        <br />
                        <TextField 
                            value={this.state.password}
                            onChange={this.handleInput}
                            style={styles.input}
                            color="purple"
                            id="senha"
                            label="Senha"
                            name="password"
                            variant="filled"
                            type="password"
                        />
                        
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
                                    onClick={this._login}
                                    width="50px"
                                >
                                    <span style={{color: 'white'}}>Entrar</span>
                                </Button>
                            </div>
                        </div>
                    </Paper>
                </div>
            </React.Fragment>
        )
    }
}

export default Login;
