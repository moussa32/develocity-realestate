import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChat } from "react-icons/bs";
import { AiOutlineBell } from "react-icons/ai";
import { Link } from "react-router-dom";

import styles from "./NavbarAfterLogin.module.css";

const NavbarAfterLogin = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <div className={styles.navBlock}>
      <div className="container">
        <div className={styles.navBar}>
          <div className={styles.logo}>
            <a href="/">
              <img src={logo} alt="logo"></img>
            </a>
          </div>

          <div className={styles.firstSearch}>
            <input type="text" placeholder="Georgia" />
            <AiOutlineSearch className={styles.searchIcon} />
          </div>

          <div className={styles.secondSearch}>
            <input type="text" placeholder="Find Home, Apartment And More..." />
            <AiOutlineSearch className={styles.searchIcon2} />
          </div>

          <ul className={styles.chatBar}>
            <li>
              <button>
                <BsChat />
              </button>
            </li>
            <li>
              <button>
                <AiOutlineBell />
              </button>
            </li>
          </ul>

          <div className={styles.navBtns}></div>
        </div>
      </div>
    </div>
  );
};

export default NavbarAfterLogin;
