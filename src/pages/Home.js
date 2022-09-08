import React, { Fragment } from "react";
import About from "../components/About/About";
import Advertisement from "../components/Advertisement/Advertisement";
import Banner from "../components/Banner/Banner";
import Choose from "../components/Choose/Choose";
import DealsCarousel from "../components/DealsCarousel/DealsCarousel";
import Testimonials from "../components/Testimonials/Testimonials";

const Home=()=>{
    return(
        <Fragment>
        <Advertisement/>
        <Banner/>
        <DealsCarousel/>
        <About/>
        <Choose/>
        <Testimonials/>
        </Fragment>
    )
}

export default Home;