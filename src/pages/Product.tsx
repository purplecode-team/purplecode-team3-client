import React from "react";
import BasicTemplate from "../components/common/BasicTemplate";
import Header from "../components/main/Header";
import DetailProduct from "../components/product/DetailProduct";


function Product( {match} : any ) {
  return (
    <BasicTemplate>
      <Header />
      <DetailProduct match={match} />
    </BasicTemplate>
  );
}

export default Product;