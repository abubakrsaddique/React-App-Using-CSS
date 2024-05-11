import React from "react";
import Header from "../src/components/header/Header";
import Navbar from "./components/navbar/Navbar";
import RealEstateSection from "./components/realestatesection/RealEstateSection";
import CardComponent from "./components/cardcomponent/CardComponent";
import MarqueeComponent from "./components/marqueecomponent/MarqueeComponent";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <RealEstateSection />
      <CardComponent />
      <MarqueeComponent />
      <About />
    </>
  );
}

export default App;
