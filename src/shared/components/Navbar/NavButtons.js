import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../../../redux/features/ModalSlice";
import { lazy } from "react";
const LoginModal = lazy(() => import("../../../modules/Auth/Login/Login"));
const SignupModal = lazy(() => import("../../../modules/Auth/Signup/Signup"));
const VerifyCode = lazy(() => import("../../../modules/Auth/VerifyCode"));

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
      <LoginModal />
      <SignupModal />
      <VerifyCode />
    </section>
  );
};

export default NavButtons;
