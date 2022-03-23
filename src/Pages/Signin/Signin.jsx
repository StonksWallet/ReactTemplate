import React from "react";
import "./style.css";
import Paper from "@mui/material/Paper"
import Button from "@mui/material/Button"
import Link from '@mui/material/Link';
import InputField from "../../Components/InputField/InputField";
import { signin, verifyLogin } from "../../services/authentication"
import { Redirect } from "react-router-dom";

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

class Signin extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            accountCreated: false,
        }
    }

    _signin = async () => {
        let { name, lastName, email, password } = this.state
        try {
            await signin(name, lastName, email, password)
            this.setState((state) => ({
                ...state,
                accountCreated: true,
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
                {this.state.accountCreated &&
                    <Redirect to="/login" />
                }
                <div className="image-bg">
                    <Paper style={styles.mainPaper}>
                        <div style={{ paddingBottom: '10px' }}>
                            <span className="signin-title">Criar sua conta no Stonks Wallet</span>
                            <br />
                            <span className="signin-body">
                                Já é usuário?
                                <Link href="/login" underline="none" color="#5e38ba">
                                    {' Faça seu login.'}
                                </Link>
                            </span>
                        </div>
                        <div style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                            <InputField 
                                style={{ width: '48.5%' }}
                                value={this.state.name}
                                onChange={this.handleInput}
                                color="purple"
                                id="name"
                                label="Nome"
                                name="name"
                                variant="filled"
                            />
                            <InputField 
                                style={{ width: '48.5%' }}
                                value={this.state.lastName}
                                onChange={this.handleInput}
                                color="purple"
                                id="lastName"
                                label="Sobrenome"
                                name="lastName"
                                variant="filled"
                            />
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
                                    onClick={this._signin}
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

export default Signin;
