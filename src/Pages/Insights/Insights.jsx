import React from "react";
import "./style.css";
import Navbar from "../../Components/Navbar";
import { navUser } from "../../assets/navLists"
import InsightList from "../../Components/InsightList";
import { CircularProgress } from "@mui/material";
import { assetApi } from "../../api/assetApi.js";

class Insights extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            mostProfit: null,
            mostOperations: null,
            dataLoaded: false,
        }
    }

    componentDidMount() {
        this.getData()
    }

    async getData() {
        // TODO: integration with backend
        let mostProfit = await assetApi.getMostProfitAssets()
        let mostOperations = await assetApi.getMostOperationAssets()
        mostProfit = mostProfit.map(a => ({
            name: a.name,
            value1: `$ ${parseFloat(a.profit).toLocaleString(
                undefined,
                { minimumFractionDigits: 2 }
            )}`}))
        mostOperations = mostOperations.map(a => ({
            name: a.name,
            value1: a.count,
        }))
        this.setState(state => ({
            ...state,
            mostProfit,
            mostOperations,
            dataLoaded: true
        }))
    }

    render () {
        const { mostProfit, mostOperations, dataLoaded } = this.state

        return (
            <React.Fragment>
                <Navbar navList={navUser} />
                    <div className="insights-bg">
                        <InsightList
                            title="Maior Lucro"
                            assets={mostProfit}
                            dataLoaded={dataLoaded}
                        />
                        <InsightList
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
