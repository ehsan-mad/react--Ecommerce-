import React from "react";
import { addToCart } from "../states/slices/cartSlice.js";
import { useDispatch } from "react-redux";
const Product = ({ product }) => {
  
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }

  return (
    <div
      key={product.id}
      className="border-2 p-4 rounded-md shadow-md hover:shadow-lg hover:bg-red-100 transition-duration-300 "
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full object-cover h-40 rounded-md"
      />

      <div className="text-lg font-bold">{product.name}</div>
      <div className="text-sm">{product.price}</div>
      <button
        onClick={() => handleAddToCart(product)}
        className="rounded-md px-1 py-2 text-white bg-blue-500 hover:bg-blue-400 cursor-pointer"
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
