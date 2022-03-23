import React from "react";
import "./style.css";
import Navbar from "../../Components/Navbar";
import { navGuest } from "../../assets/navLists"
import { verifyLogin } from "../../services/authentication"
import Main from "../Main";

function Home(props) {

    return (
        verifyLogin() ? 
        <Main /> :
        <React.Fragment>
            <Navbar navList={navGuest} />
            <h2>Home</h2>
        </React.Fragment>
    )
}

export default Home;
