import React from "react";
import { Icon, ItemCount, SearchBar, SearchContainer } from "../style";

function Searchbar() {
  const values = JSON.parse(localStorage.getItem("shopping_cart"));
  const size = Object.keys(values).length;

  const getItem = () => {
    let val = document.querySelector("#search__bar").value;

    if (val.toLowerCase() === "good") console.log("ok");

    // todo 1: store theke data ana lagbe
    // todo 2: nam onujayi array dekhano lagobe
    // todo 3: sei array dekhano lagbe
  };
  return (
    <SearchContainer>
      <SearchBar
        type="text"
        id="search__bar"
        className="searchbar"
        placeholder="Search your item"
        onChange={getItem}
      />
      <Icon className="fas fa-shopping-cart"></Icon>
      <ItemCount>{size}</ItemCount>
    </SearchContainer>
  );
}

export default Searchbar;
