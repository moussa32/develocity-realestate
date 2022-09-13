import BootstrapNavbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Logo from "../../../assets/images/logo.png";
import styles from "./Navbar.module.css";
import NavLinks from "./NavLinks";
import NavButtons from "./NavButtons";

const Navbar = () => {
  return (
    <BootstrapNavbar expand="md" bg="white" className={styles.navbarWrapper}>
      <Container>
        <BootstrapNavbar.Brand href="/">
          <img
            className={`${styles.navbarBrand} d-inline-block align-top`}
            src={Logo}
            width="77"
            height="73"
            alt="Akarat"
          />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="collapse-navbar" />
        <BootstrapNavbar.Collapse id="collapse-navbar">
          <NavLinks />
        </BootstrapNavbar.Collapse>
        <NavButtons />
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
