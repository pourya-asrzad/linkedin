import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Styles from "./RegisterForm.module.css";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
const RegisterForm = ({ changetoSigninPage }) => {
  const [passwordIsvalid, setpasswordIsvalid] = useState("");
  const [usernameIsvalid, setusernameIsvalid] = useState("");
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [cnfpassword, setcnfPassword] = useState("");
  const [confrimIsvalid, setconfrimIsvalid] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [btnDisable, setbtnDisable] = useState(false);
  const data = localStorage.userData;
  // console.log(data);
  useEffect(() => {
    const signinValidation = setTimeout(() => {
      if (
        userName.length > 6 &&
        password.trim().length > 3 &&
        cnfpassword.trim().length > 3 &&
        password === cnfpassword
      ) {
        setconfrimIsvalid(true);
        setbtnDisable(true);
      } else if (password !== cnfpassword) {
        setbtnDisable(false);
      }
      if (password !== cnfpassword) {
        setconfrimIsvalid(false);
      }
    }, 500);
    return () => {
      clearTimeout(signinValidation);
    };
  }, [password, userName, cnfpassword]);
  function registerFormHandler(e) {
    e.preventDefault();
    console.log("Sorm submited !");
  }
  function usenameonChange(userNamevalue) {
    setuserName(userNamevalue);
  }
  function passwordonChange(passwordValue) {
    setPassword(passwordValue);
  }
  function passwordonChangeConfrim(cnfpassword) {
    setcnfPassword(cnfpassword);
  }

  return (
    <div className={Styles.loginform}>
      <ProfileIcon height="60" className="ProfileIcon" />
      <form onSubmit={registerFormHandler}>
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
        <div className={Styles.inputkabelcontainer}>
          <label htmlFor="password">
            Confrim Password<span className="point"> *</span>
          </label>
          <Input
            // confrimedpassword={}
            isValid={passwordIsvalid}
            onblurfunction={"password"}
            setIsValid={setpasswordIsvalid}
            onChange={passwordonChangeConfrim}
            type="password"
            id="password"
          ></Input>
          {confrimIsvalid === false ? (
            <span className="validationmassega">password required</span>
          ) : (
            ""
          )}
        </div>
        <div className={Styles.buttonContainer}>
          {localStorage.location == "Profile" ? (
            <Link to="/Profile">
              <Button isvalid={isValid} className={"signinbtn"} type="submit">
                submit
              </Button>
            </Link>
          ) : (
            <Button
              isvalid={isValid}
              className={!btnDisable ? "disablebtn" : "signinbtn"}
              type="submit"
            >
              submit
            </Button>
          )}
          <Link to="/">
            <Button className="signupbtn" handelpagechange={changetoSigninPage}>
              Sign in
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
