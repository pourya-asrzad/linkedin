import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Styles from "./LoginForm.module.css";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
const LoginForm = () => {
  return (
    <div className={Styles.loginform}>
      <ProfileIcon height="60" className="ProfileIcon" />
      <form>
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
        <div className={Styles.buttonContainer}>
          <Button className="signinbtn" type="submit">
            Sign in
          </Button>
          <Button className="signupbtn" type="submit">
            Sign up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
