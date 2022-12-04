import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import Styles from "./Login.module.css";
const Login = () => {
  return (
    <div className={Styles.Login}>
      <LoginForm />
    </div>
  );
};

export default Login;
