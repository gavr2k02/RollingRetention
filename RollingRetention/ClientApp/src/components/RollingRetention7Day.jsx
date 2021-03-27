import React from "react";
import { Bar } from "@reactchartjs/react-chart.js";

const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
    datasets: [
        {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
        },
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

const RollingRetention7Day = () => (
    <>
        <h2 className='text-secondary'>Rolling retention 7 day</h2>
        <Bar data={data} options={options} />
    </>
);

export default RollingRetention7Day;
