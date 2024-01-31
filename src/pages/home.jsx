import React from 'react';

import Navbar from '../components/navbar';
import Chart from '../components/chart';
import Footer from '../components/footer';
import Layout from '../components/layout';
import PhotoCarousel from "../components/carousel";

const photos = [
  '/images/chart-1.jpg',
  '/images/chart-2.jpg',
  '/images/chart-3.jpg',
];

const Home = () => {
  
  return (
    <>
      <Layout>
        <Navbar />
        <PhotoCarousel photos={photos} />
        <Chart />
        <Footer />
      </Layout>
    </>
  );
};

export default Home;