import { Col, Row, Spin } from "antd";
import Api from "Api";
import CountryDetail from "Components/CountryDetail/CountryDetail";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface ParamTypes {
  countryName: string;
}

const Detail = () => {
  let { countryName } = useParams<ParamTypes>();

  const [country, setCountry] = useState<any>([]);

  useEffect(() => {
    const fetchCountryByName = async () => {
      const country = await Api.getCountryByName(countryName);
      setCountry(country);
    };
    try {
      fetchCountryByName();
    } catch (error) {
      alert(error);
    }
  }, [countryName]);

  return (
    <Row>
      <Col offset={2} xs={22} sm={22} md={20}>
        <>{country.length === 0 ? <Spin size="large" /> : <CountryDetail country={country} />}</>
      </Col>
    </Row>
  );
};

export default Detail;
