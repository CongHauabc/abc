import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";

import EditbannerMain from "../components/banner/EditbannerMain";

const BannerEditScreen = ({ match }) => {
  const bannerId =  match.params.id;
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <EditbannerMain bannerId={bannerId} />
      </main>
    </>
  );
};
export default BannerEditScreen;
