import { Col, Row, Spin } from "antd";
import Api from "Api";
import CountryDetail from "Components/CountryDetail/CountryDetail";
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

interface ParamTypes {
  countryName: string;
}

const Detail = () => {
  let { countryName } = useParams<ParamTypes>();
  let location = useLocation();

  const [country, setCountry] = useState<any>([]);

  useEffect(() => {
    const fetchCountry = async () => {
      let country;
      if (!location.pathname.includes("border")) {
        country = await Api.getCountryByName(countryName);
      } else {
        country = [await Api.getCountryByCode(countryName)];
      }
      setCountry(country);
    };
    try {
      fetchCountry();
    } catch (error) {
      alert(error);
    }
  }, [countryName]);

  return (
    <Row>
      <Col offset={2} xs={22} sm={22} md={20}>
        <>
          {country.length === 0 ? (
            <Spin
              size="large"
              style={{
                position: "absolute",
                margin: "50px auto 0 auto",
                left: 0,
                right: 0,
                textAlign: "center",
              }}
            />
          ) : (
            <CountryDetail country={country} />
          )}
        </>
      </Col>
    </Row>
  );
};

export default Detail;
