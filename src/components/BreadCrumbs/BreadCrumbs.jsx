import { nanoid } from "nanoid";
import { Link, useLocation } from "react-router-dom";
import style from "./BreadCrumbs.module.css";

function BreadCrumbs() {
  const { pathname } = useLocation();

  let currentLink = "";

  const crumbs = pathname
    .split("/")
    .filter((c) => c !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <Link to={currentLink} key={nanoid()} className={style.crumb}>
          {crumb}
        </Link>
      );
    });

  return <div className={style.breadCrumbs}>{crumbs}</div>;
}

export default BreadCrumbs;
