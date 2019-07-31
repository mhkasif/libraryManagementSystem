/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import { ResponsiveContainer,Legend } from 'recharts';
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';


const style = {
  top: 0,
  left: 105,
  lineHeight: '24px',

};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


export default function Deposits(props) {
  const data = [
    { name: 'Book Issued', value: props.countIssue },


    { name: 'Book Returned', value:props.returned},
  ];

  return (
    <div style={{ width: '100%', height: 500}}>

    <ResponsiveContainer >
    <PieChart offset={0}  margin={{ top: -45, right: 0, left: -100, bottom: 0 }}>
    <Pie
      data={data}
      cx={200}
      cy={200}
      labelLine={false}
      label={renderCustomizedLabel}
      outerRadius={80}
      fill="#8884d8"
      dataKey="value"
    >
      {
        data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
      }
      </Pie>
      <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
  </PieChart>
</ResponsiveContainer>
</div>

  );
}