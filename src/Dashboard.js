import React, { useState } from 'react';
import './dashboard.css';
import Chart from 'react-google-charts';

function Dashboard() {

  const smartDashboard = 'number of registrations per semester';
  const animation= { duration: 1000, easing: 'out', startup: true }

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
        chartType="PieChart"
        data={data}
        options={{
          title: smartDashboard
        }} 
        />

        <Chart 
          width={'400px'}
          height={'300px'}
          chartType="PieChart"
          data={data}
          options={{
            title: smartDashboard,
            is3D: true
          }}
        />

        <Chart
          width={'400px'}
          height={'300px'}
          chartType="PieChart"
          data={data}
          options={{
            title: smartDashboard,
            pieHole: 0.4
          }}
          />

        <Chart
          width={'400px'}
          height={'300px'}
          chartType="BarChart"
          data={data}
          options={{
            title: smartDashboard,
            chartArea: { width: '50%'},
            hAxis: { title: 'Quantity' },
            vAxis: { title: 'Month' },
            animation: animation
          }}
          />

        <Chart
          width={'400px'}
          height={'300px'}
          chartType="LineChart"
          data={data}
          options={{
            title: smartDashboard,
            hAxis: { title: 'Month' }, 
            vAxis: { title: 'Quantity'},
            animation: animation
          }}
          />

        <Chart 
          width={'400px'}
          height={'300px'}
          chartType="AreaChart"
          data={data}
          options={{
            title: smartDashboard,
            hAxis: { title: 'Month'},
            vAxis: { title: 'Quantity'},
            animation: animation
          }}
          />
     
    </>
  );
    
}

export default Dashboard;
