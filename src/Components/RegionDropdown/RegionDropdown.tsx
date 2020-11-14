import React from "react";
import { Button, Dropdown, Menu, Typography } from "antd";

const { Text } = Typography;

export interface MenuInfo {
  key: React.Key;
  keyPath: React.Key[];
  item: React.ReactInstance;
  domEvent: React.MouseEvent<HTMLElement>;
}

interface RegionDropdownProps {
  onClick: (event: MenuInfo) => void;
}

const RegionDropdown = ({ onClick }: RegionDropdownProps) => {
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="africa">Africa</Menu.Item>
      <Menu.Item key="americas">America</Menu.Item>
      <Menu.Item key="asia">Asia</Menu.Item>
      <Menu.Item key="europe">Europe</Menu.Item>
      <Menu.Item key="oceania">Oceania</Menu.Item>
      <Menu.Item key="all">All</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottomRight">
      <Button>
        <Text>Filter by Region</Text>
      </Button>
    </Dropdown>
  );
};

export default RegionDropdown;
