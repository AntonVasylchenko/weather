import React from "react";
import style from "./list.module.css";
import { useSelector } from "react-redux";
import { selectList, elementList } from "../../ReduxToolkit/slice/data";
import ListItem from "./ListItem";



const List: React.FC = () => {
  const lists = useSelector(selectList);
  const [active, setActive] = React.useState("today");

  const handlerActive = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    const value = target.dataset.time;
    if (value) {
      setActive((prev) => value);
    }
  };

  if (lists.length === 0) {
    return <></>;
  }
  const today = new Date().getDate();
  const tomorrow = new Date().getDate() + 1;
  const todayList = lists.filter((elem: elementList) => today === new Date(elem.dt_txt).getDate());
  const tomorrowList = lists.filter((elem: elementList) => tomorrow === new Date(elem.dt_txt).getDate());
  let activeList;
  switch (active) {
    case "today":
      activeList = [...todayList];
      break;
    case "tommorow":
      activeList = [...tomorrowList];
      break;
    default:
      break;
  }

  return (
    <div className={style.wrapper}>
      <div className={style.tabs}>
        <button
          className={active === "today" ? `${style.tab} ${style.active}` : `${style.tab}`}
          data-time="today"
          onClick={handlerActive}
        >
          Today
        </button>
        <button
          className={active === "tommorow" ? `${style.tab} ${style.active}` : `${style.tab}`}
          data-time="tommorow"
          onClick={handlerActive}
        >
          Tommorow
        </button>
      </div>
      <div className={style.content}>
        {activeList?.map((el) => {
          return <ListItem key={el.dt_txt} {...el} />;
        })}
      </div>
    </div>
  );
};

export default List;
