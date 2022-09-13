import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { RiCloseLine } from "react-icons/ri";
import { MdMail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import logo from "../../assets/images/logo.png";
import google from "../../assets/google.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import styles from "./LoginModal.module.css";
import LoginMobile from "./LoginMobile";
import { globalInstance } from "../../pages/DataFetch/constat";
import { setCredentials } from "../../pages/DataFetch/AuthSlice";
import { useDispatch } from "react-redux";

const BackDrop = ({ close, show }) => {
  return <div className={`${styles.backDrop} ${show ? styles.show : null}`} onClick={close}></div>;
};

const Overlay = ({ show, close }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formType, setFormType] = useState("");
  const [showLoginPhone, setShowLoginPhone] = useState(false);
  const dispatch = useDispatch();

  const showPhone = () => {
    setShowLoginPhone(true);
  };

  const submitLogin = async (ele) => {
    ele.preventDefault();

    const loginData = {
      email: email,
      password: password,
      type: "email",
    };
    try {
      const resquestLogin = await globalInstance.post("auth/login", loginData);
      const { data } = resquestLogin;
      console.log(data);
      if (data.code === 200) {
        dispatch(setCredentials({ ...data.data }));
      }
    } catch (error) {
      console.log(error);
    }
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
      <h2 className={styles.formTitle}>log in</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form onSubmit={submitLogin}>
            <label>email</label>
            <div className={styles.inputBlock}>
              <Field
                className={styles.inputField}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="enter your email"
                type="email"
                name="email"
              />
              <MdMail className={styles.inputIcon} />
              <ErrorMessage name="email" component="div" className={styles.error} />
            </div>

            <label>password</label>
            <div className={styles.inputBlock}>
              <Field
                className={styles.inputField}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="enter your password"
                type="password"
                name="password"
              />
              <MdLock className={styles.inputIcon} />
              <ErrorMessage name="password" component="div" />
            </div>

            <div className={styles.hide}>
              <Field className={styles.inputField} value={formType} placeholder="type" />
            </div>

            <button className={styles.forgetBtn}>forgot password ?</button>
            <button type="submit" disabled={isSubmitting} className={styles.loginBtn} onClick={submitLogin}>
              login
            </button>
          </Form>
        )}
      </Formik>
      <h2 className={styles.formTitle2}>or login with</h2>
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
          <button onClick={showPhone}>
            <BsTelephoneFill />
          </button>
          <LoginMobile show={showLoginPhone} close={close} />
        </li>
      </ul>
      <p className={styles.text2}>
        by continuing , you are accepting{" "}
        <Link className={styles.link} to="/terms">
          real state terms of use
        </Link>{" "}
        and{" "}
        <Link className={styles.link} to="/policy">
          privacy policy
        </Link>
      </p>
    </div>
  );
};

const LoginModal = ({ show, close }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <BackDrop close={close} show={show} />
          <Overlay show={show} close={close} />
        </Fragment>,
        document.getElementById("loginModal")
      )}
    </Fragment>
  );
};

export default LoginModal;
