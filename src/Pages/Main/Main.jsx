import React, { useState, useEffect } from "react";
import "./style.css";
import Navbar from "../../Components/Navbar";
import { navUser } from "../../assets/navLists"
import AssetsList from "../../Components/AssetsList/AssetsList";
import Orders from "../../Components/Orders/Orders";
import Card from "../../Components/Card";
import { faker } from "@faker-js/faker"
import { assetApi } from "../../api/assetApi.js";
import { orderApi } from "../../api/orderApi.js";
import { reportApi } from "../../api/reportApi.js";
import { withSnackbar } from 'notistack';

const rentability = {
    dates: new Array(30).fill().map((x, i) => i),
    values: new Array(30).fill().map(x => faker.datatype.number({min: -50, max: 100})),
}

const Main = ({ theme, enqueueSnackbar }) => {
    const [ myAssets, setMyAssets ] = useState(null)
    const [ myOrders, setMyOrders ] = useState(null)
    const [ realizedProfit, setRealizedProfit ] = useState(0)

    const fetchAssets = async () => {
        try {
            const assetList = await assetApi.getMyAssets()
            setMyAssets(assetList)
        } catch(e) {
            enqueueSnackbar('Erro: ' + e.message, {
                variant: 'error'
            })
        }
    }

    const fetchOrders = async () => {
        try {
            const orderList = await orderApi.getOrders()
            setMyOrders(orderList)
        } catch(e) {
            enqueueSnackbar('Erro: ' + e.message, {
                variant: 'error'
            })
        }
    }

    const fetchRealizedProfit = async() => {
        try {
            const profit = await reportApi.getProfit()
            setRealizedProfit(profit.profit)
        } catch(e) {
            enqueueSnackbar('Erro: ' + e.message, {
                variant: 'error'
            })
        }
    }

    useEffect(() => {
        fetchRealizedProfit()
        fetchAssets()
        fetchOrders()
    }, [])

    return (
        <React.Fragment>
            <Navbar navList={navUser} />
            <div className="main-bg">
                <div className="main-values">
                    <Card>
                        VENDA REALIZADA <br />
                        <span className="main-values-value">
                            ${realizedProfit.toLocaleString(
                                undefined, 
                                { minimumFractionDigits: 2 }
                                )
                            }
                        </span>
                    </Card>
                    {/*<Card>
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
                    </Card>*/}
                </div>
                <AssetsList
                    title="Meus Ativos"
                    assets={myAssets}
                />
                <Orders orders={myOrders} fetchOrders={fetchOrders}/>
            </div>
        </React.Fragment>
    )
}

export default withSnackbar(Main)