import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Styles from "./RegisterForm.module.css";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
const RegisterForm = () => {
  return (
    <div className={Styles.loginform}>
      <ProfileIcon />
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
          <Button className="signupbtn" type="submit">
            Sign ip
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
