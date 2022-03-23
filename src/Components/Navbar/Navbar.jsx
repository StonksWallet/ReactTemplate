import React, { useEffect, useState } from "react";
import "./style.css";
import Button from "@mui/material/Button"
import Link from '@mui/material/Link';

const Navbar = ({ navList }) => {

    return (
        <div className="navbar">
            <span className="navbar-title">
                Stonks Wallet
            </span>
            <ul className="navbar-btn-list">
                {(navList.map(btn =>  (
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
                )))}
            </ul>
        </div>
    )
}

export default Navbar;
