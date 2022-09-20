import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCloseModal, setShowModal } from "../../../redux/features/ModalSlice";
import { IoMdLock } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Formik } from "formik";
import { globalInstance } from "../../../api/constants";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ThirdPartyButtons from "../ThirdPartyButtons";
import UseAnimations from "react-useanimations";
import infinity from "react-useanimations/lib/infinity";
import ModalHeader from "../ModalHeader";
import { FaUserAlt } from "react-icons/fa";
import signupSchema from "../../../shared/schemas/SignupSchema";

const Signup = () => {
  const currentModal = useSelector((state) => state.modal.view);
  const showModalStatus = useSelector((state) => state.modal.open);
  const dispatch = useDispatch();

  const handleSignupForm = async (data, actions) => {
    const { setSubmitting, setErrors } = actions;
    setSubmitting(true);
    const sendData = await globalInstance.post("/auth/register", { type: "email", ...data });
    const { data: responseData } = sendData;

    if (responseData.data) {
      dispatch(setShowModal("verify-code"));
      localStorage.setItem("register", JSON.stringify({ step: "verify-code", email: data.email }));
    } else {
      setErrors({ [responseData.field]: responseData.msg });
    }
  };

  const handleClose = useCallback(() => {
    dispatch(setCloseModal());
  }, [dispatch]);

  const handleLoginSwitch = () => {
    dispatch(setShowModal("login"));
  };

  return (
    <Modal show={(currentModal === "signup") & showModalStatus && true} onHide={handleClose}>
      <Modal.Body className="px-4">
        <ModalHeader
          title="welcome to real state"
          subTitle="sign up"
          hints={
            <>
              <p className="fs-sm mb-0">the trusted community of</p>
              <p className="fs-sm">buyers and sellers.</p>
            </>
          }
        />
        <Formik
          validationSchema={signupSchema}
          initialValues={{ email: "", password: "", username: "" }}
          onSubmit={handleSignupForm}
          validateOnChange={true}
          validateOnBlur={false}
        >
          {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors, isSubmitting }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="username-input">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation className="mb-3">
                  <InputGroup.Text
                    id="basic-addon1"
                    className={`${
                      !!errors.username ? "border-danger" : "border-primary"
                    } bg-transparent border-1 rounded border-end-0 rounded-0 rounded-start formIcon`}
                  >
                    <FaUserAlt />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Enter Your Username"
                    onChange={handleChange}
                    name="username"
                    onBlur={handleBlur}
                    value={values.username}
                    aria-label="Username"
                    type="text"
                    className={`${
                      !!errors.username ? "border-danger" : "border-primary"
                    } bg-transparent border-start-0 border-1 shadow-none fs-sm formInput`}
                    aria-describedby="username-input"
                    isInvalid={!!errors.username}
                    disabled={isSubmitting}
                  />
                  {errors.username && <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>}
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="email-input">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation className="mb-3">
                  <InputGroup.Text
                    id="basic-addon1"
                    className={`${
                      !!errors.email ? "border-danger" : "border-primary"
                    } bg-transparent border-1 rounded border-end-0 rounded-0 rounded-start formIcon`}
                  >
                    <MdEmail />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Enter Your Email"
                    onChange={handleChange}
                    name="email"
                    onBlur={handleBlur}
                    value={values.email}
                    aria-label="Email"
                    type="email"
                    className={`${
                      !!errors.email ? "border-danger" : "border-primary"
                    } bg-transparent border-start-0 border-1 shadow-none fs-sm formInput`}
                    aria-describedby="email-input"
                    isInvalid={!!errors.email}
                    disabled={isSubmitting}
                  />
                  {errors.email && <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>}
                </InputGroup>
              </Form.Group>
              <Form.Group controlId="password-input">
                <Form.Label>Password</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text
                    className={`${
                      !!errors.password ? "border-danger" : "border-primary"
                    } bg-transparent border-1 rounded border-end-0 rounded-0 rounded-start formIcon`}
                  >
                    <IoMdLock />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Enter Your Password"
                    onChange={handleChange}
                    name="password"
                    onBlur={handleBlur}
                    value={values.password}
                    aria-label="Password"
                    type="password"
                    className={`${
                      !!errors.password ? "border-danger" : "border-primary"
                    } bg-transparent border-start-0 border-1 shadow-none formInput fs-sm`}
                    aria-describedby="password-input"
                    isInvalid={!!errors.password}
                    disabled={isSubmitting}
                  />
                  {errors.password && <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>}
                </InputGroup>
              </Form.Group>
              <Button
                className="text-white w-100 fs-md d-flex align-items-center justify-content-center gap-2 my-4"
                variant="primary"
                type="submit"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting && <UseAnimations animation={infinity} size={40} strokeColor="#fff" autoplay={true} />}
                Sign up
              </Button>
            </Form>
          )}
        </Formik>
        <p className="text-capitalize text-center">
          already have an account ?{" "}
          <span role="button" as={Button} onClick={handleLoginSwitch} className="text-primary">
            login
          </span>
        </p>
        <ThirdPartyButtons />
      </Modal.Body>
    </Modal>
  );
};

export default Signup;
