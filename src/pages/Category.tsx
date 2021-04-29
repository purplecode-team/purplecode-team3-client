import React from "react";
import BasicTemplate from "../components/common/BasicTemplate";
import Header from "../components/main/Header";
import CategoryItems from "../components/category/Items";

function Category( {match} : any ) {
  return (
    <BasicTemplate>
      <Header />
      <CategoryItems match={match} />
    </BasicTemplate>
  );
}

export default Category;