import React, {useState} from "react";
import "./style.css";
import Navbar from "../../Components/Navbar";
import { navUser } from "../../assets/navLists"
import Graph from "../../Components/Graph"
import Orders from "../../Components/Orders/Orders";
import Card from "../../Components/Card";
import { faker } from "@faker-js/faker"
import TradeModal from "../../Components/TradeModal";

const Asset = ({match}) => {
    const [showTradeModal, setShowTradeModal] = useState(false);

    const asset = match.params[0];

    const appliedValue = 10000
    const totalValue = 20000

    const orders = [
        {
            name: "Bitcoin",
            symbol: "BTC",
            type: "buy",
            price: 41000,
            quantity: 0.001,
        },
        {
            name: "Bitcoin",
            symbol: "BTC",
            type: "sell",
            price: 3000,
            quantity: 0.01,
        }
    ]

    const rentability = {
        dates: new Array(10).fill().map((x, i) => i),
        values: new Array(10).fill().map(x => faker.datatype.number({min: -100, max: 200})),
    }

    function openTradeModal() {
        setShowTradeModal(true);
    }

    function closeTradeModal() {
        setShowTradeModal(false);
    }

    return (
        <div>
            <Navbar navList={navUser} />
            <div className="asset-bg">
                <TradeModal open={showTradeModal} onClose={closeTradeModal} asset={asset}/>
                <div className="asset-values">
                    <Card>
                        LUCRO REALIZADO <br />
                        <span className="asset-values-value">
                            ${appliedValue.toLocaleString(
                                undefined,
                                { minimumFractionDigits: 2 }
                                )
                            }
                        </span>
                    </Card>
                    <Card>
                        VALOR TOTAL <br />
                        <span className="asset-values-value">
                            ${totalValue.toLocaleString(
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
                <Orders orders={orders}/>
            </div>
        </div>
    )
}

export default Asset
