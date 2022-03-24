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
            <div className="home">
                <p id="mainText"> Monitore os seus<br /> ativos a partir de<br /> um único lugar</p>
            </div>
            
        </React.Fragment>
    )
}

export default Home;
