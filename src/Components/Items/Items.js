import React from "react";
import MainItem from "../main-item/MainItem";
import Navbar from "../Navbar/Navbar";
const Items = () => {
  return (
    <div className="items-page">
      <Navbar></Navbar>
      <div className="main-item">
        <MainItem />
      </div>
    </div>
  );
};

export default Items;
