import React, { useState, useEffect } from "react";
import "./style.css";
import { Paper } from "@mui/material";

const Operations = ({ operations }) => {
    return (
        <React.Fragment>
            <Paper className="operations-bg">
                <p className="operations-title">Operações</p>
            </Paper>
        </React.Fragment>
    )
}

export default Operations