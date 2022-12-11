import React, { useState } from "react";
import ItemForm from "../Item-form/ItemForm";
import ItemTable from "../Item-table/ItemTable";
import MainsHeader from "../MainsHeader/MainsHeader";
import itemData from "../../item-data/ItemData";
const MainItem = () => {
  const [itemdata, setItemData] = useState(itemData);
  return (
    <div>
      <MainsHeader />
      <ItemForm />
      <div className="tabelcomeshere">
        <ItemTable data={itemdata} />
      </div>
    </div>
  );
};

export default MainItem;
