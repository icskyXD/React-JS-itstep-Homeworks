import {Outlet, Link} from 'react-router-dom'
import './styles.css'
const Root = () => {
    return(
        <div>
            <header>
                <div className='header-text'>Welcome to Dikin Shop!</div>
                <div className='header-list'>
                    <Link to={'/stock'}>Stock</Link> 
                    <Link to={'/buy'}>Buy</Link> 
                    <Link to={'/sell'}>Sell</Link> 
                    <Link to={'/info'}>Info</Link>
                </div>
            </header>
            <Outlet />
        </div>
    )
}

export default Root