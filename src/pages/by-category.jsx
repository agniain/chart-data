import React from 'react';
import { Link } from 'react-router-dom';
import PieChartDetail from '../components/piechart'; 
import Navbar from '../components/navbar';
import Layout from '../components/layout';

const ByCategory = () => {
  // Sample data
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
    <>
        <Layout>
            <Navbar />
            <div>
                <h1 className='mt-5 ml-5'>Orders by Product Category Detail Page</h1>
                <p className='mt-5 ml-5 mb-5'>This is the detail page for the "Orders by Product Category" Pie Chart.</p>
                    <PieChartDetail data={ordersByCategoryData} />
                <Link to="/" className="ml-5 bg-slate-900 text-white py-2 px-4 rounded hover:bg-slate-800">
                    Back to Dashboard
                </Link>
            </div>
        </Layout>
    </>
  );
};

export default ByCategory;
