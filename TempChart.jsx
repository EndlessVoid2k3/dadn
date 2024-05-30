import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Time',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Temperature (°C)',
      },
    },
  },
};

const TempChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://io.adafruit.com/api/v2/thuanlebk473/feeds/temp-feed/data');
        const data = response.data;
        const labels = data.map(datum => new Date(datum.created_at).toLocaleTimeString());
        const tempData = data.map(datum => datum.value);

        setChartData({
          labels: labels.reverse(),
          datasets: [
            {
              label: 'Temperature',
              data: tempData.reverse(),
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
          ]
        });
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=' mb-8'>
        <h2 className=' font-bold font-serif'>Temperature Chart</h2>
        <Line options={options} data={chartData} />
    </div>
  );
};

export default TempChart;