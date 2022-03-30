import React, {useEffect, useState} from "react";
import "./style.css";
import { CircularProgress, List, ListItem, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import InputField from "../InputField";
import {useKeyPress} from "../../hooks/useKeyPress";

const InsightList = ({ title, assets }) => {

    return (
        <React.Fragment>
            <Paper className="assets-list-bg">
                <p className="assets-list-title">{title}</p>
                {!Array.isArray(assets) &&
                    <div className="assets-list-progress">
                        <CircularProgress />
                    </div>
                }
                {assets &&
                    <List>
                        {assets.map(asset => (
                                <ListItem
                                    component={Link}
                                    to={`/assets/${asset.name}`}
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
                                    <span className="assets-name">{asset.name}</span>
                                    <div className="assets-values">
                                        <span className="assets-price">
                                            {asset.value1}
                                        </span>
                                        <span style={{
                                            textAlign: 'center'
                                        }}>
                                            {asset.value2}
                                        </span>
                                    </div>
                                </ListItem>
                        ))}
                    </List>
                }
            </Paper>
        </React.Fragment>
    )
}

export default InsightList
