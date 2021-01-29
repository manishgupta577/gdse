import React from "react";
import arrow from "../assets/img/arrow.svg"
import btnBack from "../assets/img/btn-back.png"

const Button = (props) => {
    return <div className="g-btn">
        <img src={btnBack} alt="" />
        <p>{props.text}</p>
    </div>
};

export default Button;
