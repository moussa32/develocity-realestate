import React from "react";
import styles from "./Banner.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Banner = () => {
  const Home = useSelector((state) => state.home.data);

  return (
    <div className="container">
      <div className={styles.bannerBlock}>
        <img src={Home.data?.banner?.image ? Home.data.banner.image : null} alt="banner image" />
        <div className={styles.bannerCover}>
          <p>now you can sell your porpirty easily, conveniently and in a safe way</p>
          <Link to="/sell" className={styles.sellBtn}>
            + sell
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
