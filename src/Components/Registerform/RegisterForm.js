import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Styles from "./RegisterForm.module.css";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
const RegisterForm = ({ changetoSigninPage }) => {
  function registerFormHandler(e) {
    e.preventDefault();
  }
  return (
    <div className={Styles.loginform}>
      <ProfileIcon height="60" className="ProfileIcon" />
      <form onSubmit={registerFormHandler}>
        <div className={Styles.inputkabelcontainer}>
          <label htmlFor="name">
            Username <span className="point"> *</span>
          </label>
          <Input type="text" id="name"></Input>
        </div>
        <div className={Styles.inputkabelcontainer}>
          <label htmlFor="password">
            Password<span className="point"> *</span>
          </label>
          <Input type="password" id="password"></Input>
        </div>
        <div className={Styles.inputkabelcontainer}>
          <label htmlFor="password">
            Confrim Password<span className="point"> *</span>
          </label>
          <Input type="password" id="password"></Input>
        </div>
        <div className={Styles.buttonContainer}>
          <Button className="signinbtn" type="submit">
            Submit
          </Button>
          <Link to="/">
            <Button
              className="signupbtn"
              type="submit"
              handelpagechange={changetoSigninPage}
            >
              Sign in
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
