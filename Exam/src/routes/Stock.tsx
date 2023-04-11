import { useAppSelector } from '../hooks'
import './styles.css'
const Stock = () => {
    const products = useAppSelector((state) => state.products.list);

    return(
        <div className='stock-div'>
            {products.map((elem) =>
             <p className='stock-elem'>{elem.name} | Product sell price: {elem.sellPrice} | Product buy price: {elem.buyPrice} | Product quantity: {elem.amount}</p> )}
        </div>
    )
}

export default Stock;