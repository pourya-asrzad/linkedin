import React from "react";

const ItemFotmInputLabel = (props) => {
  return (
    <div>
      <label htmlFor={props.name}>{props.children}</label>
      <br />
      <input
        className="itemforminput"
        type="text"
        id={props.name}
        name={props.name}
      />
    </div>
  );
};

export default ItemFotmInputLabel;
