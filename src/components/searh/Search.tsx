import React from "react";
import style from "../searh/Search.module.css";
import { useDispatch ,useSelector} from "react-redux";
import { fetchData, selectStatus } from "../../ReduxToolkit/slice/data";
import { changeLastQuery, changeQuery } from "../../ReduxToolkit/slice/weather";


const Search = () => {
  const dispatch = useDispatch();
  const status  = useSelector(selectStatus);
  
  const [value, setValue] = React.useState("");
  const handlerValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const getData = () => {
    dispatch(
      //@ts-ignore
      fetchData(value)
    );
    dispatch(changeQuery(value));
    dispatch(changeLastQuery(value));
    setValue("")
  };
  return (
    <div className={style.wrapper}>
      <div className={style.wrapper_input}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_1236_20728)">
            <path
              d="M7 13.5C10.5899 13.5 13.5 10.5899 13.5 7C13.5 3.41015 10.5899 0.5 7 0.5C3.41015 0.5 0.5 3.41015 0.5 7C0.5 10.5899 3.41015 13.5 7 13.5Z"
              stroke="#000001"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 9.49995H2.75C3.21413 9.49995 3.65925 9.31557 3.98744 8.98738C4.31563 8.6592 4.5 8.21407 4.5 7.74995V6.24995C4.5 5.78582 4.68437 5.3407 5.01256 5.01251C5.34075 4.68432 5.78587 4.49995 6.25 4.49995C6.71413 4.49995 7.15925 4.31557 7.48744 3.98738C7.81563 3.65919 8 3.21408 8 2.74995V0.569946"
              stroke="#000001"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.5 6.9C12.9993 6.64021 12.4441 6.50311 11.88 6.5H9.75C9.28587 6.5 8.84075 6.68437 8.51256 7.01256C8.18437 7.34075 8 7.78587 8 8.25C8 8.71413 8.18437 9.15925 8.51256 9.48744C8.84075 9.81563 9.28587 10 9.75 10C10.0815 10 10.3995 10.1317 10.6339 10.3661C10.8683 10.6005 11 10.9185 11 11.25V12.12"
              stroke="#000001"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1236_20728">
              <rect width="14" height="14" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <input onChange={handlerValue} value={value} type="search" placeholder="Search..." />
      </div>
      <svg
        onClick={getData}
        className={value ? `${style.icon} ${style.icon_active}`   : style.icon }
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1236_3882)">
          <path
            d="M5.92 11.34C8.91338 11.34 11.34 8.91338 11.34 5.92C11.34 2.92662 8.91338 0.5 5.92 0.5C2.92662 0.5 0.5 2.92662 0.5 5.92C0.5 8.91338 2.92662 11.34 5.92 11.34Z"
            stroke="#000001"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M13.5 13.5L9.75 9.75" stroke="#000001" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1236_3882">
            <rect width="14" height="14" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Search;
