import React from "react";
import { Card, Space, Typography } from "antd";

const { Text, Paragraph, Title } = Typography;

interface CountryItemProps {
  image: string;
  population: string;
  region: string;
  capital: string;
  name: string;
  onClick: (country: string) => void;
}

const CountryItem = ({ image, population, region, capital, name, onClick }: CountryItemProps) => {
  return (
    <div>
      <Card
        bordered={true}
        style={{ width: 300 }}
        cover={<img alt="example" src={image} />}
        onClick={() => onClick(name)}
      >
        <Title>{name}</Title>

        <Space direction="vertical">
          <Paragraph>
            <Text strong>Population:</Text>
            {population}
          </Paragraph>
          <Paragraph>
            <Text strong>Region:</Text>
            {region}
          </Paragraph>
          <Paragraph>
            <Text strong>Capital:</Text>
            {capital}
          </Paragraph>
        </Space>
      </Card>
    </div>
  );
};

export default CountryItem;
