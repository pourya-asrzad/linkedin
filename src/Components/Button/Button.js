import React from "react";
import "./Button.css";
const Button = (props) => {
  return (
    <div>
      <button
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
