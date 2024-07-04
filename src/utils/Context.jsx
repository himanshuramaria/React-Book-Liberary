import React, { createContext, useEffect, useState, useContext } from "react";
import axios from "./axios";
import { InputContext } from './inputContext'

export const ProductContext = createContext();

function Context(props) {
  const [products, setProducts] = useState(null);
  const { inputValue } = useContext(InputContext);
  // console.log(inputValue+"8");

  const getProducts = async () => {
    try { 
      const { data } = await axios(inputValue+"&limit=10&page=1");
      setProducts(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     getProducts();
  //   }, 1000);
  // }, [inputValue]); 
  

useEffect(() => {
  getProducts();
  // console.log("Success")
},[inputValue]);

return (
  <ProductContext.Provider value={[products, setProducts]}>
    {props.children}
  </ProductContext.Provider>
);
}

export default Context;