import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setShowModal } from "../../../redux/features/ModalSlice";
import LoginModal from "../../../modules/Auth/Login/Login";
import SignupModal from "../../../modules/Auth/Signup/Signup";
import VerifyCode from "../../../modules/Auth/VerifyCode";

const NavButtons = () => {
  const dispatch = useDispatch();

  return (
    <section className="navButtonsWrapper">
      <Button
        className="text-primary bg-transparent border-0 fs-md text-capitalize me-4"
        onClick={() => dispatch(setShowModal("login"))}
      >
        login
      </Button>
      <Button
        varinat="primary"
        className="signupButton text-capitalize fw-semibold fs-md text-white"
        onClick={() => dispatch(setShowModal("signup"))}
      >
        Sign Up
      </Button>
      <LoginModal />
      <SignupModal />
      <VerifyCode />
    </section>
  );
};

export default NavButtons;
