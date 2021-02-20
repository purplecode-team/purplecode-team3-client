import React from "react";
import Header from "../containers/main/Header";
import Search from "../containers/main/Search";
import Category from "../containers/main/Category";
import TrendingActions from "../containers/TrendingActions";
import RecentActions from "../containers/main/RecentActions";
import Footer from "../containers/main/Footer";

function Main() {
  return (
    <>
      <Header/>
      <Search/>
      <Category/>
      <TrendingActions/>
      <RecentActions/>
      <Footer/>
    </>
  );
}

export default Main;
