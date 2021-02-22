import React from "react";
import BasicTemplate from "../containers/common/BasicTemplate";
import Header from "../containers/main/Header";
import Search from "../containers/main/Search";
import Category from "../containers/main/Category";
import TrendingAuctions from "../containers/TrendingAuctions";
import RecentAuctions from "../containers/main/RecentAuctions";
import Footer from "../containers/main/Footer";

function Main() {
  return (
    <BasicTemplate>
      <Header />
      <Search />
      <Category />
      <TrendingAuctions />
      <RecentAuctions />
      <Footer />
    </BasicTemplate>
  );
}

export default Main;
