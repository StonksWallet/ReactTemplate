import React from "react";
import "./style.css";
import Paper from "@mui/material/Paper"
import Button from "@mui/material/Button"
import InputField from "../../Components/InputField/InputField";
import { login, verifyLogin } from "../../services/authentication"
import { Redirect } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import { navGuest } from "../../assets/navLists"
import { Link } from "react-router-dom";
import { withSnackbar } from 'notistack';

const styles = {
    mainPaper: {
        width: "700px",
        margin: "auto",
        borderRadius: 10,
        padding: 20,
        marginTop: 60,
        backgroundColor: '#222222',
    },
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
            this.props.enqueueSnackbar('Erro: ' + e.message)
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
                <Navbar navList={navGuest} />
                <div className="image-bg">
                    <Paper style={styles.mainPaper}>
                        <div style={{ paddingBottom: '10px' }}>
                            <span className="login-title">Entrar no Stonks Wallet</span>
                            <br />
                            <span className="login-body">
                                Novo usuário?
                                <Link to="/signin" style={{color:"#5e38ba"}}>
                                    {' Crie uma conta'}
                                </Link>
                            </span>
                        </div>
                        <InputField 
                            value={this.state.email}
                            onChange={this.handleInput}
                            color="purple"
                            id="e-mail"
                            label="E-mail"
                            name="email"
                            variant="filled"
                        />
                        <br />
                        <InputField 
                            value={this.state.password}
                            onChange={this.handleInput}
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

export default withSnackbar(Login);
