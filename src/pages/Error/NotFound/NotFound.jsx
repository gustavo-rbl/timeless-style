import { Link } from "react-router-dom";
import IndexStyle from "../../../css/Index.module.css";
import Animation from "../../../css/Animation.module.css";
import errorImg from "../../../assets/img/errorImg.svg";

function NotFound() {
  return (
    <div className={Animation.fadeIn}>
      <h2>Uh oh...</h2>

      <p>We are experiencing problems</p>

      <p>Please try again later</p>

      <img src={errorImg} alt="Error Image" />

      <Link to="/" className={IndexStyle.buttonV01}>
        Try Again
      </Link>
    </div>
  );
}

export default NotFound;
