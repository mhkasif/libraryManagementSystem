import React from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import format from 'date-fns/format';

// Generate Sales Data
// function createData(time, amount) {
//   return { time, amount };
// }

// const data = [

// ];

export default function Chart({fine}) {
  // console.log(format( new Date(),"yyyy-MM-dd"));
const data=fine
  return (
    <React.Fragment>
    <Title content='Fine Collected' />

      <ResponsiveContainer>
        <LineChart
          data={data&&data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="datee" >
          <Label angle={0} position="insideBottom" offset={0} style={{ textAnchor: 'middle' }}>
          {(format( new Date(),"yyyy-MM-dd"))}
            </Label>
            </XAxis>
          <YAxis domain={[0, data?Math.max.apply(Math, data.map(function(o) { return o.TotalFine})):10000]} type='number' dataKey='TotalFine'>
          <Label angle={270} position="left" style={{ textAnchor: 'middle' }}>
          Fine ($)

            </Label>
          </YAxis>
          <Line type="monotone" dataKey="TotalFine" stroke="#556CD6" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
