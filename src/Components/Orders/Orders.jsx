import React from "react";
import "./style.css";
import { List, ListItem, Paper } from "@mui/material";

const Orders = ({ orders }) => {
    return (
        <React.Fragment>
            <Paper className="orders-bg">
                <p className="orders-title">Operações</p>
                <List>
                    {orders.map(order => (
                        <ListItem
                            key={order.symbol}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                minHeight: 70,
                                backgroundColor: order.type === "buy" ? '#BBFF77' : '#FF6868',
                                marginTop: 2,
                            }}
                        >
                            <span className="orders-name">
                                {order.type === "buy" ? "Comprou" : "Vendeu"} : {order.name} ({order.symbol})
                            </span>
                            <div className="orders-values">
                                <span className="orders-price">
                                    $ {order.price.toLocaleString(
                                        undefined,
                                        { minimumFractionDigits: 2 }
                                    )}
                                </span>
                                <span style={{
                                    textAlign: 'center'
                                }}>
                                    Qnt: {order.quantity}
                                </span>
                            </div>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </React.Fragment>
    )
}

export default Orders
