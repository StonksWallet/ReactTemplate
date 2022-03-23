import React, { useState, useEffect } from "react";
import "./style.css";
import Navbar from "../../Components/Navbar";
import { navUser } from "../../assets/navLists"
import { verifyLogin } from "../../services/authentication"
import RentabilityGraph from "../../Components/RentabilityGraph"
import AssetsList from "../../Components/AssetsList/AssetsList";
import Orders from "../../Components/Orders/Orders";

const Main = () => {
    const appliedValue = 10000
    const totalValue = 20000

    const myAssets = [
        {
            name: "Bitcoin",
            symbol: "BTC",
            price: 42000,
            var_24h: 0.05
        },
        {
            name: "Ethereum",
            symbol: "ETH",
            price: 3000,
            var_24h: 0.09
        },
        {
            name: "Solana",
            symbol: "SOL",
            price: 95,
            var_24h: -0.03
        },
    ]

    const orders = [
        {
            name: "Bitcoin",
            symbol: "BTC",
            type: "buy",
            price: 41000,
            quantity: 0.001,
        },
        {
            name: "Ethereum",
            symbol: "ETH",
            type: "sell",
            price: 3000,
            quantity: 0.01,
        }
    ]

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
                <RentabilityGraph title="Rentabilidade Histórica" />
                <AssetsList title="Meus Ativos" assets={myAssets} />
                <Orders orders={orders}/>
            </div>
        </React.Fragment>
    )
}

export default Main