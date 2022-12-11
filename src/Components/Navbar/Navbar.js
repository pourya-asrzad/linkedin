import React from "react";
import PagesLink from "../Pageslink/PagesLink";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import Styles from "./Navbar.module.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
const Navbar = () => {
  let imageSrc = null;
  const userdata = JSON.parse(localStorage.userData);
  if (localStorage.id) {
    console.log("hey");
    const findeimage = userdata.find((element) => {
      return element.id == localStorage.id;
    });

    findeimage.profileimage
      ? (imageSrc = `images/${findeimage.profileimage}`)
      : (imageSrc = `images/profile.png`);
  }
  return (
    <div className={Styles.Navbar}>
      <div className={Styles.Navbarheader}>
        {localStorage.id ? (
          <div className={Styles.profilecontainer}>
            <img width={100} src={imageSrc} alt="userimg" />
          </div>
        ) : (
          <ProfileIcon height="50" className="ProfileIconNavbar" />
        )}
        <h1>{JSON.parse(localStorage.usename)}</h1>
      </div>
      <div className={Styles.links}>
        <Link to="/Home">
          <PagesLink icon={"/images/eye.png"} title="Home" />
        </Link>
        <Link to="/Profile">
          <PagesLink icon={"/images/proadd.png"} title="Profile" />
        </Link>
        <Link to="/items">
          <PagesLink icon={"/images/link.png"} title="Items" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
