import { Button } from "react-bootstrap";
import styles from "./NavButtons.module.scss";

const NavButtons = () => {
  return (
    <section className={`${styles.navButtonsWrapper}`}>
      <Button className="text-primary bg-transparent border-0 fs-md text-capitalize me-4">login</Button>
      <Button varinat="primary" className={`${styles.signupButton} text-capitalize fw-semibold fs-md text-white`}>
        Sign Up
      </Button>
    </section>
  );
};

export default NavButtons;
