import React from "react";
import FilterItem from "./filterItem";
import "./filters.css";

// eccepting props(from delivery.js) and applying map method to iterate. 
const Filters = ({ filterList }) => {
  return (
    <div className="filters">
      {
      filterList &&
        filterList.map((filter) => {
          // passing props to fileritems
          return <FilterItem filter={filter} key={filter.id} />;
        })}
    </div>
  );
};

export default Filters;
