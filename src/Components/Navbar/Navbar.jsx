import React, { useEffect, useState } from "react";
import "./style.css";
import Button from "@mui/material/Button"
import { Link } from "react-router-dom";

const Navbar = ({ navList }) => {

    return (
        <div className="navbar">
            <Link to="/">
                <span className="navbar-title">
                    Stonks Wallet
                </span>
            </Link>
            <ul className="navbar-btn-list">
                {(navList.map(btn =>  (
                    <li key={btn.name} className="navbar-btn">
                        <Link 
                            to={btn.route}
                            style={{
                                textDecoration: 'none',
                                color: 'white'
                            }}
                        >
                            <Button 
                                variant="contained" 
                                color={btn.color}
                            >
                                {btn.name}
                            </Button>
                        </Link>
                    </li>
                )))}
            </ul>
        </div>
    )
}

export default Navbar;
