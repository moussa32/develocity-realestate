import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCloseModal } from "../../../redux/features/ModalSlice";
import { IoMdLock } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Formik } from "formik";
import { authentcatedInstance } from "../../../api/constants";
import { setUser } from "../../../redux/features/UserSlice";
import { Link } from "react-router-dom";
import loginSchema from "../../../shared/schemas/LoginSchema";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import DividerWithText from "../../../shared/components/DividerWithText";
import ThirdPartyButtons from "../ThirdPartyButtons";
import UseAnimations from "react-useanimations";
import infinity from "react-useanimations/lib/infinity";
import ModalHeader from "../ModalHeader";

const Phone = () => {
  const currentModal = useSelector((state) => state.modal.view);
  const showModalStatus = useSelector((state) => state.modal.open);
  const dispatch = useDispatch();

  const handleLoginForm = async (data, actions) => {
    const { setSubmitting, setErrors } = actions;
    setSubmitting(true);
    const sendData = await authentcatedInstance.post("/auth/login", { type: "phone", ...data });
    const { data: responseData } = sendData;
    setErrors({ [responseData.field]: responseData.msg });

    if (responseData.code === 200) {
      dispatch(setUser(responseData.data.user));
      dispatch(setCloseModal());
    }
  };

  const handleClose = useCallback(() => {
    dispatch(setCloseModal());
  }, [dispatch]);

  return (
    <Modal show={(currentModal === "phone") & showModalStatus && true} onHide={handleClose}>
      <Modal.Body className="px-4">
        <ModalHeader subTitle="enter your phone" />
        <Formik
          validationSchema={loginSchema}
          initialValues={{ phoneNumber: "" }}
          onSubmit={handleLoginForm}
          validateOnChange={true}
          validateOnBlur={false}
        >
          {({ handleSubmit, handleChange, handleBlur, values, touched, errors, isSubmitting }) => (
            <Form noValidate onSubmit={handleSubmit} className="mt-4">
              <Form.Group className="mb-3" controlId="email-input">
                <InputGroup hasValidation className="mb-3">
                  <InputGroup.Text
                    id="basic-addon1"
                    className={`${
                      !!errors.phoneNumber ? "border-danger" : "border-primary"
                    } bg-transparent border-1 rounded border-end-0 rounded-0 rounded-start formIcon text-primary fs-sm`}
                  >
                    +961
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Phone Number"
                    onChange={handleChange}
                    name="email"
                    onBlur={handleBlur}
                    value={values.phoneNumber}
                    aria-label="Email"
                    type="email"
                    className={`${
                      !!errors.phoneNumber && touched.phoneNumber ? "border-danger" : "border-primary"
                    } bg-transparent border-start-0 border-1 shadow-none fs-sm formInput`}
                    aria-describedby="email-input"
                    isInvalid={!!errors.phoneNumber && touched.phoneNumber}
                    disabled={isSubmitting}
                  />
                  {errors.phoneNumber && touched.phoneNumber && (
                    <Form.Control.Feedback type="invalid">{errors.phoneNumber}</Form.Control.Feedback>
                  )}
                </InputGroup>
              </Form.Group>
              <Button
                className="text-white w-100 fs-md d-flex align-items-center justify-content-center gap-2"
                variant="primary"
                type="submit"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting && <UseAnimations animation={infinity} size={40} strokeColor="#fff" autoplay={true} />}
                Next
              </Button>
            </Form>
          )}
        </Formik>
        <p
          className="text-secondary text-center my-4 fs-sm text-capitalize px-0 mx-0"
          style={{ color: "rgba(87, 87, 87, 0.58)" }}
        >
          We won't reveal your phone number to anyone else nor use it to send you spam
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default Phone;
