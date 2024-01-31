import React from 'react';

import Navbar from '../components/navbar';
import Chart from '../components/chart';
import Footer from '../components/footer';
import Layout from '../components/layout';

const Home = () => {
  
  return (
    <>
      <Layout>
        <Navbar />
        <Chart />
        <Footer />
      </Layout>
    </>
  );
};

export default Home;