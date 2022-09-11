import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Choose from "../../components/Choose/Choose";
// import DealsCarousel from "../../components/DealsCarousel/DealsCarousel";
import DealsCarousel from "./DealsCarousel";
import Testimonials from "../../components/Testimonials/Testimonials";
import About from "../../pages/About";
import { fetchHome } from "../../pages/DataFetch/HomeFetchData";
import Hero from "./Hero";
import HomeAdvertisement from "./HomeAdvertisement";
import Container from "react-bootstrap/Container";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHome());
  }, [dispatch]);

  return (
    <Container>
      <HomeAdvertisement />
      <Hero />
      <DealsCarousel />
      <About />
      <Choose />
      <Testimonials />
    </Container>
  );
};

export default Home;
