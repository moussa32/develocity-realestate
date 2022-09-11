import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Carousel from "react-multi-carousel";
import TabButton from "./TabButton";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategory } from "../../pages/DataFetch/CategoryFetchData";
import { IoLocationSharp } from "react-icons/io5";
import { MdHomeWork } from "react-icons/md";
import { IoBedSharp } from "react-icons/io5";
import { BiArea } from "react-icons/bi";
import { GiBathtub } from "react-icons/gi";
import styles from "./DealsCarousel.module.css";
import { React } from "react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CustomDot = ({ onClick, active }) => {
  return (
    <li
      className={`${active ? "bg-primary " : "bg-primary bg-opacity-25"} rounded-circle mx-1`}
      style={{ width: 16, height: 16 }}
      onClick={() => onClick()}
    ></li>
  );
};

const DealsCarousel = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const categories = useSelector((state) => state.home.data?.data?.categories);
  const categoryStatus = useSelector((state) => state.category.status);
  const categoryItems = useSelector((state) => state.category.data.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  const handleSelectTab = (selectedTabKey) => {
    setActiveTab(selectedTabKey);
    const selectedCategoryObject = categories.find((category) => category.name === selectedTabKey);
    dispatch(fetchCategory(selectedCategoryObject.id));
  };

  return (
    <section className="my-5">
      <Tab.Container id="deals-carousel" defaultActiveKey={activeTab} onSelect={handleSelectTab}>
        <Nav variant="pills">
          <Row className="w-100">
            <Col md={5} className="d-flex flex-row flex-wrap">
              {categories?.slice(0, 2)?.map(({ id, name }) => (
                <TabButton key={`${id}${name}`} activeTab={activeTab} name={name} />
              ))}
            </Col>
            <Col md={2}>
              <h2 className="text-capitalize fs-3xl text-primary mb-0">hot deals</h2>
            </Col>
            <Col md={5} className="d-flex flex-row justify-content-end">
              {categories?.slice(2, 3)?.map(({ id, name }) => (
                <TabButton key={`${id}${name}`} activeTab={activeTab} name={name} />
              ))}
              {/* <Nav.Item
                className={`border-bottom border-secondary border-4 ${activeTav === "view all" && "border-primary"}`}
              >
                <Nav.Link
                  as={"button"}
                  eventKey="view all"
                  className={`text-muted text-capitalize fs-lg px-5 ${styles.dealsTabButton} ${
                    activeTav === "view all" && "bg-transparent"
                  }`}
                >
                  view all
                </Nav.Link>
              </Nav.Item> */}
            </Col>
          </Row>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey={activeTab}>
            {categoryStatus === "success" && (
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                customDot={<CustomDot items={categoryItems} />}
              >
                {categoryItems.map(
                  ({ category, property, is_hot_deal, title, price, location, type, bedrooms, floor, bathrooms }) => (
                    <div className={styles.card}>
                      <img src={category.image} className={styles.catImg} alt="home picture" />
                      <div className={styles.cardText}>
                        <div className={styles.text1}>
                          <h6>for {property}</h6>
                          <span className={is_hot_deal == 1 ? styles.offer : styles.hide}>hot deals</span>
                        </div>
                        <h1>{title}</h1>
                        <div className={styles.price}>
                          {/*<span className={styles.old}>$1000</span>*/}
                          <span className={styles.new}>{price}</span>
                        </div>
                        <div className={styles.details}>
                          <ul className={styles.detailsTitle}>
                            <li className={location ? null : styles.hide}>
                              <IoLocationSharp className={styles.icon} />
                              location:
                            </li>
                            <li className={type ? null : styles.hide}>
                              <MdHomeWork className={styles.icon} />
                              type:
                            </li>
                            <li className={bedrooms ? null : styles.hide}>
                              <IoBedSharp className={styles.icon} />
                              bedrooms:
                            </li>
                            <li className={floor ? null : styles.hide}>
                              <BiArea className={styles.icon} />
                              floor area:
                            </li>
                            <li className={bathrooms ? null : styles.hide}>
                              <GiBathtub className={styles.icon} />
                              bathroom:
                            </li>
                          </ul>
                          <ul className={styles.detailsInfo}>
                            <li>{location}</li>
                            <li>{type}</li>
                            <li>{bedrooms}</li>
                            <li>{floor}</li>
                            <li>{bathrooms}</li>
                          </ul>
                        </div>
                        {/* {sellEachAdv?.data?.data &&
                        sellEachAdv?.data?.data.map((ew) => (
                          <Link to={`/view/${ew.id}`} className={ew.id == ex.id ? styles.detailsBtn : styles.hide}>
                            view details
                          </Link>
                        ))} */}
                      </div>
                    </div>
                  )
                )}
              </Carousel>
            )}
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </section>
  );
};

export default DealsCarousel;
