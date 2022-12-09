import React from "react";
import "./Button.css";
const Button = (props) => {
  return (
    <div>
      <button
        disabled={props.className == "disablebtn" ? true : false}
        className={props.className}
        style={{ width: props.width }}
        type={props.type}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
