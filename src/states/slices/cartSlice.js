import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      // checck if the product is already in the cart
      const existingProductIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingProductIndex === -1) {
        // if not in the cart, add it
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        // if already in the cart, increase the quantity
        state.items[existingProductIndex].quantity += 1;

        // update the total price
        // state.totalPrice += action.payload.price;
      }
      // update the total price
      state.totalPrice += action.payload.price;



    },
  },
});

export const{addToCart}= cartSlice.actions;

// Action creators are generated for each case reducer function

export default cartSlice.reducer;
