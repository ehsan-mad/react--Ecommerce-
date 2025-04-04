import React from "react";
import Product from "../components/Product";
import { products } from "../data/products.js";


const Home = () => {
  return (
    <div className="mt-5 mx-auto">
     
      <h2 className="font-bold text-xl m-4 ">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-5 px-8">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Home;
