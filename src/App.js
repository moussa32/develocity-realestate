import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Navbar from "./shared/components/Navbar/Navbar";
import Footer from "./shared/components/Footer";
import "./styles/custom.scss";
import ProtectedRoute from "./shared/components/ProtectedRoute";
import Notifications from "./shared/components/Navbar/Notifications";
import { useSelector } from "react-redux";
const Home = lazy(() => import("./modules/Home/Home"));
const SellCategory = lazy(() => import("./modules/Sell/SellCategory"));
const Details = lazy(() => import("./pages/Details"));
const Favourites = lazy(() => import("./modules/User/Favourites"));
const HotDeals = lazy(() => import("./modules/User/HotDeals"));
const Sell = lazy(() => import("./modules/Sell/Sell"));
const PropertyDetails = lazy(() => import("./modules/ViewProperty/PropertyDetails"));
const Search = lazy(() => import("./modules/Search/Search"));
const Static = lazy(() => import("./modules/StaticPages/Static"));
const Profile = lazy(() => import("./modules/Profile/Profile"));
const Settings = lazy(() => import("./modules/User/Settings"));

const App = () => {
  const isNotificationsOpen = useSelector(({ notifications }) => notifications.data.isOpen);

  return (
    <>
      <Router>
        <Navbar />
        <section className="position-relative">
          {isNotificationsOpen && <Notifications />}
          <Routes>
            <Route index element={<Home />} />
            <Route element={<ProtectedRoute />}>
              <Route path="sell" element={<Sell />} />
              <Route path="sell/:categoryName" element={<SellCategory />} />
              <Route path="search" element={<Search />} />
              <Route path="profile/:userID" element={<Profile />} />
              <Route path="favourite" element={<Favourites />} />
              <Route path="hot-deals" element={<HotDeals />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="/view/:propertyID" element={<PropertyDetails />} />
            <Route path="/details" element={<Details />} />
            <Route path="/page/:pageSlug" element={<Static />} />
            <Route path="/privacy" element={<Static />} />
          </Routes>
        </section>
        <Footer />
      </Router>
    </>
  );
};

export default App;
