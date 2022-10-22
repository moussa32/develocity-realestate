import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../../../redux/features/ModalSlice";
import { lazy } from "react";
import CreatePassword from "../../../modules/Auth/Phone/CreatePassword";
const LoginModal = lazy(() => import("../../../modules/Auth/Login/Login"));
const PhoneModal = lazy(() => import("../../../modules/Auth/Phone/Phone"));
const SignupModal = lazy(() => import("../../../modules/Auth/Signup/Signup"));
const VerifyCode = lazy(() => import("../../../modules/Auth/VerifyCode"));

const NavButtons = () => {
  const signupStep = useSelector((state) => state.signupStep.step);
  const dispatch = useDispatch();

  const showLoginModal = () => dispatch(setShowModal("login"));
  const showSignupModal = () => {
    if (signupStep === "verify-code") {
      dispatch(setShowModal("verify-code"));
    } else {
      dispatch(setShowModal("signup"));
    }
  };

  return (
    <section className="navButtonsWrapper">
      <Button className="text-primary bg-transparent border-0 fs-md text-capitalize me-4" onClick={showLoginModal}>
        login
      </Button>
      <Button
        varinat="primary"
        className="signupButton text-capitalize fw-semibold fs-md text-white"
        onClick={showSignupModal}
      >
        Sign Up
      </Button>
      <LoginModal />
      <SignupModal />
      <PhoneModal />
      <VerifyCode />
      <CreatePassword />
    </section>
  );
};

export default NavButtons;
