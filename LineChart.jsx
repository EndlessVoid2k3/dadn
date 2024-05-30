import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const labelsWeekly = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        font: {
          size: 18,
          weight: "bold",
        },
      },
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
      font: {
        size: 18,
        weight: "bold",
      },
    },
    tooltip: {
      enabled: true,
      mode: "index",
      intersect: false,
    },
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: "Day",
        font: {
          size: 18,
          weight: "bold",
        },
      },
      ticks: {
        font: {
          size: 16,
          weight: "bold",
        },
      },
    },
    y: {
      display: true,
      title: {
        display: true,
        text: "Value",
        font: {
          size: 18,
          weight: "bold",
          
        },
      },
      ticks: {
        font: {
          size: 16,
          weight: "bold",
        },
        suggestedMin: 0,
        suggestedMax: 100,
        stepSize: 10,
        min: 0, // Ensure fixed range
        max: 100, // Ensure fixed range
      },
    },
  },
  datasets: {
    text: {
      font: {
        size: 60,
        weight: "bold",
      },
    },
  },
};

function graphData1(data, t){
  return (
    {
      labels: labelsWeekly,
      datasets: [
        {
          label: t("stat.temp"),
          data:  data,
          
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        }
      ],
    }
  )
}

function graphData2(data, t){
  return (
    {
      labels: labelsWeekly,
      datasets: [
        {
          label: t("stat.light"),
          data: data,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    }
  )
}

const LineChart = () => {
  function getDataTemp() {
    return fetch()
        .then(response => response.json())
        .then(data => {
            return data;
        });
  }
  function getDataLight() {
    return fetch()
        .then(response => response.json())
        .then(data => {
            return data;
        });
  }
  const [dataTemp, setDataTemp] = useState([]);
  const [dataLight, setDataLight] = useState([]);

  useEffect(() => {
    const fetchAndSetData = () => {
        Promise.all([ getDataTemp(), getDataLight()])
            .then(([ tempData, lightData]) => {
                setDataTemp(tempData);
                setDataLight(lightData);
            })
    };

    // Immediately fetch and set data on component mount.
    fetchAndSetData();

    
}, []); // Empty dependency array means this effect runs once on mount and cleanup runs on unmount.

  return (
    <div className=" w-11/12 h-full flex flex-col justify-center items-center">
      <Line
        style={{ marginBottom: "30px" }}
        options={options}
        data = {graphData1(dataTemp.data, t)}
      />
      <Line
        style={{ marginBottom: "30px" }}
        options={options}
        data = {graphData2(dataLight.data, t)}
      />
    </div>
  );
};

export default LineChart;