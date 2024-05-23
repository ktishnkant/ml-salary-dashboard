import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { salaryData } from './data';

const LineGraph: React.FC = () => {
  const data = salaryData.map(({ year, totalJobs }) => ({ year, totalJobs }));

  return (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="totalJobs" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  );
};

export default LineGraph;
