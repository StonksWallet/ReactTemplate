import React, { useState, useEffect } from "react";
import { Paper } from "@mui/material";
import "./style.css";

const RentabilityGraph = ({ title, data }) => {
    return (
        <React.Fragment>
            <Paper className="rent-bg">
                <p className="rent-title">{title}</p>
            </Paper>
        </React.Fragment>
    )
}

export default RentabilityGraph