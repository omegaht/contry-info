import { Input } from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";

const { Search } = Input;

const suffix = (
  <SearchOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

interface SearchBoxProps {
  onSearch: (text: string) => void;
}

export const SearchBox = ({ onSearch }: SearchBoxProps) => {
  return (
    <Search
      placeholder="Search for a country..."
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
    />
  );
};

export default SearchBox;
