import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Home from "./modules/Home/Home";
import Navbar from "./shared/components/Navbar/Navbar";
import Footer from "./shared/components/Footer";
import Properties from "./pages/Properties";
// import OldNavbar from "./common/Navbar/Navbar";
// import NavbarAfterLogin from "./common/NavbarAfterLogin/NavbarAfterLogin";
import "./styles/custom.scss";
import PropertyDetails from "./modules/ViewProperty/PropertyDetails";
// const Properties = lazy(() => import("./pages/Properties"));
const About = lazy(() => import("./pages/About"));
const Deals = lazy(() => import("./pages/Deals"));
const Sell = lazy(() => import("./pages/Sell"));
const SellHome = lazy(() => import("./pages/SellHome"));
// const View = lazy(() => import("./pages/View"));
const Contact = lazy(() => import("./pages/Contact"));
const Details = lazy(() => import("./pages/Details"));
const Welcome = lazy(() => import("./pages/Welcome"));
// const Footer = lazy(() => import("./common/Footer/Footer"));

const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        {/* <OldNavbar /> */}
        {/* <NavbarAfterLogin /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/sellHome/:categoryId" element={<SellHome />} />
          <Route path="/view/:propertyID" element={<PropertyDetails />} />
          <Route path="/details" element={<Details />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
