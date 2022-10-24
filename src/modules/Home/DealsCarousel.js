import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Carousel from "react-multi-carousel";
import PropertyCard from "../../shared/components/PropertyCard";
import TabButton from "./TabButton";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategory } from "../../redux/features/CategorySlice";

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
      role="button"
      onClick={() => onClick()}
    ></li>
  );
};

const DealsCarousel = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [currentDeals, setCurrentDeals] = useState([]);
  const categories = useSelector((state) => state.home.data?.data?.categories);
  const categoryItems = useSelector((state) => state.category.data.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  useEffect(() => {
    if (categoryItems) {
      setCurrentDeals(categoryItems);
    }
  }, [categoryItems]);

  const handleSelectTab = (selectedTabKey) => {
    setActiveTab(selectedTabKey);
    if (selectedTabKey !== "view-all") {
      const selectedCategoryObject = categories.find((category) => category.name === selectedTabKey);
      dispatch(fetchCategory(selectedCategoryObject.id));
    } else {
      dispatch(fetchCategory());
    }
  };

  return (
    <section className="my-5">
      <Tab.Container id="deals-carousel" defaultActiveKey={activeTab} onSelect={handleSelectTab}>
        <Nav variant="pills" className="overflow-hidden">
          <div className="w-100 d-flex responsive-pills">
            <div className="d-flex flex-row">
              {categories?.slice(0, 2)?.map(({ id, name }) => (
                <TabButton key={`${id}${name}`} activeTab={activeTab} name={name} />
              ))}
            </div>
            <div className="align-self-center text-center flex-fill">
              <h2 className="text-capitalize fs-3xl text-primary mb-0">hot deals</h2>
            </div>
            <div className="d-flex flex-row justify-content-md-end">
              {categories?.slice(2, 3)?.map(({ id, name }) => (
                <TabButton key={`${id}${name}`} activeTab={activeTab} name={name} />
              ))}
              <TabButton activeTab={activeTab} customEventKey={"view-all"} name={"view all"} />
            </div>
          </div>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey={activeTab}>
            {currentDeals.length !== 0 && (
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
                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                customDot={<CustomDot items={currentDeals} />}
              >
                {currentDeals.map((propertyInfo) => (
                  <div style={{ marginTop: "3rem" }} key={`${propertyInfo.id}${propertyInfo.title}`}>
                    <PropertyCard info={propertyInfo} />
                  </div>
                ))}
              </Carousel>
            )}
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </section>
  );
};

export default DealsCarousel;
