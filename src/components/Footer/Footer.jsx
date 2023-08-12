import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaSquareYoutube, FaTwitter } from "react-icons/fa6";
import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <div>
        <h3>Customer Service</h3>

        <nav>
          <ul className={style.services}>
            <li>
              <Link to="#">FAQs</Link>
            </li>

            <li>
              <Link to="#">Order Lookup</Link>
            </li>

            <li>
              <Link to="#">Returns</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <h3>Credit Card</h3>

        <nav>
          <ul className={style.services}>
            <li>
              <Link to="#">Pay</Link>
            </li>

            <li>
              <Link to="#">Apply</Link>
            </li>

            <li>
              <Link to="#">Benefits</Link>
            </li>

            <li>
              <Link to="#">Gift Card</Link>
            </li>

            <li>
              <Link to="#">Gift Card Balance</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <h3>Connect With us</h3>

        <nav>
          <ul className={style.social}>
            <li>
              <Link to="#">
                <FaFacebookF />
              </Link>
            </li>

            <li>
              <Link to="#">
                <FaInstagram />
              </Link>
            </li>

            <li>
              <Link to="#">
                <FaSquareYoutube />
              </Link>
            </li>

            <li>
              <Link to="#">
                <FaTwitter />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
