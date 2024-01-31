import React from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../components/linechart';
import Navbar from '../components/navbar';
import Layout from '../components/layout';

const AverageOrder = () => {
  // Sample data
  const averageOrderData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Average Order Value',
        data: [13, 7, 12, 21, 19, 25, 27],
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 2,
        backgroundColor: 'rgba(255,99,132,0.4)',
      },
    ],
  };

  return (
    <>
      <Layout>
        <Navbar />
        <div>
          <h1 className="mt-5 ml-5">Average Order Value Detail Page</h1>
          <p className="mb-5 ml-5">This is the detail page for the "Average Order Value" chart.</p>
          <LineChart data={averageOrderData} chartType="bar" />
          <Link to="/" className="ml-5 mt-10 bg-slate-900 text-white py-2 px-4 rounded hover:bg-slate-800">
                  Back to Dashboard
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default AverageOrder;
