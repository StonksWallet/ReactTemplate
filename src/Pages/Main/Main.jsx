import React, { useState, useEffect } from "react";
import "./style.css";
import Navbar from "../../Components/Navbar";
import { navUser } from "../../assets/navLists"
import { verifyLogin } from "../../services/authentication"
import RentabilityGraph from "../../Components/RentabilityGraph"

const Main = () => {
    const appliedValue = 10000
    const totalValue = 20000

    return (
        <React.Fragment>
            <Navbar navList={navUser} />
            <div className="main-bg">
                <div className="main-values">
                    <div className="main-values-item">
                        VALOR APLICADO <br />
                        R${appliedValue}
                    </div>
                    <div className="main-values-item">
                        VALOR TOTAL <br />
                        R${totalValue}
                    </div>
                    <div className="main-values-item">
                        RENTABILIDADE <br />
                        {(totalValue-appliedValue)/appliedValue*100}%
                    </div>
                </div>
                <RentabilityGraph />
            </div>
        </React.Fragment>
    )
}

export default Main