import React from "react";
import { ItemOrder, OrderContainer, OrderCount, ProductButton } from "../style";
import PlaceOrder from "./PlaceOrder";

function Order(props) {
  let total = 0;
  const { items, size } = props;
  for (const item of items) total += item.price;

  const orderPlace = () => <PlaceOrder />;

  return (
    <OrderContainer>
      <h2 style={{ textAlign: "center", marginBottom: "15px" }}>
        Order Summary
      </h2>
      <ItemOrder>
        Item ordered: <span>{size}</span>
      </ItemOrder>
      <OrderCount>
        <small>
          Items: $<span>{size}</span>
        </small>
        <small>
          Shipping and Handling: $<span>{size}</span>
        </small>
        <small>
          Total before tax: $<span>{size}</span>
        </small>
        <small>
          Estimated Tax: $<span>{size}</span>
        </small>
        <h3 style={{ color: "red" }}>
          Order Total: $<span>{total.toFixed(2)}</span>
        </h3>
      </OrderCount>
      <ProductButton onClick={orderPlace} style={{ marginLeft: "25%" }}>
        Review your order
      </ProductButton>
    </OrderContainer>
  );
}

export default Order;
