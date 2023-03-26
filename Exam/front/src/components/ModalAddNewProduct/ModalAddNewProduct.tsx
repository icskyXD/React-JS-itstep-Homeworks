import axios from "axios";
import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../hooks";
import { fetchProducts } from "../../slices/productSlice";

const ModalAddNewProduct = (props: any) => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [buyPrice, setBuyPrice] = useState("");


  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/products`, {
        product_name: name,
        sell_price: parseInt(sellPrice),
        buy_price: parseInt(buyPrice),
      })
      .then(() => alert("Success"))
      .then(() => dispatch(fetchProducts()).then(props.close));
  };
  return (
    <div>
      <p>Add new product</p>
      <form onSubmit={handleClick}>
        <input
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type={"number"}
          placeholder="Sell price"
          min={1}
          value={sellPrice}
          onChange={(e) => setSellPrice(e.target.value)}
        />
        <input
          placeholder="Buy price"
          min={1}
          value={buyPrice}
          onChange={(e) => setBuyPrice(e.target.value)}
        />
        <button>Add</button>
      </form>
      <input type="button" value="cancel" onClick={props.close} />
    </div>
  );
};

export default ModalAddNewProduct;
