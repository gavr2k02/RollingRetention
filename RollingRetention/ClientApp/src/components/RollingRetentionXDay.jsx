import React from "react";
import { Line } from "@reactchartjs/react-chart.js";

import { connect } from "react-redux";

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

const RollingRetentionXDay = ({ rollingRetentionXDay }) => {
    const data = {
        labels: rollingRetentionXDay.map((data) => data.id),
        datasets: [
            {
                label: "Day",
                data: rollingRetentionXDay.map((data) => data.userLifespan),
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            },
        ],
    };
    return (
        <div>
            <h2 className='text-secondary'>Rolling retention X day</h2>
            <Line data={data} options={options} />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        rollingRetentionXDay: state.dataRollingRetention.rollingRetentionXDay,
    };
};

export default connect(mapStateToProps)(RollingRetentionXDay);
