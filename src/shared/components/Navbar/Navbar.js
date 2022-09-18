import BootstrapNavbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Logo from "../../../assets/images/logo.png";
import NavLinks from "./NavLinks";
import NavButtons from "./NavButtons";
import { useSelector } from "react-redux";
import UserActions from "./UserActions";
import Search from "./Search";

const Navbar = () => {
  const userData = useSelector((state) => state.user);
  const isUser = Object.keys(userData ?? {}).length > 0;
  console.log(userData);

  return (
    <BootstrapNavbar expand="md" bg="white" className="navbarWrapper">
      <Container>
        <BootstrapNavbar.Brand href="/">
          <img className={`navbarBrand d-inline-block align-top`} src={Logo} width="77" height="73" alt="Akarat" />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="collapse-navbar" />
        <BootstrapNavbar.Collapse id="collapse-navbar">
          {!isUser && <NavLinks />}
          {isUser && <Search />}
          {isUser && <UserActions userData={userData} />}
        </BootstrapNavbar.Collapse>
        {!isUser && <NavButtons />}
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
