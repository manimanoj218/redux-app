import React, { useEffect } from "react";
import ProductCmp from "./ProductCmp";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const dispatch = useDispatch();


  const fetchProducts = async () => {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .catch((err) => {
        console.log("err", err);
      });
    console.log("res", response);
    return response.data;
  };

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      console.log("data", data);
      if (data) {
        dispatch(setProducts(data));
      }
    };
    getProducts();
  }, []);
  // CompopoentDidMount ,componenDidUpdate,ComponentWillunmoiun

  return (
    <div>
      <ProductCmp />
    </div>
  );
};

export default ProductListing;
