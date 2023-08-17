import React from "react";
import style from "./list.module.css";
import { elementList } from "../../ReduxToolkit/slice/data";

const ListItem: React.FC<elementList> = (props) => {
  const time = new Date(props.dt_txt).toLocaleTimeString("en", { hour: "2-digit", minute: "2-digit", hour12: false });
  const temp = Math.ceil(props.main.temp);
  const description = props.weather[0].description;

  const getFahrenheit = (celsius: number): string => {
    return ((celsius * 1.8) + 32).toFixed(0) + " °F"
  };

  return (
    <div className={style.item}>
      <span className={style.time}>{time}</span>
      <br />
      <span className={style.temp}>{temp} °C</span>
      <br />
      <span className={style.temp}>{getFahrenheit(temp)} </span>
      <br />
      <span className={style.description}>{description}</span>
    </div>
  );
};

export default ListItem;
