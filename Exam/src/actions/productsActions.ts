import { createAction } from "@reduxjs/toolkit";

export interface IProductAction {
  name: string;
  sellPrice: number;
  buyPrice: number,
  amount: number,
}

export const createProductAction =
  createAction<IProductAction>("PRODUCTS_CREATE");