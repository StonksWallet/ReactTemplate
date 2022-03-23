import React, { useEffect, useState } from "react";
import "./style.css";
import Button from "@mui/material/Button"
import Link from '@mui/material/Link';
import { verifyLogin } from "../../services/authentication"

const navUser = [
    {
        name: "Insights",
        route: "/insights",
        color: "light-gray"
    },
    {
        name: "Ativos",
        route: "/assets",
        color: "light-gray"
    },
    {
        name: "Conta",
        route: "/account",
        color: "light-gray"
    },
    {
        name: "Sair",
        route: "/logout",
        color: "purple"
    },
]

const navGuest = [
    {
        name: "Cadastre",
        route: "/signin",
        color: "light-gray"
    },
    {
        name: "Entrar",
        route: "/login",
        color: "purple"
    }
]

const Navbar = () => {

    const [ logged, _ ] = useState(() => {
        return verifyLogin()
    })
    const [ navList, setNavList ] = useState([])
    
    useEffect(() => {
        setNavList(logged ? navUser : navGuest)
    }, [logged])

    return (
        <div className="navbar">
            <span className="navbar-title">
                Stonks Wallet
            </span>
            <ul className="navbar-btn-list">
                {navList.map(btn =>  (
                    <li key={btn.name} className="navbar-btn">
                        <Link href={btn.route} underline="none" color="white">
                            <Button 
                                variant="contained" 
                                color={btn.color}
                            >
                                {btn.name}
                            </Button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar;
