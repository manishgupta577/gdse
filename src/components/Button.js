import React from "react";

const Button = (props) => {
  return (
    <div className={`g-btn ${props.isDark ? "dark" : ""}`}>{props.text}</div>
  );
};

export default Button;
