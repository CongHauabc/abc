import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import EditProductMain from "../components/products/EditproductMain";
import EditlogoMain from "../components/Logo/EditlogoMain";

const LogoEditScreen = ({ match }) => {
  const logoId =  match.params.id;
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <EditlogoMain logoId={logoId} />
      </main>
    </>
  );
};
export default LogoEditScreen;
