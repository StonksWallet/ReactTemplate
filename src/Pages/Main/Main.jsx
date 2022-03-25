import React, { useState, useEffect } from "react";
import "./style.css";
import Navbar from "../../Components/Navbar";
import { navUser } from "../../assets/navLists"
import { verifyLogin } from "../../services/authentication"
import Graph from "../../Components/Graph"
import AssetsList from "../../Components/AssetsList/AssetsList";
import Orders from "../../Components/Orders/Orders";
import Card from "../../Components/Card";
import { faker } from "@faker-js/faker"

const Main = ({theme}) => {
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

    const rentability = {
        dates: new Array(10).fill().map((x, i) => i),
        values: new Array(10).fill().map(x => faker.datatype.number({min: -100, max: 200})),
    }

    return (
        <React.Fragment>
            <Navbar navList={navUser} />
            <div className="main-bg">
                <div className="main-values">
                    <Card>
                        VALOR APLICADO <br />
                        <span className="main-values-value">
                            ${appliedValue.toLocaleString(
                                undefined, 
                                { minimumFractionDigits: 2 }
                                )
                            }
                        </span>
                    </Card>
                    <Card>
                        VALOR TOTAL <br />
                        <span className="main-values-value">
                            ${totalValue.toLocaleString(
                                undefined, 
                                { minimumFractionDigits: 2 }
                                )
                            }
                        </span>
                    </Card>
                    <Card>
                        RENTABILIDADE <br />
                        <span className="main-values-value">
                            {((totalValue-appliedValue)/appliedValue*100).toLocaleString(
                                undefined, 
                                { minimumFractionDigits: 2 }
                                )}%
                        </span>
                    </Card>
                </div>
                <Graph
                    title="Rentabilidade Histórica" 
                    assetName="Rentabilidade Histórica"
                    data={rentability}
                />
                <AssetsList title="Meus Ativos" assets={myAssets} />
                <Orders orders={orders}/>
            </div>
        </React.Fragment>
    )
}

export default Main