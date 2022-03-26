import React from "react";
import "./style.css";
import Navbar from "../../Components/Navbar";
import { navUser } from "../../assets/navLists"
import AssetsList from "../../Components/AssetsList/AssetsList";

const Insights = () => {
    const assets1 = [
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
    const assets2 = [
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

    return (
        <React.Fragment>
            <Navbar navList={navUser} />
            <div className="insights-bg">
                <AssetsList
                    title="Maior Lucro"
                    assets={assets1}
                />
                <AssetsList
                    title="Mais Operações"
                    assets={assets2}
                />
            </div>
        </React.Fragment>
    )
}

export default Insights
