import React, { useState, useEffect } from "react";
import "./style.css";
import { Paper } from "@mui/material";

const Orders = ({ orders }) => {
    return (
        <React.Fragment>
            <Paper className="orders-bg">
                <p className="orders-title">Operações</p>
            </Paper>
        </React.Fragment>
    )
}

export default Orders