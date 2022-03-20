import React from "react";
import "./style.css";
import Button from "@mui/material/Button"
import Link from '@mui/material/Link';

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

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="navbar-title">
                Stonks Wallet
            </span>
            <ul className="navbar-btn-list">
                {navUser.map(btn =>  (
                    <li key={btn.name} className="navbar-btn">
                        <Button 
                            variant="contained" 
                            color={btn.color}
                        >
                            <Link href={btn.route} underline="none" color="white">
                                {btn.name}
                            </Link>
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar;
