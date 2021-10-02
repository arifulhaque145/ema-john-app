import React from "react";
import Rating from "react-rating";
import { ProductButton, ProductContainer, Stock } from "../style";
// import Rating from "react-rating";

function Product(props) {
  const size = 16;

  const { name, seller, price, stock, img, star, features } = props.data;

  function listGroup(des, value, key) {
    return (
      <li key={key}>
        {des}: <b>{value}</b>
      </li>
    );
  }

  return (
    <ProductContainer>
      <div style={{ width: "300px" }}>
        <img src={img} alt="" />
      </div>
      <div>
        <p style={{ fontSize: 22 / size + "em" }}>{name}</p>
        <small>by: {seller}</small>
        <br />
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: 22 / size + "em" }}>
            <h4>${price}</h4>
            <Stock>only {stock} left in stock - order soon</Stock>
            <ProductButton onClick={props.btn}>
              <i className="fas fa-shopping-cart fa-ms" /> Add to cart
            </ProductButton>
          </div>
          <div style={{ marginLeft: 20 / size + "em" }}>
            <Rating
              emptySymbol="far fa-star fa-md icon--color"
              fullSymbol="fas fa-star fa-md icon--color"
              initialRating={star}
              fractions={2}
              readonly
              style={{color: "gold"}}
            />
            <br />
            <br />
            <h4>Features</h4>
            <ul style={{ marginLeft: 40 / size + "em" }}>
              {features.map((item, i) =>
                listGroup(item.description, item.value, i)
              )}
            </ul>
            <br />
          </div>
        </div>
      </div>
    </ProductContainer>
  );
}

export default Product;
