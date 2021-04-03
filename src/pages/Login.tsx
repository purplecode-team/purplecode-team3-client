import React from "react";
import BasicTemplate from "../components/common/BasicTemplate";
import Header from "../components/main/Header";
import LoginPage from "../components/login";

function Login() {
  return (
    <BasicTemplate>
      <Header />
      <LoginPage />
    </BasicTemplate>
  );
}

export default Login;
