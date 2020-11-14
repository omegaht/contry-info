import { Col, Row } from "antd";
import Api from "Api";
import CountryList from "Components/CountryList/CountryList";
import RegionDropdown, { MenuInfo } from "Components/RegionDropdown/RegionDropdown";
import SearchBox from "Components/SearchBox/SearchBox";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as ROUTES from "Routes/routes";

const Main = () => {
  const [countries, setCountries] = useState<any>([]);

  const fetchAndSetCountries = useCallback(async () => {
    const countries = await Api.getAllCountries();
    setCountries(countries);
  }, []);

  useEffect(() => {
    try {
      fetchAndSetCountries();
    } catch (error) {
      alert(error);
    }
  }, [fetchAndSetCountries]);

  const handleDropdownClick = (event: MenuInfo) => {
    const fetchAndSetCountriesByRegion = async () => {
      const countries = await Api.getCountriesByRegion(event.key as string);
      setCountries(countries);
    };
    try {
      if (event.key === "all") {
        fetchAndSetCountries();
      } else {
        fetchAndSetCountriesByRegion();
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleSearchCountry = (text: string) => {
    const fetchCountryByName = async () => {
      const countries = await Api.getCountryByName(text);
      setCountries(countries);
    };
    try {
      fetchCountryByName();
    } catch (error) {
      alert(error);
    }
  };

  const history = useHistory();

  const handleCountryClick = (country: string) => {
    history.push(`${ROUTES.DETAIL}/${country}`);
  };

  return (
    <Row>
      <Col offset={2} xs={22} sm={22} md={22}>
        <Row style={{ margin: "30px 0 40px 0" }} justify="space-between">
          <Col xs={24} sm={24} md={7}>
            <SearchBox onSearch={handleSearchCountry} />
          </Col>
          <Col xs={24} sm={24} md={4}>
            <RegionDropdown onClick={handleDropdownClick} />
          </Col>
        </Row>
      </Col>
      <Col offset={2} xs={22} sm={22} md={20}>
        {countries.length !== 0 && (
          <CountryList countries={countries} onCountryClick={handleCountryClick} />
        )}
      </Col>
    </Row>
  );
};

export default Main;
