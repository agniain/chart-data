import React, { useEffect, useRef } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js/auto';

const LineChart = ({ data, chartType }) => {
  const chartContainerRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    // Destroy existing chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const chartCanvas = chartContainerRef.current;
    const newChartInstance = new Chart(chartCanvas, {
      type: chartType,
      data: data,
      options: {
        plugins: {
          title: {
            display: true,
            text: chartType === 'line' ? 'Number of Orders Over Time' : 'Average Order Value Over Time',
          },
          legend: {
            display: true,
            position: 'top',
          },
          tooltip: {
            enabled: true,
            mode: 'nearest',
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Month',
            },
          },
          y: {
            title: {
              display: true,
              text: chartType === 'line' ? 'Number of Orders' : 'Average Order Value',
            },
          },
        },
        animation: {
          duration: 1000,
          easing: 'easeInOutQuad',
        },
      },
    });

    // Save the new chart
    chartInstanceRef.current = newChartInstance;

    // Cleanup function to destroy the chart 
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data, chartType]);

  return (
    <div className="w-5/6 mx-auto">
      <canvas ref={chartContainerRef} className="w-full bg-white rounded-lg shadow-lg" />
    </div>
  );
};

export default LineChart;
