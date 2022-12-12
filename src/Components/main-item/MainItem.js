import React, { useState } from "react";
import ItemForm from "../Item-form/ItemForm";
import ItemTable from "../Item-table/ItemTable";
import MainsHeader from "../MainsHeader/MainsHeader";
import itemData from "../../item-data/ItemData";
const MainItem = () => {
  const [itemdata, setItemData] = useState(itemData);
  function onGetItemFiltred(itemfiltered) {
    setItemData((prev) => {
      return itemData.filter((element) => {
        return (
          element.Fax === itemfiltered.Fax ||
          element.ToFax === itemfiltered.toFax ||
          element.fromFax === itemfiltered.fromFax ||
          element.toDate === itemfiltered.toDate ||
          element.fromDate === itemfiltered.fromDate ||
          element.category === itemfiltered.category ||
          element.account === itemfiltered.account ||
          element.name === itemfiltered.name
        );
      });
    });
  }
  return (
    <div>
      <MainsHeader />
      <ItemForm onGetItemFiltred={onGetItemFiltred} />
      <div className="tabelcomeshere">
        <ItemTable data={itemdata} />
      </div>
    </div>
  );
};

export default MainItem;
