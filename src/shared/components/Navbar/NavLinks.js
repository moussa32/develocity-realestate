import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import styles from "./NavLinks.module.scss";

const NavLinks = () => {
  return (
    <Nav className={`mx-auto ${styles.navLinksWrapper} align-items-md-center`}>
      <NavLink
        className={({ isActive }) =>
          `${
            isActive && `text-primary border-bottom border-primary border-2`
          } text-center fw-bold fs-sm text-capitalize text-decoration-none ${styles.navLinkNormal}`
        }
        to="/"
      >
        home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${
            isActive && `text-primary border-bottom border-primary border-2`
          } text-center fw-bold fs-sm text-capitalize text-decoration-none ${styles.navLinkNormal}`
        }
        to="/properties"
      >
        properties
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${
            isActive && `text-primary border-bottom border-primary border-2`
          } text-center fw-bold fs-sm text-capitalize text-decoration-none ${styles.navLinkNormal}`
        }
        to="/hot-deals"
      >
        hot deals
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${
            isActive && `text-primary border-bottom border-primary border-2`
          } text-center fw-bold fs-sm text-capitalize text-decoration-none ${styles.navLinkNormal}`
        }
        to="/about-us"
      >
        about us
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${
            isActive && `text-primary border-bottom border-primary border-2`
          } text-center fw-bold fs-sm text-capitalize text-decoration-none ${styles.navLinkNormal}`
        }
        to="/contact-us"
      >
        contact us
      </NavLink>
    </Nav>
  );
};

export default NavLinks;
