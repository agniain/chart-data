import React from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../components/linechart';
import Navbar from '../components/navbar';
import Layout from '../components/layout';

const Order = () => {
  // Sample data
  const orderData = {
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

  return (
    <>
      <Layout>
        <Navbar />
        <div>
          <h1 className="mt-5 ml-5">Order Detail Page</h1>
          <p className="mb-5 ml-5">This is the detail page for the "Number of Orders" chart.</p>
          <LineChart data={orderData} chartType="line" />
          <Link to="/" className="ml-5 mt-10 bg-slate-900 text-white py-2 px-4 rounded hover:bg-slate-800">
              Back to Dashboard
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default Order;
