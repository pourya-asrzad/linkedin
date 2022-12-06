import React from "react";
import MainsHeader from "../MainsHeader/MainsHeader";
import ProfileAdder from "../ProfileAdder/ProfileAdder";
import MultipleSelectChip from "../SelectSkill/SelectSkill";
import Input from "../Input/Input";
import Button from "../Button/Button";
const MainProfile = () => {
  return (
    <div className="MainProfile">
      <MainsHeader />
      <div className="MainProfile-sc2">
        <div className="Profile-pic-div">
          <img height={140} width={1200} src="images/w1.jpg" />
          <ProfileAdder />
        </div>
        <form className="Profileform">
          <div className="Profileforminput">
            <div>
              <label htmlFor="firstname">First name</label>
              <Input width={400} height={44} id={"firstname"} />
            </div>
            <div>
              <label htmlFor="lastname">Last Name</label>
              <Input width={400} height={44} id={"lastname"} />
            </div>
            <div>
              <label htmlFor="phonenumber">Phone Number</label>
              <Input width={400} height={44} id={"phonenumber"} />
            </div>
            <div>
              <label htmlFor="nationalcode">National Code</label>
              <Input width={400} height={44} id={"nationalcode"} />
            </div>
            <div>
              <label htmlFor="birthday">Birth Day</label>
              <Input width={400} height={44} id={"birthday"} />
            </div>
            <MultipleSelectChip />
          </div>
          <div className="profilebtnposition">
            <Button className="signinbtn" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainProfile;
