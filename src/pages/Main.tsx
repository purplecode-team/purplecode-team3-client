import React from "react";
import BasicTemplate from "../components/common/BasicTemplate";
import Header from "../components/main/Header";
import Search from "../components/main/Search";
import Category from "../components/main/Category";
import TrendingAuctions from "../components/main/TrendingAuctions";
import RecentAuctions from "../components/main/RecentAuctions";
import Footer from "../components/main/Footer";
import AddButton from "../components/main/AddButton";

function Main() {
  return (
    <BasicTemplate>
      <Header />
      <AddButton />
      <Search />
      <Category />
      <TrendingAuctions />
      <RecentAuctions />
      <Footer />
    </BasicTemplate>
  );
}

export default Main;
