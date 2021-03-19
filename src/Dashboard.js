import React, { useState, useEffect } from "react";
import "./dashboard.css";
import Chart from "react-google-charts";

function Dashboard() {
  const liveDashboard = "number of registrations per semester";
  const animation = { duration: 1000, easing: "out", startup: true };

  const [data, setData] = useState([
    ["Month", "Quantity"],
    ["January", 33],
    ["February", 68],
    ["March", 49],
    ["April", 15],
    ["May", 80],
    ["June", 27],
  ]);

  useEffect(() => {
    function changeData() {
      const dataCharts = data.map((line) => {
        if (Number.isInteger(line[1])) {
          line[1] = Math.floor(Math.random() * 101);
        }
        return line;
      });
      setData(dataCharts); // Update
    }

    const intervalID = setInterval(() => changeData(), 5000); // Destruction

    return () => {
      clearInterval(intervalID);
    };
  }, [data]);

  return (
    <>
      <h1> Dashboard </h1>
      <Chart
        width={"400px"}
        height={"300px"}
        chartType="PieChart"
        data={data}
        options={{
          title: liveDashboard,
        }}
      />

      <Chart
        width={"400px"}
        height={"300px"}
        chartType="PieChart"
        data={data}
        options={{
          title: liveDashboard,
          is3D: true,
        }}
      />

      <Chart
        width={"400px"}
        height={"300px"}
        chartType="PieChart"
        data={data}
        options={{
          title: liveDashboard,
          pieHole: 0.4,
        }}
      />

      <Chart
        width={"400px"}
        height={"300px"}
        chartType="BarChart"
        data={data}
        options={{
          title: liveDashboard,
          chartArea: { width: "50%" },
          hAxis: { title: "Quantity" },
          vAxis: { title: "Month" },
          animation: animation,
        }}
      />

      <Chart
        width={"400px"}
        height={"300px"}
        chartType="LineChart"
        data={data}
        options={{
          title: liveDashboard,
          hAxis: { title: "Month" },
          vAxis: { title: "Quantity" },
          animation: animation,
        }}
      />

      <Chart
        width={"400px"}
        height={"300px"}
        chartType="AreaChart"
        data={data}
        options={{
          title: liveDashboard,
          hAxis: { title: "Month" },
          vAxis: { title: "Quantity" },
          animation: animation,
        }}
      />
    </>
  );
}

export default Dashboard;
