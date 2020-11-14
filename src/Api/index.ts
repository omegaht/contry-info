import axios from "axios";

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: "https://restcountries.eu/rest/v2/",
    });

    this.api.interceptors.response.use((response) => response.data);
  }

  private api;

  getAllCountries = () => this.api.get("all");

  getCountriesByRegion = (region: string) => this.api.get(`region/${region}`);

  getCountryByName = (countryName: string) => this.api.get(`name/${countryName}`);

  getCountryByCode = (countryCode: string) => this.api.get(`alpha/${countryCode}`);
}

export default new Api();
