import { useAppSelector, useAppDispatch } from "../../hooks";
import { useEffect } from "react";
import { fetchMoney, fetchProducts } from "../../slices/productSlice";

const StockInfo = () => {
  const dispatch = useAppDispatch();
  const cashAmount = useAppSelector((state) => state.products.cashAmount);
  const products = useAppSelector((state) => state.products.data);
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchMoney());
  }, []);
  if (products.length === 0) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <div>
        <h3>Stock info</h3>
        <p>Stock Money: {cashAmount} KZT</p>
        <p>
          Total value of stock money:{" "}
          {products.reduce((acc, product) => {
            return acc + product.sell_price;
          }, 0)}{" "}KZT
        </p>
        <p>Amount of products type in stock: {products.length}</p>
        <p>
          The most valued product in stock:{" "}
          {
            products.reduce((prev, curr) =>
              prev.sell_price > curr.sell_price ? prev : curr
            ).product_name
          }{" "}
          - price:{Math.max(...products.map((pr) => pr.sell_price))} KZT
        </p>
        <p>
          The least valued product in stock:{" "}
          {
            products.reduce((prev, curr) =>
              prev.sell_price < curr.sell_price ? prev : curr
            ).product_name
          }{" "}
          - price:{Math.min(...products.map((pr) => pr.sell_price))} KZT
        </p>
        <p>
          Most numbered product:{" "}
          {
            products.reduce((prev, curr) =>
              prev.product_amount > curr.product_amount ? prev : curr
            ).product_name
          }{" "}
          - Amount:{Math.max(...products.map((pr) => pr.product_amount))}{" "}
        </p>
        <p>
        Least numbered product:{" "}
          {
            products.reduce((prev, curr) =>
              prev.product_amount < curr.product_amount ? prev : curr
            ).product_name
          }{" "}
          - Amount:{Math.min(...products.map((pr) => pr.product_amount))}{" "}
        </p>
      </div>
    </div>
  );
};

export default StockInfo;
