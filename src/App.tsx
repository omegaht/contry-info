import "antd/dist/antd.css";

import { Layout } from "antd";
import CustomTitle from "Components/CustomTitle/CustomTitle";
import React from "react";

import Routes from "./Routes";

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout>
      <Header style={{ backgroundColor: "white" }}>
        <CustomTitle level={2}>Where in the world ?</CustomTitle>
      </Header>
      <Content style={{ height: "100vh" }}>
        <Routes />
      </Content>
      <Footer>Made by omegaht</Footer>
    </Layout>
  );
};

export default App;
