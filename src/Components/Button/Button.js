import React from "react";
import "./Button.css";
const Button = (props) => {
  function handelchangetoSignupPage() {
    props.handelpagechange();
  }
  return (
    <div>
      <button
        onClick={handelchangetoSignupPage}
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
