import { useAppSelector } from '../hooks'
import './styles.css'
const BuySellPage = () =>{
    const products = useAppSelector((state) => state.products.list)

    return (
        <div className='stock-div'>
            {products.map((item) =>
             <p className='stock-elem'>{item.name} | Sell item: {item.sellPrice} | Buy item: {item.buyPrice} | Number of items: {item.amount}
              <button>Delete</button>
             </p>
              )}
            </div>
    )
}

export default BuySellPage;