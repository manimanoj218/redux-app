import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import { selectedProduct } from "../redux/actions/productActions";
import { useEffect } from "react";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log("product", product, productId);

  const getProductDetail = async () => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/photos/${productId}`)
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    getProductDetail();
  }, [productId]);

  return (
    <div>
      <h1>Product Details</h1>
    </div>
  );
};

export default ProductDetails;
