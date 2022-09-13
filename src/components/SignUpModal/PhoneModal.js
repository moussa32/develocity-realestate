import React, { Fragment } from "react";
import { RiCloseLine } from "react-icons/ri";
import logo from "../../assets/images/logo.png";
import FormMobile from "./FormMobile";
import styles from "./SignUpModal.module.css";

const PhoneDropBack = ({ show, close }) => {
  return <div className={styles.phoneDropBack} onClick={close}></div>;
};

const PhoneOverlay = ({ show, close }) => {
  return (
    <div className={styles.phoneOverlay}>
      <button className={styles.closeBtn} onClick={close}>
        <RiCloseLine />
      </button>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <h2 className={styles.formTitle}>enter your phone</h2>
      <FormMobile />
    </div>
  );
};

const PhoneModal = ({ show, close }) => {
  return (
    show && (
      <Fragment>
        <PhoneDropBack close={close} show={show} />
        <PhoneOverlay close={close} show={show} />
      </Fragment>
    )
  );
};

export default PhoneModal;
