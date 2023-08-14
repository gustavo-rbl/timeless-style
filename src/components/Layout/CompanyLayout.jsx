import { NavLink, Outlet } from "react-router-dom";
import IndexStyle from "../../css/Index.module.css";
import Animation from "../../css/Animation.module.css";
function CompanyLayout() {
  return (
    <div className={Animation.fadeIn}>
      <h2>Company</h2>

      <nav>
        <ul className={`${IndexStyle.resetUl} ${IndexStyle.displayFlex} ${IndexStyle.gap2}`}>
          <li>
            <NavLink
              to="."
              end
              className={({ isActive }) => (isActive ? IndexStyle.buttonV02 : IndexStyle.buttonV01)}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="contact"
              className={({ isActive }) => (isActive ? IndexStyle.buttonV02 : IndexStyle.buttonV01)}
            >
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink
              to="privacy-policy"
              className={({ isActive }) => (isActive ? IndexStyle.buttonV02 : IndexStyle.buttonV01)}
            >
              Privacy Policy
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default CompanyLayout;
