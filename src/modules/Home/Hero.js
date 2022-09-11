import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import styles from "./Hero.module.css";

const Hero = () => {
  const Home = useSelector((state) => state.home.data);

  return (
    <section className={styles.bannerBlock}>
      <div className={`position-absolute w-100 h-100 ${styles.bannerCover}`} />
      <img src={Home.data?.banner?.image && Home.data.banner.image} alt="banner image" />
      <div className="position-absolute top-50 start-50 translate-middle w-100">
        <div className="d-flex flex-column justify-content-center aligen-items-center text-center">
          <p className={`text-white fs-2xl text-capitalize mb-0 ${styles.heroP}`}>
            now you can sell your porpirty easily, conveniently
          </p>
          <p className={`text-white fs-2xl text-capitalize mb-4 mt-2 ${styles.heroP}`}>and in a safe way</p>
          <Button
            as={Link}
            to="/sell"
            variant="primary"
            className={`${styles.sellButton} text-white fs-md text-uppercase d-flex align-items-center justify-content-center mx-auto fw-semibold`}
          >
            <FaPlus className="me-2" />
            sell
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
