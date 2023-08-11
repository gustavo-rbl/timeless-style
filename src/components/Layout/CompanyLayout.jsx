import { NavLink, Outlet } from "react-router-dom";

function CompanyLayout() {
  return (
    <>
      <h2>Company</h2>

      <nav>
        <ul>
          <li>
            <NavLink to="." end>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>

          <li>
            <NavLink to="privacy-policy">Privacy Policy</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default CompanyLayout;
