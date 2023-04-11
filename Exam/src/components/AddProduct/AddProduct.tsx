import { useDispatch } from "react-redux";
import { createProductAction } from "../../actions/productsActions";
import { FormEvent, useState } from "react";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [buyPrice, setBuyPrice] = useState("");
  const [amount, setAmount] = useState("");


  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    dispatch(createProductAction({name, sellPrice: parseInt(sellPrice),buyPrice: parseInt(buyPrice), amount: parseInt(amount)}));
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
          placeholder="Buy Price"
          value={sellPrice}
          onChange={(e) => setSellPrice(e.target.value)}
        />
        <input
          placeholder="Sell Price"
          value={buyPrice}
          onChange={(e) => setBuyPrice(e.target.value)}
        />
        <input
          placeholder="Quantity"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />        
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddProduct;
