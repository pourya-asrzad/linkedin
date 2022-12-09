import React from "react";
import PagesLink from "../Pageslink/PagesLink";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import Styles from "./Navbar.module.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
const Navbar = () => {
  let imageSrc = null;
  if (localStorage.image) {
    imageSrc = `images/${JSON.parse(localStorage.image)}`;
  }
  return (
    <div className={Styles.Navbar}>
      <div className={Styles.Navbarheader}>
        {localStorage.image ? (
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
        <PagesLink icon={"/images/link.png"} title="Items" />
      </div>
    </div>
  );
};

export default Navbar;
