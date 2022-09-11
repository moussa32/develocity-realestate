import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Home from "./modules/Home/Home";
const Navbar = lazy(() => import("./common/Navbar/Navbar"));
const Properties = lazy(() => import("./pages/Properties"));
const About = lazy(() => import("./pages/About"));
const Deals = lazy(() => import("./pages/Deals"));
const Sell = lazy(() => import("./pages/Sell"));
const SellHome = lazy(() => import("./pages/SellHome"));
const View = lazy(() => import("./pages/View"));
const Contact = lazy(() => import("./pages/Contact"));
const Details = lazy(() => import("./pages/Details"));
const Welcome = lazy(() => import("./pages/Welcome"));
const Footer = lazy(() => import("./common/Footer/Footer"));

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/properties" element={<Properties />} />
        </Routes>
        <Routes>
          <Route path="/deals" element={<Deals />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Routes>
          <Route path="/sell" element={<Sell />} />
        </Routes>
        <Routes>
          <Route path={`/sellHome/:categoryId`} element={<SellHome />} />
        </Routes>
        <Routes>
          <Route path={`/view/:categoryId`} element={<View />} />
        </Routes>
        <Routes>
          <Route path="/details" element={<Details />} />
        </Routes>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </>
      <Footer />
    </Router>
  );
};

export default App;
