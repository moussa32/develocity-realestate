import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Navbar from "./shared/components/Navbar/Navbar";
import Sell from "./modules/Sell/Sell";
import Footer from "./shared/components/Footer";
import Properties from "./pages/Properties";
import "./styles/custom.scss";
import PropertyDetails from "./modules/ViewProperty/PropertyDetails";
import ProtectedRoute from "./shared/components/ProtectedRoute";
import Notifications from "./shared/components/Navbar/Notifications";
import { useSelector } from "react-redux";
// const Properties = lazy(() => import("./pages/Properties"));
const Home = lazy(() => import("./modules/Home/Home"));
const About = lazy(() => import("./pages/About"));
const Deals = lazy(() => import("./pages/Deals"));
const SellCategory = lazy(() => import("./modules/Sell/SellCategory"));
// const SellHome = lazy(() => import("./pages/SellHome"));
// const View = lazy(() => import("./pages/View"));
const Contact = lazy(() => import("./pages/Contact"));
const Details = lazy(() => import("./pages/Details"));
const Welcome = lazy(() => import("./pages/Welcome"));
const Favourites = lazy(() => import("./modules/User/Favourites"));

const App = () => {
  const isNotificationsOpen = useSelector(({ notifications }) => notifications.data.isOpen);

  console.log(isNotificationsOpen);
  return (
    <>
      <Router>
        <Navbar />
        <section className="position-relative">
          {isNotificationsOpen && <Notifications />}
          <Routes>
            <Route index element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route element={<ProtectedRoute />}>
              <Route path="sell" element={<Sell />} />
              <Route path="sell/:categoryName" element={<SellCategory />} />
              <Route path="favourite" element={<Favourites />} />
            </Route>
            <Route path="/view/:propertyID" element={<PropertyDetails />} />
            <Route path="/details" element={<Details />} />
            <Route path="/welcome" element={<Welcome />} />
          </Routes>
        </section>
        <Footer />
      </Router>
    </>
  );
};

export default App;
