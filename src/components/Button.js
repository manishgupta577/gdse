import React from "react";

const Button = (props) => {
  if (props.type === "solid") {
    return (
      <div className={`g-btn ${props.isDark ? "dark" : ""} ${props.className}`}>
        {props.text}
      </div>
    );
  } else if (props.type === "border") {
    return (
      <div
        className={`g-btn border-btn ${props.border}-border ${
          props.isDark ? "dark" : ""
        } ${props.className}`}
      >
        {props.text}
      </div>
    );
  } else if (props.type === "hex") {
    return (
      <div className={`g-btn ${props.isDark ? "dark" : ""} ${props.className}`}>
        {props.text}
      </div>
    );
  }
};

Button.defaultProps = {
  type: "solid",
  className: "",
  isDark: false,
  border: "white",
};

export default Button;
