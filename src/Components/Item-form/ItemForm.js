import React, { useReducer } from "react";
import ItemFotmInputLabel from "./ItemFotmInputLabel";
// import itemData from "../../item-data/ItemData";
function itemfilterReducer(state, action) {
  switch (action.type) {
    case "name": {
      return {
        name: action.name,
        account: state.account,
        category: state.category,
        fromDate: state.fromDate,
        toDate: state.toDate,
        fromFax: state.fromFax,
        Fax: state.Fax,
      };
    }
    case "account": {
      return {
        name: state.name,
        account: action.account,
        category: state.category,
        fromDate: state.fromDate,
        toDate: state.toDate,
        fromFax: state.fromFax,
        Fax: state.Fax,
      };
    }
    case "category": {
      return {
        name: state.name,
        account: state.account,
        category: action.category,
        fromDate: state.fromDate,
        toDate: state.toDate,
        fromFax: state.fromFax,
        Fax: state.Fax,
      };
    }
    case "fromDate": {
      return {
        name: state.name,
        account: state.account,
        category: state.category,
        fromDate: action.fromDate,
        toDate: state.toDate,
        fromFax: state.fromFax,
        Fax: state.Fax,
      };
    }
    case "toDate": {
      return {
        name: state.name,
        account: state.account,
        category: state.category,
        fromDate: state.fromDate,
        toDate: action.toDate,
        fromFax: state.fromFax,
        Fax: state.Fax,
      };
    }
    case "fromFax": {
      return {
        name: state.name,
        account: state.account,
        category: state.category,
        fromDate: state.fromDate,
        toDate: state.toDate,
        fromFax: action.fromFax,
        Fax: state.Fax,
      };
    }
    case "fax": {
      return {
        name: state.name,
        account: state.account,
        category: state.category,
        fromDate: state.fromDate,
        toDate: state.toDate,
        fromFax: state.fromFax,
        Fax: action.Fax,
      };
    }
  }
}
const ItemForm = ({ onGetItemFiltred }) => {
  const [itemfilter, dipatchItemfilter] = useReducer(itemfilterReducer, {
    name: null,
    account: null,
    category: null,
    fromDate: null,
    toDate: null,
    fromFax: null,
    Fax: null,
  });
  function searchFormSubmitHandler(e) {
    e.preventDefault();
    onGetItemFiltred(itemfilter);
  }

  function nameGetValue(val) {
    dipatchItemfilter({
      type: "name",
      name: val,
    });
  }
  function AccountGetValue(val) {
    dipatchItemfilter({
      type: "account",
      account: val,
    });
  }
  function CategoryGetValue(val) {
    dipatchItemfilter({
      type: "category",
      category: val,
    });
  }
  function FromDateGetValue(val) {
    dipatchItemfilter({
      type: "fromDate",
      fromDate: val,
    });
  }
  function TodateGetValue(val) {
    dipatchItemfilter({
      type: "toDate",
      toDate: val,
    });
  }
  function FromFaxGetValue(val) {
    dipatchItemfilter({
      type: "fromFax",
      fromFax: val,
    });
  }
  function faxGetValue(val) {
    dipatchItemfilter({
      type: "fax",
      Fax: val,
    });
  }
  console.log(itemfilter);
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
        <ItemFotmInputLabel ongetvalue={faxGetValue} name="To">
          fax
        </ItemFotmInputLabel>
        <button className="searchbtn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default ItemForm;
