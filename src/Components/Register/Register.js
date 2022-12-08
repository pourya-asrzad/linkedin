import React from "react";
import RegisterForm from "../Registerform/RegisterForm";
import Styles from "./Register.module.css";
const Register = ({ changetoSigninPage }) => {
  return (
    <div className={Styles.Register}>
      <RegisterForm changetoSigninPage={changetoSigninPage} />
    </div>
  );
};

export default Register;
