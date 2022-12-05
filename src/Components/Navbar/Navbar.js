import React from "react";
import PagesLink from "../Pageslink/PagesLink";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import Styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={Styles.Navbar}>
      <div className={Styles.Navbarheader}>
        <ProfileIcon height="50" className="ProfileIconNavbar" />
        <h1>User Name</h1>
      </div>
      <div className={Styles.links}>
        <PagesLink icon={"/images/eye.png"} title="Home" />
        <PagesLink icon={"/images/proadd.png"} title="Profile" />
        <PagesLink icon={"/images/link.png"} title="Items" />
      </div>
    </div>
  );
};

export default Navbar;
