import BootstrapNavbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Logo from "../../../assets/images/logo.png";
import NavLinks from "./NavLinks";
import NavButtons from "./NavButtons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { lazy } from "react";
const Search = lazy(() => import("./Search"));
const UserActions = lazy(() => import("./UserActions"));

const Navbar = () => {
  const userData = useSelector((state) => state.user);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <BootstrapNavbar expand="md" bg="white" className="navbarWrapper" style={{ zIndex: 1010 }}>
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          <img className={`navbarBrand d-inline-block align-top`} src={Logo} width="77" height="73" alt="Akarat" />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="collapse-navbar" />
        <BootstrapNavbar.Collapse id="collapse-navbar">
          {!isUserLoggedIn && <NavLinks />}
          {isUserLoggedIn && <Search />}
          {isUserLoggedIn && <UserActions userData={userData} />}
        </BootstrapNavbar.Collapse>
        {!isUserLoggedIn && <NavButtons />}
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
