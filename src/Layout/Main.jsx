import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/Header/Header";
import MarqueeSection from "../pages/Home/MarqueeSection/MarqueeSection";
import NavigationBar from "../pages/NavigationBar/NavigationBar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Header></Header>
      <Outlet></Outlet>
      <MarqueeSection></MarqueeSection>
      <Footer></Footer>
    </div>
  );
};

export default Main;
