import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import IndexStyle from "../../css/Index.module.css";
import style from "./Header.module.css";
import { FaBars, FaCartShopping, FaX } from "react-icons/fa6";

function Header() {
  const [isToggle, setIsToggle] = useState(false);

  // toggles mobile menu
  const toggleMenu = () => {
    setIsToggle((old) => !old);
  };

  // auto close mobile menu
  const handleExpanded = (e) => {
    if (e.target.tagName === "UL") return;

    if (isToggle) setIsToggle(false);
  };

  return (
    <header className={style.header}>
      <div className={style.hamburgerMenu} onClick={toggleMenu}>
        {isToggle ? <FaX /> : <FaBars />}
      </div>

      <h2 className={style.hero} onClick={handleExpanded}>
        <Link to="." className={IndexStyle.gradientText}>
          <span className={IndexStyle.fontWeight400}>Timeless</span>Style
        </Link>
      </h2>

      <nav className={`${style.nav} ${isToggle ? style.navActive : null}`}>
        <ul className={style.navLinks} onClick={handleExpanded}>
          <li className={style.homeMobile}>
            <NavLink to="." className={({ isActive }) => (isActive ? style.active : style.navLink)}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="products"
              className={({ isActive }) => (isActive ? style.active : style.navLink)}
            >
              Products
            </NavLink>
          </li>

          <li>
            <NavLink
              to="company"
              className={({ isActive }) => (isActive ? style.active : style.navLink)}
            >
              Company
            </NavLink>
          </li>

          <li>
            <NavLink to="cart" className={style.cart}>
              <FaCartShopping />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
