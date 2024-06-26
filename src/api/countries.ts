import axios from "axios";
import { Country } from "../type/country";

export const getCountries = async (): Promise<Country[]> => {
  const response = await axios.get("https://restcountries.com/v3.1/all");
  return response.data;
};
