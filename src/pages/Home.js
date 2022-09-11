import { useEffect } from "react";
import { useDispatch } from "react-redux";
import About from "../components/About/About";
import Advertisement from "../components/Advertisement/Advertisement";
import Banner from "../components/Banner/Banner";
import Choose from "../components/Choose/Choose";
import DealsCarousel from "../components/DealsCarousel/DealsCarousel";
import Testimonials from "../components/Testimonials/Testimonials";
import { fetchHome } from "./DataFetch/HomeFetchData";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHome());
  }, [dispatch]);

  return (
    <>
      <Advertisement />
      <Banner />
      <DealsCarousel />
      <About />
      <Choose />
      <Testimonials />
    </>
  );
};

export default Home;
