import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IAction } from "../types";

export const fetchActions = createAsyncThunk("fetchActions", async () => {
  const res = await fetch("http://localhost:8080/actions");
  const data = res.json();
  return data;
});

interface IActionState {
    data: IAction[]
}

const initialState = {
    data: [],
} as IActionState;

const actionSlice = createSlice({
  name: "actions",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchActions.fulfilled, (state, action) => {
        state.data = action.payload.reverse()
    });
  },
});

export default actionSlice.reducer;