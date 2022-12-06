import React from "react";
import Styles from "./Home.module.css";
import Navbar from "../Navbar/Navbar";
import MainHome from "../MainHome/MainHome";
const Home = () => {
  return (
    <div className={Styles.Home}>
      <Navbar />
      <MainHome />
    </div>
  );
};

export default Home;
