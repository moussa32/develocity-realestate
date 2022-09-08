import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pic from "../../assets/pic.png";
import {AiFillStar} from "react-icons/ai";
import styles from "./Testimonials.module.css";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const Testimonials = () => {
    return(
        <div className={styles.testimonialsSection}>
        <div className="container">
        <h1 className={styles.title}>what clients say</h1>
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
        removeArrowOnDeviceType={["desktop" ,"tablet", "mobile"]}
       
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
     
      <div className={styles.card}>
   <div className={styles.personal}>
   <img src={pic} className={styles.pic} alt="personal picture"/>
   <div className={styles.name}>
   <h2>kim davids</h2>
   <p>banker</p>
   </div>
   <ul className={styles.rate}>
    <li><AiFillStar/></li>
    <li><AiFillStar/></li>
    <li><AiFillStar/></li>
    <li><AiFillStar/></li>
    <li><AiFillStar/></li>
   </ul>
   </div>
   <p className={styles.text}> This is where you can find a dream This is where you can find a dream This is where you can find a dream This is where you can find a dream</p>
      </div>

      <div className={styles.card}>
      <div className={styles.personal}>
      <img src={pic} className={styles.pic} alt="personal picture"/>
      <div className={styles.name}>
      <h2>kim davids</h2>
      <p>banker</p>
      </div>
      <ul className={styles.rate}>
       <li><AiFillStar/></li>
       <li><AiFillStar/></li>
       <li><AiFillStar/></li>
       <li><AiFillStar/></li>
       <li><AiFillStar/></li>
      </ul>
      </div>
      <p className={styles.text}> This is where you can find a dream This is where you can find a dream This is where you can find a dream This is where you can find a dream</p>
         </div>

         <div className={styles.card}>
   <div className={styles.personal}>
   <img src={pic} className={styles.pic} alt="personal picture"/>
   <div className={styles.name}>
   <h2>kim davids</h2>
   <p>banker</p>
   </div>
   <ul className={styles.rate}>
    <li><AiFillStar/></li>
    <li><AiFillStar/></li>
    <li><AiFillStar/></li>
    <li><AiFillStar/></li>
    <li><AiFillStar/></li>
   </ul>
   </div>
   <p className={styles.text}> This is where you can find a dream This is where you can find a dream This is where you can find a dream This is where you can find a dream</p>
      </div>
       
     
      <div className={styles.card}>
      <div className={styles.personal}>
      <img src={pic} className={styles.pic} alt="personal picture"/>
      <div className={styles.name}>
      <h2>kim davids</h2>
      <p>banker</p>
      </div>
      <ul className={styles.rate}>
       <li><AiFillStar/></li>
       <li><AiFillStar/></li>
       <li><AiFillStar/></li>
       <li><AiFillStar/></li>
       <li><AiFillStar/></li>
      </ul>
      </div>
      <p className={styles.text}> This is where you can find a dream This is where you can find a dream This is where you can find a dream This is where you can find a dream</p>
         </div>
      </Carousel>

      <h3 className={styles.question}>ready to choose or buy your propirty?</h3>
      <button className={styles.startBtn}>get started</button>
        </div>

        </div>
    )
}

export default Testimonials;