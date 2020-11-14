import { Button, Col, Row, Space, Typography } from "antd";
import CustomTitle from "Components/CustomTitle/CustomTitle";
import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "Routes/routes";

const { Text, Paragraph } = Typography;

interface Currencie {
  code: string;
  name: string;
  symbol: string;
}

interface Language {
  name: string;
}

interface Country {
  flag: string;
  population: string;
  region: string;
  capital: string;
  name: string;
  nativeName: string;
  subregion: string;
  topLevelDomain: string;
  currencies: Currencie[];
  languages: Language[];
  borders: string[];
}

interface CountryDetailProps {
  country: Country[];
}

const CountryDetail = ({ country }: CountryDetailProps) => {
  // Since I would have to do more work in the typing of axios response interceptor I'm getting an array here.
  const [countryItem] = country;
  return (
    <Row style={{ marginTop: 100, height: "100%" }}>
      <Col offset={2} xs={22} sm={22} md={10}>
        <img src={countryItem.flag} style={{ width: "100%" }} alt="country flag" />
      </Col>
      <Col offset={2} xs={22} sm={22} md={10}>
        <Space>
          <Row>
            <Col offset={2} xs={22} sm={22} md={20}>
              <CustomTitle level={2}>{countryItem.name}</CustomTitle>
            </Col>
            <Col offset={2} xs={22} sm={22} md={10}>
              <Space direction="vertical">
                <Paragraph>
                  <Text strong>Population: </Text>
                  <>{countryItem.population}</>
                </Paragraph>
                <Paragraph>
                  <Text strong>Region: </Text>
                  <>{countryItem.region}</>
                </Paragraph>
                <Paragraph>
                  <Text strong>Sub Region: </Text>
                  <>{countryItem.subregion}</>
                </Paragraph>
                <Paragraph>
                  <Text strong>Capital: </Text>
                  <>{countryItem.capital}</>
                </Paragraph>
              </Space>
            </Col>
            <Col offset={2} xs={22} sm={22} md={10}>
              <Space direction="vertical">
                <Paragraph>
                  <Text strong>Top Level Domain: </Text>
                  <> {countryItem.topLevelDomain}</>
                </Paragraph>
                <Paragraph>
                  <Text strong>Currencies: </Text>
                  <>{countryItem.currencies.map((currencie) => currencie.name)}</>
                </Paragraph>
                <Paragraph>
                  <Text strong>languages: </Text>
                  <>{countryItem.languages.map((language) => `${language.name} `)}</>
                </Paragraph>
              </Space>
            </Col>
            <Col offset={2} xs={20} sm={20} md={24}>
              <Row justify="center">
                {countryItem.borders.map((border) => (
                  <Col xs={10} sm={10} md={5}>
                    <Link to={`${ROUTES.BORDER}/${border}`} style={{ width: "100%" }}>
                      <Button>{border}</Button>
                    </Link>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Space>
      </Col>
    </Row>
  );
};

export default CountryDetail;
