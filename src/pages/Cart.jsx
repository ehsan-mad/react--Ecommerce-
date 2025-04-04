import React from "react";
import { useSelector } from "react-redux";
const Cart = () => {
  const cartState = useSelector((state) => state.cart);
  return (
    <div className="mt-25 mx-auto flex justify-center items-center text-center p-4">
      <table className="p-10 shadow-lg w-full">
        <thead className="p-10 bg-blue-100">
          <tr className="mx-10  font-bold text-2xl">
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody className="p-10 bg-blue-50">
          {cartState.items.map((item) => (
            <tr className="mx-10 text-lg">
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.price * item.quantity}</td>
              <td><button className="bg-red-600 rounded-sm cursor-pointer text-sm text-white hover:bg-red-800 px-2 py-1">
                Remove
                </button></td>
            </tr>
          ))}
          <tr className="mx-10 text-lg ">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="cols-span-4 ">
             
             <div className="space-x-2">Total:
              {cartState.totalPrice.toFixed(2)}
             </div> 
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
