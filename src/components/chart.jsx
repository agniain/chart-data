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
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-semibold ml-5 mb-4">Known to provide the accurate charts.</h1>

        {/* Number of Orders Chart */}
        <div className="mb-8">
          <h2 className="text-xl text-center font-semibold mt-8">
            <Link to="/orders" className="text-cyan-950 hover:underline">
              Number of Orders
            </Link>
          </h2>
            <LineChart data={ordersData} title="Number of Orders Over Time" chartType="line" />
        </div>

        {/* Average Order Value Chart */}
        <div>
          <h2 className="text-xl text-center font-semibold mb-2">
            <Link to="/average-order" className="text-cyan-950 hover:underline">
              Average Order Value
            </Link>
          </h2>
            <LineChart data={averageOrderValueData} title="Average Order Value Over Time" chartType="bar"/>
        </div>

        {/* Orders by Product Category Pie Chart */}
        <div>
          <h2 className="text-xl text-center font-semibold mt-10 mb-2">
            <Link to="/by-category" className="text-cyan-950 hover:underline">
              Orders by Product Category
            </Link>
          </h2>
            <PieChart data={ordersByCategoryData} />
        </div>
      </div>
  );
};

export default Chart;
