import { Button } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../../../redux/features/ModalSlice";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import LoginModal from "../../../modules/Auth/Login/Login";
import SignupModal from "../../../modules/Auth/Signup/Signup";
import VerifyCode from "../../../modules/Auth/VerifyCode";

const NavButtons = () => {
  const activeModal = useSelector((state) => state.modal, shallowEqual);
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(activeModal);

  useEffect(() => {
    console.log("location changed");
  }, [location]);

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
