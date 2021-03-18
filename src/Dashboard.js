import React, { useState } from 'react';
import './dashboard.css';
import Chart from 'react-google-charts';

function Dashboard() {

  const smartDashboard = 'number of registrations per semester';

  const [data, setData] = useState([
    ['Month', 'Quantity'],
    ['January', 33],
    ['February', 68],
    ['March', 49],
    ['April', 15],
    ['May', 80],
    ['June', 27] 
  ]);

  return (
    <>
      <h1> Dashboard </h1>
      <Chart
        width={'400px'}
        height={'300px'}
        chartType={'PieChart'}
        data={data}
        options={{
          title: smartDashboard
        }} 
        />

        <Chart 
          width={'400px'}
          height={'300px'}
          chartType={'PieChart'}
          data={data}
          options={{
            title: smartDashboard,
            is3D: true
          }}
        />
    </>
  );
    
}

export default Dashboard;
