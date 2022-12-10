import React from "react";
import styles from "../Input/Input.module.css";
const ProfileInput = ({
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

  return (
    <div>
      <input
        // onBlur={}
        onBlur={onChange ? inputOnChangeHamdler : null}
        onChange={onblurfunction}
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

export default ProfileInput;
