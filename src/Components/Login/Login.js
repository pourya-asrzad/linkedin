import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import Styles from "./Login.module.css";
const Login = ({ changetoSignupPage, changetoHomePage }) => {
  return (
    <div className={Styles.Login}>
      <LoginForm
        changetoSignupPage={changetoSignupPage}
        changetoHomePage={changetoHomePage}
      />
    </div>
  );
};

export default Login;
