import axios from "axios";
import { FormEvent, useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { fetchMoney, fetchProducts } from "../../slices/productSlice";

const ModalSellProduct = (props: any) => {
  const dispatch = useAppDispatch();
  const buyingProduct = useAppSelector((state) =>
    state.products.data.filter((product) => product._id === props._id)
  );
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [summ, setSumm] = useState("");

  function UpdateData() {
    if (buyingProduct.length !== 0) {
      setPrice(buyingProduct[0].sell_price.toString());
    }
  }

  useEffect(() => {
    UpdateData();
  }, []);

  useEffect(() => {
    setSumm((parseInt(amount) * parseInt(price)).toString());
  }, [amount, price]);

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/products/sell/` + buyingProduct[0]._id, {
        sellAmount: parseInt(amount),
        newSellPice: parseInt(price),
      })
      .then(() => alert("Success"))
      .then(() => dispatch(fetchProducts()).then(() => dispatch(fetchMoney())).then(props.close));
  };
  return (
    <div>
      <p>Sell product</p>
      <form onSubmit={handleClick}>
        <input
          placeholder="Product name"
          disabled
          value={buyingProduct[0].product_name}
        />
        <input
          placeholder="Product price"
          min={1}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type={"number"}
          max={buyingProduct[0].product_amount}
          min={1}
          placeholder="Product amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input disabled placeholder="Итого" value={NaN ? 0 : summ} />
        <button>Sell</button>
      </form>
      <input type="button" value="cancel" onClick={props.close}/>
    </div>
  );
};

export default ModalSellProduct;
