import React from "react";
import "../../App.css";
import { TabTitle } from "../../utils/GeneralFunctions";
import Cards from "../Cards";
import Footer from "../Footer";
import HeroSection from "../HeroSection";

function Home() {
  TabTitle("TRVLR");
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
