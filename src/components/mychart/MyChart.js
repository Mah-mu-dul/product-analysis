import React from 'react';
import { Tooltip } from 'react-bootstrap';
import { Legend, Line, LineChart, Pie, PieChart, XAxis, YAxis } from 'recharts';

const MyChart = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div>
            <div className="top d-flex justify-content-around">
                <div className="line-chart">
                    <h2 className='primary'>Monthly Sell</h2>
                    <LineChart width={400} height={400} data={data}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="sell" stroke="#125466" />
                    </LineChart>
                </div>
                <div className="pi-chart">
                    <h2>Monthly Revenue </h2>
                    <PieChart width={400} height={400}>
                        <Pie
                            dataKey="revenue"
                            isAnimationActive={false}
                            data={data}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            label
                        />

                        <Tooltip />
                    </PieChart>
                </div>
            </div>
            <div className="bottom">

            </div>
            
        </div>
    );
};

export default MyChart;