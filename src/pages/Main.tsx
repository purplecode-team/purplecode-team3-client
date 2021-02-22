import React from "react";
import BasicTemplate from "../containers/common/BasicTemplate";
import Header from "../containers/main/Header";
import Search from "../containers/main/Search";
import Category from "../containers/main/Category";
import TrendingActions from "../containers/TrendingActions";
import RecentActions from "../containers/main/RecentActions";
import Footer from "../containers/main/Footer";

function Main() {
  return (
    <BasicTemplate>
      <Header />
      <Search />
      <Category />
      <TrendingActions />
      <RecentActions />
      <Footer />
    </BasicTemplate>
  );
}

export default Main;
