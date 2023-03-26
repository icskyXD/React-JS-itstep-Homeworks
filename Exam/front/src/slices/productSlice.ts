import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IProducts } from "../types";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const res = await fetch("http://localhost:8080/products");
  const data = res.json();
  return data;
});

export const fetchMoney = createAsyncThunk("fetchMoney", async () => {
  const res = await fetch("http://localhost:8080/money/myMoney");
  const data = res.json();
  return data;
});

interface IProdState {
  cashAmount: number;
  data: IProducts[];
}

const initialState = {
  cashAmount: 0,
  data: [],
} as IProdState;

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearState() {
      return initialState;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(fetchMoney.fulfilled, (state, action) => {
      state.cashAmount = action.payload[0].money_amount
    })
  },
});

export const { clearState } = productSlice.actions;

export default productSlice.reducer;
