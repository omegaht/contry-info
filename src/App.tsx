import "antd/dist/antd.css";

import { Layout } from "antd";
import CustomTitle from "Components/CustomTitle/CustomTitle";
import React from "react";

import Routes from "./Routes";

const { Header, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Header>
        <CustomTitle>Where in the world ?</CustomTitle>
      </Header>
      <Content>
        <Routes />
      </Content>
    </Layout>
  );
};

export default App;
