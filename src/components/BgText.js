import React from "react";

function BgText(props) {
    return <div>
        <div className="bg-text-container">
            <h6 className={`${props.color}`}>{props.text}</h6>
        </div>
    </div >;
}

export default BgText;
