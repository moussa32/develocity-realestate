import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";
// import Home from "./modules/Home/Home";
import Navbar from "./shared/components/Navbar/Navbar";
import Sell from "./modules/Sell/Sell";

import Footer from "./shared/components/Footer";
import Properties from "./pages/Properties";
import "./styles/custom.scss";
import PropertyDetails from "./modules/ViewProperty/PropertyDetails";
import ProtectedRoute from "./shared/components/ProtectedRoute";
// const Properties = lazy(() => import("./pages/Properties"));
const Home = lazy(() => import("./modules/Home/Home"));
const About = lazy(() => import("./pages/About"));
const Deals = lazy(() => import("./pages/Deals"));
const SellHome = lazy(() => import("./modules/Sell/SellHome"));
// const SellHome = lazy(() => import("./pages/SellHome"));
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
        <Routes>
          <Route index element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route element={<ProtectedRoute />}>
            <Route path="sell" element={<Sell />}>
              <Route path="sell-home" element={<SellHome />}></Route>
            </Route>
          </Route>
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
