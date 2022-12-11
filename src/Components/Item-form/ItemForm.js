import React from "react";
import ItemFotmInputLabel from "./ItemFotmInputLabel";
import itemData from "../../item-data/ItemData";
const ItemForm = () => {
  return (
    <div className="itemformcontainer">
      <form className="itemform">
        <ItemFotmInputLabel name="name">name</ItemFotmInputLabel>
        <ItemFotmInputLabel name="Acc">Account</ItemFotmInputLabel>
        <ItemFotmInputLabel name="Cate">Category</ItemFotmInputLabel>
        <ItemFotmInputLabel name="From ">From date</ItemFotmInputLabel>
        <ItemFotmInputLabel name="To ">To date</ItemFotmInputLabel>
        <ItemFotmInputLabel name="From">From fax</ItemFotmInputLabel>
        <ItemFotmInputLabel name="To">To fax</ItemFotmInputLabel>
        <button className="searchbtn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default ItemForm;
