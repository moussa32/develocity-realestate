import React, { Fragment } from "react";
import { Box,  TextInput } from '@mantine/core';
import styles from "./LoginModal.module.css";
import FormLoginMobile from "./FormLoginMobile";
import logo from "../../assets/logo.png";
import {RiCloseLine} from "react-icons/ri";





const LoginMobile =({show, close}) =>{
    return(
        show &&(
        <Fragment>
        <div onClick={close} className={`${styles.backdropMobile} ${show? styles.show: null}`}>
        </div>
        <div className={`${styles.overlayMobile} ${show? styles.show: null}`}>
        <button className={styles.closeBtn} onClick={close}><RiCloseLine/></button>
        <div className={styles.logo}>
        <img src={logo} alt="logo"/>
        </div>
        <h1 className={styles.title}>welcome to real state</h1>
        <p className={styles.text}>the trusted community of buyers and sellers.</p>
        <h2 className={styles.formTitle}>log in</h2>
        <FormLoginMobile/>
        </div>
       
        </Fragment>
        )

    )
}

export default LoginMobile;