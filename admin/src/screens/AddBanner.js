import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import AddBannerMain from "../components/banner/AddBannerMain";

const AddBanner = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <AddBannerMain />
      </main>
    </>
  );
};

export default AddBanner;
