import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const {name, image, cost} = action.payload;

      const existingItem = state.items.find(item => item.name === name)
      if (existingItem) {
        existingItem.quantity++; // If exists just add another in quantity
      } else {
        state.items.push({name, image, cost, quantity: 1});
      }
    
    },
    removeItem: (state, action) => {
      const { name, quantity} = action.payload
      state.items = state.items.filter(item => item.name !== name);
      console.log(state.items);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      // Find item in cart that matches name
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
