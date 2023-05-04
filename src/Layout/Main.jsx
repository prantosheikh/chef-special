import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/Header/Header";
import MarqueeSection from "../pages/Home/MarqueeSection/MarqueeSection";
import PhotoGallery from "../pages/Home/PhotoGallery/PhotoGallery";
import NavigationBar from "../pages/NavigationBar/NavigationBar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Header></Header>
      <Outlet></Outlet>
      <MarqueeSection></MarqueeSection>
      <PhotoGallery></PhotoGallery>
      <Footer></Footer>
    </div>
  );
};

export default Main;
