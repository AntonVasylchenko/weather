import React from "react";
import style from "./City.module.css";
import { selectCity } from "../../ReduxToolkit/slice/data";
import { useSelector } from "react-redux";
import Flags from "../flags/Flags";

interface CitySelector {
  id: number;
  name: string;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
  coord: {
    lat: number;
    lon: number;
  };
}
const City: React.FC = () => {
  const city = useSelector(selectCity);
  if (!city.hasOwnProperty("name")) return <>123</>;
  let cityCorrect: CitySelector = {
    id: 0,
    name: "",
    country: "",
    population: 0,
    timezone: 0,
    sunrise: 0,
    sunset: 0,
    coord: {
      lat: 0,
      lon: 0,
    },
  };
  cityCorrect = { ...cityCorrect, ...city };

  return (
    <div className={style.info}>
      <p className={style.city}>
        <span>{cityCorrect.name}</span>
        <Flags name={cityCorrect.country} />
      </p>
      <p className={style.population}>
        <span>{cityCorrect.population}</span>:<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 4.5C8.10457 4.5 9 3.60457 9 2.5C9 1.39543 8.10457 0.5 7 0.5C5.89543 0.5 5 1.39543 5 2.5C5 3.60457 5.89543 4.5 7 4.5Z"
            stroke="#000001"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5 8C10.5 7.07174 10.1313 6.1815 9.47487 5.52513C8.8185 4.86875 7.92826 4.5 7 4.5C6.07174 4.5 5.1815 4.86875 4.52513 5.52513C3.86875 6.1815 3.5 7.07174 3.5 8V9.5H5L5.5 13.5H8.5L9 9.5H10.5V8Z"
            stroke="#000001"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg> 
      </p>
    </div>
  );
};

export default City;
