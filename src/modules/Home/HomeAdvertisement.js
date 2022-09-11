import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";
import styles from "./HomeAdvertisement.module.css";

const HomeAdvertisement = () => {
  const Home = useSelector((state) => state.home.data);

  return (
    <div className={styles.advBlock}>
      <img src={Home.data?.ad?.image && Home.data.ad.image} alt="advertisement" />
    </div>
  );
};

export default HomeAdvertisement;
