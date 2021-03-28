import React from "react";
import BasicTemplate from "../components/common/BasicTemplate";
import CategoryHeader  from "../components/category/Header/index";
import Header from "../components/main/Header";
import CategoryItems from "../components/category/Items";

function Category( {match} : any ) {
  return (
    <BasicTemplate>
      <Header />
      <CategoryHeader match={match}/>
      <CategoryItems />
    </BasicTemplate>
  );
}

export default Category;