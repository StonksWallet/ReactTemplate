import React, { useState, useEffect } from "react";
import "./style.css";
import { List, ListItem, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const AssetsList = ({ title, assets }) => {
    return (
        <React.Fragment>
            <Paper className="assets-list-bg">
                <p className="assets-list-title">{title}</p>
                <List>
                    {assets.map(asset => (
                            <ListItem
                                component={Link}
                                to={`/assets/${asset.symbol}`}
                                key={asset.symbol}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    minHeight: 70,
                                    backgroundColor: '#E8E8E8',
                                    marginTop: 2,
                                }}
                                className="assets-item"
                            >
                                <span className="assets-name">{asset.name} ({asset.symbol})</span>
                                <div className="assets-values">
                                    <span className="assets-price">
                                        $ {asset.price}
                                    </span>
                                    <span style={{
                                        color: asset.var_24h > 0 ? 'green' : 'red',
                                        textAlign: 'start'
                                    }}>
                                        {asset.var_24h*100}%
                                    </span>
                                </div>
                            </ListItem>
                    ))}
                </List>
            </Paper>
        </React.Fragment>
    )
}

export default AssetsList