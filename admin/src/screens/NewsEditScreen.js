import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import EditnewsMain from "../components/News/EditnewsMain";

const NewsEditScreen = ({ match }) => {
  const newId =  match.params.id;
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <EditnewsMain newId={newId} />
      </main>
    </>
  );
};
export default NewsEditScreen;
