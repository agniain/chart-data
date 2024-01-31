import React from 'react';
import { Link } from 'react-router-dom';
import LineChart from './linechart';
import PieChart from './piechart'
import Layout from './layout';

const Chart = () => {
  // Sample data
  const ordersData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Number of Orders',
        data: [47, 55, 63, 77, 68, 73, 97],
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        backgroundColor: 'rgba(75,192,192,0.4)',
      },
    ],
  };

  const averageOrderValueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Average Order Value',
        data: [13, 7, 12, 21, 19, 25, 27],
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        backgroundColor: 'rgba(54, 162, 235, 0.4)',
      },
    ],
  };

  const ordersByCategoryData = {
    labels: ['Electronics', 'Clothing', 'Home Goods', 'Toys', 'Books'],
    datasets: [
      {
        data: [35, 25, 20, 15, 10],
        backgroundColor: [
          'rgba(75, 192, 192, 0.4)',
          'rgba(255, 99, 132, 0.4)',
          'rgba(255, 205, 86, 0.4)',
          'rgba(54, 162, 235, 0.4)',
          'rgba(153, 102, 255, 0.4)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
      <div className="container mx-auto mt-2 border-t-4 border-gray-700">
        {/* Number of Orders Chart */}
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-2/3 mx-4">
            <div className="mb-8 mt-8">
              <h2 className="text-xl text-center font-semibold mb-5">
                <Link to="/orders" className="text-cyan-950 hover:underline">
                  Number of Orders
                </Link>
              </h2>
                <LineChart data={ordersData} title="Number of Orders Over Time" chartType="line" />
            </div>
          </div>

          <div className="md:w-1/3 mx-4">
            <h1 className="text-2xl font-semibold">LINE CHART.</h1>
          </div>
        </div>

        {/* Average Order Value Chart */}
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/3">
            <h1 className="text-2xl text-center font-semibold">BAR CHART.</h1>
          </div>
          
          <div className="md:w-2/3 mx-4">
            <div className="mb-8">
              <h2 className="text-xl text-center font-semibold mt-8 mb-5">
                <Link to="/average-order" className="text-cyan-950 hover:underline">
                  Average Order Value
                </Link>
              </h2>
              <LineChart data={averageOrderValueData} title="Average Order Value Over Time" chartType="bar"/>
            </div>
          </div>
        </div>

        {/* Orders by Product Category Pie Chart */}
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-2/3 mx-4">
            <div className="mb-8">
              <h2 className="text-xl text-center font-semibold mt-8 mb-5">
                <Link to="/by-category" className="text-cyan-950 hover:underline">
                  Orders by Product Category
                </Link>
              </h2>
              <PieChart data={ordersByCategoryData} />
            </div>
          </div>

          <div className="md:w-1/3 mx-4">
            <h1 className="text-2xl font-semibold">PIE CHART.</h1>
          </div>
        </div>
      </div>
  );
};

export default Chart;
