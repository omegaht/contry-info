import axios from "axios";

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: "https://restcountries.eu/rest/v2/",
    });

    this.api.interceptors.response.use((response) => response.data);
  }

  private api;

  getAllCountrys = () => this.api.get("all");
}

export default new Api();
