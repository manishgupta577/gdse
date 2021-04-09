import React from "react";

function BgText(props) {
  let len = props.text && props.text.length;
  let fz = len < 6 ? 25 : 38.3714 - 2.25714 * len;
  return (
    <div>
      <div className="bg-text-container">
        <h6 style={{ fontSize: `${fz}vw` }} className={`${props.color}`}>
          {props.text}
        </h6>
      </div>
    </div>
  );
}

export default BgText;
