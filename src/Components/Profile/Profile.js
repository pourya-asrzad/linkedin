import React from "react";
import MainProfile from "../MainProfile/MainProfile";
import Navbar from "../Navbar/Navbar";
import Styles from "./Profile.module.css";
const Profile = () => {
  return (
    <div className={Styles.Profile}>
      <Navbar />
      <MainProfile />
    </div>
  );
};

export default Profile;
