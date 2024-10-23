import React from "react";
import { Header } from "../components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

const LandingLayout = () => {
  return (
    <div className="">
      <Header />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default LandingLayout;
