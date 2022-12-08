import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import Styles from "./Login.module.css";
const Login = ({ changetoSignupPage }) => {
  return (
    <div className={Styles.Login}>
      <LoginForm changetoSignupPage={changetoSignupPage} />
    </div>
  );
};

export default Login;
