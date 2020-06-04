import http from "./http";

const getCountries = () => {
  return http.get("/all");
};

const getCountries_Contient = (continent:string) => {
  return http.get("/region/"+continent);
};

const getCountry_detail = (country:string) => {
  return http.get("/name/"+country);
};

export default {getCountries, getCountries_Contient, getCountry_detail}