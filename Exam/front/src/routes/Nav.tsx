import {Outlet, Link} from 'react-router-dom'

const Nav = () => {
    return(
        <div>
            <div>
                <nav>
                    <Link to={'/'}>Main</Link>
                    <Link to={'/stock'}>Stock</Link>
                    <Link to={'/actions'}>Actions</Link>
                </nav>
            </div>
            <Outlet />
        </div>
    )
}

export default Nav;