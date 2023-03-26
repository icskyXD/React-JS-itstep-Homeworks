import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slices/productSlice'
import actionSlice from "./slices/actionsSlice";

export const store = configureStore({
    reducer: {
        products: productReducer,
        actions: actionSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;