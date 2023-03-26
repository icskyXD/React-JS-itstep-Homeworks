import axios from "axios";
import { useAppDispatch } from "../../hooks";
import { fetchProducts } from "../../slices/productSlice";


const BtnDeleteProduct = (props:any) => {
    const dispatch = useAppDispatch();
    function deleteProduct(id:string){
        axios.delete('http://localhost:8080/products/' + id).then(() => alert("Success")).then(()=> dispatch(fetchProducts()))
    }
  return (
    <>
      <input onClick={() => deleteProduct(props._id)} type="button" value="Delete" />
    </>
  );
};

export default BtnDeleteProduct