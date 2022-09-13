import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { RiCloseLine } from "react-icons/ri";
import { MdMail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import logo from "../../assets/images/logo.png";
import google from "../../assets/google.png";
import { Link } from "react-router-dom";
import Form from "./Form";

import LoginModal from "../ModalLogin/LoginModal";

/// You have to Import this line to
import "formik-stepper/dist/style.css";
import styles from "./SignUpModal.module.css";
import PhoneModal from "./PhoneModal";

const BackDrop2 = ({ close, show }) => {
  return <div className={`${styles.backDrop} ${show ? styles.show : null}`} onClick={close}></div>;
};

const Overlay2 = ({ show, close, show3, setShow3 }) => {
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);

  const handleShowPhoneModal = () => {
    setShowPhoneModal(true);
  };

  const showModalLoogin = () => {
    setShowModalLogin(true);
  };

  return (
    <div className={`${styles.overlay} ${show ? styles.show : null}`}>
      <button className={styles.closeBtn} onClick={close}>
        <RiCloseLine />
      </button>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <h1 className={styles.title}>welcome to real state</h1>
      <p className={styles.text}>the trusted community of buyers and sellers.</p>
      <h2 className={styles.formTitle}>sign up</h2>

      <Form />

      <p className={styles.text3}>
        already have an account ?{" "}
        <button className={styles.login} onClick={showModalLoogin}>
          login
        </button>
        <LoginModal show={showModalLogin} />
      </p>
      <ul className={styles.loginBtns}>
        <li>
          <button>
            <img src={google} className={styles.google} alt="google icon" />
          </button>
        </li>
        <li>
          <button>
            <FaFacebookF className={styles.fbIcon} />
          </button>
        </li>

        <li>
          <button onClick={handleShowPhoneModal}>
            <BsTelephoneFill />
          </button>

          <PhoneModal show={showPhoneModal} close={() => setShowPhoneModal(false)} />
        </li>
      </ul>
    </div>
  );
};

const SignUpModal = ({ show, close }) => {
  const [show3, setShow3] = useState(false);

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <BackDrop2 close={close} show={show} />
          <Overlay2 show={show} close={close} show3={show3} setShow3={setShow3} />
        </Fragment>,
        document.getElementById("signUpModal")
      )}
    </Fragment>
  );
};

export default SignUpModal;
