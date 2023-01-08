import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import MainNews from "../components/News/MainNews";

const newsScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <MainNews />
      </main>
    </>
  );
};

export default newsScreen;
