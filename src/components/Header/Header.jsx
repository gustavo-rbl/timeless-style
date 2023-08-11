import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h2>
        <Link to=".">TimelessStyle</Link>
      </h2>

      <nav>
        <ul>
          <li>
            <NavLink to="products">Products</NavLink>
          </li>

          <li>
            <NavLink to="company">Company</NavLink>
          </li>

          <li>
            <NavLink to="cart">Cart</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
