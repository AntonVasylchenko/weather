import React from "react";
import "./index.css";
import { LastQuery, Search, City, List } from "./components";
import { useSelector } from "react-redux";
import { selectStatus } from "./ReduxToolkit/slice/data";

const App = () => {
  const status  = useSelector(selectStatus);

  return (
    <div className="wrapper">
      <div className="content">
        <Search />
        <LastQuery />
        <div className="content-city">
          {
            status !== "error" 
            ?           
            <><City />
            <List />
            </>
            : <h2>You did not enter the correct city name</h2>
          }

        </div>
      </div>
    </div>
  );
};

export default App;
