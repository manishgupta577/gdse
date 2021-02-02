import React from "react";
import btnBack from "../assets/img/btn-back.png"

const Button = (props) => {
    // return (
    //     <div className="g-btn-container">
    //         <div className="g-btn" >
    //             <img src={btnBack} alt="Arrow" />
    //             <p>{props.text}</p>
    //         </div>
    //     </div>);

    return (
        <div className={`g-btn ${props.isDark ? "dark" : ""}`}>
            {props.text}
        </div>
    )
};

export default Button;
