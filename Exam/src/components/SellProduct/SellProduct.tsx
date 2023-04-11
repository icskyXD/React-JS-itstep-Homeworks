import { useDispatch } from "react-redux";
import { createProductAction } from "../../actions/productsActions";
import { FormEvent, useState } from "react";

const SellProduct = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [buyPrice, setBuyPrice] = useState("");

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    dispatch(createProductAction({  name, sellPrice: parseInt(sellPrice),buyPrice:parseInt(buyPrice),amount: parseInt(amount)}));
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Sell Price"
          value={sellPrice}
          onChange={(e) => setSellPrice(e.target.value)}
        />
        <input
          placeholder="Quantity"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button>Sell</button>
      </form>
    </div>
  );
};

export default SellProduct;