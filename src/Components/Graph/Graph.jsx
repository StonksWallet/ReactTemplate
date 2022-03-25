import React, { useState, useEffect } from "react";
import { Paper } from "@mui/material";
import "./style.css";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const Graph = ({ title, assetName, data }) => {
    const chartData = {
        labels: data.dates,
        datasets: [
            {
                label: assetName,
                data: data.values,
                borderColor: 'rgb(20, 240, 255)',
                backgroundColor: 'rgba(20, 240, 255, 0.5)',
            }
        ]
    }
    return (
        <React.Fragment>
            <Paper className="rent-bg">
                <p className="rent-title">{title}</p>
                <Line data={chartData} />
            </Paper>
        </React.Fragment>
    )
}

export default Graph