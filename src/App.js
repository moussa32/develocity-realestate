import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Navbar from "./shared/components/Navbar/Navbar";
import Sell from "./modules/Sell/Sell";
import Footer from "./shared/components/Footer";
import "./styles/custom.scss";
import PropertyDetails from "./modules/ViewProperty/PropertyDetails";
import ProtectedRoute from "./shared/components/ProtectedRoute";
import Notifications from "./shared/components/Navbar/Notifications";
import { useSelector } from "react-redux";
const Home = lazy(() => import("./modules/Home/Home"));
const Deals = lazy(() => import("./pages/Deals"));
const SellCategory = lazy(() => import("./modules/Sell/SellCategory"));
// const SellHome = lazy(() => import("./pages/SellHome"));
// const View = lazy(() => import("./pages/View"));
const Details = lazy(() => import("./pages/Details"));
const Favourites = lazy(() => import("./modules/User/Favourites"));
const HotDeals = lazy(() => import("./modules/User/HotDeals"));

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
            <Route path="/deals" element={<Deals />} />
            <Route element={<ProtectedRoute />}>
              <Route path="sell" element={<Sell />} />
              <Route path="sell/:categoryName" element={<SellCategory />} />
              <Route path="favourite" element={<Favourites />} />
              <Route path="hot-deals" element={<HotDeals />} />
            </Route>
            <Route path="/view/:propertyID" element={<PropertyDetails />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </section>
        <Footer />
      </Router>
    </>
  );
};

export default App;
