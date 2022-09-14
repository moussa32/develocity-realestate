import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCloseModal } from "../../redux/features/ModalSlice";
import { IoMdLock } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Formik } from "formik";
import loginSchema from "../../shared/schemas/LoginSchema";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import logo from "../../assets/images/logo.png";
import styles from "./Login.module.scss";
import { globalInstance } from "../../api/constants";
import { setUser } from "../../redux/features/UserSlice";

const Login = () => {
  const currentModal = useSelector((state) => state.modal.view);
  const showModalStatus = useSelector((state) => state.modal.open);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setCloseModal());
    };
  }, []);

  const handleClose = useCallback(() => {
    dispatch(setCloseModal({ view: "login" }));
  }, []);

  const handleLogin = () => {};

  return (
    <Modal show={(currentModal === "login") & showModalStatus && true} onHide={handleClose}>
      <Modal.Body className="px-4">
        <div className="text-center text-capitalize">
          <div className="mb-4">
            <img width={157} height={148} src={logo} alt="logo" />
          </div>
          <h2 className="fw-semibold fs-md">welcome to real state</h2>
          <p className="fs-sm mb-0">the trusted community of</p>
          <p className="fs-sm">buyers and sellers.</p>
          <h2 className="text-primary">log in</h2>
        </div>

        <Formik
          validationSchema={loginSchema}
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values, { setSubmitting, resetForm, validate }) => {
            // When button submits form and form is in the process of submitting, submit button is disabled
            console.log(values);
            setSubmitting(true);

            const requestLogin = await globalInstance.post("/auth/login", { type: "email", ...values });
            const { data } = requestLogin;
            if (data.code === 200) {
              dispatch(setUser(data.data.user));
              dispatch(setCloseModal({ view: "login", open: false }));
            }
            setSubmitting(false);
          }}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors, isSubmitting }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="email-input">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation className="mb-3">
                  <InputGroup.Text
                    id="basic-addon1"
                    className={`${
                      !!errors.email ? "border-danger" : "border-primary"
                    } bg-transparent border-1 rounded border-end-0 rounded-0 rounded-start ${styles.formIcon}`}
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
                    } bg-transparent border-start-0 border-1 shadow-none fs-sm ${styles.formInput}`}
                    aria-describedby="email-input"
                    isInvalid={!!errors.email}
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
                    } bg-transparent border-1 rounded border-end-0 rounded-0 rounded-start ${styles.formIcon}`}
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
                    } bg-transparent border-start-0 border-1 shadow-none ${styles.formInput} fs-sm`}
                    aria-describedby="password-input"
                    isInvalid={!!errors.password}
                  />
                  {errors.password && <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>}
                </InputGroup>
              </Form.Group>
              <Button className="text-primary bg-transparent p-0 mb-4 ms-auto d-block border-0">
                Forgot password?
              </Button>
              <Button
                className="text-white w-100 fs-md"
                variant="primary"
                type="submit"
                size="lg"
                disabled={isSubmitting}
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
