import React from "react";
import RegisterForm from "../Registerform/RegisterForm";
import Styles from "./Register.module.css";
const Register = () => {
  return (
    <div className={Styles.Register}>
      <RegisterForm />
    </div>
  );
};

export default Register;
