import React from 'react';
import Header from '../components/Header';
import Logo from '../components/Logo/Logo';
import Sidebar from '../components/sidebar';

const LogoScreen = () => {
    return (
        <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <Logo/>
      </main>
    </>
    );
}

export default LogoScreen;
