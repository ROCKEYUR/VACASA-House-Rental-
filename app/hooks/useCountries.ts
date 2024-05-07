// import { City, Country } from 'country-state-city';

// // Function to fetch cities of a country
// const fetchCities = (countryCode: string) => {
//   return City.getCitiesOfCountry(countryCode);
// };

// const useCities = () => {
//   const getAll = () => formattedCountries; 
//   // Function to get cities of a specific country
//   const getCitiesByCountry = (countryCode: string) => {
//     return fetchCities(countryCode);
//   };

//   return {
//     getAll,
//     getCitiesByCountry,
//   };
// };

// export default useCities;


import countries from './world-countries.json';

const formattedCountries = countries.map((country) => ({
  value: country.cca2,
  label: country.name,
  flag: country.flag,
  latlng: country.latlng,
  region: country.region,
}));

const useCountries = () => {
  const getAll = () => formattedCountries;
  const getByValue = (value: string) => {
    return formattedCountries.find((item: { value: string; }) => item.value === value);
  };

  return {
    getAll,
    getByValue,
  };
};

export default useCountries;
