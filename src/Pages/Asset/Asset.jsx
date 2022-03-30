import React, { useState, useEffect } from "react";
import "./style.css";
import Navbar from "../../Components/Navbar";
import { navUser } from "../../assets/navLists"
import Graph from "../../Components/Graph"
import Orders from "../../Components/Orders/Orders";
import Card from "../../Components/Card";
import { faker } from "@faker-js/faker"
import TradeModal from "../../Components/TradeModal";
import { orderApi } from "../../api/orderApi.js";
import { assetApi } from "../../api/assetApi.js";
import { withSnackbar } from 'notistack';
import { reportApi } from "../../api/reportApi.js";

const rentability = {
    dates: new Array(30).fill().map((x, i) => i),
    values: new Array(30).fill().map(x => faker.datatype.number({min: -100, max: 200})),
}

const Asset = ({ match, enqueueSnackbar }) => {
    const [ showTradeModal, setShowTradeModal ] = useState(false);
    const [ orders, setOrders ] = useState(null)
    const [ realizedProfit, setRealizedProfit ] = useState(0)
    const [ marketCap, setMarketCap ] = useState(0)

    const asset = match.params[0];
    
    const fetchRealizedProfit = async() => {
        try {
            const profit = await reportApi.getProfit(asset)
            console.log(profit)
            setRealizedProfit(profit.profit)
        } catch(e) {
            enqueueSnackbar('Erro: ' + e.message, {
                variant: 'error'
            })
        }
    }

    function openTradeModal() {
        setShowTradeModal(true);
    }

    function closeTradeModal() {
        setShowTradeModal(false);
    }
    
    const handleTrade = async (asset, price, date, quantity, type) => {
        const result = await orderApi.createOrder(asset, price, date, quantity, type)
        console.log(result)
        await fetchOrders()
    }
    
    const fetchOrders = async () => {
        try {
            const orderList = await orderApi.getOrders()
            setOrders(orderList.filter(order => order.name.toLowerCase() === asset.toLowerCase()))
        } catch(e) {
            enqueueSnackbar('Erro: ' + e.message, {
                variant: 'error'
            })
        }
    }

    const fetchMarketCap = async () => {
        try {
            const assets = await assetApi.getAssets()

            console.log(assets)

            setMarketCap(assets.find((curAsset) => curAsset.symbol === asset ).marketCap);
        } catch (e) {
            enqueueSnackbar('Erro: ' + e.message, {
                variant: 'error'
            })
        }
    }

    useEffect(() => {
        fetchOrders()
        fetchRealizedProfit()
        fetchMarketCap()
    }, [])

    return (
        <div>
            <Navbar navList={navUser} />
            <div className="asset-bg">
                <TradeModal open={showTradeModal} onClose={closeTradeModal} asset={asset} title="Realizar Operação" confirmCallback={handleTrade}/>
                <div className="asset-values">
                    <Card>
                        VENDA REALIZADA <br />
                        <span className="asset-values-value">
                            ${realizedProfit.toLocaleString(
                                undefined,
                                { minimumFractionDigits: 2 }
                                )
                            }
                        </span>
                    </Card>
                    <Card>
                        MARKET CAP <br />
                        <span className="asset-values-value">
                            ${marketCap.toLocaleString(
                                undefined,
                                { minimumFractionDigits: 2 }
                                )
                            }
                        </span>
                        </Card>
                    <button className="asset-trade" onClick={openTradeModal}>
                        <span>Realizar Operação</span>
                    </button>
                </div>
                <Graph
                    title={asset}
                    assetName={asset}
                    data={rentability}
                />
                <Orders orders={orders} fetchOrders={fetchOrders} enqueueSnackbar={enqueueSnackbar}/>
            </div>
        </div>
    )
}

export default withSnackbar(Asset)
