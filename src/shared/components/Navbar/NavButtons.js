import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Login from "../../../modules/Auth/Login/Login";
import { setShowModal } from "../../../redux/features/ModalSlice";
import styles from "./NavButtons.module.scss";

const NavButtons = () => {
  const dispatch = useDispatch();

  return (
    <section className={`${styles.navButtonsWrapper}`}>
      <Button
        className="text-primary bg-transparent border-0 fs-md text-capitalize me-4"
        onClick={() => dispatch(setShowModal({ view: "login" }))}
      >
        login
      </Button>
      <Button varinat="primary" className={`${styles.signupButton} text-capitalize fw-semibold fs-md text-white`}>
        Sign Up
      </Button>
      <Login />
    </section>
  );
};

export default NavButtons;
