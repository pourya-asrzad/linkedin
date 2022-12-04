import React from "react";
import styles from "./Input.module.css";
const Input = ({ type, id }) => {
  return (
    <div>
      <input className={styles.input} id={id} name={id} type={type} />
    </div>
  );
};

export default Input;
