import React from "react";

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, 
        display: "block", 
        borderRadius: "50%",
      height:"22px" }}
      onClick={onClick}
    ></div>
  );
};

export default PrevArrow;
