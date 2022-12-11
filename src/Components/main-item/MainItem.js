import React from "react";
import ItemForm from "../Item-form/ItemForm";
import ItemTable from "../Item-table/ItemTable";
import MainsHeader from "../MainsHeader/MainsHeader";
const MainItem = () => {
  return (
    <div>
      <MainsHeader />
      <ItemForm />
      <ItemTable />
    </div>
  );
};

export default MainItem;
