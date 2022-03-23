import React from "react";
import "./style.css";
import Navbar from "../../Components/Navbar";
import { navGuest, navUser } from "../../assets/navLists"
import { verifyLogin } from "../../services/authentication"

function Home(props) {
    return (
        <React.Fragment>
            <Navbar navList={verifyLogin() ? navUser : navGuest} />
            <h2>Home</h2>
        </React.Fragment>
    );
}

export default Home;
