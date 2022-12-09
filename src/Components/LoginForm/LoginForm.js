import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Styles from "./LoginForm.module.css";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import userData from "../../user-data/data";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
const LoginForm = ({}) => {
  const [userName, setuserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [isValid, setIsValid] = useState(false);
  function loginSubmiHamdler(e) {
    e.preventDefault();
    userData.forEach((element) => {
      if (userName === element.userName && password === element.Password) {
        localStorage.usename = JSON.stringify(element.userName);
        localStorage.location = "Profile";
        setIsValid(true);
      }
    });
  }
  function usenameonChange(userNamevalue) {
    setuserName(userNamevalue);
  }
  function passwordonChange(passwordValue) {
    setPassword(passwordValue);
  }
  return (
    <div className={Styles.loginform}>
      <ProfileIcon height="60" className="ProfileIcon" />
      <form onSubmit={loginSubmiHamdler}>
        <div className={Styles.inputkabelcontainer}>
          <label htmlFor="name">
            Username <span className="point"> *</span>
          </label>
          <Input onChange={usenameonChange} type="text" id="name"></Input>
        </div>
        <div className={Styles.inputkabelcontainer}>
          <label htmlFor="password">
            Password<span className="point"> *</span>
          </label>
          <Input
            onChange={passwordonChange}
            type="password"
            id="password"
          ></Input>
        </div>
        <div className={Styles.buttonContainer}>
          {localStorage.location == "Profile" ? (
            <Link to="/Profile">
              <Button isvalid={isValid} className="signinbtn" type="submit">
                Sign in
              </Button>
            </Link>
          ) : (
            <Button isvalid={isValid} className="signinbtn" type="submit">
              Sign in
            </Button>
          )}

          <Link to="/Register">
            <Button className="signupbtn">Sign up</Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
