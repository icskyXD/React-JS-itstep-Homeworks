import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import { fetchMoney, fetchProducts } from "../../slices/productSlice";
import ProductTableRow from "../ProductTableRow/ProductTableRow";

const ProductTable = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.data);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchMoney())
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <td>Product name</td>
          <td>Quantity</td>
          <td>Sell price</td>
          <td>Buy price</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductTableRow key={product._id} {...product} />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
