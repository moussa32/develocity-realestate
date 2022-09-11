import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoLocationSharp } from "react-icons/io5";
import { MdHomeWork } from "react-icons/md";
import { IoBedSharp } from "react-icons/io5";
import { BiArea } from "react-icons/bi";
import { GiBathtub } from "react-icons/gi";
import styles from "./DealsCarousel.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSellEachAdv } from "../../pages/DataFetch/SellEachAdvFetchData";
import { fetchCategory } from "../../pages/DataFetch/CategoryFetchData";

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

const DealsCarousel = () => {
  const param = useParams();
  const dispatch = useDispatch();
  let catMap;
  const [category, setCategory] = useState("1");
  const category_id = (param.category_id = category);

  const changeCategory = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
    console.log("www", Category);
  };

  const Home = useSelector((state) => state.home.data);
  const Category = useSelector((state) => state.category.data);
  console.log("www", Category.data);

  const sellEachAdv = useSelector((state) => state.sellEachAdv.data);

  useEffect(() => {
    dispatch(fetchSellEachAdv());
  }, [dispatch]);

  console.log("gaga", sellEachAdv.data);

  let categoriesMap;
  let advMap;

  useEffect(() => {
    dispatch(fetchCategory(category_id));
  }, [dispatch, category_id]);

  console.log(Home.data?.categories ? Home.data.categories : null);

  return (
    <div className="container">
      <h1 className={styles.title}>hot deals</h1>
      <ul className={`${styles.navPills} nav nav-pills mb-3`} id="pills-tab" role="tablist">
        {Home.data?.categories?.map(function (ee, idx) {
          console.log("s", ee.id);
          let catMap = ee.id;
          let name = (
            <li class="nav-item" role="presentation">
              <button
                onClick={changeCategory}
                value={ee.id}
                class={`${idx == 0 ? "active" : null} ${styles.navLink} nav-link `}
                id={"pills-" + ee.id + "-tab"}
                data-bs-toggle="pill"
                data-bs-target={"#pills-" + ee.id}
                type="button"
                role="tab"
                aria-controls={"pills-" + ee.id}
                aria-selected="true"
              >
                {ee.name}
              </button>
            </li>
          );

          return [name];
        })}

        <li className="nav-item" role="presentation">
          <button
            onClick={changeCategory}
            className={`${styles.navLink} nav-link`}
            value="null"
            id="all-tab"
            data-bs-toggle="pill"
            data-bs-target="#all"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            View All
          </button>
        </li>
      </ul>

      <div class="tab-content" id="pills-tabContent">
        {
          <div
            class="tab-pane fade show active"
            id={"pills-" + catMap}
            role="tabpanel"
            aria-labelledby={"pills-" + catMap + "-tab"}
          >
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
            >
              {Category?.data?.length > 0 &&
                Category?.data?.map((ex) => (
                  <div className={styles.card}>
                    <img src={ex.category.image} className={styles.catImg} alt="home picture" />
                    <div className={styles.cardText}>
                      <div className={styles.text1}>
                        <h6>for {ex.property}</h6>
                        <span className={ex.is_hot_deal == 1 ? styles.offer : styles.hide}>hot deals</span>
                      </div>
                      <h1>{ex.title}</h1>
                      <div className={styles.price}>
                        {/*<span className={styles.old}>$1000</span>*/}
                        <span className={styles.new}>{ex.price}</span>
                      </div>
                      <div className={styles.details}>
                        <ul className={styles.detailsTitle}>
                          <li className={ex.location ? null : styles.hide}>
                            <IoLocationSharp className={styles.icon} />
                            location:
                          </li>
                          <li className={ex.type ? null : styles.hide}>
                            <MdHomeWork className={styles.icon} />
                            type:
                          </li>
                          <li className={ex.bedrooms ? null : styles.hide}>
                            <IoBedSharp className={styles.icon} />
                            bedrooms:
                          </li>
                          <li className={ex.floor ? null : styles.hide}>
                            <BiArea className={styles.icon} />
                            floor area:
                          </li>
                          <li className={ex.bathrooms ? null : styles.hide}>
                            <GiBathtub className={styles.icon} />
                            bathroom:
                          </li>
                        </ul>
                        <ul className={styles.detailsInfo}>
                          <li>{ex.location}</li>
                          <li>{ex.type}</li>
                          <li>{ex.bedrooms}</li>
                          <li>{ex.floor}</li>
                          <li>{ex.bathrooms}</li>
                        </ul>
                      </div>
                      {sellEachAdv?.data?.data &&
                        sellEachAdv?.data?.data.map((ew) => (
                          <Link to={`/view/${ew.id}`} className={ew.id == ex.id ? styles.detailsBtn : styles.hide}>
                            view details
                          </Link>
                        ))}
                    </div>
                  </div>
                ))}
            </Carousel>
          </div>
        }
      </div>
    </div>
  );
};

export default DealsCarousel;
