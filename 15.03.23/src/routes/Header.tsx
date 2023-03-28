import { Link, Outlet } from "react-router-dom";

const Header = () => {

  return (
    <>
      <header>
        <Link to="/">Main</Link>
        <Link to="/login">Login</Link>
        <Link to="/help">Help</Link>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Header;