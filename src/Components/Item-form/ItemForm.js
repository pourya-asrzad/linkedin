import React, { useReducer } from "react";
import ItemFotmInputLabel from "./ItemFotmInputLabel";
// import itemData from "../../item-data/ItemData";
function itemfilterReducer(state, action) {
  return {
    name: action.name,
    account: action.account,
    category: action.category,
    fromDate: action.fromDate,
    toDate: action.toDate,
    fromFax: action.fromFax,
    toFax: action.toFax,
  };
}
const ItemForm = ({ onGetItemFiltred }) => {
  const [itemfilter, dipatchItemfilter] = useReducer(itemfilterReducer, {
    name: null,
    account: null,
    category: null,
    fromDate: null,
    toDate: null,
    fromFax: null,
    toFax: null,
  });
  function searchFormSubmitHandler(e) {
    e.preventDefault();
    onGetItemFiltred(itemfilter);
  }

  function nameGetValue(val) {
    dipatchItemfilter({
      name: val,
      account: itemfilter.account,
      category: itemfilter.category,
      fromDate: itemfilter.fromDate,
      toDate: itemfilter.toDate,
      fromFax: itemfilter.fromFax,
      toFax: itemfilter.toFax,
    });
  }
  function AccountGetValue(val) {
    dipatchItemfilter({
      name: itemfilter.name,
      account: val,
      category: itemfilter.category,
      fromDate: itemfilter.fromDate,
      toDate: itemfilter.toDate,
      fromFax: itemfilter.fromFax,
      toFax: itemfilter.toFax,
    });
  }
  function CategoryGetValue(val) {
    dipatchItemfilter({
      name: itemfilter.name,
      account: itemfilter.account,
      category: val,
      fromDate: itemfilter.fromDate,
      toDate: itemfilter.toDate,
      fromFax: itemfilter.fromFax,
      toFax: itemfilter.toFax,
    });
  }
  function FromDateGetValue(val) {
    dipatchItemfilter({
      name: itemfilter.name,
      account: itemfilter.account,
      category: itemfilter.category,
      fromDate: val,
      toDate: itemfilter.toDate,
      fromFax: itemfilter.fromFax,
      toFax: itemfilter.toFax,
    });
  }
  function TodateGetValue(val) {
    dipatchItemfilter({
      name: itemfilter.name,
      account: itemfilter.account,
      category: itemfilter.category,
      fromDate: itemfilter.fromDate,
      toDate: val,
      fromFax: itemfilter.fromFax,
      toFax: itemfilter.toFax,
    });
  }
  function FromFaxGetValue(val) {
    dipatchItemfilter({
      name: itemfilter.name,
      account: itemfilter.account,
      category: itemfilter.category,
      fromDate: itemfilter.fromDate,
      toDate: itemfilter.toDate,
      fromFax: val,
      toFax: itemfilter.toFax,
    });
  }
  function TofaxGetValue(val) {
    dipatchItemfilter({
      name: itemfilter.name,
      account: itemfilter.account,
      category: itemfilter.category,
      fromDate: itemfilter.fromDate,
      toDate: itemfilter.toDate,
      fromFax: itemfilter.fromFax,
      toFax: val,
    });
  }

  return (
    <div className="itemformcontainer">
      <form onSubmit={searchFormSubmitHandler} className="itemform">
        <ItemFotmInputLabel ongetvalue={nameGetValue} name="name">
          name
        </ItemFotmInputLabel>
        <ItemFotmInputLabel ongetvalue={AccountGetValue} name="Acc">
          Account
        </ItemFotmInputLabel>
        <ItemFotmInputLabel ongetvalue={CategoryGetValue} name="Cate">
          Category
        </ItemFotmInputLabel>
        <ItemFotmInputLabel ongetvalue={FromDateGetValue} name="From ">
          From date
        </ItemFotmInputLabel>
        <ItemFotmInputLabel ongetvalue={TodateGetValue} name="To ">
          To date
        </ItemFotmInputLabel>
        <ItemFotmInputLabel ongetvalue={FromFaxGetValue} name="From">
          From fax
        </ItemFotmInputLabel>
        <ItemFotmInputLabel ongetvalue={TofaxGetValue} name="To">
          To fax
        </ItemFotmInputLabel>
        <button className="searchbtn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default ItemForm;
