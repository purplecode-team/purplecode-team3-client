import React from "react";
import BasicTemplate from "../components/common/BasicTemplate";
import Header from "../components/main/Header";
import UploadProductForm from "../components/product/UploadProduct";

function UploadProduct() {
  return (
    <BasicTemplate>
      <Header />
      <UploadProductForm />
    </BasicTemplate>
  );
}

export default UploadProduct;
