import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCloseModal, setShowModal } from "../../redux/features/ModalSlice";
import { globalInstance } from "../../api/constants";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "./ModalHeader";
import ReactCodeInput from "react-verification-code-input";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import useCountDown from "react-countdown-hook";
import { handleSignupTypeOutput } from "../../shared/utils/handleSignupType";
import { resetSignupStep } from "../../redux/features/SignupSlice";

const INITIAL_COUNT = 10 * 1000;

const VerifyCode = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [timeLeft, { start, pause, resume, reset }] = useCountDown(INITIAL_COUNT, 1000);
  const currentModal = useSelector((state) => state.modal.view);
  const showModalStatus = useSelector((state) => state.modal.open);
  const signupStep = useSelector((state) => state.signupStep);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setCloseModal());
      setIsLoading(false);
      setStatus({ type: "", message: "" });
    };
  }, []);

  useEffect(() => {
    if ((currentModal === "verify-code") & showModalStatus && true) {
      start();
    }
  }, [currentModal, showModalStatus]);

  const handleVerifyCode = async (code) => {
    setIsLoading(true);
    const sendData = await globalInstance.post("/auth/code_check", {
      type: signupStep.type,
      code,
      [handleSignupTypeOutput(signupStep.type)]: signupStep[handleSignupTypeOutput(signupStep.type)],
    });
    const { data: responseData } = sendData;

    if (responseData.code === 200) {
      setStatus({ type: "success", message: "Your account has been successfully activated" });
      localStorage.removeItem("register");
      dispatch(setShowModal("login"));
    } else {
      setStatus({ type: "danger", message: responseData.msg });
    }
    setTimeout(() => {
      setStatus({ type: "", message: "" });
    }, 2500);
    setIsLoading(false);
  };

  const handleResendCode = async () => {
    const sendData = await globalInstance.post("/auth/resend_code", {
      type: signupStep.type,
      [handleSignupTypeOutput(signupStep.type)]: signupStep[handleSignupTypeOutput(signupStep.type)],
    });
    const { data: responseData } = sendData;
    console.log(responseData);
    if (responseData.code === 200) {
      reset();
      start();
    }
  };

  const handleClose = useCallback(() => {
    dispatch(setCloseModal());
  }, [dispatch]);

  const resetStep = () => {
    if (signupStep.type === "phone") {
      dispatch(setShowModal("phone"));
    } else {
      dispatch(setShowModal("signup"));
    }
    dispatch(resetSignupStep());
  };

  return (
    <Modal show={(currentModal === "verify-code") & showModalStatus ? true : false} onHide={handleClose}>
      <Modal.Body className="px-4">
        <ModalHeader
          title="Enter Code Received"
          hints={
            <>
              <p className="fs-sm my-4">
                We Sent A 4-Digit Code to{" "}
                <span className="text-primary">
                  {`${handleSignupTypeOutput(signupStep.type) === "phone" && "+961"}${
                    signupStep[handleSignupTypeOutput(signupStep.type)]
                  }`}
                </span>
              </p>
            </>
          }
        />
        <ReactCodeInput
          type="text"
          fields={4}
          onComplete={handleVerifyCode}
          className={`verifyCodeWrapper my-4 ${status.type === "danger" && "errorCode"}`}
          fieldWidth={96}
          fieldHeight={96}
          loading={isLoading}
        />
        {status && (
          <Alert className="text-center" variant={status.type}>
            {status.message}
          </Alert>
        )}
        <div className="text-center fs-md">
          <div className="my-3 mb-4">
            {timeLeft / 1000 !== 0 && (
              <p className="mb-1 fw-semibold text-capitalize">After {timeLeft / 1000} seconds you can</p>
            )}
            <button
              disabled={timeLeft / 1000 !== 0}
              className={`bg-transparent border-0 fs-md text-capitalize ${
                timeLeft !== 0 ? "text-muted" : "text-primary"
              }`}
              onClick={handleResendCode}
            >
              resend code
            </button>
          </div>
          <p className="mb-0 fw-semibold">If you have not received the code by SMS,</p>
          <p>please request</p>
          {handleSignupTypeOutput(signupStep.type) === "phone" && (
            <button className="text-primary bg-transparent border-0 fs-md text-capitalize mb-4">
              resend code by call
            </button>
          )}
          <Button
            variant="outline-primary"
            className="text-primary w-100 fs-md text-capitalize mb-4"
            onClick={resetStep}
          >
            Want to change {handleSignupTypeOutput(signupStep.type)}
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default VerifyCode;
