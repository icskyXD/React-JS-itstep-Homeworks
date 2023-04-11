import { createReducer,createSlice } from "@reduxjs/toolkit";
import { createProductAction } from "../actions/productsActions";

const initialState = { list: [
    { id: 1, name: "Milk", sellPrice: 220, buyPrice: 310, amount: 560 },
    { id: 2, name: 'Chicken Sandwich', sellPrice: 460, buyPrice: 340, amount: 1080},
    { id: 2, name: 'Cheese Sandwich', sellPrice: 410, buyPrice: 300, amount: 563},
    { id: 2, name: 'Gorilla Energy', sellPrice: 450, buyPrice: 340, amount: 232},
    { id: 2, name: 'Bomba', sellPrice: 232343452, buyPrice: 394568743, amount: 1},
  ],
};

export const productsReducer = createReducer(initialState, (builder) => {
  builder.addCase(createProductAction, (state, action) => {
    state.list.push({
      ...action.payload,
      id: state.list.length + Math.random()*100
    });
  });
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearState() {
      return initialState;
    },},
});

export const { clearState } = productSlice.actions;

export default productSlice.reducer;
