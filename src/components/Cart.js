import React, { useEffect, useState } from "react";
import { CartContainer, Products } from "../style";
import { addToDb, getStoredCart } from "../utilities/fakedb";
import Order from "./Order";
import Product from "./Product";

function Cart() {
  const [data, setdata] = useState([]);
  const [cnt, setcnt] = useState([]);

  const showData = (data) => {
    const newData = [...cnt, data];
    setcnt(newData);
    addToDb(data.key);
  };

  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);

  useEffect(() => {
    const datas = getStoredCart();
    const dataList = [];

    if (data.length) {
      for (const key in datas) {
        const selectProducts = data.find((product) => product.key === key);
        dataList.push(selectProducts);
      }
      setcnt(dataList);
    }
  }, [data]);

  return (
    <CartContainer>
      <Products>
        {data.map((newData) => (
          <Product
            key={newData.key}
            data={newData}
            btn={() => showData(newData)}
          />
        ))}
      </Products>
      <Order items={cnt} size={cnt.length} />
    </CartContainer>
  );
}

export default Cart;
