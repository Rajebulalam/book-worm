import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import UseChart from '../../Hook/UseChart';
import './Dashboard.css';

const Dashboard = () => {

    const [chartData, setChartData] = UseChart();

    return (
        <div className='dashboard-container'>
            <div>
                <h2 className='text-align'>MONTH WISE SELL</h2>
                <LineChart width={500} height={400} data={chartData}>
                    <Line type="monotone" dataKey="sell" stroke="green"></Line>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
            <div>
                <h2 className='text-align'>Investment vs Revenue</h2>
                <AreaChart width={500} height={400} data={chartData}>
                    <Area type="monotone" dataKey="investment" stroke='green'></Area>
                    <Area type="monotone" dataKey="revenue" stroke='green'></Area>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                </AreaChart>
            </div>
            <div>
                <h2 className='text-align'>Investment vs Revenue</h2>
                <BarChart width={500} height={400} data={chartData}>
                    <Bar dataKey="investment" stackId="a" fill="#8884d8"></Bar>
                    <Bar dataKey="revenue" stackId="a" fill="#82ca9d"></Bar>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                </BarChart>
            </div>
        </div>
    );
};

export default Dashboard;