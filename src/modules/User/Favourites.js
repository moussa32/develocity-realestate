import { useState } from "react";
import { useEffect } from "react";
import { authentcatedInstance } from "../../api/constants";
import PropertyCard from "../../shared/components/PropertyCard";
import { AiFillHeart } from "react-icons/ai";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Favourites = () => {
  const [realstate, setRealState] = useState([]);

  useEffect(() => {
    authentcatedInstance.get("user/favorite_realstate").then((res) => console.log(res));
  }, []);

  const handleFavouriteButton = () => {
    console.log("Icon Clicked");
  };

  const info = {
    property: "offer",
    is_hot_deal: false,
    title: "Test Property card title",
    price: 500,
    location: "Nasr City, Cairo",
    type: "rent",
    bedrooms: 5,
    Icon: AiFillHeart,
    iconHandler: handleFavouriteButton,
    iconClassNames: "text-primary fs-md favouriteIcon",
    floor: 12,
    bathrooms: 6,
    id: "1",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    ],
  };

  return (
    <Container as="section" fluid>
      <h1 className="text-capitalize d-flex align-items-center ps-4 my-5 fs-2xl favouriteHeader">Favourite</h1>
      <section className="favouriteContainer row">
        <Col xl={4} lg={6} md={6} sm={6} className="favouriteCard">
          <PropertyCard info={info} />
        </Col>
        <Col xl={4} lg={6} md={6} sm={6} className="favouriteCard">
          <PropertyCard info={info} />
        </Col>
        <Col xl={4} lg={6} md={6} sm={6} className="favouriteCard">
          <PropertyCard info={info} />
        </Col>
        <Col xl={4} lg={6} md={6} sm={6} className="favouriteCard">
          <PropertyCard info={info} />
        </Col>
        <Col xl={4} lg={6} md={6} sm={6} className="favouriteCard">
          <PropertyCard info={info} />
        </Col>
      </section>
    </Container>
  );
};

export default Favourites;
