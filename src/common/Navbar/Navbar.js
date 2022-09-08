import React , {useState} from "react";
import logo from "../../assets/logo.png";
import {Link} from "react-router-dom";
import LoginModal from "../../components/ModalLogin/LoginModal";
import SignUpModal from "../../components/SignUpModal/SignUpModal";
import styles from "./Navbar.module.css";

const Navbar =()=>{
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [show,setShow] = useState(false);
  const [showSign,setShowSign] = useState(false);


  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const showModal =() =>{
    setShow(true)
  }
  const showModal2 =() =>{
    setShowSign(true)
  }
    return(
      <div className={styles.navBlock}>
        <div className="container">
        <LoginModal show={show} close={()=> setShow(false)}/>
        <SignUpModal show={showSign} close={()=> setShowSign(false)}/>
        <div className={styles.navBar}>
        <div className={styles.logo}>
        <a href="/"><img src={logo} alt="logo"></img></a>
        </div>

        <nav className={`${styles.nav} navbar navbar-expand-lg navbar-light`}>
 
       <button className={`${styles.navToggler} custom-toggler navbar-toggler`} type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
  <span className="navbar-toggler-icon"></span>
</button>
  <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
    <div className={`${styles.navbarMenu} navbar-nav`}>
      <Link className="nav-item nav-link " to="/">home </Link>
      <Link className="nav-item nav-link" to="/properties">properties</Link>
      <Link className="nav-item nav-link" to="/deals">hot deals</Link>
      <Link className="nav-item nav-link" to="/about">about us</Link>
      <Link className="nav-item nav-link" to="/contact">contact us</Link>
     
    </div>
  </div>
</nav>

<div className={styles.navBtns}>
<button className={styles.login} onClick={showModal}>login</button>
<button className={styles.sign} onClick={showModal2}>sign up</button>
</div>

        </div>
        
        </div>
        </div>
    )
}

export default Navbar;
