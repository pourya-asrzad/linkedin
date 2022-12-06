import React from "react";
import styles from "./Input.module.css";
const Input = ({ type, id, height, width }) => {
  return (
    <div>
      <input
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
