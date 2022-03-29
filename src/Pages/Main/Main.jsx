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
import { CircularProgress } from "@mui/material";
import { assetApi } from "../../api/assetApi.js";
import { orderApi } from "../../api/orderApi.js";
import { withSnackbar } from 'notistack';

const rentability = {
    dates: new Array(30).fill().map((x, i) => i),
    values: new Array(30).fill().map(x => faker.datatype.number({min: -50, max: 100})),
}

const Main = ({ theme, enqueueSnackbar }) => {
    const [ myAssets, setMyAssets ] = useState(null)
    const [ myOrders, setMyOrders ] = useState(null)

    const appliedValue = 10000
    const totalValue = 20000

    const fetchAssets = async () => {
        try {
            const assetList = await assetApi.getAssets()
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

    useEffect(() => {
        fetchAssets()
        fetchOrders()
    }, [])

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