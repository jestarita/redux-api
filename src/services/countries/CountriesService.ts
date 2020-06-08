import http from "./http";

const getCountries = () => {
  return http.get("/all");
};

const getCountries_Contient = (continent:string) => {
  return http.get("/region/"+continent);
};

const getCountry_detail = (capital:string) => {
  return http.get("/capital/"+capital);
};

export default {getCountries, getCountries_Contient, getCountry_detail}