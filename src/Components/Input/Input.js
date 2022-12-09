import React from "react";
import styles from "./Input.module.css";
const Input = ({ type, id, height, width, onChange }) => {
  function inputOnChangeHamdler(e) {
    onChange(e.target.value);
  }
  return (
    <div>
      <input
        onChange={inputOnChangeHamdler}
        style={{ height: height, width: width }}
        className={styles.input}
        id={id}
        name={id}
        type={type}
      />
    </div>
  );
};

export default Input;
