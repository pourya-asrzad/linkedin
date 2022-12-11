import React, { useReducer, useEffect, useState, useCallback } from "react";
import MainsHeader from "../MainsHeader/MainsHeader";
import ProfileAdder from "../ProfileAdder/ProfileAdder";
import MultipleSelectChip from "../SelectSkill/SelectSkill";
import Input from "../Input/Input";
import Button from "../Button/Button";
import ProfileInput from "../profile-input/ProfileInput";
import { green } from "@mui/material/colors";
function firstNamereducer(state, action) {
  return {
    isValid: action.isValid,
    firstName: action.firstName,
  };
}
function lastNamereducer(state, action) {
  return {
    isValid: action.isValid,
    lastName: action.lastName,
  };
}
function phoneNumberreducer(state, action) {
  return {
    isValid: action.isValid,
    PhoneNumber: action.PhoneNumber,
  };
}
function nationalCodereducer(state, action) {
  return {
    isValid: action.isValid,
    nationalCode: action.nationalCode,
  };
}

const MainProfile = () => {
  const [skill, setSkill] = useState(null);
  const [btnDisable, setbtnDisable] = useState(false);
  const [firstName, dipatchFirstName] = useReducer(firstNamereducer, {
    isValid: "",
    firstName: "",
  });
  const [lastName, dipatchLastName] = useReducer(lastNamereducer, {
    isValid: "",
    lastName: "",
  });
  const [PhoneNumber, dipatchPhoneNumber] = useReducer(phoneNumberreducer, {
    isValid: "",
    PhoneNumber: "",
  });
  const [nationalCode, dipatchNationalCode] = useReducer(nationalCodereducer, {
    isValid: "",
    nationalCode: "",
  });

  const [birthday, setbirthDay] = useState(null);

  function firstNameChangeHandel(value) {
    dipatchFirstName({
      firstName: value,
      isValid: value.length > 2 && isNaN(value),
    });
  }
  function lastNameChangeHandel(value) {
    dipatchLastName({
      lastName: value,
      isValid: value.length > 2 && isNaN(value),
    });
  }
  function PhoneNumberChangeHandel(value) {
    dipatchPhoneNumber({
      PhoneNumber: value,
      isValid: value.length === 11 && !isNaN(value),
    });
  }
  function nationalCodeChangeHandel(value) {
    dipatchNationalCode({
      nationalCode: value,
      isValid: value.length === 10 && !isNaN(value),
    });
  }
  function birthdayChangeHandel(value) {
    setbirthDay(value);
    if ((value = "")) {
      setbirthDay(false);
    }
  }
  useEffect(() => {
    const signinValidation = setTimeout(() => {
      if (
        firstName.isValid &&
        lastName.isValid &&
        PhoneNumber.isValid &&
        nationalCode.isValid &&
        birthday
      ) {
        setbtnDisable(true);
      } else {
        setbtnDisable(false);
      }
    }, 600);
    return () => {
      clearTimeout(signinValidation);
    };
  }, [
    firstName.isValid,
    lastName.isValid,
    PhoneNumber.isValid,
    PhoneNumber.isValid,
    nationalCode.isValid,
    birthday,
  ]);
  function ongetSkill(value) {
    setSkill(value);
  }

  const ProfileSbmitHandler = (e) => {
    e.preventDefault();

    const userInformation = {
      firstName: firstName.firstName,
      lastName: lastName.lastName,
      PhoneNumber: PhoneNumber.PhoneNumber,
      nationalCode: nationalCode.nationalCode,
      birthday: birthday.target.value,
      skills: skill,
    };

    localStorage.userInformation = JSON.stringify(userInformation);
    alert("Submited!");
  };
  return (
    <div className="MainProfile">
      <MainsHeader />
      <div className="MainProfile-sc2">
        <div className="Profile-pic-div">
          <img height={140} width={1200} src="images/w1.jpg" alt="/w1.jpg" />
          <ProfileAdder />
        </div>
        <form className="Profileform" onSubmit={ProfileSbmitHandler}>
          <div className="Profileforminput">
            <div>
              <label htmlFor="firstname">First name</label>
              <ProfileInput
                isValid={firstName.isValid}
                onChange={firstNameChangeHandel}
                width={400}
                height={44}
                id={"firstname"}
              />
              {firstName.isValid === false ? (
                <span className="validationmassega">Enter valid name</span>
              ) : (
                ""
              )}
            </div>
            <div>
              <label htmlFor="lastname">Last Name</label>
              <ProfileInput
                isValid={lastName.isValid}
                onChange={lastNameChangeHandel}
                width={400}
                height={44}
                id={"lastname"}
              />
              {lastName.isValid === false ? (
                <span className="validationmassega">Enter valid lastname</span>
              ) : (
                ""
              )}
            </div>
            <div>
              <label htmlFor="phonenumber">Phone Number</label>
              <ProfileInput
                isValid={PhoneNumber.isValid}
                onChange={PhoneNumberChangeHandel}
                width={400}
                height={44}
                id={"phonenumber"}
              />
              {PhoneNumber.isValid === false ? (
                <span className="validationmassega">
                  Enter valid phonenumber
                </span>
              ) : (
                ""
              )}
            </div>
            <div>
              <label htmlFor="nationalcode">National Code</label>
              <ProfileInput
                isValid={nationalCode.isValid}
                onChange={nationalCodeChangeHandel}
                width={400}
                height={44}
                id={"nationalcode"}
              />
              {nationalCode.isValid === false ? (
                <span className="validationmassega">
                  Enter valid national Code
                </span>
              ) : (
                ""
              )}
            </div>
            <div>
              <label htmlFor="birthday">Birth Day</label>
              <ProfileInput
                isValid={birthday}
                onblurfunction={birthdayChangeHandel}
                type={"date"}
                width={400}
                height={44}
                id={"birthday"}
              />
            </div>
            <MultipleSelectChip ongetSkill={ongetSkill} />
          </div>
          <div className="profilebtnposition">
            <Button
              className={!btnDisable ? "disablebtn" : "signinbtn"}
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainProfile;
