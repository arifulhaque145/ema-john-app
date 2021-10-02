import styled from "styled-components";

// All Apps here
export const Apps = styled.div`
  margin: 0;
  padding: 0;
`;

// Navbar Styles
export const NavHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavImg = styled.img`
  width: 300px;
  padding: 20px;
`;

export const ListGroup = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  & a {
    color: white;
    text-decoration: none;
    padding: 15px;
    margin: 0 10px 0 10px;
    &:hover {
      background-color: whitesmoke;
      color: black;
    }
  }
`;

// Searchbar Styles
export const SearchContainer = styled.div`
  display: flex;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
`;

export const SearchBar = styled.input`
  width: 75%;
  height: 30px;
  border: none;
  padding-left: 10px;
  border-radius: 5px;
`;

export const Icon = styled.i`
  padding-left: 10px;
  color: white;
  font-size: 24px;
`;

export const ItemCount = styled.p`
  color: white;
  padding-left: 10px;
  font-weight: bold;
  font-size: 18px;
  color: #f08804;
`;

// Product Styles
export const ProductContainer = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  border-bottom: 1px solid rgb(216, 216, 216);
`;

export const Stock = styled.small`
  display: block;
  padding-bottom: 10px;
  color: red;
  font-style: italic;
`;

export const ProductButton = styled.button`
  background-color: rgb(223, 189, 0);
  padding: 5px 40px 5px 40px;
  border: 1px solid #a88734;
  border-radius: 3px;
  cursor: pointer;
  margin-bottom: 10px;
  &:hover {
    background-color: rgb(187, 142, 27);
  }
`;

// Cart Styles
export const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

export const Products = styled.div`
  padding: 10px;
  margin-left: 50px;
`;

// Order Styles
export const OrderContainer = styled.div`
  padding: 10px;
  border-left: 0.5px solid rgb(216, 216, 216);
`;

export const OrderCount = styled.div`
  margin-left: 50px;
  & small {
    display: block;
  }
`;

export const ItemOrder = styled.p`
  text-align: center;
  margin-bottom: 15px;
  font-weight: 400;
`;
