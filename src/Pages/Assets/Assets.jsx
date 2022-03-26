import React from "react";
import "./style.css";
import Navbar from "../../Components/Navbar";
import { navUser } from "../../assets/navLists"
import AssetsList from "../../Components/AssetsList/AssetsList";

const Assets = () => {
    const assets = [
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

    function onSearch(text) {
        console.log(text);
        //TODO: request to backend
    }

    return (
        <React.Fragment>
            <Navbar navList={navUser} />
            <div className="assets-bg">
                <AssetsList
                    title="Ativos"
                    assets={assets}
                    searchField={true}
                    searchCallback={onSearch}
                />
            </div>
        </React.Fragment>
    )
}

export default Assets
