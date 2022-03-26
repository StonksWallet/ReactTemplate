import React, {useEffect, useState} from "react";
import "./style.css";
import { List, ListItem, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import InputField from "../InputField";
import {useKeyPress} from "../../hooks/useKeyPress";

const AssetsList = ({ title, assets, searchCallback, searchField = false }) => {
    const [search, setSearch] = useState("");
    const enter = useKeyPress('Enter');

    useEffect(() => {
        if(enter && search) {
            searchCallback(search);
        }

    }, [enter, search])

    function getHeader() {
        if(searchField) {
            return (
                <div className="assets-list-header">
                    <p className="assets-list-title">{title}</p>
                    <InputField
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        color="purple"
                        id="search"
                        label="Buscar"
                        name="search"
                        type="text"
                        style={{width: '30%'}}
                        size="small"
                        variant="outlined"
                    />
                </div>
            );
        } else {
            return <p className="assets-list-title">{title}</p>
        }
    }

    return (
        <React.Fragment>
            <Paper className="assets-list-bg">
                {getHeader()}
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
                                        $ {asset.price.toLocaleString(
                                            undefined,
                                            { minimumFractionDigits: 2 }
                                        )}
                                    </span>
                                    <span style={{
                                        color: asset.var_24h > 0 ? 'green' : 'red',
                                        textAlign: 'center'
                                    }}>
                                        {(asset.var_24h*100).toLocaleString(
                                            undefined,
                                            { minimumFractionDigits: 2 }
                                        )}%
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
