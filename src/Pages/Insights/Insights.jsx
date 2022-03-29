import React from "react";
import "./style.css";
import Navbar from "../../Components/Navbar";
import { navUser } from "../../assets/navLists"
import AssetsList from "../../Components/AssetsList/AssetsList";
import { CircularProgress } from "@mui/material";

class Insights extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            mostProfit: [],
            mostOperations: [],
            dataLoaded: false,
        }
    }

    componentDidMount() {
        this.getData()
    }

    async getData() {
        // TODO: integration with backend
        await setTimeout(() => {
            this.setState((state) => ({
                ...state,
                mostProfit: [
                    {
                        name: "Bitcoin",
                        symbol: "BTC",
                        price: 42000,
                        changePercent: 0.05
                    },
                    {
                        name: "Ethereum",
                        symbol: "ETH",
                        price: 3000,
                        changePercent: 0.09
                    },
                    {
                        name: "Solana",
                        symbol: "SOL",
                        price: 95,
                        changePercent: -0.03
                    },
                ],
                mostOperations: [
                    {
                        name: "Bitcoin",
                        symbol: "BTC",
                        price: 42000,
                        changePercent: 0.05
                    },
                    {
                        name: "Ethereum",
                        symbol: "ETH",
                        price: 3000,
                        changePercent: 0.09
                    },
                    {
                        name: "Solana",
                        symbol: "SOL",
                        price: 95,
                        changePercent: -0.03
                    },
                ],
                dataLoaded: true,
            }))
        }, 500)
    }

    render () {
        const { mostProfit, mostOperations, dataLoaded } = this.state

        return (
            <React.Fragment>
                <Navbar navList={navUser} />
                    <div className="insights-bg">
                        <AssetsList
                            title="Maior Lucro"
                            assets={mostProfit}
                            dataLoaded={dataLoaded}
                        />
                        <AssetsList
                            title="Mais Operações"
                            assets={mostOperations}
                            dataLoaded={dataLoaded}
                        />
                    </div>
            </React.Fragment>
        )
    }
}

export default Insights
