import CountryItem from "Components/CountryItem/CountryItem";
import { chunkArray } from "Helpers";
import React from "react";
import { FixedSizeGrid as Grid } from "react-window";
import "./styles.css";

interface CountryListProps {
  countries: any[];
  onCountryClick: (country: string) => void;
}

export const CountryList = ({ countries, onCountryClick }: CountryListProps) => {
  const slicedArray = chunkArray(countries);

  const countryRows = ({ columnIndex, rowIndex, style }: any) => {
    return (
      <div style={style}>
        <CountryItem
          onClick={onCountryClick}
          name={slicedArray[rowIndex][columnIndex].name}
          capital={slicedArray[rowIndex][columnIndex].capital}
          population={slicedArray[rowIndex][columnIndex].population}
          region={slicedArray[rowIndex][columnIndex].region}
          image={slicedArray[rowIndex][columnIndex].flag}
        />
      </div>
    );
  };
  return (
    <Grid
      height={600}
      rowCount={countries.length / 4}
      width={1280}
      columnWidth={320}
      rowHeight={600}
      columnCount={countries.length > 4 ? 4 : 1}
    >
      {countryRows}
    </Grid>
  );
};

export default CountryList;
