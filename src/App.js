import React, { Fragment } from "react";
import Navbar from "./common/Navbar/Navbar";
import Properties from "./pages/Properties";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Deals from "./pages/Deals";
import Home from "./pages/Home";
import Sell from "./pages/Sell";
import SellHome from "./pages/SellHome";
import View from "./pages/View";
import Footer from "./common/Footer/Footer";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Details from "./pages/Details";
import Welcome from "./pages/Welcome";
import NavbarAfterLogin from "./common/NavbarAfterLogin/NavbarAfterLogin";


const App =() =>{

  return(
    <Router>
    <Fragment>
    <>
    {!localStorage.getItem('token') && (
    <Navbar/>)
    }</>

    <NavbarAfterLogin/>
    
    <Routes>
  <Route path="/" element={<Home/>}/>
  </Routes>
  <Routes>
  <Route path="/properties" element={<Properties/>}/>
  </Routes>
  <Routes>
  <Route path="/deals" element={<Deals/>}/>
  </Routes>
  <Routes>
  <Route path="/about" element={<About/>}/>
  </Routes>
  <Routes>
  <Route path="/contact" element={<Contact/>}/>
  </Routes>

  <Routes>
  <Route path="/sell" element={<Sell/>}/>
  </Routes>

  <Routes>
  <Route path={`/sellHome/:categoryId`} element={<SellHome/>} />
  
  </Routes>

  <Routes>
  <Route path={`/view/:categoryId`} element={<View/>}/>
  </Routes>

  <Routes>
  <Route path="/details" element={<Details/>}/>
  </Routes>

  <Routes>
  <Route path="/welcome" element={<Welcome/>}/>
  </Routes>
    
    </Fragment>
    <Footer/>
    </Router>
  )
}


export default App;
