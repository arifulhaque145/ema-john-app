import React from "react";
import logo from "../logo.png";
import { ListGroup, NavHead, NavImg } from "../style";

function Navbar() {
  return (
    <div>
      <NavHead>
        <NavImg src={logo} />
      </NavHead>
      <ListGroup>
        <a href="/shop">Shop</a>
        <a href="/Order">Order Review</a>
        <a href="/manage">Manage Inventory here</a>
      </ListGroup>
    </div>
  );
}

export default Navbar;
