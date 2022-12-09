import React, { useState, useEffect } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Styles from "./LoginForm.module.css";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import userData from "../../user-data/data";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  json,
} from "react-router-dom";
const LoginForm = ({}) => {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [btnDisable, setbtnDisable] = useState(false);
  const [passwordIsvalid, setpasswordIsvalid] = useState("");
  const [usernameIsvalid, setusernameIsvalid] = useState("");
  const [novaliduser, setnovaliduser] = useState(" ");
  localStorage.userData = JSON.stringify(userData);
  const data = localStorage.userData
    ? JSON.parse(localStorage.userData)
    : [...userData];
  function loginSubmiHamdler(e) {
    e.preventDefault();

    data.forEach((element) => {
      if (userName === element.userName && password === element.Password) {
        localStorage.usename = JSON.stringify(element.userName);
        localStorage.location = "Profile";
        setIsValid(true);
      } else {
        localStorage.location == "Profile"
          ? setnovaliduser(true)
          : setnovaliduser(false);
      }
    });
  }
  useEffect(() => {
    const signinValidation = setTimeout(() => {
      if (userName.length > 6 && password.length > 3) {
        setbtnDisable(true);
      } else {
        setbtnDisable(false);
      }
    }, 600);
    return () => {
      clearTimeout(signinValidation);
    };
  }, [password, userName]);
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
          <Input
            isValid={usernameIsvalid}
            onChange={usenameonChange}
            setIsValid={setusernameIsvalid}
            type="text"
            id="name"
          ></Input>
          {usernameIsvalid === false ? (
            <span className="validationmassega">userName required</span>
          ) : (
            ""
          )}
        </div>
        <div className={Styles.inputkabelcontainer}>
          <label htmlFor="password">
            Password<span className="point"> *</span>
          </label>
          <Input
            isValid={passwordIsvalid}
            onblurfunction={"password"}
            setIsValid={setpasswordIsvalid}
            onChange={passwordonChange}
            type="password"
            id="password"
          ></Input>
          {passwordIsvalid === false ? (
            <span className="validationmassega">password required</span>
          ) : (
            ""
          )}
        </div>
        <div className={Styles.buttonContainer}>
          {localStorage.location == "Profile" ? (
            <Link to="/Profile">
              <Button isvalid={isValid} className={"signinbtn"} type="submit">
                Sign in
              </Button>
            </Link>
          ) : (
            <Button
              isvalid={isValid}
              className={!btnDisable ? "disablebtn" : "signinbtn"}
              type="submit"
            >
              Sign in
            </Button>
          )}

          <Link to="/Register">
            <Button className="signupbtn">Sign up</Button>
          </Link>
        </div>
      </form>
      {novaliduser === false && (
        <div className="signfirst">
          <span className="validationmassega"> You should Sign up First</span>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
