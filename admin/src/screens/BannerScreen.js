import React from 'react';
import Banner from '../components/banner/Banner';
import Header from '../components/Header';
import Sidebar from '../components/sidebar';

const BannerScreen = () => {
    return (
        <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <Banner/>
      </main>
    </>
    );
}

export default BannerScreen;
