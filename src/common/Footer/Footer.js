import React, { Fragment , useEffect } from "react";
import {Link} from "react-router-dom";
import {BsFacebook} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import {AiOutlineCopyright} from "react-icons/ai";
import styles from "./Footer.module.css";
import { useDispatch, useSelector } from 'react-redux';
import {fetchFooter} from "../../pages/DataFetch/FooterFetchData";

const Footer =() =>{

    const Footer = useSelector(state => state.footer.data);
    console.log("reko" , Footer?.data?.website_logo)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchFooter());
  
    }, [dispatch ]);

    return(
        <Fragment>
        <div className={styles.footer}>
        <div className="container">
        <div className={styles.footerContent}>
        <div className={styles.footerBlock}>
        <Link to="/" ><img src={Footer?.data?.website_logo} alt="logo"/></Link>
        <p className={styles.footerParag}>{Footer?.data?.website_bio}</p>
        <ul className={styles.social}>
        <li><a href={Footer?.data?.facebook}><BsFacebook/></a></li>
        <li><a href={Footer?.data?.twitter}><BsTwitter/></a></li>
        <li><a href={Footer?.data?.linkedin}><BsLinkedin/></a></li>
        </ul>
        </div>
        <div className={styles.footerBlock2}>
        <h1>page</h1>
        <ul className={styles.footerLinks}>
        <li><Link to="/" className={styles.footerLink}>homepage</Link></li>
        <li><Link to="/features" className={styles.footerLink}>features</Link></li>
        <li><Link to="/about" className={styles.footerLink}>about us</Link></li>
        <li><Link to="/agents" className={styles.footerLink}>agents</Link></li>
        </ul>
        </div>
        <div className={styles.footerBlock2}>
        <h1>support</h1>
        <ul className={styles.footerLinks}>
        <li><Link to="/faq" className={styles.footerLink}>FAQs</Link></li>
        <li><Link to="/support" className={styles.footerLink}>support center</Link></li>
        <li><Link to="/security" className={styles.footerLink}>security</Link></li>
        
        </ul>
        </div>
        <div className={styles.footerBlock2}>
        <h1>contact us</h1>
        <ul className={styles.footerLinks}>
        <li  className={styles.footerLink2}>{Footer?.data?.phone}</li>
        <li  className={styles.footerLink2}>{Footer?.data?.email}</li>
        <li  className={styles.footerLink2}>{Footer?.data?.address}</li>
        </ul>
        </div>
        </div>
        </div>
        </div>
        <div className={styles.copy}>
        <span><AiOutlineCopyright/>2022.All Rights Reserved</span>
        </div>
        </Fragment>
    )
}

export default Footer;