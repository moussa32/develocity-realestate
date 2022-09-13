import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchHome } from "../../redux/features/HomeSlice";
import Choose from "../../components/Choose/Choose";
import DealsCarousel from "./DealsCarousel";
import Testimonials from "../../components/Testimonials/Testimonials";
import Hero from "./Hero";
import HomeAdvertisement from "./HomeAdvertisement";
import About from "./About";
import Container from "react-bootstrap/Container";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHome());
  }, [dispatch]);

  return (
    <>
      <Container>
        <HomeAdvertisement />
      </Container>
      <Container>
        <Hero />
      </Container>
      <Container>
        <DealsCarousel />
      </Container>
      <About />
      <Container>
        <Choose />
      </Container>
      <Testimonials />
    </>
  );
};

export default Home;
