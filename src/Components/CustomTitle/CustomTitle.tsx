import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

interface CustomTitleProps {
  level?: 1 | 2 | 3 | 4 | 5;
  children: React.ReactNode;
}

const CustomTitle = ({ children, level = 1 }: CustomTitleProps) => {
  return <Title level={level}>{children}</Title>;
};

export default CustomTitle;
