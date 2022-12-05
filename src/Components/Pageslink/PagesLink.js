import React from "react";
import "./Pageslink.css";
const PagesLink = ({ title, icon }) => {
  return (
    <div className="PagesLink">
      <img width="25" src={icon} />
      <span>{title}</span>
    </div>
  );
};

export default PagesLink;
