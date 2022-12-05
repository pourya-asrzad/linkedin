import React from "react";
import MainsHeader from "../MainsHeader/MainsHeader";
import ProfileAdder from "../ProfileAdder/ProfileAdder";
import MultipleSelectChip from "../SelectSkill/SelectSkill";

const MainProfile = () => {
  return (
    <div className="MainProfile">
      <MainsHeader />
      <div className="MainProfile-sc2">
        <div className="Profile-pic-div">
          <img height={140} width={1200} src="images/w1.jpg" />
          <ProfileAdder />
        </div>
        <form>
          <MultipleSelectChip />
        </form>
      </div>
    </div>
  );
};

export default MainProfile;
