import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setShowModal } from "../../../redux/features/ModalSlice";
import Login from "../../../modules/Auth/Login/Login";
import Signup from "../../../modules/Auth/Signup/Signup";

const NavButtons = () => {
  const dispatch = useDispatch();

  return (
    <section className="navButtonsWrapper">
      <Button
        className="text-primary bg-transparent border-0 fs-md text-capitalize me-4"
        onClick={() => dispatch(setShowModal({ view: "login" }))}
      >
        login
      </Button>
      <Button
        varinat="primary"
        className="signupButton text-capitalize fw-semibold fs-md text-white"
        onClick={() => dispatch(setShowModal({ view: "signup" }))}
      >
        Sign Up
      </Button>
      <Login />
      <Signup />
    </section>
  );
};

export default NavButtons;
