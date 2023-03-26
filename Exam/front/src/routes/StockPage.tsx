import BtnAddNewProduct from "../components/BtnAddNewProduct/BtnAddNewProduct";
import ProductTable from "../components/ProductTable.tsx/ProductTable";
import { useAppSelector } from "../hooks";

const StockPage = () => {
  const cashAmount = useAppSelector((state) => state.products.cashAmount);

  return (
    <div>
      <h1>Stock</h1>
      <p>Stock money: {cashAmount}</p>

      <BtnAddNewProduct />
      <ProductTable />
    </div>
  );
};

export default StockPage;
