import React from "react";
import styles from "./Input.module.css";
const Input = ({
  type,
  id,
  height,
  width,
  onChange,
  isValid,
  onblurfunction,
  setIsValid,
}) => {
  function inputOnChangeHamdler(e) {
    onChange(e.target.value);
  }
  function passwordValidationHandler(e) {
    setIsValid(e.target.value.trim().length > 3);
  }
  function usernameValidationHandler(e) {
    setIsValid(e.target.value.trim().length > 6 && isNaN(e.target.value));
  }
  // { height: height, width: width, border: "1px solid red" }
  return (
    <div>
      <input
        onBlur={
          onblurfunction === "password"
            ? passwordValidationHandler
            : usernameValidationHandler
        }
        onChange={inputOnChangeHamdler}
        style={
          isValid === false
            ? { height: height, width: width, border: "1px solid red" }
            : { height: height, width: width }
        }
        className={styles.input}
        id={id}
        name={id}
        type={type}
      />
    </div>
  );
};

export default Input;
