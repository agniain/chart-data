import React, { useEffect, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js/auto';

const PieChart = ({ data }) => {
  const chartContainerRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    // Destroy existing chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create a new chart instance for the pie chart
    const chartCanvas = chartContainerRef.current;
    const newChartInstance = new Chart(chartCanvas, {
      type: 'pie',
      data: data,
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Orders by Product Category',
          },
        },
      },
    });

    // Save the new chart instance
    chartInstanceRef.current = newChartInstance;

    // Cleanup function to destroy the chart
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data]);

  return (
    <div className="w-4/6 mx-auto">
      <canvas ref={chartContainerRef} className="w-full bg-white rounded-lg shadow-lg" />
    </div>
  );
};

export default PieChart;
