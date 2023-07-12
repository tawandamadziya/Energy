// MonthlyEnergySpends.jsx
import { BarChart,Bar, XAxis, YAxis } from 'recharts'; 
import React from 'react';

function EnergyChart(){
  // Sample data for monthly energy spends
  const energySpends = [
    { month: 'January', amount: 100 },
    { month: 'February', amount: 150 },
    { month: 'March', amount: 120 },
    { month: 'April', amount: 130 },
    { month: 'May', amount: 110 },
    { month: 'June', amount: 140 },
    { month: 'July', amount: 90 },
    { month: 'August', amount: 80 },
    { month: 'September', amount: 100 },
    { month: 'October', amount: 120 },
    { month: 'November', amount: 130 },
    { month: 'December', amount: 160 },
  ];

  return (
    <div>
      <BarChart data={energySpends} width={320} height={350} >
        <XAxis dataKey="month"></XAxis>
        <YAxis/>
        <Bar dataKey="amount"/>
      </BarChart>
    </div>
  )
}

export default EnergyChart;
