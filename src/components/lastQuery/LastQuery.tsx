import React from "react";
import style from "./lastQuery.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeQuery, removeLastQuery, selectWeather } from "../../ReduxToolkit/slice/weather";
import { fetchData } from "../../ReduxToolkit/slice/data";

const LastQuery: React.FC = () => {
  const dispatch = useDispatch();
  
  const handlerCurrent = (event: React.MouseEvent<HTMLParagraphElement>) => {
    const target = event.target as HTMLParagraphElement;
    if (target.dataset.query) {
      dispatch(changeQuery(target.dataset.query));
      dispatch(
        //@ts-ignore
        fetchData(target.dataset.query)
      );
    }
  };
  const removeQuery = (event: React.MouseEvent<HTMLSpanElement>) => {
    const target = event.target as HTMLSpanElement;
    const query = target.closest("p")?.dataset.query;
    if (query) {
      dispatch(removeLastQuery(query));
    }
  };

  const { lastQuery } = useSelector(selectWeather);
  if (lastQuery.length === 0) return <></>;

  return (
    <div className={style.list}>
      {lastQuery.map((el) => {
        return (
          <p data-query={el} onClick={handlerCurrent} className={`${style.item} ${style.animate__shakeY}`} key={el}>
            <span onClick={removeQuery} className={style.close}>
              x
            </span>
            {el}
          </p>
        );
      })}
    </div>
  );
};

export default LastQuery;
