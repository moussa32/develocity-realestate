import { Formik } from "formik";
import { useCallback } from "react";
import { IoMdLock } from "react-icons/io";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useDispatch, useSelector } from "react-redux";
import { setCloseModal, setShowModal } from "../../../redux/features/ModalSlice";
import ModalHeader from "../ModalHeader";
import UseAnimations from "react-useanimations";
import infinity from "react-useanimations/lib/infinity";
import { passwordSchema } from "../../../shared/schemas/PasswordSchema";
import { setSignupPhone, setSignupStep } from "../../../redux/features/SignupSlice";
import { globalInstance } from "../../../api/constants";

const CreatePassword = () => {
  const currentModal = useSelector((state) => state.modal.view);
  const showModalStatus = useSelector((state) => state.modal.open);
  const dispatch = useDispatch();

  const handleCreatePasswordForm = async (data, actions) => {
    const { setSubmitting, setErrors } = actions;
    setSubmitting(true);
    const sendData = await globalInstance.post("/auth/register", {
      type: "phone",
      phone: sessionStorage.getItem("phoneNumber"),
      password: data.password,
    });
    const { data: responseData } = sendData;
    console.log(sessionStorage.getItem("phoneNumber"));

    if (responseData.data) {
      dispatch(setShowModal("verify-code"));
      dispatch(
        setSignupPhone({ type: "phone", phone: sessionStorage.getItem("phoneNumber"), password: data.password })
      );
      dispatch(setSignupStep({ step: "verify-code" }));
    } else {
      setErrors({ [responseData.field]: responseData.msg });
    }
  };

  const handleClose = useCallback(() => {
    dispatch(setCloseModal());
  }, [dispatch]);

  return (
    <Modal show={(currentModal === "createPassword") & showModalStatus && true} onHide={handleClose}>
      <Modal.Body className="px-4">
        <ModalHeader
          title="Create a password to login faster"
          hints={
            <>
              <h2 className="fw-semibold fs-md mb-4">next time</h2>
              <p className="mb-0 fs-sm text-dark text-capitalize">
                You are creating a password for{" "}
                <span className="text-primary">{`+961${sessionStorage.getItem("phoneNumber")}`}</span>
              </p>
              <p className="fs-sm text-dark text-capitalize">This will help you login faster next time</p>
            </>
          }
        />
        <Formik
          initialValues={{ password: "", confirmPassword: "" }}
          onSubmit={handleCreatePasswordForm}
          validateOnChange={true}
          validateOnBlur={false}
          validationSchema={passwordSchema}
        >
          {({ errors, values, handleChange, handleBlur, touched, isSubmitting, handleSubmit }) => (
            <Form noValidate onSubmit={handleSubmit} className="mt-4">
              <Form.Group className="mb-3" controlId="password-input">
                <Form.Label className="text-dark fs-md text-capitalize">New Password</Form.Label>
                <InputGroup hasValidation className="mb-2">
                  <InputGroup.Text
                    className={`${
                      !!errors.password && touched.password ? "border-danger" : "border-primary"
                    } bg-transparent border-1 rounded border-end-0 rounded-0 rounded-start formIcon`}
                  >
                    <IoMdLock />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Enter Your New Password"
                    onChange={handleChange}
                    name="password"
                    onBlur={handleBlur}
                    value={values.password}
                    aria-label="password"
                    type="password"
                    className={`${
                      !!errors.password && touched.password ? "border-danger" : "border-primary"
                    } bg-transparent border-start-0 border-1 shadow-none fs-sm formInput`}
                    aria-describedby="password-input"
                    isInvalid={!!errors.password && touched.password}
                    disabled={isSubmitting}
                  />
                  {errors.password && touched.password && (
                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                  )}
                </InputGroup>
                <Form.Text className="text-primary mb-3 fs-xs text-capitalize">
                  Use minimum 6 characters, and at least one letter and one number
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="confirmPassword-input">
                <Form.Label className="text-dark fs-md text-capitalize">confirm new password</Form.Label>
                <InputGroup hasValidation className="mb-2">
                  <InputGroup.Text
                    className={`${
                      !!errors.confirmPassword && touched.confirmPassword ? "border-danger" : "border-primary"
                    } bg-transparent border-1 rounded border-end-0 rounded-0 rounded-start formIcon`}
                  >
                    <IoMdLock />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Confirm your new password"
                    onChange={handleChange}
                    name="confirmPassword"
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                    aria-label="Confirm Password"
                    type="password"
                    className={`${
                      !!errors.confirmPassword && touched.confirmPassword ? "border-danger" : "border-primary"
                    } bg-transparent border-start-0 border-1 shadow-none fs-sm formInput`}
                    aria-describedby="password-input"
                    isInvalid={!!errors.confirmPassword && touched.confirmPassword}
                    disabled={isSubmitting}
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
                  )}
                </InputGroup>
              </Form.Group>
              {errors.phone && <p className="text-danger text-center fs-sm fw-semibold">{errors.phone}</p>}
              {console.log(errors)}
              <Button
                className="text-white w-100 fs-md d-flex align-items-center justify-content-center gap-2 mt-4"
                variant="primary"
                type="submit"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting && <UseAnimations animation={infinity} size={40} strokeColor="#fff" autoplay={true} />}
                Create Password
              </Button>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default CreatePassword;
