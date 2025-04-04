import React from "react";
import { NavLink } from "react-router";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
const Header = () => {
  const cartState = useSelector((state) => state.cart);
  return (
    <div className="justify-between flex items-center py-4 p-6 bg-gray-100 fixed top-0 w-full ">
      <div className="text-2xl font-bold" >
        <NavLink to="/">E-commerce</NavLink>
        </div>
      <div className=" space-x-4 ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-blue-600 underline"
              : "text-gray-700 hover:text-blue-500"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="cart"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-blue-600 underline"
              : "text-gray-700 hover:text-blue-500"
          }
        >
          Cart
        </NavLink>
      </div>
      <div className="flex space-x-4 relative">
        <NavLink to="/cart">
        <MdOutlineShoppingCart className="text-3xl" />
        </NavLink>
        <div className="absolute -top-4 -right-4  text-black rounded-full w-5 h-5 flex items-center justify-center text-xs mx-5 py-2">
          ${cartState.totalPrice.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default Header;
