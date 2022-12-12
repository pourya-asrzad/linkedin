import React from "react";

const ItemFotmInputLabel = (props) => {
  function ItemInputsValueGetter(e) {
    props.ongetvalue(e.target.value);
  }
  return (
    <div>
      <label htmlFor={props.name}>{props.children}</label>
      <br />
      <input
        onChange={ItemInputsValueGetter}
        className="itemforminput"
        type="text"
        id={props.name}
        name={props.name}
      />
    </div>
  );
};

export default ItemFotmInputLabel;
