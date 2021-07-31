import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductCmp = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log("prod", products);
  const renderList = products.map((product, index) => {
    const { id, title, url } = product;
    return (
      <div className="card col-md-3" key={id}>
        <img className="card-img-top" src={url} alt="" />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <Link to={`/product/${id}`}>
            <a href="#" className="btn btn-primary">
              See Profile
            </a>
          </Link>
        </div>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        {products && products.length > 0 ? renderList : "No Data"}
      </div>
    </div>
  );
};

export default ProductCmp;
